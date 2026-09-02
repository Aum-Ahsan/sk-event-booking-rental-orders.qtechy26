import React from "react";
import pageData from "../../../../data/pages/product-detail.json";
import type { HireProduct } from "../../../../types/commerce";

export function ProductDetailIncludedSection({ p }: { p: HireProduct }) {
  return (
    <section className="detail-split reverse" id="included">
      <div>
        <div className="eyebrow">{pageData.extracted.text_20}</div>
        <h2>{pageData.extracted.text_21}</h2>
        {pageData.included.map((x) => (
          <p key={x}>{pageData.extracted.text_22}{x}</p>
        ))}
      </div>
      <img src={p.image} alt={pageData.extracted.attr_23} />
    </section>
  );
}