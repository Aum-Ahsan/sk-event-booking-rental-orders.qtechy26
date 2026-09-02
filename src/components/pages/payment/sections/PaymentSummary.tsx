import React from "react";
export function PaymentSummary({ method, pay, paid }: { method: string; pay: () => void; paid: boolean }) {
  return (
    <aside className="payment-summary">
      <span>SECURE PAYMENT</span>
      <h2>Authorise this payment</h2>
      <b>$880.00</b>
      <small>Amount due for booking SKB-10482</small>
      <dl>
        <div>
          <dt>Payer</dt>
          <dd>Amelia Thompson</dd>
        </div>
        <div>
          <dt>Method</dt>
          <dd>
            {method === "payid"
              ? "PayID"
              : method === "bank"
                ? "Bank transfer"
                : "Cash"}
          </dd>
        </div>
        <div>
          <dt>Booking</dt>
          <dd>SKB-10482</dd>
        </div>
      </dl>
      <button
        onClick={pay}
        disabled={paid}
        className={paid ? "processing" : ""}
      >
        {paid ? "Processing payment…" : "Authorise payment"}
      </button>
      <span>
        🔒 <b>Encrypted session</b> No card details are requested for this
        transaction.
      </span>
    </aside>
  );
}