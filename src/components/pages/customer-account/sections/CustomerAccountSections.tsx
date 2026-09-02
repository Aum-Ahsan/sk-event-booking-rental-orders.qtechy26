"use client";
/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import React from "react";
import pageData from "../../../../data/pages/customer.json";
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
      <a className="brand account-logo" href="/overview" aria-label="SK Event Hire account home"><img src="/images/sk-event-hire-website-logo.png" alt={pageData.extracted.attr_115}/></a>
      <div className="person"><i>{pageData.extracted.text_1}</i><b>{pageData.extracted.text_2}<small>{pageData.extracted.text_3}</small></b></div>
      <nav>{nav.map((n, i) => <a className={n === active ? "active" : ""} key={n} href={hrefs[i]}><span>{["⌂","▤","▦","▭","▱","▢","♢","⌘","♡","☆","♙","⚙"][i]}</span>{n}</a>)}</nav>
      <div className="support"><b>{pageData.support.title}</b><p>{pageData.support.description}</p><a href="/help">{pageData.support.action}</a></div>
    </aside>
    <div className="workspace">
      <header><div>{pageData.extracted.text_4}<b>›</b> {active}</div><div className="head-actions"><label>⌕ <input placeholder={pageData.extracted.attr_116} /></label><button className="bell">♧<sup>{pageData.extracted.text_5}</sup></button><a className="new-booking" href="/create-quote-01">{pageData.extracted.text_6}</a></div></header>
      {children}
    </div>
    <nav className="mobile-nav"><a>⌂<small>{pageData.extracted.text_7}</small></a><a>⌕<small>{pageData.extracted.text_8}</small></a><a className="active">▦<small>{pageData.extracted.text_9}</small></a><a>▢<small>{pageData.extracted.text_10}</small></a><a>♙<small>{pageData.extracted.text_11}</small></a></nav>
  </div>;
}

export function Hero({ stage }: { stage: Stage }) {
  return <><div className="crumb">{pageData.extracted.text_12}<span>›</span> {stage.title}</div><section className="page-hero">
    <div><div className="eyebrow">{stage.eyebrow}</div><h1>{stage.title}</h1><p>{stage.description}</p></div>
    {stage.step && <div className="step-pill">{stage.step}</div>}
  </section></>;
}

export function SummaryStrip() {
  return <div className="summary-strip">
    <div><span>{pageData.extracted.text_13}</span><b>{pageData.extracted.text_14}</b></div><div><span>{pageData.extracted.text_15}</span><b>{pageData.extracted.text_16}</b></div><div><span>{pageData.extracted.text_17}</span><b>{pageData.extracted.text_18}</b></div><div><span>{pageData.extracted.text_19}</span><b className="good">{pageData.extracted.text_20}</b></div>
  </div>;
}

export function FooterActions({ stage, next }: { stage: Stage; next?: string }) {
  if (!stage.primary) return null;
  return <div className="footer-actions"><a className="secondary" href={stage.secondary === "Back to booking" || stage.secondary === "View booking" ? "/booking-details" : "/bookings"}>{stage.secondary}</a><a className="primary" href={next ? `/${next}` : "/bookings"}>{stage.primary} <span>→</span></a></div>;
}

