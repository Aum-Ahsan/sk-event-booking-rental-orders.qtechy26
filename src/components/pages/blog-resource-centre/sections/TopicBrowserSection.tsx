import React from "react";
import { blogCategories } from "../../../../../app/blogData";
import pageData from "../../../../data/pages/blog-resource-centre.json";

interface TopicBrowserSectionProps {
  activeCategory: string;
  setActiveCategory: (val: string) => void;
  setQuery: (val: string) => void;
}

export function TopicBrowserSection({
  activeCategory,
  setActiveCategory,
  setQuery,
}: TopicBrowserSectionProps) {
  return (
    <section className="topic-browser editorial-section">
              <span>{pageData.extracted.text_5}</span>
              <h2>{pageData.extracted.text_6}</h2>
              <p>{pageData.extracted.text_7}</p>
              <div>
                {blogCategories.map((category, i) => (
                  <button
                    type="button"
                    className={activeCategory === category ? "active" : ""}
                    onClick={() => {
                      setActiveCategory(category);
                      setQuery("");
                      setTimeout(
                        () =>
                          document
                            .getElementById("latest-guides")
                            ?.scrollIntoView({ behavior: "smooth" }),
                        20,
                      );
                    }}
                    key={category}
                  >
                    <i>{["▣", "◫", "⌂", "▤", "✦", "☂", "⌖", "♡"][i]}</i>
                    <span>
                      <b>{category}</b>
                      <small>{pageData.extracted.text_8}</small>
                    </span>
                    <em>→</em>
                  </button>
                ))}
              </div>
            </section>
  );
}
