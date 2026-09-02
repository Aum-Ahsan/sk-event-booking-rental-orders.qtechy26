import React from "react";
import pageData from "../../../../data/pages/product-detail.json";
import type { HireProduct } from "../../../../types/commerce";

export function ProductDetailInfoSection({ p, checked }: { p: HireProduct, checked: boolean }) {
  return (
    <>
      <div className="detail-badges">
        {pageData.ui.info.badgePopular} {checked && <span>{pageData.ui.info.badgeAvailable}</span>}
      </div>
      <h1>{p.name}</h1>
      <div className="rating">
        ★★★★★ <span>{p.rating ?? 4.7} {pageData.ui.info.reviewsText.replace('{count}', String(p.reviews ?? 0))}</span>
      </div>
      <p>{p.description}</p>
      <h3>{pageData.ui.info.specTitle}</h3>
      <div className="product-spec-summary">
        <span><small>{pageData.ui.info.specLabels.dimensions}</small><b>{p.dimensions}</b></span>
        <span><small>{pageData.ui.info.specLabels.capacity}</small><b>{p.capacity}</b></span>
        <span><small>{pageData.ui.info.specLabels.finish}</small><b>{p.finish}</b></span>
        <span><small>{pageData.ui.info.specLabels.minimum}</small><b>{p.minimum}</b></span>
      </div>
    </>
  );
}