export function BookingList() {
  return <main><Hero stage={stages[0]} />
    <div className="notice"><b>▱</b><span><strong>{pageData.extracted.text_21}</strong><small>{pageData.extracted.text_22}</small></span><a href="/order-tracking">{pageData.extracted.text_23}</a></div>
    <div className="metrics"><div><span>▦</span><p>{pageData.extracted.text_24}<b>{pageData.extracted.text_25}</b><small>{pageData.extracted.text_26}</small></p></div><div><span>◇</span><p>{pageData.extracted.text_27}<b>{pageData.extracted.text_28}</b><small>{pageData.extracted.text_29}</small></p></div><div><span>↻</span><p>{pageData.extracted.text_30}<b>{pageData.extracted.text_31}</b><small>{pageData.extracted.text_32}</small></p></div><div><span>▭</span><p>{pageData.extracted.text_33}<b>{pageData.extracted.text_34}</b><small>{pageData.extracted.text_35}</small></p></div></div>
    <section className="card booking-panel"><div className="section-head"><div><div className="eyebrow">{pageData.extracted.text_36}</div><h2>{pageData.extracted.text_37}</h2></div><div className="tabs"><button className="selected">{pageData.extracted.text_38}<b>{pageData.extracted.text_39}</b></button><button>{pageData.extracted.text_40}</button><button>{pageData.extracted.text_41}</button><button>{pageData.extracted.text_42}</button></div></div>
      <div className="filters"><label>⌕ <input placeholder={pageData.extracted.attr_117} /></label><button>{pageData.extracted.text_43}</button><button>{pageData.extracted.text_44}</button></div>
      <div className="booking-grid">{bookings.map((b, i) => <article className="booking-card" key={b.ref}><div className={`event-photo photo-${i + 1}`}><span className={`status ${b.tone}`}>{b.status}</span></div><div className="booking-body"><h3>{b.title}</h3><b className="reference">{b.ref}</b><p>{pageData.extracted.text_45}{b.date}</p><p>{pageData.extracted.text_46}{b.place}</p><footer><strong>{b.money}</strong><a href={i === 0 ? "/booking-details" : i === 2 ? "/repeat-booking" : "/booking-details"}>{i === 2 ? "Repeat booking" : "View booking"} →</a></footer></div></article>)}</div>
    </section>
  </main>;
}

const items = [
  {name:"Bentwood Chairs", desc:"Natural white · 48", price:"$576.00"},
  {name:"Rustic Timber Tables", desc:"1.8 metres · 6", price:"$720.00"},
  {name:"Festoon Light Sets", desc:"Warm white · 4", price:"$360.00"},
  {name:"Delivery, setup & collection", desc:"Richmond VIC", price:"$680.00"},
];

export function Details() {
  const s = stages[1];
  return <main><Hero stage={s} /><SummaryStrip />
    <div className="detail-actions"><a href="/change-request">{pageData.extracted.text_47}</a><a className="danger-link" href="/cancellation-request">{pageData.extracted.text_48}</a><a className="primary" href="/order-tracking">{pageData.extracted.text_49}</a></div>
    <div className="detail-grid">
      <section className="card wide"><div className="event-banner"><div><span>{pageData.extracted.text_50}</span><h2>{pageData.extracted.text_51}</h2><p>{pageData.extracted.text_52}</p></div></div>
        <div className="card-section"><div className="eyebrow">{pageData.extracted.text_53}</div><h2>{pageData.extracted.text_54}</h2>{items.map(x => <div className="item-row" key={x.name}><i>□</i><span><b>{x.name}</b><small>{x.desc}</small></span><strong>{x.price}</strong></div>)}<div className="total"><span>{pageData.extracted.text_55}</span><b>{pageData.extracted.text_56}</b></div></div>
      </section>
      <aside className="side-stack"><section className="card card-section"><div className="eyebrow">{pageData.extracted.text_57}</div><h2>{pageData.extracted.text_58}</h2><Info label={pageData.extracted.attr_118} value="14 Nov · 10:00am–12:00pm" /><Info label={pageData.extracted.attr_119} value="14 Nov · 4:00pm–11:30pm" /><Info label={pageData.extracted.attr_120} value="15 Nov · 9:00am–11:00am" /></section>
      <section className="card card-section"><div className="eyebrow">{pageData.extracted.text_59}</div><h2>{pageData.extracted.text_60}</h2><p className="muted">{pageData.extracted.text_61}</p><button className="primary full">{pageData.extracted.text_62}</button></section>
      <section className="card card-section"><div className="eyebrow">{pageData.extracted.text_63}</div><Info label={pageData.extracted.attr_121} value="PDF · 24 July" /><Info label={pageData.extracted.attr_122} value="PDF · $3,840" /></section></aside>
    </div>
    <section className="card timeline-card"><div><div className="eyebrow">{pageData.extracted.text_64}</div><h2>{pageData.extracted.text_65}</h2></div><Timeline compact /></section>
  </main>;
}

