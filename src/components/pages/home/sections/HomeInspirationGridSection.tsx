import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeInspirationGridSection() {
  return (
    <section className="home-section warm">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{pageData.inspiration.eyebrow}</div>
          <h2>{pageData.inspiration.title}</h2>
          <p>{pageData.inspiration.description}</p>
        </div>
        <a href="/gallery">{pageData.inspiration.ctaText}</a>
      </div>
      <div className="inspiration-grid">
        {pageData.inspiration.items.map((x, i) => (
          <a className={i === 0 ? "inspiration-main" : ""} href="/gallery" key={x.label}>
            <img src={x.image} alt={x.alt} />
            <span>{x.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}