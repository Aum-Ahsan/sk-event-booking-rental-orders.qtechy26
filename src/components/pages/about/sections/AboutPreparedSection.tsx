import React from "react";
import pageData from "../../../../data/pages/about.json";

export function AboutPreparedSection() {
  const { hero, story, expect, process, prepared, cta, standards } = pageData;
  return (
    <section className="prepared-band">
              <div>
                <span>{prepared.eyebrow}</span>
                <h2>{prepared.title}</h2>
                <img src={prepared.image} alt={prepared.imageAlt} />
              </div>
              <div className="prepared-list">
                {prepared.items.map(x => (
                  <article key={x[0]}>
                    <b>{x[0]}</b>
                    <p>{x[1]}</p>
                  </article>
                ))}
              </div>
            </section>
  );
}
