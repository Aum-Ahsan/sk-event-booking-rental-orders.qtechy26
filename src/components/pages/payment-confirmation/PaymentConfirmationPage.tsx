import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/payment-confirmation.json";

export function PaymentConfirmationPage() {
  return (
    <div className="public-site standalone-confirmation">
      <PublicHeader />
      <main>
        <section className="confirmation-hero payment-success">
          <img
            src="/images/warehouse-team.png"
            alt="SK Event Hire payment confirmation"
          />
          <div>
            <i>✓</i>
            <span>PAYMENT APPROVED</span>
            <h1>Thank you, your payment is complete.</h1>
            <p>
              Your payment of <b>{pageData.amount}</b> for booking <b>{pageData.reference}</b> was
              successful. A tax receipt has been emailed to Amelia Thompson.
            </p>
            <dl>
              <div>
                <dt>Amount paid</dt>
                <dd>{pageData.amount}</dd>
              </div>
              <div>
                <dt>Reference</dt>
                <dd>{pageData.reference}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{pageData.timing}</dd>
              </div>
            </dl>
            <div className="confirmation-actions">
              <a className="primary" href="/products">
                Continue browsing →
              </a>
              <a href="/contact">Contact support</a>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}