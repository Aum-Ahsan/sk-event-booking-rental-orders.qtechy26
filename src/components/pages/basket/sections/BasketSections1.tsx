import React from "react";
import pageData from "../../../../data/pages/basket.json";
import type { HireProduct } from "../../../../types/commerce";
import { Field } from "../../../landing/shared/FormControls";


export function CheckoutIntroSection() {
  return (
    <section className="checkout-intro">
      <div>
        <span>{pageData.intro.kicker}</span>
        <h1>{pageData.intro.title}</h1>
        <p>{pageData.ui.intro.desc}</p>
      </div>
      <aside>
        <b>{pageData.intro.privacyText}</b>
        <small>{pageData.ui.intro.privacyText}</small>
        <a href="/privacy">{pageData.ui.intro.privacyLink}</a>
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
        {pageData.ui.actions.back}
      </button>
      <span>{pageData.ui.actions.stepOf.replace("{step}", String(step + 1))}</span>
      {step < 5 && (
        <button className="next" type="button" onClick={nextCheckout}>
          {step === 4 && !otpVerified
            ? pageData.ui.actions.confirmPay
            : pageData.ui.actions.saveContinue}
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
          <span>{pageData.ui.basketCard.kicker}</span>
          <h2>{pageData.ui.basketCard.title}</h2>
          <p>{pageData.ui.basketCard.desc}</p>
        </div>
        <a href="/products">{pageData.ui.basketCard.continueShopping}</a>
      </header>
      {basketItems.map((product) => (
        <article className="checkout-item" key={product.slug}>
          <img src={product.image} alt={product.name} />
          <div>
            <small>{pageData.ui.basketCard.available}</small>
            <h3>{product.name}</h3>
            <p>{product.dimensions}</p>
            <a href={`/product-${product.slug}`}>{pageData.ui.basketCard.viewProduct}</a>
          </div>
          <label>
            {pageData.ui.basketCard.quantity}
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
            <small>{pageData.ui.basketCard.perDay}</small>
          </strong>
        </article>
      ))}
      <footer>
        <b>!</b>
        <span>
          <strong>{pageData.ui.basketCard.adjustedKicker}</strong> {pageData.ui.basketCard.adjustedDesc}
        </span>
        <a href="/products">{pageData.ui.basketCard.viewAlternatives}</a>
      </footer>
    </section>
  );
}

export function CheckoutScheduleCard({ step }: { step: number }) {
  return (
    <section className="checkout-card" hidden={step !== 1}>
      <header>
        <div>
          <span>{pageData.ui.scheduleCard.kicker}</span>
          <h2>{pageData.ui.scheduleCard.title}</h2>
          <p>{pageData.ui.scheduleCard.desc}</p>
        </div>
        <em>{pageData.ui.scheduleCard.saved}</em>
      </header>
      <div className="checkout-form two">
        <Field label={pageData.ui.scheduleCard.labels.from} value="12 Sep 2026 · 11:00 am" />
        <Field label={pageData.ui.scheduleCard.labels.starts} value="12 Sep 2026 · 4:00 pm" />
        <Field label={pageData.ui.scheduleCard.labels.ends} value="13 Sep 2026 · 11:00 pm" />
        <Field label={pageData.ui.scheduleCard.labels.returned} value="14 Sep 2026 · 12:00 pm" />
      </div>
      <label className="checkbox-line">
        <input type="checkbox" /> {pageData.ui.scheduleCard.earlyCheck}
      </label>
      <div className="days-note">
        <b>{pageData.ui.scheduleCard.chargeableTitle}</b>
        <span>{pageData.ui.scheduleCard.chargeableDesc}</span>
      </div>
    </section>
  );
}