import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomePopularGridSection() {
  return (
    <section className="home-section cool">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{pageData.popularGrid.eyebrow}</div>
          <h2>{pageData.popularGrid.title}</h2>
          <p>{pageData.popularGrid.description}</p>
        </div>
        <a href="/products">{pageData.popularGrid.ctaText}</a>
      </div>
      <div className="popular-grid">
        {pageData.popular.map((x) => (
          <article key={x.name}>
            <a href={x.url}>
              <img src={x.image} alt={x.name} />
            </a>
            <div>
              <small>{x.category}</small>
              <h3>{x.name}</h3>
              <span>
                ★★★★★ <em>{pageData.extracted.text_11}</em>
              </span>
              <b>{x.price}</b>
              <a href={x.url}>＋</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}