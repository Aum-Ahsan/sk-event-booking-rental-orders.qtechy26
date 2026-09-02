import React from "react";
import pageData from "../../../../data/pages/product-detail.json";

export function ProductDetailDeliverySection() {
  return (
    <section className="detail-split" id="delivery">
      <img
        src="/images/warehouse-team.png"
        alt="Delivery and event setup"
      />
      <div>
        <div className="eyebrow">Delivery & collection</div>
        <h2>How it gets to your event</h2>
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