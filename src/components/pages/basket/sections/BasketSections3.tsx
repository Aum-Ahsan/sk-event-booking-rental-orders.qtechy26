import React from "react";
import pageData from "../../../../data/pages/basket.json";

export function CheckoutExtrasCard({ step, extras, toggleExtra }: { step: number, extras: string[], toggleExtra: (e: string) => void }) {
  return (
    <section className="checkout-card extras-card" hidden={step !== 3}>
      <header>
        <div>
          <span>OPTIONAL ADD-ONS</span>
          <h2>Useful extras</h2>
          <p>
            Add practical extras now and we’ll confirm final stock and
            pricing.
          </p>
        </div>
      </header>
      <div>
        {pageData.extras.map((x) => (
          <label
            className={extras.includes(x[0]) ? "selected" : ""}
            key={x[0]}
          >
            <img src={x[3]} alt="" />
            <span>
              <b>{x[1]}</b>
              <small>{x[2]}</small>
            </span>
            <input
              type="checkbox"
              checked={extras.includes(x[0])}
              onChange={() => toggleExtra(x[0])}
            />
          </label>
        ))}
      </div>
      <div className="promo">
        <span>
          <b>Have a promo code?</b>
          <small>
            Promotions are validated before your total updates.
          </small>
        </span>
        <input defaultValue="CELEBRATE20" />
        <button>Apply</button>
      </div>
    </section>
  );
}

export function CheckoutPaymentCard({ step, paymentMethod, setPaymentMethod, otpVerified, setOtpVerified }: any) {
  return (
    <section className="checkout-card payment-card" hidden={step !== 4}>
      <header>
        <div>
          <span>PAYMENT PREFERENCE</span>
          <h2>Choose how you’d like to pay</h2>
          <p>
            No charge is made until your booking conditions are ready.
          </p>
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
          <b>Confirm payment preference</b>
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
          <span>FINAL REVIEW</span>
          <h2>Review your booking request</h2>
          <p>
            Check the important details before sending your request.
          </p>
        </div>
      </header>
      <div className="review-summaries">
        {[
          [
            "Event and customer",
            "Amelia Thompson · Wedding reception · 60 guests",
          ],
          ["Delivery and return", "Delivery + setup · SK collection"],
          ["Payment", `${paymentMethod} · preference confirmed`],
        ].map((x) => (
          <article key={x[0]}>
            <b>{x[0]}</b>
            <p>{x[1]}</p>
            <button>Edit</button>
          </article>
        ))}
      </div>
      <label className="checkbox-line">
        <input type="checkbox" defaultChecked /> I agree to the rental
        terms, cancellation policy, damage policy and payment
        conditions.
      </label>
      <footer>
        <button type="button" onClick={() => setStep(4)}>
          ← Back to payment
        </button>
        <button
          onClick={() => {
            window.location.href = "/booking-request-confirmation";
          }}
        >
          Send booking request
        </button>
      </footer>
    </section>
  );
}

export function BookingEstimateSidebar({ threeDayHire, gst, estimatedTotal, setStep }: any) {
  return (
    <aside className="booking-estimate">
      <span>BOOKING ESTIMATE</span>
      <h2>Your booking estimate</h2>
      <b>Wedding reception</b>
      <small>12–14 September 2026 · Melbourne VIC</small>
      {[
        ["Three-day product hire", `$${threeDayHire.toFixed(2)}`],
        ["GST", `$${gst.toFixed(2)}`],
        ["Delivery and setup", "$240.00"],
        ["Return collection", "$85.00"],
        ["Damage protection", "$49.00"],
      ].map((x) => (
        <div key={x[0]}>
          <span>{x[0]}</span>
          <b>{x[1]}</b>
        </div>
      ))}
      <strong>
        <small>Estimated total</small>${estimatedTotal.toFixed(2)}
      </strong>
      <p>Final total is confirmed after stock and logistics review.</p>
      <button
        onClick={() => {
          setStep(5);
          window.scrollTo({ top: 150, behavior: "smooth" });
        }}
      >
        Continue to review
      </button>
      <small>Secure checkout · Details protected</small>
    </aside>
  );
}

export function CheckoutHelpSection() {
  return (
    <section className="checkout-help">
      <div>
        <span>PLANNING SUPPORT</span>
        <h2>Need help before your event?</h2>
        <p>
          Talk to our event team about quantities, venue access, setup or
          schedule changes.
        </p>
      </div>
      <a href="tel:0390000000">Call 03 9000 0000</a>
      <a href="/contact">Message our team</a>
    </section>
  );
}