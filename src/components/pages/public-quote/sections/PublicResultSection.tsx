import React from "react";
import pageData from "../../../../data/pages/public-quote.json";

export function PublicResultSection() {
  return (
    <section className="public-result">
                <i>✓</i>
                <div className="eyebrow">{pageData.extracted.text_1}</div>
                <h1>{pageData.extracted.text_2}</h1>
                <p>{pageData.hero.description}</p>
                <div>
                  <span>
                    <b>{pageData.labels.target}</b>{pageData.extracted.text_3}</span>
                  <span>
                    <b>{pageData.labels.date}</b>{pageData.extracted.text_4}</span>
                  <span>
                    <b>{pageData.labels.contact}</b>{pageData.extracted.text_5}</span>
                </div>
                <a className="public-cta" href="/">
                  {pageData.extracted.text_6}</a>
              </section>
  );
}
