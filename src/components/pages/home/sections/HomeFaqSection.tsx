import React, { useState } from "react";
import pageData from "../../../../data/pages/home.json";

export function HomeFaqSection() {
  const [faqOpen, setFaqOpen] = useState(-1);
  return (
    <section className="home-section faq">
      <div className="home-heading">
        <div>
          <div className="eyebrow">Before you book</div>
          <h2>Questions before you book?</h2>
        </div>
        <a href="/help">View all FAQs →</a>
      </div>
      <div>
        {pageData.faqs.map((q, i) => (
          <div className={`faq-item ${faqOpen === i ? "open" : ""}`} key={q}>
            <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} aria-expanded={faqOpen === i}>
              {q}
              <span>{faqOpen === i ? "−" : "＋"}</span>
            </button>
            {faqOpen === i && (
              <p>
                {i === 0
                  ? "Standard hire normally covers your agreed event period, with delivery and collection windows confirmed in the quotation. Longer hires can be arranged."
                  : "Our team will confirm the exact option, timing and any associated charge in your quotation."}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}