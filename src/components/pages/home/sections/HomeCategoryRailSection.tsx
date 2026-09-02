import React from "react";
import categories from "../../../../data/commerce/categories.json";
import pageData from "../../../../data/pages/home.json";

export function HomeCategoryRailSection() {
  const startCards = categories.slice(0, 8);
  return (
    <section className="home-section warm">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{pageData.categoryRail.eyebrow}</div>
          <h2>{pageData.categoryRail.title}</h2>
          <p>{pageData.categoryRail.description}</p>
        </div>
        <a href="/products">{pageData.categoryRail.ctaText}</a>
      </div>
      <div className="category-photo-grid">
        {startCards.map((x) => (
          <a href="/products" key={x.name}>
            <img src={x.image} alt={x.name} />
            <span>
              {x.name} <b>→</b>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}