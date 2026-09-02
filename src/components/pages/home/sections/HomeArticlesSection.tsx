import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeArticlesSection() {
  return (
    <section className="home-section articles">
      <div className="home-heading">
        <div>
          <div className="eyebrow">Planning tips & inspiration</div>
          <h2>Helpful ideas for a smoother event</h2>
        </div>
        <a href="/blog">Visit the planning guide →</a>
      </div>
      <div>
        {pageData.articles.map((x) => (
          <article key={x[0]}>
            <img src={x[1]} alt={x[0]} />
            <small>PLANNING GUIDE</small>
            <h3>{x[0]}</h3>
            <a href="/blog">Read guide →</a>
          </article>
        ))}
      </div>
    </section>
  );
}