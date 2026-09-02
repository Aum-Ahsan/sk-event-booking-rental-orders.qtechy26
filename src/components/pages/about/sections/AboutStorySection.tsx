import React from "react";
import pageData from "../../../../data/pages/about.json";

export function AboutStorySection() {
  const { hero, story, expect, process, prepared, cta, standards } = pageData;
  return (
    <section className="about-story editorial-section">
              <div className="about-collage">
                {story.images.map((img, i) => (
                  <img key={i} src={img.src} alt={img.alt} />
                ))}
                <em dangerouslySetInnerHTML={{ __html: story.imageText }} />
              </div>
              <div>
                <span>{story.eyebrow}</span>
                <h2>{story.title}</h2>
                {story.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                <blockquote>
                  <b>{story.quote.text}</b>
                  <small>{story.quote.author}</small>
                </blockquote>
              </div>
            </section>
  );
}
