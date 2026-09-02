import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/about.json";

export function AboutPage() {
  const { hero, story, expect, process, prepared, cta, standards } = pageData;
  return (
    <div className="public-site about-editorial">
      <PublicHeader active="About" />
      <main>
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
        <section className="about-cta">
          <h2>{cta.title}</h2>
          <p>{cta.description}</p>
          <div>
            {cta.links.map(l => (
              <a key={l.text} href={l.href}>{l.text}</a>
            ))}
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
