import React from "react";
import pageData from "../../../../data/pages/blog-resource-centre.json";

export function BlogHeroSection() {
  return (
    <section className="blog-hero">
              <div>
                <span>{pageData.hero.eyebrow}</span>
                <h1>{pageData.hero.title}</h1>
                <p>{pageData.hero.description}</p>
                <label>
                  <i aria-hidden="true">⌕</i>
                  <input
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      if (e.target.value) setActiveCategory("All topics");
                    }}
                    placeholder={pageData.hero.searchPlaceholder}
                  />
                  <button type="button">{pageData.hero.searchButton}</button>
                </label>
              </div>
              <img
                src="/images/tableware-product.png"
                alt={pageData.extracted.attr_30}
              />
            </section>
  );
}
