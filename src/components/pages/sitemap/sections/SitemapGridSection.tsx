import React from "react";
import pageData from "../../../../data/pages/sitemap.json";

export function SitemapGridSection() {
  return (
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
  );
}
