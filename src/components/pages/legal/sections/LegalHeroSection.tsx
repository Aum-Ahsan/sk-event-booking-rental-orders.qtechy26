import React from "react";
import pageData from "../../../../data/pages/legal.json";

export function LegalHeroSection() {
  return (
    <section className="legal-hero">
              <span>{pageData.hero.eyebrow}</span>
              <h1>
                {pageData.hero.title}
                <br />
                {pageData.hero.titleBreak}
              </h1>
              <p>{pageData.hero.description}</p>
              <small>
                {pageData.extracted.text_1}</small>
            </section>
  );
}
