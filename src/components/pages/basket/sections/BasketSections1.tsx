import React from "react";
import pageData from "../../../../data/pages/basket.json";
import type { HireProduct } from "../../../../types/commerce";
import { Field } from "../../../landing/shared/FormControls";


export function CheckoutIntroSection() {
  return (
    <section className="checkout-intro">
      <div>
        <span>SECURE EVENT HIRE CHECKOUT</span>
        <h1>Complete your booking request</h1>
        <p>
          Confirm your dates, venue, delivery and payment preference. We’ll
          verify stock and logistics before the booking becomes final.
        </p>
      </div>
      <aside>
        <b>Saved securely</b>
        <small>Your progress is protected on this device.</small>
        <a href="/privacy">Read our privacy policy →</a>
      </aside>
    </section>
  );
}

export function CheckoutStepsSection({ step, setStep, otpVerified }: { step: number, setStep: (s: number) => void, otpVerified: boolean }) {
  return (
    <nav className="checkout-steps" aria-label="Booking progress">
      {pageData.checkoutSteps.map((x, i) => (
        <button
          type="button"
          onClick={() => {
            if (i > 4 || step !== 4 || otpVerified) setStep(i);
          }}
          className={i === step ? "active" : i < step ? "done" : ""}
          key={x}
        >
          <i>{i < step ? "✓" : i + 1}</i>
          {x}
        </button>
      ))}
    </nav>
  );
}

export function CheckoutActionsSection({ step, setStep, otpVerified, nextCheckout }: { step: number, setStep: any, otpVerified: boolean, nextCheckout: () => void }) {
  return (
    <div className="wizard-actions wizard-actions-top">
      <button
        type="button"
        onClick={() => setStep((x: number) => Math.max(0, x - 1))}
        disabled={step === 0}
      >
        ← Back
      </button>
      <span>Step {step + 1} of 6</span>
      {step < 5 && (
        <button className="next" type="button" onClick={nextCheckout}>
          {step === 4 && !otpVerified
            ? "Confirm payment to continue"
            : "Save & continue →"}
        </button>
      )}
    </div>
  );
}

export function CheckoutBasketCard({ step, basketItems, quantities, setQuantities }: { step: number, basketItems: HireProduct[], quantities: Record<string, number>, setQuantities: any }) {
  return (
    <section className="checkout-card basket-card" hidden={step !== 0}>
      <header>
        <div>
          <span>YOUR BASKET</span>
          <h2>Your event hire basket</h2>
          <p>Check quantities, options and dates before checkout.</p>
        </div>
        <a href="/products">Continue shopping</a>
      </header>
      {basketItems.map((product) => (
        <article className="checkout-item" key={product.slug}>
          <img src={product.image} alt={product.name} />
          <div>
            <small>● Available</small>
            <h3>{product.name}</h3>
            <p>{product.dimensions}</p>
            <a href={`/product-${product.slug}`}>View product details</a>
          </div>
          <label>
            Quantity
            <input
              type="number"
              value={quantities[product.slug] || 1}
              min="1"
              onChange={(event) =>
                setQuantities((current: Record<string, number>) => ({
                  ...current,
                  [product.slug]: Math.max(1, Number(event.target.value) || 1),
                }))
              }
            />
          </label>
          <strong>
            ${(
              (Number(product.price.replace(/[^0-9.]/g, "")) || 0) *
              (quantities[product.slug] || 1)
            ).toFixed(2)}
            <small>per day · GST at checkout</small>
          </strong>
        </article>
      ))}
      <footer>
        <b>!</b>
        <span>
          <strong>Availability adjusted</strong> One item has limited
          stock across the selected dates.
        </span>
        <a href="/products">View alternatives</a>
      </footer>
    </section>
  );
}

export function CheckoutScheduleCard({ step }: { step: number }) {
  return (
    <section className="checkout-card" hidden={step !== 1}>
      <header>
        <div>
          <span>EVENT SCHEDULE</span>
          <h2>Confirm your hire dates</h2>
          <p>
            We use these dates to calculate the hire period and
            availability.
          </p>
        </div>
        <em>✓ Saved</em>
      </header>
      <div className="checkout-form two">
        <Field label="Event required from" value="12 Sep 2026 · 11:00 am" />
        <Field label="Event starts" value="12 Sep 2026 · 4:00 pm" />
        <Field label="Event ends" value="13 Sep 2026 · 11:00 pm" />
        <Field label="Items returned by" value="14 Sep 2026 · 12:00 pm" />
      </div>
      <label className="checkbox-line">
        <input type="checkbox" /> My venue can receive items one day
        early
      </label>
      <div className="days-note">
        <b>3 chargeable days</b>
        <span>
          Saturday 12 September, Sunday 13 September and Monday 14
          September.
        </span>
      </div>
    </section>
  );
}