export function Info({ label, value }: { label: string; value: string }) { return <div className="info"><small>{label}</small><b>{value}</b></div> }

export function Choice({ icon, title, text, checked }: { icon: string; title: string; text: string; checked?: boolean }) {
  return <label className={`choice ${checked ? "checked" : ""}`}><input type="checkbox" defaultChecked={checked} /><i>{icon}</i><span><b>{title}</b><small>{text}</small></span><em>{checked ? "✓" : ""}</em></label>;
}

export function ChangeSelect() {
  const s = stages[2];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card"><h2>{pageData.extracted.text_66}</h2><p className="muted">{pageData.extracted.text_67}</p><div className="choice-grid"><Choice checked icon="▦" title={pageData.extracted.attr_123} text="Change event, delivery, collection or return timing." /><Choice icon="＋" title={pageData.extracted.attr_124} text="Increase or decrease quantities already booked." /><Choice icon="□" title={pageData.extracted.attr_125} text="Request different equipment, style or variant." /><Choice checked icon="▱" title={pageData.extracted.attr_126} text="Change address, access notes, timing or method." /></div><div className="tip"><b>{pageData.extracted.text_68}</b><p>{pageData.extracted.text_69}</p></div></section><FooterActions stage={s} next="change-details" /></main>;
}

export function Field({ label, value, wide, area }: { label: string; value?: string; wide?: boolean; area?: boolean }) {
  return <label className={wide ? "wide-field" : ""}><span>{label}</span>{area ? <textarea defaultValue={value} /> : <input defaultValue={value} />}</label>;
}

export function ChangeDetails() {
  const s = stages[3];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card">
    <div className="form-section"><div><b className="number">{pageData.extracted.text_70}</b><h2>{pageData.extracted.text_71}</h2></div><div className="form-grid"><Field label={pageData.extracted.attr_127} value="21 November 2026" /><Field label={pageData.extracted.attr_128} value="4:00pm – 11:30pm" /><Field label={pageData.extracted.attr_129} value="21 November 2026" /><Field label={pageData.extracted.attr_130} value="10:00am – 12:00pm" /><Field label={pageData.extracted.attr_131} value="22 November 2026" /><Field label={pageData.extracted.attr_132} value="9:00am – 11:00am" /></div></div>
    <div className="form-section"><div><b className="number">{pageData.extracted.text_72}</b><h2>{pageData.extracted.text_73}</h2></div><div className="form-grid"><Field wide label={pageData.extracted.attr_133} value="Richmond Town Hall, 333 Bridge Road, Richmond VIC 3121" /><Field wide area label={pageData.extracted.attr_134} value="Please use the rear loading entrance on Gleadell Street. Venue access is available from 9:30am." /></div></div>
  </section><FooterActions stage={s} next="change-review" /></main>;
}

export function ReviewBlock({ title, rows }: { title: string; rows: {label:string, val:string, note?:string}[] }) {
  return <section className="review-block"><h3>{title}</h3>{rows.map(r => <div key={r.label}><span>{r.label}</span><b>{r.val}</b>{r.note && <em>{r.note}</em>}</div>)}</section>;
}

