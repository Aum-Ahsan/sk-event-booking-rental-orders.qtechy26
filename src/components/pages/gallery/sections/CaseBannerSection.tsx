import React from "react";
import pageData from "../../../../data/pages/gallery-story.json";

export function CaseBannerSection() {
  return (
    <section className="case-banner event-result-hero">
              <img
                src="/images/hero-event.png"
                alt={pageData.extracted.attr_5}
              />
              <div>
                <a href="/gallery">{pageData.extracted.text_3}</a>
                <span>{pageData.extracted.text_4}</span>
                <h1>{pageData.story.title}</h1>
                <p>{pageData.story.description}</p>
                <small>{pageData.story.meta}</small>
              </div>
            </section>
  );
}
