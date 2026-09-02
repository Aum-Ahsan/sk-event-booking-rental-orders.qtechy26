"use client";
/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import React from "react";
import { Field, ReviewBlock } from "../../../landing/shared/FormControls";
type Stage = {
  key: string;
  title: string;
  eyebrow: string;
  description: string;
  step?: string;
  primary?: string;
  secondary?: string;
};

const stages: Stage[] = [
  { key: "bookings", eyebrow: "Rental orders", title: "Your bookings", description: "Follow confirmed rentals from preparation through delivery, hire, return and completion." },
  { key: "booking-details", eyebrow: "Confirmed booking", title: "Garden wedding", description: "Booking SK-261114-042 · Saturday, 14 November 2026", primary: "Track this order", secondary: "Request a change" },
  { key: "change-request", eyebrow: "Booking change", title: "What would you like to change?", description: "Choose one or more areas. Your booking stays confirmed while the team reviews your request.", step: "Step 1 of 4", primary: "Continue", secondary: "Back to booking" },
  { key: "change-details", eyebrow: "Booking change", title: "Tell us what needs changing", description: "Update the requested dates, quantities, items or logistics. Current details remain protected.", step: "Step 2 of 4", primary: "Review request", secondary: "Back" },
  { key: "change-review", eyebrow: "Booking change", title: "Review your change request", description: "Nothing changes until availability, pricing and logistics are checked and you approve any difference.", step: "Step 3 of 4", primary: "Submit request", secondary: "Edit request" },
  { key: "change-result", eyebrow: "Request received", title: "Your booking is still confirmed", description: "We’ll review the requested changes and reply by 5:00pm Friday, 24 July.", step: "Complete", primary: "View booking", secondary: "Message the team" },
  { key: "cancellation-request", eyebrow: "Cancellation request", title: "Tell us why you need to cancel", description: "Review the cancellation policy and estimated charge before continuing.", step: "Step 1 of 3", primary: "Review cancellation", secondary: "Keep booking" },
  { key: "cancellation-review", eyebrow: "Cancellation request", title: "Review cancellation and charges", description: "Confirm the booking, refund method and policy before submitting this request.", step: "Step 2 of 3", primary: "Confirm cancellation", secondary: "Go back" },
  { key: "cancellation-result", eyebrow: "Booking cancelled", title: "Your cancellation is confirmed", description: "Booking SK-261114-042 has been cancelled. Your refund is being returned to the original card.", step: "Complete", primary: "View cancelled booking", secondary: "Plan another event" },
  { key: "repeat-booking", eyebrow: "Repeat booking", title: "Plan a similar event", description: "We copied eligible items from your completed 40th birthday booking. Choose new dates and adjust quantities.", step: "Step 1 of 2", primary: "Check availability", secondary: "Cancel" },
  { key: "repeat-review", eyebrow: "Repeat booking", title: "Everything is available", description: "Review the copied items, new event timing and latest pricing before requesting a quotation.", step: "Step 2 of 2", primary: "Request quotation", secondary: "Edit booking" },
  { key: "order-tracking", eyebrow: "Live order tracking", title: "Your order is being prepared", description: "Garden wedding · Delivery Friday, 14 November · 10:00am–12:00pm", primary: "Message logistics", secondary: "View booking" },
];

const bookings = [
  { status: "Confirmed", title: "Garden wedding", ref: "SK-261114-042", date: "14–15 Nov 2026", place: "Richmond VIC", money: "$1,240 due", tone: "green" },
  { status: "Preparing", title: "Corporate lunch", ref: "SK-260908-018", date: "08–09 Sep 2026", place: "Docklands VIC", money: "Paid in full", tone: "amber" },
  { status: "Completed", title: "40th birthday", ref: "SK-251210-063", date: "10–11 Dec 2025", place: "Brighton VIC", money: "Completed", tone: "blue" },
  { status: "Cancelled", title: "Summer celebration", ref: "SK-250122-011", date: "22 Jan 2025", place: "South Yarra VIC", money: "$540 refunded", tone: "red" },
];

