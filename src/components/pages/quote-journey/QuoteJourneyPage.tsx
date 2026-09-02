import React, { useState } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import { Field } from "../../landing/shared/FormControls";
import { ReviewBlock } from "../../landing/shared/FormControls";
import pageData from "../../../data/pages/quote-journey.json";

export function QuoteJourneyPage() {
  const [step, setStep] = useState(0);
  const submitQuote = () => {
    window.location.href = "/quote-submitted";
  };
  return (
    <div className={`public-site quote-journey quote-wizard-${step}`}>
      <PublicHeader />
      <main>
        <section id="quote-request-top" className="quote-top">
          <div>
            <span>{pageData.top.eyebrow}</span>
            <h1>{pageData.top.title}</h1>
            <p>{pageData.top.description}</p>
          </div>
          <aside>
            <b>{pageData.aside.title}</b>
            <p>{pageData.aside.description}</p>
            <a href={pageData.aside.linkHref}>{pageData.aside.linkText}</a>
          </aside>
        </section>
        
        <div className="quote-progress">
          {pageData.steps.map((x, i) => (
            <button
              type="button"
              onClick={() => setStep(i)}
              className={i === step ? "active" : i < step ? "done" : ""}
              key={x}
            >
              <i>{i < step ? "✓" : i + 1}</i>
              {x}
            </button>
          ))}
        </div>
        
        <div className="wizard-actions">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => setStep((x) => Math.max(0, x - 1))}
          >
            {pageData.actions.back}
          </button>
          <span>{pageData.actions.stepPrefix} {step + 1} {pageData.actions.stepSuffix}</span>
          {step < 3 ? (
            <button
              className="next"
              type="button"
              onClick={() => setStep((x) => x + 1)}
            >
              {pageData.actions.saveNext}
            </button>
          ) : (
            <button className="next" type="button" onClick={submitQuote}>
              {pageData.actions.submit}
            </button>
          )}
        </div>
        
        <section className="quote-form-layout">
          <div>
            <section className="quote-card" hidden={step !== 0}>
              <div className="quote-card-title">
                <span>{pageData.step1.eyebrow}</span>
                <h2>{pageData.step1.title}</h2>
                <a href={pageData.step1.addHref}>{pageData.step1.addLink}</a>
              </div>
              {pageData.step1.items.map((x) => (
                <div className="selected-hire-item" key={x.name}>
                  <img src={x.image} alt={x.name} />
                  <span>
                    <b>{x.name}</b>
                    <small>{x.desc}</small>
                  </span>
                  <label>
                    {pageData.step1.qtyLabel}
                    <input defaultValue={x.desc.split(" ")[0]} />
                  </label>
                  <strong>{x.price}</strong>
                </div>
              ))}
            </section>
            
            <section className="quote-card" hidden={step !== 1}>
              <div className="quote-card-title">
                <span>{pageData.step2.eyebrow}</span>
                <h2>{pageData.step2.title}</h2>
                <em>{pageData.step2.saved}</em>
              </div>
              <div className="form-grid">
                {pageData.step2.fields.map(f => (
                  <Field key={f.label} label={f.label} value={f.value} wide={f.wide} area={f.area} />
                ))}
              </div>
            </section>
            
            <section className="quote-card" hidden={step !== 2}>
              <div className="quote-card-title">
                <span>{pageData.step3.eyebrow}</span>
                <h2>{pageData.step3.title}</h2>
              </div>
              <div className="form-grid">
                {pageData.step3.fields.map(f => (
                  <Field key={f.label} label={f.label} value={f.value} />
                ))}
              </div>
            </section>
            
            <section
              className="quote-card quote-review-card"
              hidden={step !== 3}
            >
              <div className="quote-card-title">
                <span>{pageData.step4.eyebrow}</span>
                <h2>{pageData.step4.title}</h2>
              </div>
              <div className="review-grid">
                {pageData.step4.blocks.map(b => (
                  <ReviewBlock key={b.title} title={b.title} rows={b.rows as [string, string][]} />
                ))}
              </div>
              <h3>{pageData.step4.selectedItemsTitle}</h3>
              {pageData.step4.selectedItems.map((x) => (
                <p className="quote-review-line" key={x}>
                  ✓ {x}
                </p>
              ))}
              <div className="quote-notice">
                <b>{pageData.step4.noticeTitle}</b>
                <p>{pageData.step4.noticeText}</p>
              </div>
            </section>
          </div>
          <aside className="quote-summary-sticky">
            <span>{pageData.summary.eyebrow}</span>
            <h2>{pageData.summary.title}</h2>
            <b>{pageData.summary.event}</b>
            <small>{pageData.summary.date}</small>
            {pageData.summary.rows.map((x) => (
              <div key={x[0]}>
                <span>{x[0]}</span>
                <b>{x[1]}</b>
              </div>
            ))}
            <strong>{pageData.summary.total}</strong>
            <button onClick={submitQuote}>{pageData.summary.button}</button>
            <small>{pageData.summary.footerText}</small>
          </aside>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
