import React from "react";
import eventTypes from "../../../../data/commerce/eventTypes.json";

export function HomePlanningSearchSection() {
  return (
    <section className="planning-search">
      <div className="search-title">
        <div>
          <b>What are you planning?</b>
          <span>Tell us the essentials and we’ll help shape your hire list.</span>
        </div>
        <a href="/request-quote">Prefer a detailed brief? →</a>
      </div>
      <div className="search-fields home-availability-fields">
        <label>
          <span>EVENT TYPE</span>
          <select defaultValue="Wedding or engagement">
            {eventTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label>
          <span>EVENT DATE</span>
          <input type="date" defaultValue="2026-11-14" />
        </label>
        <label>
          <span>RETURN DATE</span>
          <input type="date" defaultValue="2026-11-15" />
        </label>
        <label>
          <span>LOCATION</span>
          <input defaultValue="Melbourne VIC" />
        </label>
        <label>
          <span>NUMBER OF GUESTS</span>
          <input type="number" min="1" defaultValue="80" />
        </label>
        <a href="/products">Check availability</a>
      </div>
    </section>
  );
}