export function Shell({ children, active = "Bookings" }: { children: React.ReactNode; active?: string }) {
  const nav = ["Overview", "Quotes", "Bookings", "Payments & documents", "Delivery & returns", "Messages", "Rewards", "Referrals", "Saved products", "Your reviews", "Profile", "Settings & security"];
  const hrefs = ["/overview", "/quotes", "/bookings", "/payments-documents", "/delivery-returns", "/messages", "/rewards", "/referrals", "/saved-products", "/reviews-account", "/profile", "/settings-security"];
  return <div className="app-shell">
    <aside className="sidebar">
      <a className="brand account-logo" href="/overview" aria-label="SK Event Hire account home"><img src="/images/sk-event-hire-website-logo.png" alt="SK Event Hire"/></a>
      <div className="person"><i>AM</i><b>Alex Morgan<small>Verified customer</small></b></div>
      <nav>{nav.map((n, i) => <a className={n === active ? "active" : ""} key={n} href={hrefs[i]}><span>{["⌂","▤","▦","▭","▱","▢","♢","⌘","♡","☆","♙","⚙"][i]}</span>{n}</a>)}</nav>
      <div className="support"><b>Need help?</b><p>Our event team is available Monday–Saturday.</p><a href="/help">Contact support</a></div>
    </aside>
    <div className="workspace">
      <header><div>Customer account <b>›</b> {active}</div><div className="head-actions"><label>⌕ <input placeholder="Search bookings, quotes or documents" /></label><button className="bell">♧<sup>3</sup></button><a className="new-booking" href="/create-quote-01">Create new quote&nbsp; ＋</a></div></header>
      {children}
    </div>
    <nav className="mobile-nav"><a>⌂<small>Home</small></a><a>⌕<small>Browse</small></a><a className="active">▦<small>Bookings</small></a><a>▢<small>Messages</small></a><a>♙<small>Profile</small></a></nav>
  </div>;
}

export function Hero({ stage }: { stage: Stage }) {
  return <><div className="crumb">Bookings <span>›</span> {stage.title}</div><section className="page-hero">
    <div><div className="eyebrow">{stage.eyebrow}</div><h1>{stage.title}</h1><p>{stage.description}</p></div>
    {stage.step && <div className="step-pill">{stage.step}</div>}
  </section></>;
}

export function SummaryStrip() {
  return <div className="summary-strip">
    <div><span>BOOKING</span><b>SK-261114-042</b></div><div><span>EVENT</span><b>Garden wedding</b></div><div><span>RENTAL</span><b>14–15 Nov 2026</b></div><div><span>STATUS</span><b className="good">Confirmed</b></div>
  </div>;
}

export function FooterActions({ stage, next }: { stage: Stage; next?: string }) {
  if (!stage.primary) return null;
  return <div className="footer-actions"><a className="secondary" href={stage.secondary === "Back to booking" || stage.secondary === "View booking" ? "/booking-details" : "/bookings"}>{stage.secondary}</a><a className="primary" href={next ? `/${next}` : "/bookings"}>{stage.primary} <span>→</span></a></div>;
}

export function BookingList() {
  return <main><Hero stage={stages[0]} />
    <div className="notice"><b>▱</b><span><strong>Your next delivery is confirmed</strong><small>Garden wedding · 14 November · arrival window 10:00am–12:00pm</small></span><a href="/order-tracking">View tracking →</a></div>
    <div className="metrics"><div><span>▦</span><p>Upcoming<b>2</b><small>Next: 14 Nov</small></p></div><div><span>◇</span><p>Active hires<b>1</b><small>Out for delivery</small></p></div><div><span>↻</span><p>Return due<b>0</b><small>No overdue items</small></p></div><div><span>▭</span><p>Balance due<b>$1,240</b><small>Due 30 Oct</small></p></div></div>
    <section className="card booking-panel"><div className="section-head"><div><div className="eyebrow">All rental orders</div><h2>Bookings</h2></div><div className="tabs"><button className="selected">Upcoming <b>2</b></button><button>Active</button><button>Completed</button><button>Cancelled</button></div></div>
      <div className="filters"><label>⌕ <input placeholder="Search booking or event" /></label><button>All statuses⌄</button><button>All dates⌄</button></div>
      <div className="booking-grid">{bookings.map((b, i) => <article className="booking-card" key={b.ref}><div className={`event-photo photo-${i + 1}`}><span className={`status ${b.tone}`}>{b.status}</span></div><div className="booking-body"><h3>{b.title}</h3><b className="reference">{b.ref}</b><p>▦ &nbsp;{b.date}</p><p>⌖ &nbsp;{b.place}</p><footer><strong>{b.money}</strong><a href={i === 0 ? "/booking-details" : i === 2 ? "/repeat-booking" : "/booking-details"}>{i === 2 ? "Repeat booking" : "View booking"} →</a></footer></div></article>)}</div>
    </section>
  </main>;
}

