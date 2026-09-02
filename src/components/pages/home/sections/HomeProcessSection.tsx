import React from "react";

export function HomeProcessSection() {
  return (
    <section className="home-section process">
      <div className="home-heading">
        <div>
          <div className="eyebrow">Simple from start to finish</div>
          <h2>From idea to event day in four easy steps</h2>
        </div>
      </div>
      <div>
        {[
          ["1", "Choose dates & products", "Tell us the event date, venue and what you need."],
          ["2", "Select package or delivery", "Choose self-pickup, delivery, setup or a tailored package."],
          ["3", "We confirm the details", "We check availability and send a clear final quotation."],
          ["4", "Enjoy your event", "Track the order while we prepare, deliver and collect."],
        ].map((x) => (
          <article key={x[0]}>
            <i>{x[0]}</i>
            <h3>{x[1]}</h3>
            <p>{x[2]}</p>
            <a href="/request-quote">Learn more →</a>
          </article>
        ))}
      </div>
    </section>
  );
}