"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Choice, Field, ReviewBlock } from "../../customer-account/sections/CustomerAccountSections";
import { Field, ReviewBlock } from "../../../landing/shared/FormControls";
import categories from "../../../../data/commerce/categories.json";
export const quoteSteps = [
  ["create-quote-01", "Event overview", "Tell us about your event", "Start with the occasion, expected guests and the name you want shown on your quotation."],
  ["create-quote-02", "Event schedule", "Choose your event and hire dates", "Add the event time plus the delivery and collection windows needed by your venue."],
  ["create-quote-03", "Venue details", "Where is your event?", "Enter the venue address and the practical details our delivery team needs."],
  ["create-quote-04", "Hire categories", "What would you like to hire?", "Choose every product category you want us to include in this quotation."],
  ["create-quote-05", "Product selection", "Select your hire items", "Add products from the selected categories. Availability is checked after submission."],
  ["create-quote-06", "Quantities & options", "Confirm quantities and styles", "Adjust quantities, colours and product options to suit your guest count and event style."],
  ["create-quote-07", "Contact details", "Who should we contact?", "Add the customer details needed to prepare and send the quotation."],
  ["create-quote-08", "Special requirements", "Add notes and supporting details", "Share venue constraints, styling requests or documents that will help us quote accurately."],
  ["create-quote-09", "Review request", "Review your quotation request", "Check the event, items, venue and contact information before submission."],
] as const;

export function QuoteProgress({ current }: { current: number }) {
  return <div className="quote-progress"><div><span>New quotation</span><b>Step {current} of 9</b></div><div className="progress-track"><i style={{width: `${current / 9 * 100}%`}} /></div><small>{`${9-current} steps remaining · Your progress is saved`}</small></div>;
}

export function QuoteHero({ current }: { current: number }) {
  const q = quoteSteps[current - 1];
  return <><div className="crumb">Quotes <span>›</span> Create new quotation</div><section className="page-hero quote-hero"><div><div className="eyebrow">{q[1]}</div><h1>{q[2]}</h1><p>{q[3]}</p></div><div className="step-pill">Step {current} of 9</div></section><QuoteProgress current={current} /></>;
}

export function QuoteActions({ current }: { current: number }) {
  const prev = current === 1 ? "/bookings" : `/create-quote-${String(current - 1).padStart(2,"0")}`;
  const next = current === 9 ? "/quote-submitted" : `/create-quote-${String(current + 1).padStart(2,"0")}`;
  return <div className="footer-actions quote-actions"><a className="secondary" href={prev}>{current === 1 ? "Save & exit" : "Back"}</a><a className="primary" href={next}>{current === 9 ? "Submit quotation request" : "Save & continue"} <span>→</span></a></div>;
}

export function ProductLine({ name, detail, qty, price }: { name: string; detail: string; qty: string; price: string }) {
  return <div className="quote-product"><i>□</i><span><b>{name}</b><small>{detail}</small></span><label>Qty<input defaultValue={qty}/></label><strong>{price}</strong></div>;
}

