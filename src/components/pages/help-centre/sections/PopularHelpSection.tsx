import React from "react";
import pageData from "../../../../data/pages/help-centre.json";

export function PopularHelpSection() {
  return (
    <section className="popular-help">
              <div className="help-width">
                <header>
                  <span>{pageData.popular.eyebrow}</span>
                  <h2>{pageData.popular.title}</h2>
                  <p>{pageData.popular.description}</p>
                </header>
                <div>
                  {pageData.popular.items.map((q, i) => (
                    <details key={q.question}>
                      <summary>
                        {q.question}
                        <b>＋</b>
                      </summary>
                      <p>{q.answer}</p>
                      <a href={q.link}>{pageData.extracted.text_1}</a>
                    </details>
                  ))}
                </div>
              </div>
            </section>
  );
}