export function ChangeReview() {
  const s = stages[4];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card"><div className="review-grid"><ReviewBlock title={pageData.extracted.attr_135} rows={[{label:"Event date",val:"21 November 2026",note:"was 14 November"},{label:"Delivery",val:"21 Nov · 10am–12pm"},{label:"Collection",val:"22 Nov · 9am–11am"}]} /><ReviewBlock title={pageData.extracted.attr_136} rows={[{label:"Venue",val:"Richmond Town Hall"},{label:"Access",val:"Rear loading entrance"},{label:"Contact",val:"Alex Morgan · 0412 345 678"}]} /></div><div className="estimate"><div><span>{pageData.extracted.text_74}</span><b>{pageData.extracted.text_75}</b></div><div><span>{pageData.extracted.text_76}</span><b>{pageData.extracted.text_77}</b></div><p>{pageData.extracted.text_78}</p></div><Choice checked icon="✓" title={pageData.extracted.attr_137} text="My existing booking stays unchanged until SK Event Hire approves the request and I accept any revised price." /></section><FooterActions stage={s} next="change-result" /></main>;
}

export function Result({ type }: { type: "change" | "cancel" }) {
  const s = type === "change" ? stages[5] : stages[8];
  return <main className="flow"><Hero stage={s} /><section className={`card result-card ${type}`}><div className="result-icon">{type === "change" ? "✓" : "✓"}</div><div className="eyebrow">{type === "change" ? "Reference CR-260724-018" : "Reference CN-260724-006"}</div><h2>{type === "change" ? "Request submitted successfully" : "Cancellation complete"}</h2><p>{type === "change" ? "Customer Care will check availability, pricing and the requested delivery window. We’ll notify you by email, SMS and in-app message." : "A $2,960.00 refund has been initiated to Visa ending 4821. Allow 3–5 business days for your bank to process it."}</p><div className="result-facts"><Info label={pageData.extracted.attr_138} value="SK-261114-042" /><Info label={type === "change" ? "Current status" : "Refund"} value={type === "change" ? "Confirmed · unchanged" : "$2,960.00"}/><Info label={type === "change" ? "Response by" : "Cancellation fee"} value={type === "change" ? "24 Jul · 5:00pm" : "$880.00"} /></div></section><FooterActions stage={s} /></main>;
}

export function CancellationRequest() {
  const s = stages[6];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card"><div className="form-grid"><label className="wide-field"><span>{pageData.extracted.text_79}</span><select defaultValue="date"><option value="date">{pageData.extracted.text_80}</option><option>{pageData.extracted.text_81}</option><option>{pageData.extracted.text_82}</option><option>{pageData.extracted.text_83}</option></select></label><Field wide area label={pageData.extracted.attr_139} value="Our venue is no longer available on the planned date." /></div><div className="policy-card"><div><span>{pageData.extracted.text_84}</span><b>{pageData.extracted.text_85}</b></div><div><span>{pageData.extracted.text_86}</span><b>{pageData.extracted.text_87}</b></div><p>{pageData.extracted.text_88}</p><a href="/cancellation-policy">{pageData.extracted.text_89}</a></div></section><FooterActions stage={s} next="cancellation-review" /></main>;
}

export function CancellationReview() {
  const s = stages[7];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card"><div className="review-grid"><ReviewBlock title={pageData.extracted.attr_140} rows={[{label:"Reason",val:"Event plans changed"},{label:"Submitted by",val:"Alex Morgan"},{label:"Effective",val:"Immediately after confirmation"}]} /><ReviewBlock title={pageData.extracted.attr_141} rows={[{label:"Method",val:"Visa ending 4821"},{label:"Refund amount",val:"$2,960.00"},{label:"Processing",val:"3–5 business days"}]} /></div><div className="charge-table"><div><span>{pageData.extracted.text_90}</span><b>{pageData.extracted.text_91}</b></div><div><span>{pageData.extracted.text_92}</span><b>{pageData.extracted.text_93}</b></div><div className="grand"><span>{pageData.extracted.text_94}</span><b>{pageData.extracted.text_95}</b></div></div><Choice checked icon="!" title={pageData.extracted.attr_142} text="I understand this action cannot be undone and the listed cancellation charge will apply." /></section><FooterActions stage={s} next="cancellation-result" /></main>;
}

