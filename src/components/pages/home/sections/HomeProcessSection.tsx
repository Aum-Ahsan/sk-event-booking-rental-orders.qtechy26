import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeProcessSection() {
  return (
    <section className="home-section process">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{pageData.extracted.text_12}</div>
          <h2>{pageData.extracted.text_13}</h2>
        </div>
      </div>
      <div>
        {pageData.process.steps.map((x) => (
          <article key={x.step}>
            <i>{x.step}</i>
            <h3>{x.title}</h3>
            <p>{x.desc}</p>
            <a href="/request-quote">{pageData.extracted.text_14}</a>
          </article>
        ))}
      </div>
    </section>
  );
}