export function CreateQuote({ current }: { current: number }) {
  let body: React.ReactNode;
  if (current === 1) body = <><div className="form-grid"><Field label="Event name" value="Alex & Jordan’s garden wedding"/><Field label="Event type" value="Wedding reception"/><Field label="Estimated guest count" value="80"/><Field label="Budget range" value="$3,000 – $5,000"/><Field wide area label="Brief event description" value="An outdoor garden reception with a relaxed, warm-white and natural timber style."/></div><div className="tip"><b>A rough plan is enough</b><p>You can refine quantities and logistics before submitting your request.</p></div></>;
  else if (current === 2) body = <><div className="form-grid"><Field label="Event date" value="14 November 2026"/><Field label="Event start time" value="4:00pm"/><Field label="Event end date" value="14 November 2026"/><Field label="Event finish time" value="11:30pm"/></div><div className="availability"><b>✓ Your event date is within our service calendar</b><span>Final item availability is confirmed with your quote.</span></div></>;
  else if (current === 3) body = <><div className="form-grid"><Field wide label="Venue name" value="Richmond Town Hall"/><Field wide label="Venue address" value="333 Bridge Road, Richmond VIC 3121"/><Field label="Venue type" value="Council hall & garden"/><Field label="Postcode" value="3121"/><Field label="Loading access from" value="9:30am"/><Field label="Parking available" value="Reserved loading bay"/><Field wide area label="Access notes" value="Use the rear loading entrance on Gleadell Street. Venue coordinator will provide key access."/></div></>;
  else if (current === 4) body = <><h2>Select all relevant categories</h2><div className="choice-grid category-grid"><Choice checked icon="▦" title="Tables & chairs" text="Dining, cocktail, ceremony and lounge furniture."/><Choice checked icon="✦" title="Lighting" text="Festoon, feature, ambient and practical lighting."/><Choice icon="⌂" title="Marquees & structures" text="Shelter, flooring, staging and weather protection."/><Choice icon="◫" title="Tableware & linen" text="Crockery, glassware, cutlery, linen and accessories."/><Choice icon="♫" title="Audio & visual" text="Speakers, microphones, screens and event power."/><Choice checked icon="◇" title="Décor & styling" text="Backdrops, signage, plinths and decorative items."/></div></>;
  else if (current === 5) body = <><div className="filters product-filter"><label>⌕ <input defaultValue="Wedding essentials"/></label><button>Tables & chairs⌄</button><button>Sort: Recommended⌄</button></div><div className="catalog-grid">{[["Bentwood Chair","Natural white","$12 each","/images/chairs-product.png"],["Rustic Timber Table","1.8 metre","$65 each","/images/tables-product.png"],["Festoon Light Set","20 metre · warm white","$95 each","/images/lighting-product.png"],["Textured Arch Set","Two warm-white panels","$220 set","/images/decor-product.png"]].map((x,i)=><article className={`catalog-card selected-${i<3}`} key={x[0]}><img className="catalog-art" src={x[3]} alt={x[0]}/><span>{i<3?"✓ Added":"Add item"}</span><h3>{x[0]}</h3><p>{x[1]}</p><b>{x[2]}</b></article>)}</div></>;
  else if (current === 6) body = <><h2>Selected products</h2><p className="muted">Quantities are pre-filled from 80 guests. Adjust them as needed.</p><div className="quote-products"><ProductLine name="Bentwood Chairs" detail="Natural white · guest seating" qty="80" price="$960.00"/><ProductLine name="Rustic Timber Tables" detail="1.8 metre · seats 8–10" qty="9" price="$1,080.00"/><ProductLine name="Festoon Light Sets" detail="20 metre · warm white" qty="4" price="$360.00"/></div><div className="estimate"><div><span>Estimated hire subtotal</span><b>$2,400.00</b></div><p>GST and any approved optional services are confirmed in the final quotation.</p></div></>;
  else if (current === 7) body = <div className="form-grid"><Field label="First name" value="Alex"/><Field label="Last name" value="Morgan"/><Field label="Mobile number" value="0412 345 678"/><Field label="Email address" value="alex.morgan@example.com"/><Field wide label="Preferred contact method" value="Email and SMS"/></div>;
  else if (current === 8) body = <><div className="form-grid"><Field wide area label="Styling, venue access or special requirements" value="Please keep the palette natural timber, white and warm lighting. The venue has a strict 2:00pm setup completion time."/><label className="wide-field upload"><span>Plans, inspiration or venue documents</span><i>⇧</i><b>Drop files here or browse</b><small>PDF, JPG or PNG · up to 10 MB each</small></label></div><div className="uploaded"><span>▤</span><div><b>Richmond_Town_Hall_Floorplan.pdf</b><small>1.8 MB · Ready</small></div><em>✓</em></div></>;
  else body = <><div className="review-grid"><ReviewBlock title="Event & schedule" rows={[["Event","Garden wedding"],["Guests","80"],["Date","14 November 2026"],["Time","4:00pm–11:30pm"]]}/><ReviewBlock title="Venue & contact" rows={[["Venue","Richmond Town Hall"],["Contact","Alex Morgan"],["Mobile","0412 345 678"],["Email","alex.morgan@example.com"]]}/></div><h2 className="review-title">Items requested</h2><div className="quote-products compact-products"><ProductLine name="Bentwood Chairs" detail="Natural white" qty="80" price="$960.00"/><ProductLine name="Rustic Timber Tables" detail="1.8 metre" qty="9" price="$1,080.00"/><ProductLine name="Festoon Light Sets" detail="Warm white" qty="4" price="$360.00"/></div><div className="estimate"><div><span>Estimated hire subtotal before GST</span><b>$2,400.00</b></div><p>This is a quotation request, not a confirmed booking. Final availability and pricing will be shown in the quotation.</p></div><Choice checked icon="✓" title="I confirm these request details are correct" text="I understand SK Event Hire will check availability and may contact me for clarification."/></>;
  return <main className="flow quote-flow"><QuoteHero current={current}/><section className="card flow-card">{body}</section><QuoteActions current={current}/></main>;
}
