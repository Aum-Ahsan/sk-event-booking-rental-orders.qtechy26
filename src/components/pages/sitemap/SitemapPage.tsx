import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/sitemap.json";

export function SitemapPage() {
  return (
    <div className="public-site">
      <PublicHeader />
      <main className="public-main">
        <section className="simple-hero">
          <div className="eyebrow">{pageData.hero.eyebrow}</div>
          <h1>{pageData.hero.title}</h1>
          <p>{pageData.hero.description}</p>
        </section>
        <section className="sitemap-grid">
          {pageData.groups.map((g) => (
            <article key={g.title}>
              <h2>{g.title}</h2>
              {g.links.map((x) => (
                <a href={x.href} key={x.text}>
                  {x.text} <span>→</span>
                </a>
              ))}
            </article>
          ))}
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
