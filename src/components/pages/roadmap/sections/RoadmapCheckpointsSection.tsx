import React from "react";
import pageData from "../../../../data/pages/roadmap.json";

export function RoadmapCheckpointsSection() {
  return (
    <section className="roadmap-checkpoints">
              <div>
                <span>{pageData.checkpoints.eyebrow}</span>
                <h2>{pageData.checkpoints.title}</h2>
                <p>{pageData.checkpoints.description}</p>
              </div>
              <div>
                {pageData.checkpoints.items.map((x) => (
                  <article key={x[0]}>
                    <b>{x[0]}</b>
                    <small>{x[1]}</small>
                  </article>
                ))}
              </div>
            </section>
  );
}
