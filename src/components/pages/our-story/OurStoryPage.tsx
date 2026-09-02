import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/our-story.json";

export function OurStoryPage() {
  return (
    <div className="public-site our-story-page">
      <PublicHeader active="About" />
      <main>
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
        <section id="what-sk-means" className="story-meaning editorial-section">
          <div>
            <span>{pageData.meaning.eyebrow}</span>
            <h2>{pageData.meaning.title}</h2>
            {pageData.meaning.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <aside>
            <b>S</b>
            <span>
              <strong>{pageData.meaning.aside.sName}</strong>
              <small>{pageData.meaning.aside.sNote}</small>
            </span>
            <i>＋</i>
            <b>K</b>
            <span>
              <strong>{pageData.meaning.aside.kName}</strong>
              <small>{pageData.meaning.aside.kNote}</small>
            </span>
          </aside>
        </section>
        <section className="story-principles">
          <header>
            <span>{pageData.principles.eyebrow}</span>
            <h2>{pageData.principles.title}</h2>
            <p>{pageData.principles.description}</p>
          </header>
          <div>
            {pageData.principles.items.map((x, i) => (
              <article key={x[0]}>
                <i>{String(i + 1).padStart(2, "0")}</i>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="story-origin editorial-section">
          <img
            src={pageData.origin.image}
            alt={pageData.origin.imageAlt}
          />
          <div>
            <span>{pageData.origin.eyebrow}</span>
            <h2>{pageData.origin.title}</h2>
            {pageData.origin.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <blockquote>{pageData.origin.quote}</blockquote>
          </div>
        </section>
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
        <section className="story-final">
          <div>
            <span>{pageData.final.eyebrow}</span>
            <h2>{pageData.final.title}</h2>
            <p>{pageData.final.description}</p>
            {pageData.final.links.map(l => <a key={l.text} href={l.href}>{l.text}</a>)}
          </div>
          <img
            src={pageData.final.image}
            alt={pageData.final.imageAlt}
          />
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
