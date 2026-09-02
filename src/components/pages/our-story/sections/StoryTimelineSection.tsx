import React from "react";
import pageData from "../../../../data/pages/our-story.json";

export function StoryTimelineSection() {
  return (
    <section className="story-timeline">
              <header>
                <span>{pageData.timeline.eyebrow}</span>
                <h2>{pageData.timeline.title}</h2>
              </header>
              <div>
                {pageData.timeline.items.map((x) => (
                  <article key={x[0]}>
                    <i>{x[0]}</i>
                    <h3>{x[1]}</h3>
                    <p>{x[2]}</p>
                  </article>
                ))}
              </div>
            </section>
  );
}
