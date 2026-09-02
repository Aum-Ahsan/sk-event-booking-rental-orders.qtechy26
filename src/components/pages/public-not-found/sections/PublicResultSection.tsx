import React from "react";
import pageData from "../../../../data/pages/public-not-found.json";

export function PublicResultSection() {
  return (
    <section className="public-result">
              <i>{pageData.hero.badge}</i>
              <div className="eyebrow">{pageData.extracted.text_1}</div>
              <h1>{pageData.extracted.text_2}</h1>
              <p>{pageData.hero.description}</p>
              <div className="hero-actions">
                <a className="public-cta" href="/">{pageData.actions.home}</a>
                <a className="outline-cta" href="/contact">{pageData.actions.contact}</a>
              </div>
            </section>
  );
}
