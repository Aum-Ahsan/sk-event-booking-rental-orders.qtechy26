import React from "react";

export function HomeInspirationGridSection() {
  return (
    <section className="home-section warm">
      <div className="home-heading">
        <div>
          <div className="eyebrow">Real event inspiration</div>
          <h2>See how it comes together</h2>
          <p>
            Explore real combinations of furniture, lighting, marquees and styling.
          </p>
        </div>
        <a href="/gallery">View the gallery →</a>
      </div>
      <div className="inspiration-grid">
        <a className="inspiration-main" href="/gallery">
          <img src="/images/lighting-product.png" alt="Outdoor wedding reception with warm lighting" />
          <span>Outdoor wedding reception</span>
        </a>
        <a href="/gallery">
          <img src="/images/hero-event.png" alt="Marquee wedding" />
          <span>Marquee wedding</span>
        </a>
        <a href="/gallery">
          <img src="/images/flooring-product.png" alt="Corporate function" />
          <span>Corporate function</span>
        </a>
        <a href="/gallery">
          <img src="/images/decor-product.png" alt="Cultural celebration" />
          <span>Cultural celebration</span>
        </a>
        <a href="/gallery">
          <img src="/images/marquee-product.png" alt="Garden celebration" />
          <span>Garden celebration</span>
        </a>
      </div>
    </section>
  );
}