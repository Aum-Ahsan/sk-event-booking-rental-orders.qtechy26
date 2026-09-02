import React from "react";
import pageData from "../../../../data/pages/booking-request-confirmation.json";

export function ConfirmationHeroSection() {
  return (
    <section className="confirmation-hero">
              <img
                src="/images/warehouse-team.png"
                alt={pageData.extracted.attr_7}
              />
              <div>
                <i>✓</i>
                <span>{pageData.hero.kicker}</span>
                <h1>{pageData.extracted.text_1}</h1>
                <p>
                  {pageData.extracted.text_2}{pageData.reference} {pageData.extracted.text_3}</p>
                <dl>
                  <div>
                    <dt>{pageData.extracted.text_4}</dt>
                    <dd>{pageData.event}</dd>
                  </div>
                  <div>
                    <dt>{pageData.extracted.text_5}</dt>
                    <dd>{pageData.delivery}</dd>
                  </div>
                  <div>
                    <dt>{pageData.extracted.text_6}</dt>
                    <dd>{pageData.collection}</dd>
                  </div>
                </dl>
                <div className="confirmation-actions">
                  <a className="primary" href="/booking-confirmation">{pageData.actions.primary}</a>
                  <a href="/contact">{pageData.actions.contact}</a>
                  <a href="/products">{pageData.actions.return}</a>
                </div>
              </div>
            </section>
  );
}
