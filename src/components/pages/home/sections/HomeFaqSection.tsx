import React, { useState } from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeFaqSection() {
  const [faqOpen, setFaqOpen] = useState(-1);
  return (
    <section className="home-section faq">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{pageData.faqGrid.eyebrow}</div>
          <h2>{pageData.faqGrid.title}</h2>
        </div>
        <a href="/help">{pageData.faqGrid.ctaText}</a>
      </div>
      <div>
        {pageData.faqs.map((q, i) => (
          <div className={`faq-item ${faqOpen === i ? "open" : ""}`} key={q.question}>
            <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} aria-expanded={faqOpen === i}>
              {q.question}
              <span>{faqOpen === i ? "−" : "＋"}</span>
            </button>
            {faqOpen === i && (
              <p>
                {q.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}