import React from "react";
import pageData from "../../../../data/pages/product-detail.json";

export function ProductDetailDeliverySection() {
  return (
    <section className="detail-split" id="delivery">
      <img
        src="/images/warehouse-team.png"
        alt={pageData.extracted.attr_18}
      />
      <div>
        <div className="eyebrow">{pageData.extracted.text_16}</div>
        <h2>{pageData.extracted.text_17}</h2>
        {pageData.delivery.map((x) => (
          <p key={x[0]}>
            <b>{x[0]}</b>
            {x[1]}
          </p>
        ))}
      </div>
    </section>
  );
}