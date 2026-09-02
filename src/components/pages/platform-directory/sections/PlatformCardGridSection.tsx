import React from "react";
import pageData from "../../../../data/pages/platform-directory.json";

export function PlatformCardGridSection() {
  return (
    <section className="platform-card-grid">
              {pageData.platforms.map((x, i) => (
                <article id={x.id} key={x.title}>
                  <i>{["◉", "◇", "▦"][i]}</i>
                  <small>{pageData.extracted.text_1}{i + 1}</small>
                  <h2>{x.title}</h2>
                  <p>{x.description}</p>
                  <a href={x.href}>{x.linkText} →</a>
                </article>
              ))}
            </section>
  );
}
