import React from "react";
import pageData from "../../../../data/pages/help-centre.json";

export function HelpHeroSection() {
  return (
    <section className="help-hero">
              <div>
                <span>{pageData.hero.eyebrow}</span>
                <h1>{pageData.hero.title}</h1>
                <p>{pageData.hero.description}</p>
                <div className="help-hero-actions">
                  {pageData.hero.links.map(l => <a key={l.text} href={l.href}>{l.text}</a>)}
                </div>
                <small>{pageData.hero.small}</small>
              </div>
              <img
                className="help-hero-image"
                src={pageData.hero.image}
                alt={pageData.hero.imageAlt}
              />
            </section>
  );
}
