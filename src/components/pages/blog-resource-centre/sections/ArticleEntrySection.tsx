import React from "react";
import pageData from "../../../../data/pages/blog-resource-centre.json";

export function ArticleEntrySection() {
  return (
    <section className="article-entry editorial-section">
              <span>{pageData.extracted.text_12}</span>
              <h2>{pageData.extracted.text_13}</h2>
              <p>
                {pageData.extracted.text_14}</p>
              <a className="public-cta" href="/blog-how-many-tables-and-chairs">
                {pageData.extracted.text_15}</a>
            </section>
  );
}
