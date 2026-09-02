import React from "react";
import pageData from "../../../../data/pages/gallery-story.json";

export function EditorialSectionSection() {
  return (
    <section className="editorial-section case-story">
              <div>
                <span className="section-kicker">{pageData.story.brief.kicker}</span>
                <h2>{pageData.story.brief.title}</h2>
                <p>{pageData.story.brief.description}</p>
                <div className="story-stats">
                  {pageData.story.stats.map(s => (
                    <b key={s.label}>{s.label}<small>{s.value}</small></b>
                  ))}
                </div>
              </div>
              <img
                src="/images/warehouse-team.png"
                alt={pageData.extracted.attr_6}
              />
            </section>
  );
}
