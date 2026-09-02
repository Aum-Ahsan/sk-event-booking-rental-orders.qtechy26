import React from "react";
import pageData from "../../../../data/pages/gallery-story.json";

export function SimpleCtaSection() {
  return (
    <section className="simple-cta case-cta">
              <div>
                <h2>{pageData.story.cta.title}</h2>
                <p>{pageData.story.cta.description}</p>
                <div>
                  <a className="primary" href="/products">{pageData.story.cta.btnPrimary}</a>
                  <a href="/contact">{pageData.story.cta.btnSecondary}</a>
                </div>
              </div>
            </section>
  );
}
