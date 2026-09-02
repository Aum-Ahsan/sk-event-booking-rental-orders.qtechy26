import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeGuidanceSection() {
  return (
    <section className="help-split">
      <div>
        <div className="eyebrow">{pageData.guidance.eyebrow}</div>
        <h2>{pageData.guidance.title}</h2>
        <p>{pageData.guidance.description}</p>
        <div className="guidance-points">
          {pageData.guidance.points.map((p) => (<span key={p}><b>✓</b> {p}</span>))}
        </div>
        <div className="guidance-actions">
          <a href="/contact">{pageData.guidance.ctaPrimary}</a>
          <a href="/planning">{pageData.guidance.ctaSecondary}</a>
        </div>
      </div>
      <img src="/images/warehouse-team.png" alt={pageData.extracted.attr_8} />
    </section>
  );
}