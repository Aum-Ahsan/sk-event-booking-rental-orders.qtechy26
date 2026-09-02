import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/booking-confirmation.json";

export function BookingConfirmationPage() {
  return (
    <div className="public-site standalone-confirmation">
      <PublicHeader />
      <main>
        <section className="booking-confirmation standalone-card">
          <header>
            <div>
              <span>BOOKING CONFIRMED</span>
              <h1>Your booking is confirmed.</h1>
              <p>
                Your stock, crew and payment conditions are approved. Keep this
                operational schedule available for the event.
              </p>
            </div>
            <strong>
              <small>Booking number</small>{pageData.reference}
            </strong>
          </header>
          <div className="confirmation-timeline">
            {pageData.timeline.map((x, i) => (
              <article key={x[0]}>
                <i>{i + 1}</i>
                <span>
                  <b>{x[0]}</b>
                  <small>{x[1]}</small>
                </span>
                <em>Scheduled</em>
              </article>
            ))}
          </div>
          <div className="confirmation-details">
            <article>
              <h3>Payment status</h3>
              <p>
                Amount due <b>{pageData.amount}</b>
              </p>
              <p>
                Payment methods <b>PayID · bank transfer · approved cash</b>
              </p>
              <a href="/payment">Pay deposit securely</a>
            </article>
            <article>
              <h3>Items confirmed</h3>
              <p dangerouslySetInnerHTML={{ __html: pageData.items }}></p>
              <a href="/contact">Request an item list</a>
            </article>
            <article>
              <h3>Need support?</h3>
              <p>Message the booking team or call 03 9000 0000.</p>
              <a href="/contact">Contact booking team</a>
            </article>
          </div>
          <footer>
            <span>
              <b>Need to change your plans?</b>
              <small>
                Changes depend on availability and may affect pricing.
              </small>
            </span>
            <a href="/contact">Request a booking change</a>
            <a className="danger" href="/contact">
              Cancel booking
            </a>
          </footer>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}