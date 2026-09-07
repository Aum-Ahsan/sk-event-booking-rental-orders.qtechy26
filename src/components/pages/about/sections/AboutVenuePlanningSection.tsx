import React from "react";
import pageData from "../../../../data/pages/about.json";

export function AboutVenuePlanningSection() {
  const { venue } = pageData;
  return (
    <section className="venue-planning">
      <div>
        <span>{venue.eyebrow}</span>
        <h2>{venue.title}</h2>
        <p>{venue.description}</p>
        <div>
          {venue.items.map((item) => (
            <article key={item[0]}>
              <b>{item[0]}</b>
              <p>{item[1]}</p>
            </article>
          ))}
        </div>
        <em style={{display:"none"}}>{venue.note}</em>
      </div>
      <img src={venue.image} alt={venue.imageAlt} />
    </section>
  );
}
