import React from "react";
import pageData from "../../../../data/pages/help-centre.json";

export function PolicyLinksSection() {
  return (
    <section id="policy-links" className="policy-links help-width">
              <span>{pageData.policyLinks.eyebrow}</span>
              <h2>{pageData.policyLinks.title}</h2>
              <p>{pageData.policyLinks.description}</p>
              <div>
                {pageData.policyLinks.items.map((x) => (
                  <a href={x[1]} key={x[0]}>
                    <b>{x[0]}</b>
                    <small>{pageData.policyLinks.linkText}</small>
                  </a>
                ))}
              </div>
            </section>
  );
}
