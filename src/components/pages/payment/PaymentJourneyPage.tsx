import React, { useState } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import { PaymentSummary } from "./sections/PaymentSummary";
import pageData from "../../../data/pages/payment.json";

export function PaymentJourneyPage() {
  const [step, setStep] = useState(0);
  const [method, setMethod] = useState("payid");
  const [verified, setVerified] = useState(false);
  const [paid, setPaid] = useState(false);
  
  const methodLabel =
    method === "payid" ? "PayID" : method === "bank" ? "Bank transfer" : "Cash";
  const pay = () => {
    if (!verified) {
      setStep(2);
      return;
    }
    setPaid(true);
    setTimeout(() => {
      window.location.href = "/payment-confirmation";
    }, 650);
  };
  return (
    <div className={`public-site payment-page payment-wizard-${step}`}>
      <PublicHeader />
      <main>
        <section className="payment-intro">
          <div>
            <span>{pageData.extracted.text_1}</span>
            <h1>{pageData.extracted.text_2}</h1>
            <p>
              {pageData.extracted.text_3}</p>
          </div>
          <aside>
            <b>{pageData.extracted.text_4}</b>
            <small>
              {pageData.extracted.text_5}</small>
            <a href="/payment-policy">{pageData.extracted.text_6}</a>
          </aside>
        </section>
        <nav className="payment-steps">
          {pageData.steps.map((x, i) => (
            <button
              type="button"
              onClick={() => {
                if (i < 3 || verified) setStep(i);
              }}
              className={i === step ? "active" : i < step ? "done" : ""}
              key={x}
            >
              <i>{i < step ? "✓" : i + 1}</i>
              {x}
            </button>
          ))}
        </nav>
        <div className="wizard-actions">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => setStep((x) => Math.max(0, x - 1))}
          >
            {pageData.extracted.text_7}</button>
          <span>{pageData.extracted.text_8}{step + 1} {pageData.extracted.text_9}</span>
          {step < 3 && (
            <button
              className="next"
              type="button"
              onClick={() => {
                if (step === 2 && !verified) return;
                setStep((x) => x + 1);
              }}
            >
              {step === 2 && !verified
                ? "Verify code to continue"
                : "Continue →"}
            </button>
          )}
        </div>
        <section className="payment-shell">
          <div>
            <section className="pay-card">
              <header>
                <span>{pageData.extracted.text_10}</span>
                <em>{pageData.extracted.text_11}</em>
                <h2>{pageData.extracted.text_12}</h2>
                <p>
                  {pageData.extracted.text_13}</p>
              </header>
              <div className="pay-methods">
                {pageData.methods.map((m: any) => (
                  <button
                    className={method === m.id ? "selected" : ""}
                    onClick={() => setMethod(m.id)}
                    key={m.id}
                  >
                    <i>{m.icon}</i>
                    <b>{m.title}</b>
                    <small>{m.description}</small>
                  </button>
                ))}
              </div>
              <div className="pay-fields">
                <label className="wide">
                  {pageData.extracted.text_14}<input value="Amelia Thompson" readOnly />
                </label>
                <label className="wide">
                  {pageData.extracted.text_15}<input value="SKB-10482" readOnly />
                </label>
                <label className="wide">
                  {pageData.extracted.text_16}<input
                    value={
                      method === "payid"
                        ? "Use the approved SK Event Hire PayID and exact booking reference."
                        : method === "bank"
                          ? "Transfer to the approved account using the exact booking reference."
                          : "Arrange an approved cash handover and obtain an SK Event Hire receipt."
                    }
                    readOnly
                  />
                </label>
              </div>
              <label className="pay-consent">
                <input type="checkbox" defaultChecked /> {pageData.extracted.text_17}{methodLabel} {pageData.extracted.text_18}</label>
              <div className="pay-timing">
                <b>{pageData.extracted.text_19}</b>
                <span>
                  {pageData.extracted.text_20}</span>
              </div>
            </section>
            <section className="otp-card">
              <div>
                <span>{pageData.extracted.text_21}</span>
                <h2>{pageData.extracted.text_22}</h2>
                <p>
                  {pageData.extracted.text_23}<b>{pageData.extracted.text_24}</b>
                  {pageData.extracted.text_25}</p>
                <a href="/contact">{pageData.extracted.text_26}</a>
              </div>
              <div>
                <button onClick={() => setVerified(true)}>
                  {verified ? "✓ Reference confirmed" : "Confirm reference"}
                </button>
                <small>
                  {verified ? "Payment reference saved" : "Required before final review"}
                </small>
              </div>
            </section>
            <section className="pay-card pay-review">
              <header>
                <span>{pageData.extracted.text_27}</span>
                <a href="/basket">{pageData.extracted.text_28}</a>
                <h2>{pageData.extracted.text_29}</h2>
                <p>
                  {pageData.extracted.text_30}</p>
              </header>
              <div>
                {[
                  { label: "BOOKING", value: "SKB-10482", note: "Wedding reception · 12–14 September 2026" },
                  { label: "PAYMENT METHOD", value: methodLabel, note: "Amelia Thompson · Reference SKB-10482" },
                  { label: "PAYMENT", value: "$880.00 due now", note: "Full confirmed invoice · $80.00 GST included" },
                ].map((x) => (
                  <article key={x.label}>
                    <small>{x.label}</small>
                    <b>{x.value}</b>
                    <p>{x.note}</p>
                  </article>
                ))}
              </div>
              <label>
                <input type="checkbox" defaultChecked /> {pageData.extracted.text_31}</label>
            </section>
          </div>
          <PaymentSummary method={method} pay={pay} paid={paid} />
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}