const items = [
  ["Bentwood Chairs", "Natural white · 48", "$576.00"],
  ["Rustic Timber Tables", "1.8 metres · 6", "$720.00"],
  ["Festoon Light Sets", "Warm white · 4", "$360.00"],
  ["Delivery, setup & collection", "Richmond VIC", "$680.00"],
];

export function Details() {
  const s = stages[1];
  return <main><Hero stage={s} /><SummaryStrip />
    <div className="detail-actions"><a href="/change-request">Request a change</a><a className="danger-link" href="/cancellation-request">Request cancellation</a><a className="primary" href="/order-tracking">Track order →</a></div>
    <div className="detail-grid">
      <section className="card wide"><div className="event-banner"><div><span>Everything is on track</span><h2>Garden wedding</h2><p>Equipment is allocated. Warehouse preparation begins 9 November.</p></div></div>
        <div className="card-section"><div className="eyebrow">Booking items</div><h2>Allocated equipment</h2>{items.map(x => <div className="item-row" key={x[0]}><i>□</i><span><b>{x[0]}</b><small>{x[1]}</small></span><strong>{x[2]}</strong></div>)}<div className="total"><span>Total including GST</span><b>$3,840.00</b></div></div>
      </section>
      <aside className="side-stack"><section className="card card-section"><div className="eyebrow">Rental dates</div><h2>Event schedule</h2><Info label="Delivery" value="14 Nov · 10:00am–12:00pm" /><Info label="Event" value="14 Nov · 4:00pm–11:30pm" /><Info label="Collection" value="15 Nov · 9:00am–11:00am" /></section>
      <section className="card card-section"><div className="eyebrow">Payment</div><h2>$1,240.00 due</h2><p className="muted">Deposit received $1,280 · Balance due 30 October</p><button className="primary full">Pay balance securely</button></section>
      <section className="card card-section"><div className="eyebrow">Documents</div><Info label="Booking confirmation" value="PDF · 24 July" /><Info label="Tax invoice" value="PDF · $3,840" /></section></aside>
    </div>
    <section className="card timeline-card"><div><div className="eyebrow">Payment and order timeline</div><h2>Booking progress</h2></div><Timeline compact /></section>
  </main>;
}

export function Info({ label, value }: { label: string; value: string }) { return <div className="info"><small>{label}</small><b>{value}</b></div> }

export function Choice({ icon, title, text, checked }: { icon: string; title: string; text: string; checked?: boolean }) {
  return <label className={`choice ${checked ? "checked" : ""}`}><input type="checkbox" defaultChecked={checked} /><i>{icon}</i><span><b>{title}</b><small>{text}</small></span><em>{checked ? "✓" : ""}</em></label>;
}

export function ChangeSelect() {
  const s = stages[2];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card"><h2>Select change type</h2><p className="muted">You can request several changes together.</p><div className="choice-grid"><Choice checked icon="▦" title="Event or rental dates" text="Change event, delivery, collection or return timing." /><Choice icon="＋" title="Item quantities" text="Increase or decrease quantities already booked." /><Choice icon="□" title="Add, swap or remove items" text="Request different equipment, style or variant." /><Choice checked icon="▱" title="Delivery or collection" text="Change address, access notes, timing or method." /></div><div className="tip"><b>What happens next?</b><p>Your current booking stays confirmed. We check stock, price and logistics before sending a decision.</p></div></section><FooterActions stage={s} next="change-details" /></main>;
}

export function Field({ label, value, wide, area }: { label: string; value?: string; wide?: boolean; area?: boolean }) {
  return <label className={wide ? "wide-field" : ""}><span>{label}</span>{area ? <textarea defaultValue={value} /> : <input defaultValue={value} />}</label>;
}

