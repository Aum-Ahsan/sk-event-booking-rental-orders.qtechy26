import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/public-quote.json";
import { Field } from "../../landing/shared/FormControls";

export function PublicQuotePage({ done = false }: { done?: boolean }) {
  if (done)
    return (
      <div className="public-site">
        <PublicHeader />
        <main>
          <section className="public-result">
            <i>✓</i>
            <div className="eyebrow">Quotation request QR-260731-184</div>
            <h1>Your request is with our event team.</h1>
            <p>
              We will check date-range stock, logistics and pricing before
              sending a versioned quotation. Nothing has been reserved and no
              payment has been taken.
            </p>
            <div>
              <span>
                <b>Response target</b>Within 1 business day
              </span>
              <span>
                <b>Event date</b>14 November 2026
              </span>
              <span>
                <b>Contact</b>Email and SMS
              </span>
            </div>
            <a className="public-cta" href="/">
              Return to homepage
            </a>
          </section>
        </main>
        <PublicFooter />
      </div>
    );
  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <section className="simple-hero compact-hero">
          <div className="eyebrow">Public quotation request</div>
          <h1>Tell us what the event needs.</h1>
          <p>
            A clear, no-payment request covering products, timing, venue and
            contact details.
          </p>
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
            <h2>Event overview</h2>
            <div className="form-grid">
              <Field label="Event type" value="Wedding reception" />
              <Field label="Guest count" value="80" />
              <Field label="Event date" value="14 November 2026" />
              <Field
                label="Venue suburb / postcode"
                value="Richmond VIC 3121"
              />
              <Field
                wide
                label="Products or package"
                value="Bentwood seating, timber dining tables, tableware and festoon lighting"
              />
              <Field
                wide
                area
                label="Event notes"
                value="Garden ceremony followed by an indoor reception. Rear loading access is available."
              />
            </div>
            <div className="quote-notice">
              <b>Quotation only</b>
              <p>
                Submitting does not reserve stock or create a booking. We
                confirm availability, GST and the final price first.
              </p>
            </div>
            <div className="quote-buttons">
              <a className="outline-cta" href="/basket">
                Back to basket
              </a>
              <a className="public-cta" href="/quote-submitted">
                Review & submit request
              </a>
            </div>
          </form>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}