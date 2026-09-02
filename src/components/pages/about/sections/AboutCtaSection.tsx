import React from "react";
import pageData from "../../../../data/pages/about.json";

export function AboutCtaSection() {
  const { hero, story, expect, process, prepared, cta, standards } = pageData;
  return (
    <section className="about-cta">
              <h2>{cta.title}</h2>
              <p>{cta.description}</p>
              <div>
                {cta.links.map(l => (
                  <a key={l.text} href={l.href}>{l.text}</a>
                ))}
              </div>
            </section>
  );
}
