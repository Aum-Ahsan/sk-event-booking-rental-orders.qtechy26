CREATE TABLE `admin_audit` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`actor` text NOT NULL,
	`action` text NOT NULL,
	`entity_type` text NOT NULL,
	`entity_id` text NOT NULL,
	`details` text DEFAULT '' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `enquiries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`customer_name` text NOT NULL,
	`email` text NOT NULL,
	`mobile` text NOT NULL,
	`event_type` text NOT NULL,
	`event_date` text NOT NULL,
	`message` text DEFAULT '' NOT NULL,
	`status` text DEFAULT 'New' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `referrals` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`referral_code` text NOT NULL,
	`referrer_name` text NOT NULL,
	`referred_name` text NOT NULL,
	`referred_email` text NOT NULL,
	`event_type` text NOT NULL,
	`status` text DEFAULT 'Pending' NOT NULL,
	`commission_cents` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
