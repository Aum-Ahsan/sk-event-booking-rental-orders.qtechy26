import React from "react";

export function HomeHeroSection() {
  return (
    <section className="home-hero">
      <img
        src="/images/hero-event.png"
        alt="Beautiful outdoor wedding reception under a marquee at dusk"
      />
      <div className="home-hero-copy">
        <div className="eyebrow">Melbourne’s event hire team</div>
        <h1>Everything you need for a beautiful, stress-free event.</h1>
        <p>
          Plan, hire and bring it all together with quality event furniture,
          marquees, lighting and practical support from one Melbourne team.
        </p>
        <div className="hero-actions">
          <a className="public-cta" href="/request-quote">
            Request a quote
          </a>
          <a className="hero-light" href="/products">
            Browse event hire
          </a>
        </div>
      </div>
    </section>
  );
}