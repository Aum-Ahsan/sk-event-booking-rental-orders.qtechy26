import React from "react";
import pageData from "../../../../data/pages/collections.json";
import hireProducts from "../../../../data/commerce/hireProducts.json";

export function CollectionsHeroSection({ type, title }: { type?: string, title: string }) {
  return (
    <section className="collection-image-hero">
      <div>
        <div className="eyebrow">{pageData.extracted.text_1}</div>
        <h1>{title}</h1>
        <p>
          {type
            ? "Build a coordinated wedding from ceremony seating to reception dining, lighting and late-night lounge areas."
            : "Browse coordinated products and editable packages selected around the type of event you are planning."}
        </p>
        <a href="#collection-list">{pageData.extracted.text_2}</a>
      </div>
      <img
        src={type ? "/images/hero-event.png" : "/images/marquee-product.png"}
        alt={type ? "Coordinated wedding event collection" : "Curated SK Event Hire collection"}
      />
    </section>
  );
}

export function CollectionsListSection() {
  return (
    <section id="collection-list" className="public-section">
      <div className="collection-grid">
        {pageData.cards.map((c) => (
          <a href={c[3]} key={c[0]}>
            <img src={c[2]} alt={c[0]} />
            <span>
              <small>{pageData.extracted.text_3}</small>
              <h2>{c[0]}</h2>
              <p>{c[1]}</p>
              <b>{pageData.extracted.text_4}</b>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function CollectionsWeddingFavouritesSection() {
  return (
    <section className="catalogue-section">
      <div className="section-intro">
        <div>
          <div className="eyebrow">{pageData.extracted.text_5}</div>
          <h2>{pageData.extracted.text_6}</h2>
        </div>
      </div>
      <div className="product-list-grid">
        {hireProducts.slice(0, 6).map((p) => (
          <article className="product-list-card" key={p.slug}>
            <a href={`/product-${p.slug}`}>
              <img src={p.image} alt={p.name} />
            </a>
            <div>
              <small>{p.category}</small>
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
              <footer>
                <b>{p.price}</b>
                <a href={`/product-${p.slug}`}>{pageData.extracted.text_7}</a>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}