import React from "react";
import pageData from "../../../../data/pages/our-story.json";

export function StoryFinalSection() {
  return (
    <section className="story-final">
              <div>
                <span>{pageData.final.eyebrow}</span>
                <h2>{pageData.final.title}</h2>
                <p>{pageData.final.description}</p>
                {pageData.final.links.map(l => <a key={l.text} href={l.href}>{l.text}</a>)}
              </div>
              <img
                src={pageData.final.image}
                alt={pageData.final.imageAlt}
              />
            </section>
  );
}
