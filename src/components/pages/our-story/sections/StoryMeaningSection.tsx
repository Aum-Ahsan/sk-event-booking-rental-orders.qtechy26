import React from "react";
import pageData from "../../../../data/pages/our-story.json";

export function StoryMeaningSection() {
  return (
    <section id="what-sk-means" className="story-meaning editorial-section">
              <div>
                <span>{pageData.meaning.eyebrow}</span>
                <h2>{pageData.meaning.title}</h2>
                {pageData.meaning.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <aside>
                <b>{pageData.extracted.text_1}</b>
                <span>
                  <strong>{pageData.meaning.aside.sName}</strong>
                  <small>{pageData.meaning.aside.sNote}</small>
                </span>
                <i>＋</i>
                <b>{pageData.extracted.text_2}</b>
                <span>
                  <strong>{pageData.meaning.aside.kName}</strong>
                  <small>{pageData.meaning.aside.kNote}</small>
                </span>
              </aside>
            </section>
  );
}
