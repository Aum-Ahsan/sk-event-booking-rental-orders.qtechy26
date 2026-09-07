import React from "react";
import pageData from "../../../../data/pages/about.json";

export function AboutFinalCtaSection() {
  const { finalCta } = pageData;
  return (
    <section className="about-final">
      <img src={finalCta.image} alt={finalCta.imageAlt} />
      <div>
        <span>{finalCta.eyebrow}</span>
        <h2>{finalCta.title}</h2>
        <p>{finalCta.description}</p>
        <div>
          {finalCta.links.map((l) => (
            <a key={l.text} href={l.href}>{l.text}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
