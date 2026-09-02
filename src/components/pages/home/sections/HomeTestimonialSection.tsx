import React, { useState } from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeTestimonialSection() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviews = pageData.reviews;

  return (
    <section className="home-section testimonial">
      <div className="home-heading">
        <div>
          <div className="eyebrow">Verified event reviews</div>
          <h2>Trusted for events that matter</h2>
          <p>Real feedback from customers across Melbourne and Victoria.</p>
        </div>
      </div>
      <div className="testimonial-layout">
        <aside>
          <b>4.9</b>
          <span>★★★★★</span>
          <small>Average rating from verified event hires</small>
        </aside>
        <div className="review-slider">
          {reviews.map((review, i) => (
            <blockquote className={reviewIndex === i ? "active" : ""} key={review.name}>
              <header>
                <i aria-hidden="true">{review.initials}</i>
                <div>
                  <b>{review.name}</b>
                  <small>{review.address}</small>
                  <em>✓ Verified hire</em>
                </div>
                <div className="review-rating">
                  <span>★★★★★</span>
                  <b>{review.rating}</b>
                  <small>{review.count}</small>
                </div>
              </header>
              <p>“{review.quote}”</p>
              <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px", paddingTop: "16px", borderTop: "1px solid #e2e8eb" }}>
                <div style={{ lineHeight: 1.5, color: "#17364e", fontSize: "14px", paddingRight: "10px", flexWrap: "wrap", minWidth: 0 }}>
                  <span style={{ fontWeight: 600 }}>{review.event.replace('·', '-')}</span>
                  <span style={{ margin: "0 8px", color: "#a0aec0" }}>|</span>
                  <span style={{ fontWeight: 600, color: "#4a5568" }}>{review.date}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <nav style={{ display: "flex", alignItems: "center", gap: "12px", margin: 0, minHeight: "auto", borderTop: "none", paddingTop: 0 }}>
                    <button
                      aria-label="Previous review"
                      onClick={() => setReviewIndex((reviewIndex + reviews.length - 1) % reviews.length)}
                      style={{ width: "36px", height: "36px", borderRadius: "50%", border: "none", background: "#f0f4f8", display: "grid", placeItems: "center", cursor: "pointer", color: "#17364e" }}
                    >
                      ←
                    </button>
                    <span aria-live="polite" style={{ fontSize: "14px", minWidth: "auto", color: "#17364e", fontWeight: 600 }}>
                      {reviewIndex + 1} / {reviews.length}
                    </span>
                    <button
                      aria-label="Next review"
                      onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}
                      style={{ width: "36px", height: "36px", borderRadius: "50%", border: "none", background: "#f0f4f8", display: "grid", placeItems: "center", cursor: "pointer", color: "#17364e" }}
                    >
                      →
                    </button>
                  </nav>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}