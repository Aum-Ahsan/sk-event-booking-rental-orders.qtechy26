import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeOccasionGridSection() {
  return (
    <section className="home-section">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{pageData.occasionsGrid.eyebrow}</div>
          <h2>{pageData.occasionsGrid.title}</h2>
          <p>{pageData.occasionsGrid.description}</p>
        </div>
        <a href="/collections">{pageData.occasionsGrid.ctaText}</a>
      </div>
      <div className="occasion-grid">
        {pageData.occasions.map((x, i) => (
          <a
            className={i === 0 ? "occasion-main" : ""}
            href={x.url}
            key={x.name}
          >
            <img src={x.image} alt={x.name} />
            <span>{x.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}