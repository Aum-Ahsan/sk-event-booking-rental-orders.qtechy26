import { desc, eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { adminAudit, referrals } from "../../../db/schema";

export async function GET() {
  try {
    const db = await getDb();
    const rows = await db.select().from(referrals).orderBy(desc(referrals.createdAt), desc(referrals.id)).limit(100);
    return Response.json({ referrals: rows });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Unable to load referrals" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, string>;
    const referredName = body.referredName?.trim();
    const referredEmail = body.referredEmail?.trim().toLowerCase();
    const eventType = body.eventType?.trim();
    if (!referredName || !referredEmail || !eventType || !/^\S+@\S+\.\S+$/.test(referredEmail)) {
      return Response.json({ error: "A valid name, email and event type are required." }, { status: 400 });
    }
    const db = await getDb();
    const duplicate = await db.select({ id: referrals.id }).from(referrals).where(eq(referrals.referredEmail, referredEmail)).limit(1);
    if (duplicate.length) return Response.json({ error: "This email has already been referred." }, { status: 409 });
    const [referral] = await db.insert(referrals).values({
      referralCode: "ALEXEVENTS",
      referrerName: "Alex Morgan",
      referredName,
      referredEmail,
      eventType,
    }).returning();
    await db.insert(adminAudit).values({ actor: "customer:alex-morgan", action: "CREATE", entityType: "referral", entityId: String(referral.id), details: `Referral created for ${referredEmail}` });
    return Response.json({ referral }, { status: 201 });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Unable to create referral" }, { status: 500 });
  }
}
