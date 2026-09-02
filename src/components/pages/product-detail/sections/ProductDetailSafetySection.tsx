import React from "react";
import pageData from "../../../../data/pages/product-detail.json";

export function ProductDetailSafetySection() {
  return (
    <section className="safety-band" id="safety">
      <div>
        <div className="eyebrow">Care & responsibility</div>
        <h2>Use it safely</h2>
        <p>
          Simple handling and venue checks help protect guests and
          equipment.
        </p>
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