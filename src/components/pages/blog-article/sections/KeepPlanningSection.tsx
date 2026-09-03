import React from "react";
import type { BlogGuide } from "../../../../../app/blogData";
import pageData from "../../../../data/pages/blog-article.json";

interface KeepPlanningSectionProps {
  guide: BlogGuide;
  related: BlogGuide[];
}

export function KeepPlanningSection({ guide, related }: KeepPlanningSectionProps) {
  return (
    <section className="keep-planning editorial-section article-related">
              <span>{pageData.related.kickerPrefix} {guide.category.toUpperCase()}</span>
              <h2>{pageData.related.title}</h2>
              <div>
                {related.map((item) => (
                  <article key={item.slug}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <a href={"/blog-" + item.slug}>{pageData.related.linkText}</a>
                  </article>
                ))}
              </div>
            </section>
  );
}
