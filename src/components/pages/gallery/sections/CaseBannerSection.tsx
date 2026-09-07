import React from "react";
import pageData from "../../../../data/pages/gallery-story.json";

export function CaseBannerSection() {
  return (
    <section className="case-banner event-result-hero">
              <img
                src="/images/hero-event.png"
                alt={pageData.story.title}
              />
              <div>
                <a href="/gallery">← Gallery</a>
                <span>EVENT STORY</span>
                <h1>{pageData.story.title}</h1>
                <p>{pageData.story.description}</p>
                <small>{pageData.story.meta}</small>
              </div>
            </section>
  );
}
