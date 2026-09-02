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
            <span>SECURE BOOKING PAYMENT</span>
            <h1>Complete your booking payment</h1>
            <p>
              Choose a payment method, verify the authorised payer and review
              the amount before confirming. Your booking is protected against
              duplicate charges.
            </p>
          </div>
          <aside>
            <b>▣ Secure checkout</b>
            <small>
              Payment information is encrypted and never displayed in full.
            </small>
            <a href="/payment-policy">Payment help →</a>
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
            ← Back
          </button>
          <span>Step {step + 1} of 5</span>
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
                <span>PAYMENT METHOD</span>
                <em>PCI-secure</em>
                <h2>How would you like to pay?</h2>
                <p>
                  Select an available payment option. Instructions and timing
                  are shown before confirmation.
                </p>
              </header>
              <div className="pay-methods">
                {pageData.methods.map((m) => (
                  <button
                    className={method === m[0] ? "selected" : ""}
                    onClick={() => setMethod(m[0])}
                    key={m[0]}
                  >
                    <i>{m[1]}</i>
                    <b>{m[2]}</b>
                    <small>{m[3]}</small>
                  </button>
                ))}
              </div>
              <div className="pay-fields">
                <label className="wide">
                  Payer name *<input value="Amelia Thompson" readOnly />
                </label>
                <label className="wide">
                  Payment reference *<input value="SKB-10482" readOnly />
                </label>
                <label className="wide">
                  Instructions
                  <input
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
                <input type="checkbox" defaultChecked /> I am authorised to make
                this {methodLabel} payment for booking SKB-10482.
              </label>
              <div className="pay-timing">
                <b>Payment timing</b>
                <span>
                  $880.00 is due for the confirmed products and services. Use
                  booking reference SKB-10482 with the selected payment method.
                </span>
              </div>
            </section>
            <section className="otp-card">
              <div>
                <span>IDENTITY VERIFICATION</span>
                <h2>Verify this payment</h2>
                <p>
                  Confirm that you will use booking reference <b>SKB-10482</b>
                  so the payment can be matched to the correct order.
                </p>
                <a href="/contact">Change mobile number</a>
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
                <span>FINAL PAYMENT REVIEW</span>
                <a href="/basket">Edit booking</a>
                <h2>Review before you pay</h2>
                <p>
                  Confirm the booking, payment method and amount. Totals are
                  recalculated securely when submitted.
                </p>
              </header>
              <div>
                {[
                  [
                    "BOOKING",
                    "SKB-10482",
                    "Wedding reception · 12–14 September 2026",
                  ],
                  [
                    "PAYMENT METHOD",
                    methodLabel,
                    "Amelia Thompson · Reference SKB-10482",
                  ],
                  [
                    "PAYMENT",
                    "$880.00 due now",
                    "Full confirmed invoice · $80.00 GST included",
                  ],
                ].map((x) => (
                  <article key={x[0]}>
                    <small>{x[0]}</small>
                    <b>{x[1]}</b>
                    <p>{x[2]}</p>
                  </article>
                ))}
              </div>
              <label>
                <input type="checkbox" defaultChecked /> I authorise SK Event
                Hire to record the $880.00 payment and agree to the payment, cancellation,
                damage/bond and privacy terms.
              </label>
            </section>
          </div>
          <PaymentSummary method={method} pay={pay} paid={paid} />
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}