export function ChangeDetails() {
  const s = stages[3];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card">
    <div className="form-section"><div><b className="number">1</b><h2>Event and rental dates</h2></div><div className="form-grid"><Field label="Event date" value="21 November 2026" /><Field label="Event time" value="4:00pm – 11:30pm" /><Field label="Delivery date" value="21 November 2026" /><Field label="Preferred window" value="10:00am – 12:00pm" /><Field label="Collection date" value="22 November 2026" /><Field label="Preferred window" value="9:00am – 11:00am" /></div></div>
    <div className="form-section"><div><b className="number">2</b><h2>Delivery and access</h2></div><div className="form-grid"><Field wide label="Venue address" value="Richmond Town Hall, 333 Bridge Road, Richmond VIC 3121" /><Field wide area label="Updated access or logistics notes" value="Please use the rear loading entrance on Gleadell Street. Venue access is available from 9:30am." /></div></div>
  </section><FooterActions stage={s} next="change-review" /></main>;
}

export function ReviewBlock({ title, rows }: { title: string; rows: [string, string, string?][] }) {
  return <section className="review-block"><h3>{title}</h3>{rows.map(r => <div key={r[0]}><span>{r[0]}</span><b>{r[1]}</b>{r[2] && <em>{r[2]}</em>}</div>)}</section>;
}

export function ChangeReview() {
  const s = stages[4];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card"><div className="review-grid"><ReviewBlock title="Requested timing" rows={[["Event date","21 November 2026","was 14 November"],["Delivery","21 Nov · 10am–12pm"],["Collection","22 Nov · 9am–11am"]]} /><ReviewBlock title="Updated logistics" rows={[["Venue","Richmond Town Hall"],["Access","Rear loading entrance"],["Contact","Alex Morgan · 0412 345 678"]]} /></div><div className="estimate"><div><span>Current booking total</span><b>$3,840.00</b></div><div><span>Estimated difference</span><b>To be confirmed</b></div><p>Prices may change after stock and delivery availability are rechecked.</p></div><Choice checked icon="✓" title="I understand this is a request" text="My existing booking stays unchanged until SK Event Hire approves the request and I accept any revised price." /></section><FooterActions stage={s} next="change-result" /></main>;
}

export function Result({ type }: { type: "change" | "cancel" }) {
  const s = type === "change" ? stages[5] : stages[8];
  return <main className="flow"><Hero stage={s} /><section className={`card result-card ${type}`}><div className="result-icon">{type === "change" ? "✓" : "✓"}</div><div className="eyebrow">{type === "change" ? "Reference CR-260724-018" : "Reference CN-260724-006"}</div><h2>{type === "change" ? "Request submitted successfully" : "Cancellation complete"}</h2><p>{type === "change" ? "Customer Care will check availability, pricing and the requested delivery window. We’ll notify you by email, SMS and in-app message." : "A $2,960.00 refund has been initiated to Visa ending 4821. Allow 3–5 business days for your bank to process it."}</p><div className="result-facts"><Info label="Booking" value="SK-261114-042" /><Info label={type === "change" ? "Current status" : "Refund"} value={type === "change" ? "Confirmed · unchanged" : "$2,960.00"}/><Info label={type === "change" ? "Response by" : "Cancellation fee"} value={type === "change" ? "24 Jul · 5:00pm" : "$880.00"} /></div></section><FooterActions stage={s} /></main>;
}

export function CancellationRequest() {
  const s = stages[6];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card"><div className="form-grid"><label className="wide-field"><span>Reason for cancellation</span><select defaultValue="date"><option value="date">Event date or plans changed</option><option>Venue is no longer available</option><option>Budget changed</option><option>Other</option></select></label><Field wide area label="Tell us anything else (optional)" value="Our venue is no longer available on the planned date." /></div><div className="policy-card"><div><span>Estimated refund</span><b>$2,960.00</b></div><div><span>Cancellation charge</span><b>$880.00</b></div><p>Based on cancellation 113 days before delivery. Final charges follow the rental cancellation policy and any non-refundable custom items.</p><a href="/cancellation-policy">Read cancellation policy →</a></div></section><FooterActions stage={s} next="cancellation-review" /></main>;
}

