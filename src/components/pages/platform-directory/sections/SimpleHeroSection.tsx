import React from "react";
import pageData from "../../../../data/pages/platform-directory.json";

export function SimpleHeroSection() {
  return (
    <section className="simple-hero">
              <div className="eyebrow">{pageData.hero.eyebrow}</div>
              <h1>{pageData.hero.title}</h1>
              <p>{pageData.hero.description}</p>
            </section>
  );
}
