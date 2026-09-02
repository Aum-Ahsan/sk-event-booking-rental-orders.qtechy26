import React, { useState, useEffect, useRef } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import { Field } from "../../landing/shared/FormControls";
import eventTypes from "../../../data/commerce/eventTypes.json";
export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [budget, setBudget] = useState("$3,000–$5,000");
  const [formStep, setFormStep] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const [summary, setSummary] = useState({
    eventType: "Event not selected",
    eventDate: "Date not selected",
    guests: "Guest count not entered",
    suburb: "Location not entered",
    setting: "Setting not selected",
    support: "No equipment selected",
    service: "Service not selected",
  });
  const goToFormStep = (next: number) => {
    if (next > formStep + 1) return;
    if (next > formStep) {
      const current =
        formRef.current?.querySelectorAll<HTMLElement>(":scope > section")[
          formStep
        ];
      if (formStep === 1) {
        const start = formRef.current?.elements.namedItem(
          "startTime",
        ) as HTMLInputElement | null;
        const finish = formRef.current?.elements.namedItem(
          "finishTime",
        ) as HTMLInputElement | null;
        finish?.setCustomValidity(
          start?.value && finish.value && finish.value <= start.value
            ? "Finish time must be later than start time."
            : "",
        );
      }
      const invalid = current?.querySelector<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >(":invalid");
      if (invalid) {
        invalid.reportValidity();
        invalid.focus();
        return;
      }
    }
    setFormStep(Math.max(0, Math.min(3, next)));
    setTimeout(
      () =>
        document
          .querySelector(".enquiry-progress")
          ?.scrollIntoView({ behavior: "smooth", block: "center" }),
      20,
    );
  };
  const updateSummary = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const equipment = data.getAll("equipment").map(String);
    setSummary({
      eventType: String(data.get("eventType") || "Event not selected"),
      eventDate: String(data.get("eventDate") || "Date not selected"),
      guests: data.get("guestCount")
        ? `${data.get("guestCount")} guests`
        : "Guest count not entered",
      suburb: String(
        data.get("suburb") ||
          data.get("deliveryPostcode") ||
          "Location not entered",
      ),
      setting: String(data.get("setting") || "Setting not selected"),
      support: equipment.length
        ? equipment.join(", ")
        : "No equipment selected",
      service: String(data.get("preferredService") || "Service not selected"),
    });
  };
  useEffect(() => {
    formRef.current
      ?.querySelectorAll<HTMLElement>(":scope > section")
      .forEach((section, index) => {
        section.hidden = index !== formStep;
        section.classList.toggle("active", index === formStep);
      });
    const duplicatePostcode = formRef.current?.elements.namedItem(
      "eventPostcode",
    ) as HTMLInputElement | null;
    if (duplicatePostcode) {
      duplicatePostcode.disabled = true;
      const label = duplicatePostcode.closest("label");
      if (label) label.hidden = true;
    }
  }, [formStep]);
  return (
    <div className="public-site contact-editorial">
      <PublicHeader active="Contact" />
      <main>
        <section className="contact-main-hero">
          <div>
            <span>CONTACT & SERVICE AREA</span>
            <h1>Let’s plan your event</h1>
            <p>
              Tell us what you’re planning and we’ll help with products,
              quantities, timing and logistics.
            </p>
            <a href="#contact-form">Send an enquiry →</a>
            <a href="tel:0390000000">Check your area</a>
            <small>✓ Friendly Melbourne event hire support</small>
          </div>
          <img
            src="/images/tableware-product.png"
            alt="Event planner speaking with a customer"
          />
        </section>
        <section className="hours editorial-section">
          <div>
            <span>OPENING HOURS</span>
            <h2>Trading and collection hours</h2>
            <p>
              Collection and return appointments are confirmed with your
              booking.
            </p>
          </div>
          <dl>
            <div>
              <dt>Monday–Friday</dt>
              <dd>9:00am–4:00pm</dd>
            </div>
            <div>
              <dt>Saturday</dt>
              <dd>By confirmed appointment</dd>
            </div>
            <div>
              <dt>Sunday</dt>
              <dd>Closed unless event support is contracted</dd>
            </div>
            <div>
              <dt>Public holidays and special events</dt>
              <dd>Times vary and are confirmed in advance.</dd>
            </div>
          </dl>
        </section>
        <section id="location" className="collection-band">
          <div className="collection-map real-map">
            <iframe
              title="Keilor Park collection location"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=144.78%2C-37.76%2C144.91%2C-37.67&amp;layer=mapnik&amp;marker=-37.724%2C144.849"
            />
            <i>SK</i>
            <span>Keilor Park</span>
            <span>Melbourne CBD</span>
            <span>Airport</span>
          </div>
          <div>
            <span>VISIT US IN MELBOURNE</span>
            <h2>Find us and plan your collection</h2>
            <article>
              <b>SK Event Hire collection point</b>
              <small>Keilor Park VIC 3042 · Appointment required</small>
            </article>
            <div>
              {[
                ["1", "Confirm collection"],
                ["2", "Parking and arrival"],
                ["3", "Loading and vehicle suitability"],
                ["4", "After-hours support"],
              ].map((x) => (
                <b key={x[0]}>
                  <i>{x[0]}</i>
                  {x[1]}
                </b>
              ))}
            </div>
            <a href="/request-quote">Book a collection →</a>
          </div>
        </section>
        <section id="contact-form" className="enquiry-wrap">
          <div className="editorial-section">
            <header>
              <span>EVENT ENQUIRY</span>
              <h2>Tell us what you know</h2>
              <p>
                Complete one clear step at a time. Required fields are marked
                with *.
              </p>
            </header>
            <nav
              className="enquiry-progress"
              aria-label="Event enquiry progress"
            >
              {[
                "Your details",
                "Event details",
                "Equipment & support",
                "Review & send",
              ].map((label, index) => (
                <button
                  type="button"
                  disabled={index > formStep + 1}
                  className={
                    index === formStep
                      ? "active"
                      : index < formStep
                        ? "complete"
                        : ""
                  }
                  aria-current={index === formStep ? "step" : undefined}
                  onClick={() => goToFormStep(index)}
                  key={label}
                >
                  <i>{index < formStep ? "✓" : index + 1}</i>
                  <span>{label}</span>
                </button>
              ))}
            </nav>
            <div className="enquiry-layout">
              <form
                ref={formRef}
                onChange={(e) => updateSummary(e.currentTarget)}
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSubmitError("");
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const start = String(data.get("startTime") || "");
                  const finish = String(data.get("finishTime") || "");
                  const finishInput = form.elements.namedItem(
                    "finishTime",
                  ) as HTMLInputElement | null;
                  finishInput?.setCustomValidity(
                    start && finish && finish <= start
                      ? "Finish time must be later than start time."
                      : "",
                  );
                  if (!form.reportValidity()) return;
                  const response = await fetch("/api/enquiries", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                      customerName: `${data.get("firstName")} ${data.get("lastName")}`,
                      email: data.get("email"),
                      mobile: data.get("mobile"),
                      eventType: data.get("eventType"),
                      eventDate: data.get("eventDate"),
                      message: data.get("notes"),
                    }),
                  });
                  if (!response.ok) {
                    const result = (await response.json()) as {
                      error?: string;
                    };
                    setSubmitError(
                      result.error || "The enquiry could not be submitted.",
                    );
                    return;
                  }
                  setSent(true);
                }}
              >
                <section
                  className={`enquiry-step ${formStep === 0 ? "active" : ""}`}
                  data-enquiry-step="0"
                >
                  <h3>
                    <i>1</i>Your contact details
                  </h3>
                  <div className="form-grid contact-fields">
                    <label>
                      First name *
                      <input
                        name="firstName"
                        required
                        autoComplete="given-name"
                        minLength={2}
                        maxLength={60}
                        placeholder="First name"
                      />
                    </label>
                    <label>
                      Last name *
                      <input
                        name="lastName"
                        required
                        autoComplete="family-name"
                        minLength={2}
                        maxLength={60}
                        placeholder="Last name"
                      />
                    </label>
                    <label>
                      Email address *
                      <input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="name@example.com"
                      />
                    </label>
                    <label>
                      Mobile number *
                      <input
                        name="mobile"
                        type="tel"
                        required
                        autoComplete="tel"
                        inputMode="numeric"
                        pattern="(?:\\+?61|0)4[0-9]{8}"
                        maxLength={12}
                        placeholder="0412345678"
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /[^0-9+]/g,
                            "",
                          );
                        }}
                      />
                      <small>
                        Australian mobile only, for example 0412345678.
                      </small>
                    </label>
                    <label>
                      Preferred contact *
                      <select name="preferredContact" required defaultValue="">
                        <option value="" disabled>
                          Select contact method
                        </option>
                        <option>Email</option>
                        <option>Mobile call</option>
                        <option>SMS</option>
                        <option>Email and mobile</option>
                      </select>
                    </label>
                    <label>
                      Best contact time *
                      <select name="bestContactTime" required defaultValue="">
                        <option value="" disabled>
                          Select best time
                        </option>
                        <option>Weekday morning (9am–12pm)</option>
                        <option>Weekday afternoon (12pm–5pm)</option>
                        <option>Weekday evening (5pm–7pm)</option>
                        <option>Saturday morning</option>
                        <option>Any business hours</option>
                      </select>
                    </label>
                    <label>
                      Delivery postcode *
                      <input
                        name="deliveryPostcode"
                        required
                        autoComplete="postal-code"
                        inputMode="numeric"
                        pattern="[0-9]{4}"
                        maxLength={4}
                        placeholder="3000"
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value
                            .replace(/\\D/g, "")
                            .slice(0, 4);
                        }}
                      />
                      <small>
                        Used to confirm the correct Melbourne service area.
                      </small>
                    </label>
                  </div>
                  <footer className="enquiry-step-actions">
                    <span>Step 1 of 4</span>
                    <button type="button" onClick={() => goToFormStep(1)}>
                      Continue →
                    </button>
                  </footer>
                </section>
                <section>
                  <h3>
                    <i>2</i>About your event
                  </h3>
                  <div className="form-grid contact-fields">
                    <label>
                      Event type *
                      <select name="eventType" required defaultValue="">
                        <option value="" disabled>
                          Select event type
                        </option>
                        {eventTypes.map((x) => (
                          <option key={x}>{x}</option>
                        ))}
                      </select>
                    </label>
                    <label>
                      Event date *
                      <input
                        name="eventDate"
                        type="date"
                        required
                        min="2026-08-03"
                      />
                    </label>
                    <label>
                      Start time *
                      <input
                        name="startTime"
                        type="time"
                        required
                        step="900"
                        onChange={(e) => {
                          const finish =
                            e.currentTarget.form?.elements.namedItem(
                              "finishTime",
                            ) as HTMLInputElement | null;
                          finish?.setCustomValidity("");
                        }}
                      />
                    </label>
                    <label>
                      Finish time *
                      <input
                        name="finishTime"
                        type="time"
                        required
                        step="900"
                        onChange={(e) => e.currentTarget.setCustomValidity("")}
                      />
                    </label>
                    <label>
                      Estimated guest count *
                      <input
                        name="guestCount"
                        type="number"
                        required
                        inputMode="numeric"
                        min={1}
                        max={2200}
                        step={1}
                        placeholder="e.g. 80"
                      />
                    </label>
                    <label>
                      Venue name
                      <input
                        name="venueName"
                        maxLength={120}
                        placeholder="Venue or property name"
                      />
                    </label>
                    <label className="wide-field">
                      Address line 1 *
                      <input
                        name="address1"
                        required
                        autoComplete="address-line1"
                        minLength={3}
                        maxLength={120}
                        placeholder="Street number and street name"
                      />
                    </label>
                    <label className="wide-field">
                      Address line 2
                      <input
                        name="address2"
                        autoComplete="address-line2"
                        maxLength={120}
                        placeholder="Unit, level, building (optional)"
                      />
                    </label>
                    <label>
                      Suburb *
                      <input
                        name="suburb"
                        required
                        autoComplete="address-level2"
                        minLength={2}
                        maxLength={60}
                        placeholder="Suburb"
                      />
                    </label>
                    <label>
                      Postcode *
                      <input
                        name="eventPostcode"
                        required
                        autoComplete="postal-code"
                        inputMode="numeric"
                        pattern="[0-9]{4}"
                        maxLength={4}
                        placeholder="3000"
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value
                            .replace(/\\D/g, "")
                            .slice(0, 4);
                        }}
                      />
                    </label>
                    <label>
                      State *
                      <select name="state" required defaultValue="VIC">
                        <option>ACT</option>
                        <option>NSW</option>
                        <option>NT</option>
                        <option>QLD</option>
                        <option>SA</option>
                        <option>TAS</option>
                        <option>VIC</option>
                        <option>WA</option>
                      </select>
                    </label>
                    <label>
                      Indoor / outdoor *
                      <select name="setting" required defaultValue="">
                        <option value="" disabled>
                          Select setting
                        </option>
                        <option>Indoor</option>
                        <option>Outdoor</option>
                        <option>Indoor and outdoor</option>
                        <option>Not confirmed</option>
                      </select>
                    </label>
                    <label>
                      Estimated budget *
                      <select
                        name="budget"
                        required
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                      >
                        <option>Under $1,000</option>
                        <option>$1,000–$3,000</option>
                        <option>$3,000–$5,000</option>
                        <option>$5,000–$10,000</option>
                        <option>$10,000–$20,000</option>
                        <option>$20,000+</option>
                        <option value="custom">Custom amount</option>
                      </select>
                    </label>
                    {budget === "custom" && (
                      <label>
                        Custom budget amount *
                        <input
                          name="customBudget"
                          type="number"
                          required
                          min={1}
                          step={50}
                          inputMode="decimal"
                          placeholder="Amount in AUD"
                        />
                      </label>
                    )}
                  </div>
                </section>
                <section>
                  <h3>
                    <i>3</i>Equipment and support
                  </h3>
                  <div className="contact-checks">
                    {[
                      "Chairs",
                      "Tables",
                      "Tableware",
                      "Marquee",
                      "Lighting",
                      "Linen",
                      "Delivery & setup",
                      "Event planning advice",
                    ].map((x, i) => (
                      <label key={x}>
                        <input
                          name="equipment"
                          value={x}
                          type="checkbox"
                          defaultChecked={i < 4}
                        />
                        {x}
                      </label>
                    ))}
                  </div>
                  <label className="contact-textarea">
                    What are you looking to achieve?
                    <textarea
                      name="eventGoal"
                      maxLength={1000}
                      placeholder="Describe the style, experience or practical outcome you want."
                    />
                  </label>
                  <div className="form-grid contact-fields">
                    <label>
                      Preferred service *
                      <select name="preferredService" required defaultValue="">
                        <option value="" disabled>
                          Select service
                        </option>
                        <option>Delivery only</option>
                        <option>Delivery and setup</option>
                        <option>Delivery, setup and collection</option>
                        <option>Customer collection and return</option>
                        <option>Not sure—please advise</option>
                      </select>
                    </label>
                    <label>
                      Planning support *
                      <select name="planningSupport" required defaultValue="">
                        <option value="" disabled>
                          Select support
                        </option>
                        <option>Product advice only</option>
                        <option>Quantity and layout advice</option>
                        <option>Styling direction</option>
                        <option>Venue and logistics planning</option>
                        <option>Full event planning</option>
                        <option>No planning support</option>
                      </select>
                    </label>
                    <label>
                      Setup surface *
                      <select name="setupSurface" required defaultValue="">
                        <option value="" disabled>
                          Select setup surface
                        </option>
                        <option>Indoor hard floor</option>
                        <option>Concrete or paving</option>
                        <option>Garden lawn</option>
                        <option>Gravel</option>
                        <option>Sand</option>
                        <option>Mixed surfaces</option>
                        <option>Not confirmed</option>
                      </select>
                    </label>
                    <label>
                      Vehicle access *
                      <select name="vehicleAccess" required defaultValue="">
                        <option value="" disabled>
                          Select vehicle access
                        </option>
                        <option>Direct loading access</option>
                        <option>Rear loading available</option>
                        <option>Street loading only</option>
                        <option>Restricted height or width</option>
                        <option>Long carry required</option>
                        <option>No vehicle access</option>
                        <option>Not confirmed</option>
                      </select>
                    </label>
                  </div>
                  <label className="contact-textarea">
                    Anything else we should know?
                    <textarea
                      name="notes"
                      maxLength={1500}
                      placeholder="Add access restrictions, wet-weather plans or special timing requirements."
                    />
                  </label>
                </section>
                <section>
                  <h3>
                    <i>4</i>Attachments and consent
                  </h3>
                  <label className="contact-upload">
                    Drop files here or choose files
                    <input type="file" multiple accept="image/*,.pdf" />
                  </label>
                  <label className="consent">
                    <input name="consent" type="checkbox" required /> I agree to
                    be contacted about this enquiry and accept the privacy
                    policy. *
                  </label>
                  {submitError && (
                    <p className="form-error" role="alert">
                      {submitError}
                    </p>
                  )}
                  <footer>
                    <a href="/products">Save and finish later</a>
                    <button type="submit">Send event enquiry →</button>
                  </footer>
                </section>
              </form>
              <aside>
                <span>YOUR ENQUIRY SUMMARY</span>
                <h3>{summary.eventType}</h3>
                <p>
                  {summary.eventDate}
                  <br />
                  {summary.guests} · {summary.suburb}
                  <br />
                  {summary.setting}
                </p>
                <b>Selected support</b>
                <small>
                  {summary.support}
                  <br />
                  {summary.service}
                </small>
                <div className="enquiry-summary-actions">
                  <button
                    type="button"
                    disabled={formStep === 0}
                    onClick={() => goToFormStep(formStep - 1)}
                  >
                    ← Back
                  </button>
                  {formStep < 3 ? (
                    <button
                      type="button"
                      onClick={() => goToFormStep(formStep + 1)}
                    >
                      Continue →
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => formRef.current?.requestSubmit()}
                    >
                      Send enquiry →
                    </button>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>
        <section className="contact-options editorial-section">
          <span>CHOOSE HOW TO START</span>
          <h2>How would you like to get in touch?</h2>
          <div>
            {[
              ["CALL US", "Prefer to talk?", "03 9000 0000", "tel:0390000000"],
              [
                "EMAIL US",
                "Send the details",
                "hello@skeventhire.com.au",
                "mailto:hello@skeventhire.com.au",
              ],
              [
                "VISIT OR COLLECT",
                "By appointment",
                "Keilor Park, Melbourne",
                "#location",
              ],
              [
                "SERVICE AREA",
                "Plan your event",
                "Enter the delivery postcode in step one",
                "#contact-form",
              ],
            ].map((x, i) => (
              <article key={x[0]}>
                <i>{["⌕", "✉", "⌖", "◇"][i]}</i>
                <span>{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
                <a href={x[3]}>Start here →</a>
              </article>
            ))}
          </div>
        </section>
        <section className="contact-faq">
          <header>
            <span>BEFORE YOU CONTACT US</span>
            <h2>Frequently asked questions</h2>
          </header>
          <div>
            {[
              "How far in advance should I enquire?",
              "Can I collect my order?",
              "Is there a minimum hire?",
              "How much should I budget?",
              "What is the service area delivery cost?",
              "What if my venue is regional?",
            ].map((q, i) => (
              <details key={q} open={i === 0}>
                <summary>
                  {q}
                  <span>＋</span>
                </summary>
                <p>
                  Contact us as soon as your date is known. Availability,
                  access, crew and transport are confirmed in your quotation.
                </p>
              </details>
            ))}
          </div>
        </section>
        {sent && (
          <section className="enquiry-success">
            <i>✓</i>
            <div>
              <span>ENQUIRY RECEIVED</span>
              <h2>Thanks—your event enquiry is on its way.</h2>
              <p>
                We’ll review the event details and reply within one business
                day.
              </p>
              <b>ENQ-2608-00133</b>
              <div>
                <small>
                  EVENT DATE
                  <br />
                  <b>14 Nov 2026</b>
                </small>
                <small>
                  CONTACT METHOD
                  <br />
                  <b>Email</b>
                </small>
                <small>
                  NEXT RESPONSE
                  <br />
                  <b>Within one business day</b>
                </small>
              </div>
              <button onClick={() => setSent(false)}>
                Send another enquiry
              </button>
              <a href="/">Return home</a>
            </div>
          </section>
        )}
        <section className="contact-bottom">
          <div>
            <span>STILL NOT SURE?</span>
            <h2>Not sure what you need?</h2>
            <p>
              Send a simple message and our team will recommend the next step.
            </p>
          </div>
          <a href="mailto:hello@skeventhire.com.au">Send a simple email</a>
          <a href="tel:0390000000">Call our team</a>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
