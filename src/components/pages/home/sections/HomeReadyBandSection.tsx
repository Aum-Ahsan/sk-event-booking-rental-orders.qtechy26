import React from "react";

export function HomeReadyBandSection() {
  return (
    <section className="ready-band">
      <img src="/images/decor-product.png" alt="Event styling details" />
      <div className="ready-copy">
        <div className="eyebrow">Let’s make it easy</div>
        <h2>Ready to start planning?</h2>
        <p>
          Check availability, build a hire list or speak with our Melbourne
          event team.
        </p>
        <div>
          <a href="/request-quote">Request a quote</a>
          <a href="/products">Browse hire range</a>
          <a href="/contact">Talk to the team</a>
        </div>
      </div>
      <img src="/images/lighting-product.png" alt="Warm event lighting" />
    </section>
  );
}