import React from "react";
import pageData from "../../../../data/pages/our-story.json";

export function StoryPrinciplesSection() {
  return (
    <section className="story-principles">
              <header>
                <span>{pageData.principles.eyebrow}</span>
                <h2>{pageData.principles.title}</h2>
                <p>{pageData.principles.description}</p>
              </header>
              <div>
                {pageData.principles.items.map((x, i) => (
                  <article key={x[0]}>
                    <i>{String(i + 1).padStart(2, "0")}</i>
                    <h3>{x[0]}</h3>
                    <p>{x[1]}</p>
                  </article>
                ))}
              </div>
            </section>
  );
}
