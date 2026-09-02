import React from "react";
import pageData from "../../../../data/pages/product-detail.json";
import type { HireProduct } from "../../../../types/commerce";

export function ProductDetailRelatedSection({ related }: { related: HireProduct[] }) {
  return (
    <>
      <section className="complete-setup">
        <div className="eyebrow">{pageData.extracted.text_38}</div>
        <h2>{pageData.extracted.text_39}</h2>
        <p>{pageData.ui.related.note}</p>
        <div className="related-grid reference-product-grid">
          {related.slice(0, 8).map((x, i) => (
            <article key={x.slug}>
              <a className="product-image" href={`/product-${x.slug}`}>
                <img src={x.image} alt={x.name} />
                <em>{i % 3 === 0 ? "POPULAR" : ""}</em>
                <i>♡</i>
              </a>
              <div>
                <small>{x.category}</small>
                <h3>
                  <a href={`/product-${x.slug}`}>{x.name}</a>
                </h3>
                <span className="stars">
                  {pageData.extracted.text_40}<small>({24 + i})</small>
                </span>
                <p>{pageData.extracted.text_41}{pageData.ui.related.availableNote}</p>
                <b className="catalogue-price">
                  {pageData.extracted.text_42}<strong>{x.price}</strong>
                </b>
                <footer>
                  <a href={`/product-${x.slug}`}>{pageData.ui.related.viewDetails}</a>
                  <a href={`/basket?add=${x.slug}`}>{pageData.ui.related.quickAdd}</a>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="catalogue-section related-products">
        <div className="section-intro">
          <div>
            <div className="eyebrow">{pageData.extracted.text_43}</div>
            <h2>{pageData.extracted.text_44}</h2>
          </div>
          <a href="/products">{pageData.extracted.text_45}</a>
        </div>
        <div className="related-grid reference-product-grid">
          {related.slice(2, 10).map((x, i) => (
            <article key={x.slug}>
              <a className="product-image" href={`/product-${x.slug}`}>
                <img src={x.image} alt={x.name} />
                <em>{i % 4 === 0 ? "POPULAR" : ""}</em>
                <i>♡</i>
              </a>
              <div>
                <small>{x.category}</small>
                <h3>
                  <a href={`/product-${x.slug}`}>{x.name}</a>
                </h3>
                <span className="stars">
                  {pageData.extracted.text_46}<small>({18 + i})</small>
                </span>
                <p>{x.summary}</p>
                <b className="catalogue-price">
                  {pageData.extracted.text_47}<strong>{x.price}</strong>
                </b>
                <footer>
                  <a href={`/product-${x.slug}`}>{pageData.ui.related.viewDetails}</a>
                  <a href={`/basket?add=${x.slug}`}>{pageData.ui.related.quickAdd}</a>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}