import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeOccasionGridSection() {
  return (
    <section className="home-section">
      <div className="home-heading">
        <div>
          <div className="eyebrow">Plan by occasion</div>
          <h2>Planning for a special event?</h2>
          <p>Choose your event and explore practical packages, products and services.</p>
        </div>
        <a href="/collections">Explore all event types →</a>
      </div>
      <div className="occasion-grid">
        {pageData.occasions.map((x, i) => (
          <a
            className={i === 0 ? "occasion-main" : ""}
            href={x[2]}
            key={x[0]}
          >
            <img src={x[1]} alt={x[0]} />
            <span>{x[0]}</span>
          </a>
        ))}
      </div>
    </section>
  );
}