import React from "react";
import pageData from "../../../../data/pages/about.json";

export function AboutHireCareSection() {
  const { care } = pageData;
  return (
    <section className="hire-care">
      <div>
        <span>{care.eyebrow}</span>
        <h2>{care.title}</h2>
        <p>{care.description}</p>
        <div>
          {care.items.map((item) => (
            <article key={item[0]}>
              <b>✓ {item[0]}</b>
              <p>{item[1]}</p>
            </article>
          ))}
        </div>
        <blockquote>{care.note}</blockquote>
      </div>
      <img src={care.image} alt={care.imageAlt} />
    </section>
  );
}
