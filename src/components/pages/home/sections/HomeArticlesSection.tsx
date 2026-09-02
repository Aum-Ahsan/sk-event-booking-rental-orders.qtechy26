import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeArticlesSection() {
  return (
    <section className="home-section articles">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{pageData.articlesGrid.eyebrow}</div>
          <h2>{pageData.articlesGrid.title}</h2>
        </div>
        <a href="/blog">{pageData.articlesGrid.ctaText}</a>
      </div>
      <div>
        {pageData.articles.map((x) => (
          <article key={x.title}>
            <img src={x.image} alt={x.title} />
            <small>{pageData.extracted.text_6}</small>
            <h3>{x.title}</h3>
            <a href="/blog">{pageData.extracted.text_7}</a>
          </article>
        ))}
      </div>
    </section>
  );
}