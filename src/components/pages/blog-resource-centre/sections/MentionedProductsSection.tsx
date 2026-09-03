import React from "react";
import pageData from "../../../../data/pages/blog-resource-centre.json";

export function MentionedProductsSection() {
  return (
    <section className="mentioned-products">
      <div className="editorial-section">
        <header>
          <div>
            <span>{pageData.extracted.text_16}</span>
            <h2>{pageData.extracted.text_17}</h2>
          </div>
          <a href="/products">{pageData.extracted.text_18}</a>
        </header>
        <div>
          {[
                    ["White Bentwood Chair", "/images/chairs-product.png"],
                    ["Rustic Timber Trestle Table", "/images/tables-product.png"],
                    ["Round Dining Table", "/images/tableware-product.png"],
                    ["Table & Tableware Package", "/images/decor-product.png"],
                  ].map((x) => (
                    <article key={x[0]}>
                      <img src={x[1]} alt={x[0]} />
                      <h3>{x[0]}</h3>
                      <a href="/products">{pageData.extracted.text_19}</a>
                    </article>
                  ))}
                </div>
              </div>
            </section>
  );
}
