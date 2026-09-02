import React from "react";
import data from "../../../../data/pages/products.json";

export function HireProductsHeroSection() {
  const { hero } = data;

  return (
    <section className="catalogue-hero">
      <img src={hero.image} alt={hero.imageAlt} />
      <div>
        <div className="product-crumb">
          <a href="/">{hero.crumbHome}</a>
          <span>›</span>{hero.crumbCurrent}
        </div>
        <div className="eyebrow">{hero.eyebrow}</div>
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
      </div>
    </section>
  );
}