export function CancellationReview() {
  const s = stages[7];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card"><div className="review-grid"><ReviewBlock title="Cancellation details" rows={[["Reason","Event plans changed"],["Submitted by","Alex Morgan"],["Effective","Immediately after confirmation"]]} /><ReviewBlock title="Refund destination" rows={[["Method","Visa ending 4821"],["Refund amount","$2,960.00"],["Processing","3–5 business days"]]} /></div><div className="charge-table"><div><span>Total payments received</span><b>$3,840.00</b></div><div><span>Cancellation charge</span><b>− $880.00</b></div><div className="grand"><span>Estimated refund</span><b>$2,960.00</b></div></div><Choice checked icon="!" title="I confirm this cancellation" text="I understand this action cannot be undone and the listed cancellation charge will apply." /></section><FooterActions stage={s} next="cancellation-result" /></main>;
}

export function RepeatBooking({ review = false }: { review?: boolean }) {
  const s = review ? stages[10] : stages[9];
  return <main className="flow"><Hero stage={s} /><section className="card flow-card"><div className="origin"><span>Copied from</span><b>40th birthday · SK-251210-063</b><em>Completed 11 December 2025</em></div>{!review && <div className="form-grid repeat-fields"><Field label="New event date" value="12 December 2026" /><Field label="Guest count" value="70" /><Field label="Delivery suburb" value="Brighton VIC 3186" /><Field label="Event type" value="Birthday celebration" /></div>}<h2>{review ? "Copied items and latest pricing" : "Eligible items copied"}</h2>{items.slice(0,3).map((x,i) => <div className="item-row editable" key={x[0]}><i>□</i><span><b>{x[0]}</b><small>{x[1]}</small></span>{review ? <strong>{["$576.00","$720.00","$360.00"][i]}</strong> : <label>Qty <input defaultValue={["48","6","4"][i]} /></label>}</div>)}{review && <><div className="availability"><b>✓ All selected items are available</b><span>Availability checked 24 Jul at 11:42am</span></div><div className="total"><span>Estimated total including delivery & GST</span><b>$3,960.00</b></div></>}</section><FooterActions stage={s} next={review ? "bookings" : "repeat-review"} /></main>;
}

export function Timeline({ compact = false }: { compact?: boolean }) {
  const steps = [
    ["Confirmed","Quote accepted and deposit received","18 Jul · 2:43pm","done"],
    ["Preparing","Picking and quality checks underway","Today · 9:10am","current"],
    ["Ready","Packed and ready for dispatch","13 Nov · expected",""],
    ["Out for delivery","Driver en route to Richmond","14 Nov · 10am–12pm",""],
    ["On hire","Rental period in progress","14–15 Nov",""],
    ["Return due","Collection booked","15 Nov · 9am–11am",""],
    ["Returned","Inspection and completion","After return",""],
  ];
  return <div className={`tracking-timeline ${compact ? "compact" : ""}`}>{steps.map((x,i) => <div className={x[3]} key={x[0]}><i>{x[3] === "done" ? "✓" : x[3] === "current" ? "●" : i+1}</i><span><b>{x[0]}</b><small>{x[1]}</small></span><em>{x[2]}</em></div>)}</div>
}

export function OrderTracking() {
  const s = stages[11];
  return <main><Hero stage={s} /><SummaryStrip /><section className="tracking-layout"><div className="card tracking-main"><div className="tracking-map"><div className="route-line"></div><span className="warehouse">SK</span><span className="truck">▱</span><span className="venue">⌂</span><div className="eta"><small>ESTIMATED ARRIVAL</small><b>14 Nov · 10:45am</b><span>Within your 10am–12pm window</span></div></div><div className="card-section"><h2>Order journey</h2><Timeline /></div></div><aside className="side-stack"><section className="card card-section"><div className="eyebrow">Current update</div><h2>Preparation started</h2><p className="muted">Warehouse team is picking your allocated equipment. Quality checks and protective packing follow.</p><Info label="Last updated" value="Today · 9:10am" /><Info label="Next update" value="Ready for dispatch" /></section><section className="card card-section"><div className="eyebrow">Delivery</div><h2>Richmond Town Hall</h2><Info label="Window" value="14 Nov · 10am–12pm" /><Info label="Access" value="Rear loading entrance" /><Info label="Event contact" value="Alex · 0412 345 678" /><button className="secondary full">Update access details</button></section></aside></section><FooterActions stage={s} /></main>;
}
