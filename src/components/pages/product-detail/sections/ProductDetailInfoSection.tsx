import React from "react";
import type { HireProduct } from "../../../../types/commerce";

export function ProductDetailInfoSection({ p, checked }: { p: HireProduct, checked: boolean }) {
  return (
    <>
      <div className="detail-badges">
        POPULAR {checked && <span>AVAILABLE FOR YOUR DATES</span>}
      </div>
      <h1>{p.name}</h1>
      <div className="rating">
        ★★★★★ <span>{p.rating ?? 4.7} ({p.reviews ?? 0} reviews) · Write a review</span>
      </div>
      <p>{p.description}</p>
      <h3>Product specification</h3>
      <div className="product-spec-summary">
        <span><small>Dimensions</small><b>{p.dimensions}</b></span>
        <span><small>Capacity</small><b>{p.capacity}</b></span>
        <span><small>Material / finish</small><b>{p.finish}</b></span>
        <span><small>Hire minimum</small><b>{p.minimum}</b></span>
      </div>
    </>
  );
}