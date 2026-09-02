import React from "react";
import pageData from "../../../../data/pages/about.json";

export function AboutProcessSection() {
  const { hero, story, expect, process, prepared, cta, standards } = pageData;
  return (
    <section className="about-process editorial-section">
              <span>{process.eyebrow}</span>
              <h2>{process.title}</h2>
              <p>{process.description}</p>
              <div>
                {process.steps.map((x) => (
                  <article key={x[0]}>
                    <i>{x[0]}</i>
                    <b>{x[1]}</b>
                    <small>{x[2]}</small>
                  </article>
                ))}
              </div>
            </section>
  );
}
