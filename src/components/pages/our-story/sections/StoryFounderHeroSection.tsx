import React from "react";
import pageData from "../../../../data/pages/our-story.json";

export function StoryFounderHeroSection() {
  return (
    <section className="story-founder-hero">
              <div>
                <span>{pageData.hero.eyebrow}</span>
                <h1 dangerouslySetInnerHTML={{ __html: pageData.hero.title }} />
                <p>{pageData.hero.description}</p>
                <a href={pageData.hero.linkHref}>{pageData.hero.linkText}</a>
              </div>
              <img
                src={pageData.hero.image}
                alt={pageData.hero.imageAlt}
              />
            </section>
  );
}
