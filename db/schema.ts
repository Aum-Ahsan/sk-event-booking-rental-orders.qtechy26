import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const referrals = sqliteTable("referrals", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  referralCode: text("referral_code").notNull(),
  referrerName: text("referrer_name").notNull(),
  referredName: text("referred_name").notNull(),
  referredEmail: text("referred_email").notNull(),
  eventType: text("event_type").notNull(),
  status: text("status").notNull().default("Pending"),
  commissionCents: integer("commission_cents").notNull().default(0),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const enquiries = sqliteTable("enquiries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  customerName: text("customer_name").notNull(),
  email: text("email").notNull(),
  mobile: text("mobile").notNull(),
  eventType: text("event_type").notNull(),
  eventDate: text("event_date").notNull(),
  message: text("message").notNull().default(""),
  status: text("status").notNull().default("New"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const adminAudit = sqliteTable("admin_audit", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  actor: text("actor").notNull(),
  action: text("action").notNull(),
  entityType: text("entity_type").notNull(),
  entityId: text("entity_id").notNull(),
  details: text("details").notNull().default(""),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
