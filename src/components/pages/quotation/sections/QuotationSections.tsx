"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Choice, Field, ReviewBlock } from "../../customer-account/sections/CustomerAccountSections";
import { Field, ReviewBlock } from "../../../landing/shared/FormControls";
import categories from "../../../../data/commerce/categories.json";
import pageData from "../../../../data/pages/quotation.json";

export const quoteSteps = [
  {path:"create-quote-01",title:"Event overview",hero:"Tell us about your event",desc:"Start with the occasion, expected guests and the name you want shown on your quotation."},
  {path:"create-quote-02",title:"Event schedule",hero:"Choose your event and hire dates",desc:"Add the event time plus the delivery and collection windows needed by your venue."},
  {path:"create-quote-03",title:"Venue details",hero:"Where is your event?",desc:"Enter the venue address and the practical details our delivery team needs."},
  {path:"create-quote-04",title:"Hire categories",hero:"What would you like to hire?",desc:"Choose every product category you want us to include in this quotation."},
  {path:"create-quote-05",title:"Product selection",hero:"Select your hire items",desc:"Add products from the selected categories. Availability is checked after submission."},
  {path:"create-quote-06",title:"Quantities & options",hero:"Confirm quantities and styles",desc:"Adjust quantities, colours and product options to suit your guest count and event style."},
  {path:"create-quote-07",title:"Contact details",hero:"Who should we contact?",desc:"Add the customer details needed to prepare and send the quotation."},
  {path:"create-quote-08",title:"Special requirements",hero:"Add notes and supporting details",desc:"Share venue constraints, styling requests or documents that will help us quote accurately."},
  {path:"create-quote-09",title:"Review request",hero:"Review your quotation request",desc:"Check the event, items, venue and contact information before submission."},
] as const;

export function QuoteProgress({ current }: { current: number }) {
  return <div className="quote-progress"><div><span>{pageData.extracted.text_1}</span><b>{pageData.extracted.text_2}{current} {pageData.extracted.text_3}</b></div><div className="progress-track"><i style={{width: `${current / 9 * 100}%`}} /></div><small>{`${9-current} steps remaining · Your progress is saved`}</small></div>;
}

export function QuoteHero({ current }: { current: number }) {
  const q = quoteSteps[current - 1];
  return <><div className="crumb">{pageData.extracted.text_4}<span>›</span> {pageData.extracted.text_5}</div><section className="page-hero quote-hero"><div><div className="eyebrow">{q.title}</div><h1>{q.hero}</h1><p>{q.desc}</p></div><div className="step-pill">{pageData.extracted.text_6}{current} {pageData.extracted.text_7}</div></section><QuoteProgress current={current} /></>;
}

export function QuoteActions({ current }: { current: number }) {
  const prev = current === 1 ? "/bookings" : `/create-quote-${String(current - 1).padStart(2,"0")}`;
  const next = current === 9 ? "/quote-submitted" : `/create-quote-${String(current + 1).padStart(2,"0")}`;
  return <div className="footer-actions quote-actions"><a className="secondary" href={prev}>{current === 1 ? "Save & exit" : "Back"}</a><a className="primary" href={next}>{current === 9 ? "Submit quotation request" : "Save & continue"} <span>→</span></a></div>;
}

export function ProductLine({ name, detail, qty, price }: { name: string; detail: string; qty: string; price: string }) {
  return <div className="quote-product"><i>□</i><span><b>{name}</b><small>{detail}</small></span><label>{pageData.extracted.text_8}<input defaultValue={qty}/></label><strong>{price}</strong></div>;
}

