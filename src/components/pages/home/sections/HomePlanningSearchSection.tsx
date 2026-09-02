import React from "react";
import eventTypes from "../../../../data/commerce/eventTypes.json";
import pageData from "../../../../data/pages/home.json";

export function HomePlanningSearchSection() {
  return (
    <section className="planning-search">
      <div className="search-title">
        <div>
          <b>{pageData.planningSearch.title}</b>
          <span>{pageData.planningSearch.description}</span>
        </div>
        <a href="/request-quote">{pageData.planningSearch.ctaText}</a>
      </div>
      <div className="search-fields home-availability-fields">
        <label>
          <span>{pageData.planningSearch.labels.eventType}</span>
          <select defaultValue="Wedding or engagement">
            {eventTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label>
          <span>{pageData.planningSearch.labels.eventDate}</span>
          <input type="date" defaultValue="2026-11-14" />
        </label>
        <label>
          <span>{pageData.planningSearch.labels.returnDate}</span>
          <input type="date" defaultValue="2026-11-15" />
        </label>
        <label>
          <span>{pageData.planningSearch.labels.location}</span>
          <input defaultValue="Melbourne VIC" />
        </label>
        <label>
          <span>{pageData.planningSearch.labels.guests}</span>
          <input type="number" min="1" defaultValue="80" />
        </label>
        <a href="/products">{pageData.planningSearch.btnText}</a>
      </div>
    </section>
  );
}