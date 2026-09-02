import React from "react";
import type { HireProduct } from "../../../../types/commerce";

export function ProductDetailRelatedSection({ related }: { related: HireProduct[] }) {
  return (
    <>
      <section className="complete-setup">
        <div className="eyebrow">Frequently hired together</div>
        <h2>Complete your setup</h2>
        <p>Add compatible items without leaving this product.</p>
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
                  ★ 4.9 <small>({24 + i})</small>
                </span>
                <p>● &nbsp;Available · Professional unit prepared</p>
                <b className="catalogue-price">
                  from <strong>{x.price}</strong>
                </b>
                <footer>
                  <a href={`/product-${x.slug}`}>View details</a>
                  <a href={`/basket?add=${x.slug}`}>Quick add</a>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="catalogue-section related-products">
        <div className="section-intro">
          <div>
            <div className="eyebrow">Related hire products</div>
            <h2>You may also like</h2>
          </div>
          <a href="/products">View the complete catalogue →</a>
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
                  ★ 4.8 <small>({18 + i})</small>
                </span>
                <p>{x.summary}</p>
                <b className="catalogue-price">
                  from <strong>{x.price}</strong>
                </b>
                <footer>
                  <a href={`/product-${x.slug}`}>View details</a>
                  <a href={`/basket?add=${x.slug}`}>Quick add</a>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}