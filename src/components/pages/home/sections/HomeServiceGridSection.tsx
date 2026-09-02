import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeServiceGridSection() {
  return (
    <section className="home-section warm">
      <div className="home-heading">
        <div>
          <div className="eyebrow">Services that fit your event</div>
          <h2>A simpler way to hire</h2>
          <p>Start with a package or select only the support you need.</p>
        </div>
        <a href="/planning">View all services →</a>
      </div>
      <div className="service-grid">
        {pageData.services.map((x) => (
          <article key={x[0]}>
            <img src={x[3]} alt={x[0]} />
            <div>
              <small>EVENT HIRE SERVICE</small>
              <h3>{x[0]}</h3>
              <p>{x[1]}</p>
              <b>{x[2]}</b>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}