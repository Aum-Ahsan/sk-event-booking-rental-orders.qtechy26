import React from "react";
import pageData from "../../../../data/pages/product-detail.json";

export function ProductDetailReviewSection() {
  return (
    <section className="review-band" id="reviews">
      <div className="eyebrow">{pageData.extracted.text_48}</div>
      <h2>{pageData.extracted.text_49}</h2>
      <div>
        <aside>
          <b>{pageData.extracted.text_50}</b>
          <span>★★★★★</span>
          <small>{pageData.extracted.text_51}</small>
        </aside>
        <blockquote>
          {pageData.extracted.text_52}<footer>{pageData.extracted.text_53}</footer>
          <a>{pageData.ui.review.readAll.replace('{count}', '142')}</a>
        </blockquote>
      </div>
    </section>
  );
}