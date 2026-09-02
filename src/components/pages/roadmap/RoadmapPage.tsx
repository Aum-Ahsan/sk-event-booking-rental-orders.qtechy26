import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/roadmap.json";

export function RoadmapPage() {
  return (
    <div className="public-site roadmap-page">
      <PublicHeader />
      <main>
        <section className="roadmap-hero">
          <div>
            <span>{pageData.hero.eyebrow}</span>
            <h1>{pageData.hero.title}</h1>
            <p>{pageData.hero.description}</p>
            <a href={pageData.hero.linkHref}>{pageData.hero.linkText}</a>
          </div>
          <img
            src={pageData.hero.image}
            alt={pageData.hero.imageAlt}
          />
        </section>
        
        <section className="roadmap-flow">
          <header>
            <span>{pageData.flow.eyebrow}</span>
            <h2>{pageData.flow.title}</h2>
          </header>
          <div>
            {pageData.flow.phases.map((x) => (
              <article key={x[0]}>
                <i>{x[0]}</i>
                <div>
                  <h3>{x[1]}</h3>
                  <p>{x[2]}</p>
                </div>
                <b>✓</b>
              </article>
            ))}
          </div>
        </section>
        
        <section className="roadmap-checkpoints">
          <div>
            <span>{pageData.checkpoints.eyebrow}</span>
            <h2>{pageData.checkpoints.title}</h2>
            <p>{pageData.checkpoints.description}</p>
          </div>
          <div>
            {pageData.checkpoints.items.map((x) => (
              <article key={x[0]}>
                <b>{x[0]}</b>
                <small>{x[1]}</small>
              </article>
            ))}
          </div>
        </section>
        
        <section className="roadmap-cta">
          <h2>{pageData.cta.title}</h2>
          <p>{pageData.cta.description}</p>
          {pageData.cta.links.map(l => <a key={l.text} href={l.href}>{l.text}</a>)}
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
