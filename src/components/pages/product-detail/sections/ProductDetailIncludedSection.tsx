import React from "react";
import pageData from "../../../../data/pages/product-detail.json";
import type { HireProduct } from "../../../../types/commerce";

export function ProductDetailIncludedSection({ p }: { p: HireProduct }) {
  return (
    <section className="detail-split reverse" id="included">
      <div>
        <div className="eyebrow">Your hire includes</div>
        <h2>Included with your hire</h2>
        {pageData.included.map((x) => (
          <p key={x}>✓ &nbsp;{x}</p>
        ))}
      </div>
      <img src={p.image} alt="Chair finish detail" />
    </section>
  );
}