import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/public-quote.json";
import { Field } from "../../landing/shared/FormControls";
import { PublicResultSection } from "./sections/PublicResultSection";

export function PublicQuotePage({ done = false }: { done?: boolean }) {
  if (done)
    return (
      <div className="public-site">
        <PublicHeader />
        <main>
          <PublicResultSection />
        </main>
        <PublicFooter />
      </div>
    );
  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <section className="simple-hero compact-hero">
          <div className="eyebrow">{pageData.extracted.text_7}</div>
          <h1>{pageData.extracted.text_8}</h1>
          <p>
            {pageData.extracted.text_9}</p>
        </section>
        <section className="quote-entry">
          <div className="quote-stepper">
            {pageData.stepper.map(
              (x, i) => (
                <span className={i === 0 ? "active" : ""} key={x}>
                  <b>{i + 1}</b>
                  {x}
                </span>
              ),
            )}
          </div>
          <form>
            <h2>{pageData.extracted.text_10}</h2>
            <div className="form-grid">
              <Field label={pageData.extracted.attr_15} value="Wedding reception" />
              <Field label={pageData.extracted.attr_16} value="80" />
              <Field label={pageData.extracted.attr_17} value="14 November 2026" />
              <Field
                label={pageData.extracted.attr_18}
                value="Richmond VIC 3121"
              />
              <Field
                wide
                label={pageData.extracted.attr_19}
                value="Bentwood seating, timber dining tables, tableware and festoon lighting"
              />
              <Field
                wide
                area
                label={pageData.extracted.attr_20}
                value="Garden ceremony followed by an indoor reception. Rear loading access is available."
              />
            </div>
            <div className="quote-notice">
              <b>{pageData.extracted.text_11}</b>
              <p>
                {pageData.extracted.text_12}</p>
            </div>
            <div className="quote-buttons">
              <a className="outline-cta" href="/basket">
                {pageData.extracted.text_13}</a>
              <a className="public-cta" href="/quote-submitted">
                {pageData.extracted.text_14}</a>
            </div>
          </form>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}