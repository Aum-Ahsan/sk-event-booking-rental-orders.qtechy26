import React from "react";
import pageData from "../../../../data/pages/product-detail.json";
import type { HireProduct } from "../../../../types/commerce";

export function ProductDetailOverviewSection({ p }: { p: HireProduct }) {
  return (
    <>
      <div className="eyebrow">{pageData.extracted.text_24}</div>
      <h2>{pageData.extracted.text_25}</h2>
      <p>{pageData.ui.overview.dimensionsNote}</p>
      <div className="glance-grid">
        {pageData.glanceGrid.map((x) => (
          <span key={x[0]}>
            <small>{x[0]}</small>
            <b>{x[1]}</b>
          </span>
        ))}
      </div>
      <section className="layout-guide">
        <img src={p.image} alt={pageData.extracted.attr_28} />
        <div>
          <h3>{pageData.extracted.text_26}</h3>
          <p>{pageData.ui.overview.accessibilityNote}</p>
          <button>{pageData.extracted.text_27}</button>
        </div>
      </section>
    </>
  );
}