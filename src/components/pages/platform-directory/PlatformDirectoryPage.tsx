import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/platform-directory.json";

export function PlatformDirectoryPage() {
  return (
    <div className="public-site platform-directory">
      <PublicHeader />
      <main>
        <section className="simple-hero">
          <div className="eyebrow">{pageData.hero.eyebrow}</div>
          <h1>{pageData.hero.title}</h1>
          <p>{pageData.hero.description}</p>
        </section>
        <section className="platform-card-grid">
          {pageData.platforms.map((x, i) => (
            <article id={x.id} key={x.title}>
              <i>{["◉", "◇", "▦"][i]}</i>
              <small>APPLICATION {i + 1}</small>
              <h2>{x.title}</h2>
              <p>{x.description}</p>
              <a href={x.href}>{x.linkText} →</a>
            </article>
          ))}
        </section>
        <section className="platform-separation">
          <h2>{pageData.separation.title}</h2>
          <p>{pageData.separation.description}</p>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
