import React from "react";
import pageData from "../../../../data/pages/basket.json";
import { Field } from "../../../landing/shared/FormControls";


export function CheckoutCustomerCard({ step }: { step: number }) {
  return (
    <section className="checkout-card" hidden={step !== 1}>
      <header>
        <div>
          <span>CUSTOMER & EVENT</span>
          <h2>Your contact details</h2>
          <p>Enter the booking contact details for this event.</p>
        </div>
        <a href="/contact">Need help?</a>
      </header>
      <div className="checkout-form two">
        <Field label="First name" value="Amelia" />
        <Field label="Last name" value="Thompson" />
        <Field label="Email" value="amelia.t@example.com" />
        <Field label="Mobile" value="0412 345 678" />
        <Field label="Company / organisation" value="Optional" />
        <Field label="ABN / purchase order" value="Optional" />
      </div>
      <h3>Where is the event?</h3>
      <div className="checkout-form two">
        <Field label="Event type" value="Wedding reception" />
        <Field label="Guest count" value="60" />
        <Field label="Venue name" value="Willow & Stone Estate" />
        <Field label="Postcode" value="3000" />
        <Field
          wide
          label="Event address"
          value="18 Garden Lane, Melbourne VIC 3000"
        />
        <Field
          wide
          label="On-site contact"
          value="Jordan Lee · 0412 000 111"
        />
      </div>
      <label className="checkbox-line">
        Event setting:{" "}
        <input type="radio" name="setting" defaultChecked /> Indoor{" "}
        <input type="radio" name="setting" /> Outdoor{" "}
        <input type="radio" name="setting" /> Both
      </label>
    </section>
  );
}

export function CheckoutFulfilmentCard({ step }: { step: number }) {
  return (
    <section className="checkout-card" hidden={step !== 2}>
      <header>
        <div>
          <span>FULFILMENT</span>
          <h2>Delivery and return</h2>
          <p>
            Choose both journeys so labour and timing can be confirmed.
          </p>
        </div>
      </header>
      <h3>How will you receive the items?</h3>
      <div className="choice-cards">
        {pageData.deliveryChoices.map((x, i) => (
          <label className={i === 2 ? "selected" : ""} key={x[0]}>
            <input
              name="receive"
              type="radio"
              defaultChecked={i === 2}
            />
            <b>{x[0]}</b>
            <small>{x[1]}</small>
            <em>{i === 2 ? "From $240" : ""}</em>
          </label>
        ))}
      </div>
      <h3>How will the items come back?</h3>
      <div className="choice-cards">
        {pageData.returnChoices.map((x, i) => (
          <label className={i === 1 ? "selected" : ""} key={x[0]}>
            <input
              name="return"
              type="radio"
              defaultChecked={i === 1}
            />
            <b>{x[0]}</b>
            <small>{x[1]}</small>
            <em>{i === 1 ? "From $85" : ""}</em>
          </label>
        ))}
      </div>
    </section>
  );
}

export function CheckoutAccessCard({ step }: { step: number }) {
  return (
    <section className="checkout-card access-card" hidden={step !== 2}>
      <header>
        <div>
          <span>VENUE ACCESS</span>
          <h2>Tell us about access</h2>
          <p>
            Clear access details help us allocate the right crew and
            vehicle.
          </p>
        </div>
      </header>
      <div className="access-layout">
        <img
          src="/images/warehouse-team.png"
          alt="Event delivery and venue access"
        />
        <div className="checkout-form two">
          <Field
            label="Parking / loading area"
            value="Venue loading bay"
          />
          <Field label="Distance to setup" value="Under 25 metres" />
          <Field
            label="Stairs or lift"
            value="Ground floor · no stairs"
          />
          <Field label="Stairs / doorway width" value="1.2 metres" />
          <Field label="Ground surface" value="Lawn and paved path" />
          <Field
            label="Power available"
            value="Yes · standard outlet"
          />
          <Field
            label="Anchoring permitted"
            value="Ground stakes permitted"
          />
          <Field
            label="Venue restrictions"
            value="No vehicle access after 3:00 pm"
          />
        </div>
      </div>
    </section>
  );
}