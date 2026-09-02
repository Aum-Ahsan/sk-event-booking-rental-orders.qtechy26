import React from "react";
import pageData from "../../../../data/pages/about.json";

export function AboutExpectSection() {
  const { hero, story, expect, process, prepared, cta, standards } = pageData;
  return (
    <section className="about-expect">
              <header>
                <span>{expect.eyebrow}</span>
                <h2>{expect.title}</h2>
                <p>{expect.description}</p>
              </header>
              <div>
                {standards.map((x, i) => (
                  <article key={x[0]}>
                    <i>{["✣", "▢", "▣", "◇", "♡"][i]}</i>
                    <h3>{x[0]}</h3>
                    <p>{x[1]}</p>
                  </article>
                ))}
              </div>
            </section>
  );
}
