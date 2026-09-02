import React from "react";
import data from "../../../../data/pages/products.json";

export function HireProductsCtaSection() {
  const { cta } = data;

  return (
    <section className="catalogue-cta">
      <div>
        <small>{cta.small}</small>
        <h2>{cta.title}</h2>
        <p>{cta.description}</p>
      </div>
      <div style={{ flexShrink: 0, whiteSpace: "nowrap" }}>
        <a href={cta.button1.href}>{cta.button1.text}</a>
        <a href={cta.button2.href}>{cta.button2.text}</a>
      </div>
    </section>
  );
}
