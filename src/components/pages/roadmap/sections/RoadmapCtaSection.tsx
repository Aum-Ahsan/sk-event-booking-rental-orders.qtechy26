import React from "react";
import pageData from "../../../../data/pages/roadmap.json";

export function RoadmapCtaSection() {
  return (
    <section className="roadmap-cta">
              <h2>{pageData.cta.title}</h2>
              <p>{pageData.cta.description}</p>
              {pageData.cta.links.map(l => <a key={l.text} href={l.href}>{l.text}</a>)}
            </section>
  );
}
