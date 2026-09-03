import React, { useState } from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeTestimonialSection() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviews = pageData.reviews;

  return (
    <section className="home-section testimonial">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{pageData.testimonials.eyebrow}</div>
          <h2>{pageData.testimonials.title}</h2>
          <p>{pageData.testimonials.description}</p>
        </div>
      </div>
      <div className="testimonial-layout">
        <aside>
          <b>{pageData.testimonials.ratingAvg}</b>
          <span>★★★★★</span>
          <small>{pageData.testimonials.ratingDesc}</small>
        </aside>
        <div className="review-slider">
          {reviews.map((review, i) => (
            <blockquote className={reviewIndex === i ? "active" : ""} key={review.name}>
              <header>
                <i aria-hidden="true">{review.initials}</i>
                <div>
                  <b>{review.name}</b>
                  <small>{review.address}</small>
                  <em>{pageData.extracted.text_22}</em>
                </div>
                <div className="review-rating">
                  <span>★★★★★</span>
                  <b>{review.rating}</b>
                  <small>{review.count}</small>
                </div>
              </header>
              <p>“{review.quote}”</p>
              <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "16px", borderTop: "1px solid #e2e8eb" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", lineHeight: 1.5, fontSize: "14px", paddingRight: "10px", minWidth: 0 }}>
                  <span style={{ fontWeight: 900, color: "#123b58" }}>{review.event}</span>
                  <span style={{ fontWeight: 900, color: "#718591" }}>{review.date}</span>
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