import React from "react";
import type { HireProduct } from "../../../../types/commerce";
import pageData from "../../../../data/pages/compare.json";

export function CompareHeroSection() {
  return (
    <section className="simple-hero">
      <div className="eyebrow">{pageData.hero.eyebrow}</div>
      <h1>{pageData.hero.title}</h1>
      <p>{pageData.hero.description}</p>
    </section>
  );
}

export function CompareTableSection({ ps, rows }: { ps: HireProduct[], rows: { label: string; render: (p: HireProduct) => string }[] }) {
  return (
    <section className="compare-wrap">
      <div className="compare-table">
        <div className="compare-head">
          <b>{pageData.table.compareLabel}</b>
          {ps.map((p) => (
            <article key={p.slug}>
              <img src={p.image} alt={p.name} />
              <small>{p.category}</small>
              <h2>{p.name}</h2>
              <a href={`/product-${p.slug}`}>{pageData.table.viewProductText}</a>
            </article>
          ))}
        </div>
        {rows.map((r) => (
          <div className="compare-row" key={r.label}>
            <b>{r.label}</b>
            {ps.map((p) => (
              <span key={p.slug}>{r.render(p)}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="compare-actions">
        <a className="outline-cta" href="/products">
          {pageData.actions.addText}
        </a>
        <a className="public-cta" href="/request-quote">
          {pageData.actions.quoteText}
        </a>
      </div>
    </section>
  );
}
