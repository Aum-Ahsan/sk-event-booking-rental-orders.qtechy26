import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeHeroSection() {
  return (
    <section className="home-hero">
      <img
        src={pageData.hero.image}
        alt={pageData.hero.imageAlt}
      />
      <div className="home-hero-copy">
        <div className="eyebrow">{pageData.hero.eyebrow}</div>
        <h1>{pageData.hero.title}</h1>
        <p>{pageData.hero.description}</p>
        <div className="hero-actions">
          <a className="public-cta" href="/request-quote">
            {pageData.extracted.text_9}</a>
          <a className="hero-light" href="/products">
            {pageData.extracted.text_10}</a>
        </div>
      </div>
    </section>
  );
}