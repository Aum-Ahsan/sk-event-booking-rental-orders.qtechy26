import React from "react";
import type { BlogGuide } from "../../../../../app/blogData";
import pageData from "../../../../data/pages/blog-resource-centre.json";

interface LatestGuidesSectionProps {
  activeCategory: string;
  setActiveCategory: (val: string) => void;
  query: string;
  setQuery: (val: string) => void;
  filtered: BlogGuide[];
}

export function LatestGuidesSection({
  activeCategory,
  setActiveCategory,
  query,
  setQuery,
  filtered,
}: LatestGuidesSectionProps) {
  return (
    <section id="latest-guides" className="latest-guides">
              <div className="editorial-section">
                <header>
                  <div>
                    <span>{activeCategory.toUpperCase()}</span>
                    <h2>
                      {activeCategory === "All topics" ? pageData.guidesList.allTopicsText : `${activeCategory}${pageData.guidesList.topicSuffix}`}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setActiveCategory("All topics");
                    }}
                  >
                    {pageData.guidesList.viewAllBtn}
                  </button>
                </header>
                <div>
                  {filtered.map((guide) => (
                    <article key={guide.slug}>
                      <img src={guide.image} alt={guide.title} />
                      <div>
                        <small>{guide.category}</small>
                        <h3>{guide.title}</h3>
                        <p>{guide.summary}</p>
                        <footer>
                          <span>{guide.read}</span>
                          <a href={`/blog-${guide.slug}`}>{pageData.extracted.text_9}</a>
                        </footer>
                      </div>
                    </article>
                  ))}
                </div>
                {!filtered.length && (
                  <div className="blog-empty">
                    <h3>{pageData.extracted.text_10}{query}”.</h3>
                    <button type="button" onClick={() => setQuery("")}>
                      {pageData.extracted.text_11}</button>
                  </div>
                )}
              </div>
            </section>
  );
}
