import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeServiceGridSection() {
  return (
    <section className="home-section warm">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{pageData.extracted.text_17}</div>
          <h2>{pageData.extracted.text_18}</h2>
          <p>{pageData.extracted.text_19}</p>
        </div>
        <a href="/planning">{pageData.extracted.text_20}</a>
      </div>
      <div className="service-grid">
        {pageData.services.map((x) => (
          <article key={x.name}>
            <img src={x.image} alt={x.name} />
            <div>
              <small>{pageData.extracted.text_21}</small>
              <h3>{x.name}</h3>
              <p>{x.description}</p>
              <b>{x.price}</b>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}