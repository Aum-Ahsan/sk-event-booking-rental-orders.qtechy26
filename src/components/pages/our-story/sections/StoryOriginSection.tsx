import React from "react";
import pageData from "../../../../data/pages/our-story.json";

export function StoryOriginSection() {
  return (
    <section className="story-origin editorial-section">
              <img
                src={pageData.origin.image}
                alt={pageData.origin.imageAlt}
              />
              <div>
                <span>{pageData.origin.eyebrow}</span>
                <h2>{pageData.origin.title}</h2>
                {pageData.origin.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                <blockquote>{pageData.origin.quote}</blockquote>
              </div>
            </section>
  );
}