export function CreateQuote({ current }: { current: number }) {
  let body: React.ReactNode;
  if (current === 1) body = <><div className="form-grid"><Field label={pageData.extracted.attr_30} value="Alex & Jordan’s garden wedding"/><Field label={pageData.extracted.attr_31} value="Wedding reception"/><Field label={pageData.extracted.attr_32} value="80"/><Field label={pageData.extracted.attr_33} value="$3,000 – $5,000"/><Field wide area label={pageData.extracted.attr_34} value="An outdoor garden reception with a relaxed, warm-white and natural timber style."/></div><div className="tip"><b>{pageData.extracted.text_9}</b><p>{pageData.extracted.text_10}</p></div></>;
  else if (current === 2) body = <><div className="form-grid"><Field label={pageData.extracted.attr_35} value="14 November 2026"/><Field label={pageData.extracted.attr_36} value="4:00pm"/><Field label={pageData.extracted.attr_37} value="14 November 2026"/><Field label={pageData.extracted.attr_38} value="11:30pm"/></div><div className="availability"><b>{pageData.extracted.text_11}</b><span>{pageData.extracted.text_12}</span></div></>;
  else if (current === 3) body = <><div className="form-grid"><Field wide label={pageData.extracted.attr_39} value="Richmond Town Hall"/><Field wide label={pageData.extracted.attr_40} value="333 Bridge Road, Richmond VIC 3121"/><Field label={pageData.extracted.attr_41} value="Council hall & garden"/><Field label={pageData.extracted.attr_42} value="3121"/><Field label={pageData.extracted.attr_43} value="9:30am"/><Field label={pageData.extracted.attr_44} value="Reserved loading bay"/><Field wide area label={pageData.extracted.attr_45} value="Use the rear loading entrance on Gleadell Street. Venue coordinator will provide key access."/></div></>;
  else if (current === 4) body = <><h2>{pageData.extracted.text_13}</h2><div className="choice-grid category-grid"><Choice checked icon="▦" title={pageData.extracted.attr_46} text="Dining, cocktail, ceremony and lounge furniture."/><Choice checked icon="✦" title={pageData.extracted.attr_47} text="Festoon, feature, ambient and practical lighting."/><Choice icon="⌂" title={pageData.extracted.attr_48} text="Shelter, flooring, staging and weather protection."/><Choice icon="◫" title={pageData.extracted.attr_49} text="Crockery, glassware, cutlery, linen and accessories."/><Choice icon="♫" title={pageData.extracted.attr_50} text="Speakers, microphones, screens and event power."/><Choice checked icon="◇" title={pageData.extracted.attr_51} text="Backdrops, signage, plinths and decorative items."/></div></>;
  else if (current === 5) body = <><div className="filters product-filter"><label>⌕ <input defaultValue="Wedding essentials"/></label><button>{pageData.extracted.text_14}</button><button>{pageData.extracted.text_15}</button></div><div className="catalog-grid">{[{name:"Bentwood Chair",desc:"Natural white",price:"$12 each",img:"/images/chairs-product.png"},{name:"Rustic Timber Table",desc:"1.8 metre",price:"$65 each",img:"/images/tables-product.png"},{name:"Festoon Light Set",desc:"20 metre · warm white",price:"$95 each",img:"/images/lighting-product.png"},{name:"Textured Arch Set",desc:"Two warm-white panels",price:"$220 set",img:"/images/decor-product.png"}].map((x,i)=><article className={`catalog-card selected-${i<3}`} key={x.name}><img className="catalog-art" src={x.img} alt={x.name}/><span>{i<3?"✓ Added":"Add item"}</span><h3>{x.name}</h3><p>{x.desc}</p><b>{x.price}</b></article>)}</div></>;
  else if (current === 6) body = <><h2>{pageData.extracted.text_16}</h2><p className="muted">{pageData.extracted.text_17}</p><div className="quote-products"><ProductLine name="Bentwood Chairs" detail="Natural white · guest seating" qty="80" price="$960.00"/><ProductLine name="Rustic Timber Tables" detail="1.8 metre · seats 8–10" qty="9" price="$1,080.00"/><ProductLine name="Festoon Light Sets" detail="20 metre · warm white" qty="4" price="$360.00"/></div><div className="estimate"><div><span>{pageData.extracted.text_18}</span><b>{pageData.extracted.text_19}</b></div><p>{pageData.extracted.text_20}</p></div></>;
  else if (current === 7) body = <div className="form-grid"><Field label={pageData.extracted.attr_52} value="Alex"/><Field label={pageData.extracted.attr_53} value="Morgan"/><Field label={pageData.extracted.attr_54} value="0412 345 678"/><Field label={pageData.extracted.attr_55} value="alex.morgan@example.com"/><Field wide label={pageData.extracted.attr_56} value="Email and SMS"/></div>;
  else if (current === 8) body = <><div className="form-grid"><Field wide area label={pageData.extracted.attr_57} value="Please keep the palette natural timber, white and warm lighting. The venue has a strict 2:00pm setup completion time."/><label className="wide-field upload"><span>{pageData.extracted.text_21}</span><i>⇧</i><b>{pageData.extracted.text_22}</b><small>{pageData.extracted.text_23}</small></label></div><div className="uploaded"><span>▤</span><div><b>{pageData.extracted.text_24}</b><small>{pageData.extracted.text_25}</small></div><em>✓</em></div></>;
  else body = <><div className="review-grid"><ReviewBlock title={pageData.extracted.attr_58} rows={[{label:"Event",val:"Garden wedding"},{label:"Guests",val:"80"},{label:"Date",val:"14 November 2026"},{label:"Time",val:"4:00pm–11:30pm"}]}/><ReviewBlock title={pageData.extracted.attr_59} rows={[{label:"Venue",val:"Richmond Town Hall"},{label:"Contact",val:"Alex Morgan"},{label:"Mobile",val:"0412 345 678"},{label:"Email",val:"alex.morgan@example.com"}]}/></div><h2 className="review-title">{pageData.extracted.text_26}</h2><div className="quote-products compact-products"><ProductLine name="Bentwood Chairs" detail="Natural white" qty="80" price="$960.00"/><ProductLine name="Rustic Timber Tables" detail="1.8 metre" qty="9" price="$1,080.00"/><ProductLine name="Festoon Light Sets" detail="Warm white" qty="4" price="$360.00"/></div><div className="estimate"><div><span>{pageData.extracted.text_27}</span><b>{pageData.extracted.text_28}</b></div><p>{pageData.extracted.text_29}</p></div><Choice checked icon="✓" title={pageData.extracted.attr_60} text="I understand SK Event Hire will check availability and may contact me for clarification."/></>;
  return <main className="flow quote-flow"><QuoteHero current={current}/><section className="card flow-card">{body}</section><QuoteActions current={current}/></main>;
}
