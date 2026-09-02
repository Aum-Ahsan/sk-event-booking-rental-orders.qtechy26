import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomePopularGridSection() {
  return (
    <section className="home-section cool">
      <div className="home-heading">
        <div>
          <div className="eyebrow">Customer favourites</div>
          <h2>Popular with Melbourne hosts</h2>
          <p>Practical favourites for celebrations of every size.</p>
        </div>
        <a href="/products">Browse all products →</a>
      </div>
      <div className="popular-grid">
        {pageData.popular.map((x) => (
          <article key={x[0]}>
            <a href={x[4]}>
              <img src={x[3]} alt={x[0]} />
            </a>
            <div>
              <small>{x[1]}</small>
              <h3>{x[0]}</h3>
              <span>
                ★★★★★ <em>4.9</em>
              </span>
              <b>{x[2]}</b>
              <a href={x[4]}>＋</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}