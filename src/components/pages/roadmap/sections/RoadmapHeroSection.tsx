import React from "react";
import pageData from "../../../../data/pages/roadmap.json";

export function RoadmapHeroSection() {
  return (
    <section className="roadmap-hero">
              <div>
                <span>{pageData.hero.eyebrow}</span>
                <h1>{pageData.hero.title}</h1>
                <p>{pageData.hero.description}</p>
                <a href={pageData.hero.linkHref}>{pageData.hero.linkText}</a>
              </div>
              <img
                src={pageData.hero.image}
                alt={pageData.hero.imageAlt}
              />
            </section>
  );
}
