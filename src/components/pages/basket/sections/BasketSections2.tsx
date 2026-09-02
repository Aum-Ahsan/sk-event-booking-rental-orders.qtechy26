import React from "react";
import pageData from "../../../../data/pages/basket.json";
import { Field } from "../../../landing/shared/FormControls";


export function CheckoutCustomerCard({ step }: { step: number }) {
  return (
    <section className="checkout-card" hidden={step !== 1}>
      <header>
        <div>
          <span>{pageData.ui.customerCard.kicker}</span>
          <h2>{pageData.ui.customerCard.title}</h2>
          <p>{pageData.ui.customerCard.desc}</p>
        </div>
        <a href="/contact">{pageData.ui.customerCard.help}</a>
      </header>
      <div className="checkout-form two">
        <Field label={pageData.ui.customerCard.fields.firstName} value="Amelia" />
        <Field label={pageData.ui.customerCard.fields.lastName} value="Thompson" />
        <Field label={pageData.ui.customerCard.fields.email} value="amelia.t@example.com" />
        <Field label={pageData.ui.customerCard.fields.mobile} value="0412 345 678" />
        <Field label={pageData.ui.customerCard.fields.company} value="Optional" />
        <Field label={pageData.ui.customerCard.fields.abn} value="Optional" />
      </div>
      <h3>{pageData.ui.customerCard.eventTitle}</h3>
      <div className="checkout-form two">
        <Field label={pageData.ui.customerCard.eventFields.type} value="Wedding reception" />
        <Field label={pageData.ui.customerCard.eventFields.guests} value="60" />
        <Field label={pageData.ui.customerCard.eventFields.venue} value="Willow & Stone Estate" />
        <Field label={pageData.ui.customerCard.eventFields.postcode} value="3000" />
        <Field
          wide
          label={pageData.ui.customerCard.eventFields.address}
          value="18 Garden Lane, Melbourne VIC 3000"
        />
        <Field
          wide
          label={pageData.ui.customerCard.eventFields.contact}
          value="Jordan Lee · 0412 000 111"
        />
      </div>
      <label className="checkbox-line">
        {pageData.extracted.text_1}{" "}
        <input type="radio" name="setting" defaultChecked /> {pageData.extracted.text_2}{" "}
        <input type="radio" name="setting" /> {pageData.extracted.text_3}{" "}
        <input type="radio" name="setting" /> {pageData.extracted.text_4}</label>
    </section>
  );
}

export function CheckoutFulfilmentCard({ step }: { step: number }) {
  return (
    <section className="checkout-card" hidden={step !== 2}>
      <header>
        <div>
          <span>{pageData.extracted.text_5}</span>
          <h2>{pageData.extracted.text_6}</h2>
          <p>{pageData.ui.logisticsCard.desc1}</p>
        </div>
      </header>
      <h3>{pageData.extracted.text_7}</h3>
      <div className="choice-cards">
        {pageData.deliveryChoices.map((x, i) => (
          <label className={i === 2 ? "selected" : ""} key={x.label}>
            <input
              name="receive"
              type="radio"
              defaultChecked={i === 2}
            />
            <b>{x.label}</b>
            <small>{x.desc}</small>
            <em>{i === 2 ? "From $240" : ""}</em>
          </label>
        ))}
      </div>
      <h3>{pageData.extracted.text_8}</h3>
      <div className="choice-cards">
        {pageData.returnChoices.map((x, i) => (
          <label className={i === 1 ? "selected" : ""} key={x.label}>
            <input
              name="return"
              type="radio"
              defaultChecked={i === 1}
            />
            <b>{x.label}</b>
            <small>{x.desc}</small>
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
          <span>{pageData.extracted.text_9}</span>
          <h2>{pageData.extracted.text_10}</h2>
          <p>{pageData.ui.logisticsCard.desc2}</p>
        </div>
      </header>
      <div className="access-layout">
        <img
          src="/images/warehouse-team.png"
          alt={pageData.extracted.attr_11}
        />
        <div className="checkout-form two">
          <Field
            label={pageData.extracted.attr_12}
            value="Venue loading bay"
          />
          <Field label={pageData.extracted.attr_13} value="Under 25 metres" />
          <Field
            label={pageData.extracted.attr_14}
            value="Ground floor · no stairs"
          />
          <Field label={pageData.extracted.attr_15} value="1.2 metres" />
          <Field label={pageData.extracted.attr_16} value="Lawn and paved path" />
          <Field
            label={pageData.extracted.attr_17}
            value="Yes · standard outlet"
          />
          <Field
            label={pageData.extracted.attr_18}
            value="Ground stakes permitted"
          />
          <Field
            label={pageData.extracted.attr_19}
            value="No vehicle access after 3:00 pm"
          />
        </div>
      </div>
    </section>
  );
}