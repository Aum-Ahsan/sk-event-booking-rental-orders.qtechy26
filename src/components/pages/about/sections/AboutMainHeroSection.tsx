import React from "react";
import pageData from "../../../../data/pages/about.json";

export function AboutMainHeroSection() {
  const { hero, story, expect, process, prepared, cta, standards } = pageData;
  return (
    <section className="about-main-hero">
              <div>
                <span>{hero.eyebrow}</span>
                <h1>{hero.title}</h1>
                <p>{hero.description}</p>
                <div>
                  {hero.links.map(l => <a key={l.text} href={l.href}>{l.text}</a>)}
                </div>
                <small>{hero.small}</small>
              </div>
              <figure>
                <img src={hero.image} alt={hero.imageAlt} />
                <figcaption>
                  <b>{hero.figcaptionTitle}</b>
                  <span>{hero.figcaptionDesc}</span>
                </figcaption>
              </figure>
            </section>
  );
}
