import React from "react";
import pageData from "../../../../data/pages/payment.json";

export function PaymentSummary({ method, pay, paid }: { method: string; pay: () => void; paid: boolean }) {
  return (
    <aside className="payment-summary">
      <span>{pageData.summary.kicker}</span>
      <h2>{pageData.extracted.text_32}</h2>
      <b>{pageData.summary.amount}</b>
      <small>{pageData.extracted.text_33}</small>
      <dl>
        <div>
          <dt>{pageData.extracted.text_34}</dt>
          <dd>{pageData.extracted.text_35}</dd>
        </div>
        <div>
          <dt>{pageData.extracted.text_36}</dt>
          <dd>
            {method === "payid"
              ? "PayID"
              : method === "bank"
                ? "Bank transfer"
                : "Cash"}
          </dd>
        </div>
        <div>
          <dt>{pageData.extracted.text_37}</dt>
          <dd>{pageData.extracted.text_38}</dd>
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
        🔒 <b>{pageData.summary.badge}</b> {pageData.extracted.text_39}</span>
    </aside>
  );
}