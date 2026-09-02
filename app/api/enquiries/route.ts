import { getDb } from "../../../db";
import { adminAudit, enquiries } from "../../../db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, string>;
    const customerName = body.customerName?.trim();
    const email = body.email?.trim().toLowerCase();
    const mobile = body.mobile?.replace(/\s/g, "");
    const eventType = body.eventType?.trim();
    const eventDate = body.eventDate?.trim();
    if (!customerName || !email || !mobile || !eventType || !eventDate || !/^\S+@\S+\.\S+$/.test(email) || !/^(?:\+?61|0)4\d{8}$/.test(mobile)) {
      return Response.json({ error: "Complete the required contact and event fields." }, { status: 400 });
    }
    const db = await getDb();
    const [enquiry] = await db.insert(enquiries).values({ customerName, email, mobile, eventType, eventDate, message: body.message?.trim() ?? "" }).returning();
    await db.insert(adminAudit).values({ actor: email, action: "CREATE", entityType: "enquiry", entityId: String(enquiry.id), details: `${eventType} enquiry received` });
    return Response.json({ enquiry }, { status: 201 });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Unable to submit enquiry" }, { status: 500 });
  }
}
