import React from "react";
import pageData from "../../../../data/pages/product-detail.json";

export function ProductDetailSafetySection() {
  return (
    <section className="safety-band" id="safety">
      <div>
        <div className="eyebrow">{pageData.extracted.text_54}</div>
        <h2>{pageData.extracted.text_55}</h2>
        <p>{pageData.ui.safety.note}</p>
      </div>
      <ol>
        {pageData.safety.map((x) => (
          <li key={x[0]}>
            <b>{x[0]}</b>{x[1]}
          </li>
        ))}
      </ol>
    </section>
  );
}