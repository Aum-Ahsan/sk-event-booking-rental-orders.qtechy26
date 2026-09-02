import React from "react";
import pageData from "../../../../data/pages/roadmap.json";

export function RoadmapFlowSection() {
  return (
    <section className="roadmap-flow">
              <header>
                <span>{pageData.flow.eyebrow}</span>
                <h2>{pageData.flow.title}</h2>
              </header>
              <div>
                {pageData.flow.phases.map((x) => (
                  <article key={x[0]}>
                    <i>{x[0]}</i>
                    <div>
                      <h3>{x[1]}</h3>
                      <p>{x[2]}</p>
                    </div>
                    <b>✓</b>
                  </article>
                ))}
              </div>
            </section>
  );
}