export function RepeatBooking({ review = false }: { review?: boolean }) {
  const s = review ? stages[10] : stages[9];
  return <main className="flow"><Hero stage={s} /><section className="card flow-card"><div className="origin"><span>{pageData.extracted.text_96}</span><b>{pageData.extracted.text_97}</b><em>{pageData.extracted.text_98}</em></div>{!review && <div className="form-grid repeat-fields"><Field label={pageData.extracted.attr_143} value="12 December 2026" /><Field label={pageData.extracted.attr_144} value="70" /><Field label={pageData.extracted.attr_145} value="Brighton VIC 3186" /><Field label={pageData.extracted.attr_146} value="Birthday celebration" /></div>}<h2>{review ? "Copied items and latest pricing" : "Eligible items copied"}</h2>{items.slice(0,3).map((x,i) => <div className="item-row editable" key={x.name}><i>□</i><span><b>{x.name}</b><small>{x.desc}</small></span>{review ? <strong>{["$576.00","$720.00","$360.00"][i]}</strong> : <label>{pageData.extracted.text_99}<input defaultValue={["48","6","4"][i]} /></label>}</div>)}{review && <><div className="availability"><b>{pageData.extracted.text_100}</b><span>{pageData.extracted.text_101}</span></div><div className="total"><span>{pageData.extracted.text_102}</span><b>{pageData.extracted.text_103}</b></div></>}</section><FooterActions stage={s} next={review ? "bookings" : "repeat-review"} /></main>;
}

export function Timeline({ compact = false }: { compact?: boolean }) {
  const steps = [
    {title:"Confirmed",desc:"Quote accepted and deposit received",time:"18 Jul · 2:43pm",status:"done"},
    {title:"Preparing",desc:"Picking and quality checks underway",time:"Today · 9:10am",status:"current"},
    {title:"Ready",desc:"Packed and ready for dispatch",time:"13 Nov · expected",status:""},
    {title:"Out for delivery",desc:"Driver en route to Richmond",time:"14 Nov · 10am–12pm",status:""},
    {title:"On hire",desc:"Rental period in progress",time:"14–15 Nov",status:""},
    {title:"Return due",desc:"Collection booked",time:"15 Nov · 9am–11am",status:""},
    {title:"Returned",desc:"Inspection and completion",time:"After return",status:""},
  ];
  return <div className={`tracking-timeline ${compact ? "compact" : ""}`}>{steps.map((x,i) => <div className={x.status} key={x.title}><i>{x.status === "done" ? "✓" : x.status === "current" ? "●" : i+1}</i><span><b>{x.title}</b><small>{x.desc}</small></span><em>{x.time}</em></div>)}</div>
}

export function OrderTracking() {
  const s = stages[11];
  return <main><Hero stage={s} /><SummaryStrip /><section className="tracking-layout"><div className="card tracking-main"><div className="tracking-map"><div className="route-line"></div><span className="warehouse">{pageData.extracted.text_104}</span><span className="truck">▱</span><span className="venue">⌂</span><div className="eta"><small>{pageData.extracted.text_105}</small><b>{pageData.extracted.text_106}</b><span>{pageData.extracted.text_107}</span></div></div><div className="card-section"><h2>{pageData.extracted.text_108}</h2><Timeline /></div></div><aside className="side-stack"><section className="card card-section"><div className="eyebrow">{pageData.extracted.text_109}</div><h2>{pageData.extracted.text_110}</h2><p className="muted">{pageData.extracted.text_111}</p><Info label={pageData.extracted.attr_147} value="Today · 9:10am" /><Info label={pageData.extracted.attr_148} value="Ready for dispatch" /></section><section className="card card-section"><div className="eyebrow">{pageData.extracted.text_112}</div><h2>{pageData.extracted.text_113}</h2><Info label={pageData.extracted.attr_149} value="14 Nov · 10am–12pm" /><Info label={pageData.extracted.attr_150} value="Rear loading entrance" /><Info label={pageData.extracted.attr_151} value="Alex · 0412 345 678" /><button className="secondary full">{pageData.extracted.text_114}</button></section></aside></section><FooterActions stage={s} /></main>;
}
