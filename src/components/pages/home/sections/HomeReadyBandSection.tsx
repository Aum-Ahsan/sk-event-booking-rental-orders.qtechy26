import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeReadyBandSection() {
  return (
    <section className="ready-band">
      <img src="/images/decor-product.png" alt={pageData.extracted.attr_15} />
      <div className="ready-copy">
        <div className="eyebrow">{pageData.readyBand.eyebrow}</div>
        <h2>{pageData.readyBand.title}</h2>
        <p>{pageData.readyBand.description}</p>
        <div>
          {pageData.readyBand.links.map(link => (
            <a key={link.href} href={link.href}>{link.text}</a>
          ))}
        </div>
      </div>
      <img src="/images/lighting-product.png" alt={pageData.extracted.attr_16} />
    </section>
  );
}