import React from "react";
import pageData from "../../../../data/pages/basket.json";

export function CheckoutExtrasCard({ step, extras, toggleExtra }: { step: number, extras: string[], toggleExtra: (e: string) => void }) {
  return (
    <section className="checkout-card extras-card" hidden={step !== 3}>
      <header>
        <div>
          <span>{pageData.ui.extrasCard.kicker}</span>
          <h2>{pageData.ui.extrasCard.title}</h2>
          <p>{pageData.ui.extrasCard.desc}</p>
        </div>
      </header>
      <div>
        {pageData.extras.map((x) => (
          <label
            className={extras.includes(x.id) ? "selected" : ""}
            key={x.id}
          >
            <img src={x.image} alt="" />
            <span>
              <b>{x.title}</b>
              <small>{x.desc}</small>
            </span>
            <input
              type="checkbox"
              checked={extras.includes(x.id)}
              onChange={() => toggleExtra(x.id)}
            />
          </label>
        ))}
      </div>
      <div className="promo">
        <span>
          <b>{pageData.ui.extrasCard.promoTitle}</b>
          <small>{pageData.ui.extrasCard.promoDesc}</small>
        </span>
        <input defaultValue="CELEBRATE20" />
        <button>{pageData.ui.extrasCard.promoBtn}</button>
      </div>
    </section>
  );
}

export function CheckoutPaymentCard({ step, paymentMethod, setPaymentMethod, otpVerified, setOtpVerified }: any) {
  return (
    <section className="checkout-card payment-card" hidden={step !== 4}>
      <header>
        <div>
          <span>{pageData.ui.paymentCard.kicker}</span>
          <h2>{pageData.extracted.text_20}</h2>
          <p>{pageData.ui.paymentCard.desc}</p>
        </div>
      </header>
      <div className="payment-options">
        {pageData.paymentOptions.map((x) => (
          <label className={paymentMethod === x ? "selected" : ""} key={x}>
            <input
              type="radio"
              name="pay"
              checked={paymentMethod === x}
              onChange={() => {
                setPaymentMethod(x);
                setOtpVerified(false);
              }}
            />
            <b>{x}</b>
          </label>
        ))}
      </div>
      <div className="verify-checkout">
        <span>
          <b>{pageData.extracted.text_21}</b>
          <small>
            {paymentMethod === "PayID"
              ? "PayID instructions and a unique payment reference will appear after approval."
              : paymentMethod === "Bank transfer"
                ? "Bank account details and your unique booking reference will appear after approval."
                : "Cash payment must be approved by the event team and receipted when received."}
          </small>
        </span>
        <button onClick={() => setOtpVerified(true)}>
          {otpVerified ? "✓ Preference confirmed" : "Confirm preference"}
        </button>
      </div>
    </section>
  );
}

export function CheckoutReviewCard({ step, paymentMethod, setStep }: any) {
  return (
    <section
      id="final-review"
      className="checkout-card review-card"
      hidden={step !== 5}
    >
      <header>
        <div>
          <span>{pageData.extracted.text_22}</span>
          <h2>{pageData.extracted.text_23}</h2>
          <p>{pageData.ui.summaryCard.desc}</p>
        </div>
      </header>
      <div className="review-summaries">
        {[
          { label: "Event and customer", value: "Amelia Thompson · Wedding reception · 60 guests" },
          { label: "Delivery and return", value: "Delivery + setup · SK collection" },
          { label: "Payment", value: `${paymentMethod} · preference confirmed` },
        ].map((x) => (
          <article key={x.label}>
            <b>{x.label}</b>
            <p>{x.value}</p>
            <button>{pageData.extracted.text_24}</button>
          </article>
        ))}
      </div>
      <label className="checkbox-line">
        <input type="checkbox" defaultChecked /> {pageData.extracted.text_25}</label>
      <footer>
        <button type="button" onClick={() => setStep(4)}>
          {pageData.extracted.text_26}</button>
        <button
          onClick={() => {
            window.location.href = "/booking-request-confirmation";
          }}
        >
          {pageData.extracted.text_27}</button>
      </footer>
    </section>
  );
}

export function BookingEstimateSidebar({ threeDayHire, gst, estimatedTotal, setStep }: any) {
  return (
    <aside className="booking-estimate">
      <span>{pageData.extracted.text_28}</span>
      <h2>{pageData.extracted.text_29}</h2>
      <b>{pageData.extracted.text_30}</b>
      <small>{pageData.extracted.text_31}</small>
      {[
        { label: "Three-day product hire", value: `$${threeDayHire.toFixed(2)}` },
        { label: "GST", value: `$${gst.toFixed(2)}` },
        { label: "Delivery and setup", value: "$240.00" },
        { label: "Return collection", value: "$85.00" },
        { label: "Damage protection", value: "$49.00" },
      ].map((x) => (
        <div key={x.label}>
          <span>{x.label}</span>
          <b>{x.value}</b>
        </div>
      ))}
      <strong>
        <small>{pageData.extracted.text_32}</small>${estimatedTotal.toFixed(2)}
      </strong>
      <p>{pageData.extracted.text_33}</p>
      <button
        onClick={() => {
          setStep(5);
          window.scrollTo({ top: 150, behavior: "smooth" });
        }}
      >
        {pageData.extracted.text_34}</button>
      <small>{pageData.extracted.text_35}</small>
    </aside>
  );
}

export function CheckoutHelpSection() {
  return (
    <section className="checkout-help">
      <div>
        <span>{pageData.extracted.text_36}</span>
        <h2>{pageData.extracted.text_37}</h2>
        <p>
          {pageData.extracted.text_38}</p>
      </div>
      <a href="tel:0390000000">{pageData.extracted.text_39}</a>
      <a href="/contact">{pageData.extracted.text_40}</a>
    </section>
  );
}