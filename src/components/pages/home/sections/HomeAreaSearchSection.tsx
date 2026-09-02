import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeAreaSearchSection() {
  return (
    <section className="service-area-home">
      <img src="/images/warehouse-team.png" alt={pageData.extracted.attr_4} />
      <div>
        <div className="eyebrow">{pageData.extracted.text_1}</div>
        <h2>{pageData.extracted.text_2}</h2>
        <p>{pageData.areaSearch.description}</p>
        <div className="area-search">
          <input placeholder={pageData.extracted.attr_5} />
          <a href="/contact">{pageData.areaSearch.action}</a>
        </div>
        <small>{pageData.extracted.text_3}</small>
      </div>
    </section>
  );
}