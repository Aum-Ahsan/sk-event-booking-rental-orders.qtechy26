import React from "react";
import pageData from "../../../../data/pages/booking-confirmation.json";

export function BookingConfirmationSection() {
  return (
    <section className="booking-confirmation standalone-card">
              <header>
                <div>
                  <span>{pageData.hero.kicker}</span>
                  <h1>{pageData.extracted.text_1}</h1>
                  <p>{pageData.hero.description}</p>
                </div>
                <strong>
                  <small>{pageData.extracted.text_2}</small>{pageData.reference}
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
                    <em>{pageData.extracted.text_3}</em>
                  </article>
                ))}
              </div>
              <div className="confirmation-details">
                <article>
                  <h3>{pageData.extracted.text_4}</h3>
                  <p>
                    {pageData.extracted.text_5}<b>{pageData.amount}</b>
                  </p>
                  <p>
                    {pageData.extracted.text_6}<b>{pageData.status.badge}</b>
                  </p>
                  <a href="/payment">{pageData.status.primaryAction}</a>
                </article>
                <article>
                  <h3>{pageData.extracted.text_7}</h3>
                  <p dangerouslySetInnerHTML={{ __html: pageData.items }}></p>
                  <a href="/contact">{pageData.status.secondaryAction}</a>
                </article>
                <article>
                  <h3>{pageData.extracted.text_8}</h3>
                  <p>{pageData.status.helpText}</p>
                  <a href="/contact">{pageData.extracted.text_9}</a>
                </article>
              </div>
              <footer>
                <span>
                  <b>{pageData.extracted.text_10}</b>
                  <small>
                    {pageData.extracted.text_11}</small>
                </span>
                <a href="/contact">{pageData.extracted.text_12}</a>
                <a className="danger" href="/contact">
                  {pageData.extracted.text_13}</a>
              </footer>
            </section>
  );
}
