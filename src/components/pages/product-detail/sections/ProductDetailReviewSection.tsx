import React from "react";

export function ProductDetailReviewSection() {
  return (
    <section className="review-band" id="reviews">
      <div className="eyebrow">Verified customer feedback</div>
      <h2>What customers say</h2>
      <div>
        <aside>
          <b>4.9</b>
          <span>★★★★★</span>
          <small>Based on 142 verified hires</small>
        </aside>
        <blockquote>
          “The chairs arrived spotless and looked beautiful for our
          ceremony. Quantities and delivery timing were easy to confirm.”
          <footer>Verified wedding customer · Carlton North</footer>
          <a>Read all 142 reviews</a>
        </blockquote>
      </div>
    </section>
  );
}