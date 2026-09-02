import React from "react";
import categories from "../../../../data/commerce/categories.json";

export function HomeCategoryRailSection() {
  const startCards = categories.slice(0, 8);
  return (
    <section className="home-section warm">
      <div className="home-heading">
        <div>
          <div className="eyebrow">Browse the range</div>
          <h2>Start with what you need</h2>
          <p>Explore our most popular hire categories for events of every size.</p>
        </div>
        <a href="/products">View all products →</a>
      </div>
      <div className="category-photo-grid">
        {startCards.map((x) => (
          <a href="/products" key={x[0]}>
            <img src={x[2]} alt={x[0]} />
            <span>
              {x[0]} <b>→</b>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}