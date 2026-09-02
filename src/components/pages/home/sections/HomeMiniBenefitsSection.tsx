import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeMiniBenefitsSection() {
  return (
    <section className="mini-benefits">
      {pageData.miniBenefits.map((x) => (
        <span key={x.title}>
          <i>✓</i>
          <b>{x.title}<small>{x.desc}</small></b>
        </span>
      ))}
    </section>
  );
}