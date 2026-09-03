import React from "react";
import { blogGuides } from "../../../../../app/blogData";
import pageData from "../../../../data/pages/blog-resource-centre.json";

interface KeepPlanningSectionProps {
  activeCategory: string;
}

export function KeepPlanningSection({ activeCategory }: KeepPlanningSectionProps) {
  return (
    <section className="keep-planning editorial-section">
              <span>{pageData.extracted.text_25}</span>
              <h2>{pageData.extracted.text_26}</h2>
              <div>
                {blogGuides
                  .filter(
                    (guide) =>
                      guide.category === activeCategory ||
                      activeCategory === "All topics",
                  )
                  .slice(0, 3)
                  .map((guide) => (
                    <article key={guide.slug}>
                      <img src={guide.image} alt={guide.title} />
                      <h3>{guide.title}</h3>
                      <a href={`/blog-${guide.slug}`}>{pageData.extracted.text_27}</a>
                    </article>
                  ))}
              </div>
            </section>
  );
}
