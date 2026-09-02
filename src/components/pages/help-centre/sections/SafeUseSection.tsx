import React from "react";
import pageData from "../../../../data/pages/help-centre.json";

export function SafeUseSection() {
  return (
    <section className="safe-use">
              <div className="help-width">
                <span>{pageData.safeUse.eyebrow}</span>
                <h2>{pageData.safeUse.title}</h2>
                <p>{pageData.safeUse.description}</p>
                <div>
                  {pageData.safeUse.items.map((x) => (
                    <article key={x[0]}>
                      <b>✓ {x[0]}</b>
                      <small>{x[1]}</small>
                    </article>
                  ))}
                </div>
                <blockquote>{pageData.safeUse.quote}</blockquote>
              </div>
            </section>
  );
}
