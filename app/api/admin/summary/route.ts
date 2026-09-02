import { desc, sql } from "drizzle-orm";
import { getDb } from "../../../../db";
import { adminAudit, enquiries, referrals } from "../../../../db/schema";

export async function GET() {
  try {
    const db = await getDb();
    const [referralCount, enquiryCount, recentAudit] = await Promise.all([
      db.select({ count: sql<number>`count(*)` }).from(referrals),
      db.select({ count: sql<number>`count(*)` }).from(enquiries),
      db.select().from(adminAudit).orderBy(desc(adminAudit.createdAt), desc(adminAudit.id)).limit(10),
    ]);
    return Response.json({ referrals: Number(referralCount[0]?.count ?? 0), enquiries: Number(enquiryCount[0]?.count ?? 0), recentAudit });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Unable to load admin summary" }, { status: 500 });
  }
}
