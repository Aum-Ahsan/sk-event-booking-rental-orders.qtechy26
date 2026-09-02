import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/booking-request-confirmation.json";

export function BookingRequestConfirmationPage() {
  return (
    <div className="public-site standalone-confirmation">
      <PublicHeader />
      <main>
        <section className="confirmation-hero">
          <img
            src="/images/warehouse-team.png"
            alt="SK Event Hire team reviewing a booking request"
          />
          <div>
            <i>✓</i>
            <span>REQUEST RECEIVED</span>
            <h1>We’ve received your booking request.</h1>
            <p>
              Booking {pageData.reference} is awaiting availability and logistics approval.
              This request is saved on its own confirmation screen and is not
              yet a confirmed booking.
            </p>
            <dl>
              <div>
                <dt>Event</dt>
                <dd>{pageData.event}</dd>
              </div>
              <div>
                <dt>Delivery window</dt>
                <dd>{pageData.delivery}</dd>
              </div>
              <div>
                <dt>SK collection</dt>
                <dd>{pageData.collection}</dd>
              </div>
            </dl>
            <div className="confirmation-actions">
              <a className="primary" href="/booking-confirmation">
                Continue after approval →
              </a>
              <a href="/contact">Contact the booking team</a>
              <a href="/products">Return to products</a>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}