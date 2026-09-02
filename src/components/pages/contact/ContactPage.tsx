import React, { useState, useEffect, useRef } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import { Field } from "../../landing/shared/FormControls";
import eventTypes from "../../../data/commerce/eventTypes.json";
import pageData from "../../../data/pages/contact.json";
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
            <span>{pageData.extracted.text_1}</span>
            <h1>{pageData.extracted.text_2}</h1>
            <p>
              {pageData.extracted.text_3}</p>
            <a href="#contact-form">{pageData.extracted.text_4}</a>
            <a href="tel:0390000000">{pageData.extracted.text_5}</a>
            <small>{pageData.extracted.text_6}</small>
          </div>
          <img
            src="/images/tableware-product.png"
            alt={pageData.extracted.attr_162}
          />
        </section>
        <section className="hours editorial-section">
          <div>
            <span>{pageData.extracted.text_7}</span>
            <h2>{pageData.extracted.text_8}</h2>
            <p>
              {pageData.extracted.text_9}</p>
          </div>
          <dl>
            <div>
              <dt>{pageData.extracted.text_10}</dt>
              <dd>{pageData.extracted.text_11}</dd>
            </div>
            <div>
              <dt>{pageData.extracted.text_12}</dt>
              <dd>{pageData.extracted.text_13}</dd>
            </div>
            <div>
              <dt>{pageData.extracted.text_14}</dt>
              <dd>{pageData.extracted.text_15}</dd>
            </div>
            <div>
              <dt>{pageData.extracted.text_16}</dt>
              <dd>{pageData.extracted.text_17}</dd>
            </div>
          </dl>
        </section>
        <section id="location" className="collection-band">
          <div className="collection-map real-map">
            <iframe
              title={pageData.extracted.attr_163}
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=144.78%2C-37.76%2C144.91%2C-37.67&amp;layer=mapnik&amp;marker=-37.724%2C144.849"
            />
            <i>{pageData.extracted.text_18}</i>
            <span>{pageData.extracted.text_19}</span>
            <span>{pageData.extracted.text_20}</span>
            <span>{pageData.extracted.text_21}</span>
          </div>
          <div>
            <span>{pageData.extracted.text_22}</span>
            <h2>{pageData.extracted.text_23}</h2>
            <article>
              <b>{pageData.extracted.text_24}</b>
              <small>{pageData.extracted.text_25}</small>
            </article>
            <div>
              {[
                { step: "1", text: "Confirm collection" },
                { step: "2", text: "Parking and arrival" },
                { step: "3", text: "Loading and vehicle suitability" },
                { step: "4", text: "After-hours support" },
              ].map((x) => (
                <b key={x.step}>
                  <i>{x.step}</i>
                  {x.text}
                </b>
              ))}
            </div>
            <a href="/request-quote">{pageData.extracted.text_26}</a>
          </div>
        </section>
        <section id="contact-form" className="enquiry-wrap">
          <div className="editorial-section">
            <header>
              <span>{pageData.extracted.text_27}</span>
              <h2>{pageData.extracted.text_28}</h2>
              <p>
                {pageData.extracted.text_29}</p>
            </header>
            <nav
              className="enquiry-progress"
              aria-label="Event enquiry progress"
            >
              {pageData.formSteps.map((label, index) => (
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
                    <i>{pageData.extracted.text_30}</i>{pageData.extracted.text_31}</h3>
                  <div className="form-grid contact-fields">
                    <label>
                      {pageData.extracted.text_32}<input
                        name="firstName"
                        required
                        autoComplete="given-name"
                        minLength={2}
                        maxLength={60}
                        placeholder={pageData.extracted.attr_164}
                      />
                    </label>
                    <label>
                      {pageData.extracted.text_33}<input
                        name="lastName"
                        required
                        autoComplete="family-name"
                        minLength={2}
                        maxLength={60}
                        placeholder={pageData.extracted.attr_165}
                      />
                    </label>
                    <label>
                      {pageData.extracted.text_34}<input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder={pageData.extracted.attr_166}
                      />
                    </label>
                    <label>
                      {pageData.extracted.text_35}<input
                        name="mobile"
                        type="tel"
                        required
                        autoComplete="tel"
                        inputMode="numeric"
                        pattern="(?:\\+?61|0)4[0-9]{8}"
                        maxLength={12}
                        placeholder={pageData.extracted.attr_167}
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /[^0-9+]/g,
                            "",
                          );
                        }}
                      />
                      <small>
                        {pageData.extracted.text_36}</small>
                    </label>
                    <label>
                      {pageData.extracted.text_37}<select name="preferredContact" required defaultValue="">
                        <option value="" disabled>
                          {pageData.extracted.text_38}</option>
                        <option>{pageData.extracted.text_39}</option>
                        <option>{pageData.extracted.text_40}</option>
                        <option>{pageData.extracted.text_41}</option>
                        <option>{pageData.extracted.text_42}</option>
                      </select>
                    </label>
                    <label>
                      {pageData.extracted.text_43}<select name="bestContactTime" required defaultValue="">
                        <option value="" disabled>
                          {pageData.extracted.text_44}</option>
                        <option>{pageData.extracted.text_45}</option>
                        <option>{pageData.extracted.text_46}</option>
                        <option>{pageData.extracted.text_47}</option>
                        <option>{pageData.extracted.text_48}</option>
                        <option>{pageData.extracted.text_49}</option>
                      </select>
                    </label>
                    <label>
                      {pageData.extracted.text_50}<input
                        name="deliveryPostcode"
                        required
                        autoComplete="postal-code"
                        inputMode="numeric"
                        pattern="[0-9]{4}"
                        maxLength={4}
                        placeholder={pageData.extracted.attr_168}
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value
                            .replace(/\\D/g, "")
                            .slice(0, 4);
                        }}
                      />
                      <small>
                        {pageData.extracted.text_51}</small>
                    </label>
                  </div>
                  <footer className="enquiry-step-actions">
                    <span>{pageData.extracted.text_52}</span>
                    <button type="button" onClick={() => goToFormStep(1)}>
                      {pageData.extracted.text_53}</button>
                  </footer>
                </section>
                <section>
                  <h3>
                    <i>{pageData.extracted.text_54}</i>{pageData.extracted.text_55}</h3>
                  <div className="form-grid contact-fields">
                    <label>
                      {pageData.extracted.text_56}<select name="eventType" required defaultValue="">
                        <option value="" disabled>
                          {pageData.extracted.text_57}</option>
                        {eventTypes.map((x) => (
                          <option key={x}>{x}</option>
                        ))}
                      </select>
                    </label>
                    <label>
                      {pageData.extracted.text_58}<input
                        name="eventDate"
                        type="date"
                        required
                        min="2026-08-03"
                      />
                    </label>
                    <label>
                      {pageData.extracted.text_59}<input
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
                      {pageData.extracted.text_60}<input
                        name="finishTime"
                        type="time"
                        required
                        step="900"
                        onChange={(e) => e.currentTarget.setCustomValidity("")}
                      />
                    </label>
                    <label>
                      {pageData.extracted.text_61}<input
                        name="guestCount"
                        type="number"
                        required
                        inputMode="numeric"
                        min={1}
                        max={2200}
                        step={1}
                        placeholder={pageData.extracted.attr_169}
                      />
                    </label>
                    <label>
                      {pageData.extracted.text_62}<input
                        name="venueName"
                        maxLength={120}
                        placeholder={pageData.extracted.attr_170}
                      />
                    </label>
                    <label className="wide-field">
                      {pageData.extracted.text_63}<input
                        name="address1"
                        required
                        autoComplete="address-line1"
                        minLength={3}
                        maxLength={120}
                        placeholder={pageData.extracted.attr_171}
                      />
                    </label>
                    <label className="wide-field">
                      {pageData.extracted.text_64}<input
                        name="address2"
                        autoComplete="address-line2"
                        maxLength={120}
                        placeholder={pageData.extracted.attr_172}
                      />
                    </label>
                    <label>
                      {pageData.extracted.text_65}<input
                        name="suburb"
                        required
                        autoComplete="address-level2"
                        minLength={2}
                        maxLength={60}
                        placeholder={pageData.extracted.attr_173}
                      />
                    </label>
                    <label>
                      {pageData.extracted.text_66}<input
                        name="eventPostcode"
                        required
                        autoComplete="postal-code"
                        inputMode="numeric"
                        pattern="[0-9]{4}"
                        maxLength={4}
                        placeholder={pageData.extracted.attr_174}
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value
                            .replace(/\\D/g, "")
                            .slice(0, 4);
                        }}
                      />
                    </label>
                    <label>
                      {pageData.extracted.text_67}<select name="state" required defaultValue="VIC">
                        <option>{pageData.extracted.text_68}</option>
                        <option>{pageData.extracted.text_69}</option>
                        <option>{pageData.extracted.text_70}</option>
                        <option>{pageData.extracted.text_71}</option>
                        <option>{pageData.extracted.text_72}</option>
                        <option>{pageData.extracted.text_73}</option>
                        <option>{pageData.extracted.text_74}</option>
                        <option>{pageData.extracted.text_75}</option>
                      </select>
                    </label>
                    <label>
                      {pageData.extracted.text_76}<select name="setting" required defaultValue="">
                        <option value="" disabled>
                          {pageData.extracted.text_77}</option>
                        <option>{pageData.extracted.text_78}</option>
                        <option>{pageData.extracted.text_79}</option>
                        <option>{pageData.extracted.text_80}</option>
                        <option>{pageData.extracted.text_81}</option>
                      </select>
                    </label>
                    <label>
                      {pageData.extracted.text_82}<select
                        name="budget"
                        required
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                      >
                        <option>{pageData.extracted.text_83}</option>
                        <option>{pageData.extracted.text_84}</option>
                        <option>{pageData.extracted.text_85}</option>
                        <option>{pageData.extracted.text_86}</option>
                        <option>{pageData.extracted.text_87}</option>
                        <option>{pageData.extracted.text_88}</option>
                        <option value="custom">{pageData.extracted.text_89}</option>
                      </select>
                    </label>
                    {budget === "custom" && (
                      <label>
                        {pageData.extracted.text_90}<input
                          name="customBudget"
                          type="number"
                          required
                          min={1}
                          step={50}
                          inputMode="decimal"
                          placeholder={pageData.extracted.attr_175}
                        />
                      </label>
                    )}
                  </div>
                </section>
                <section>
                  <h3>
                    <i>{pageData.extracted.text_91}</i>{pageData.extracted.text_92}</h3>
                  <div className="contact-checks">
                    {pageData.equipmentOptions.map((x, i) => (
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
                    {pageData.extracted.text_93}<textarea
                      name="eventGoal"
                      maxLength={1000}
                      placeholder={pageData.extracted.attr_176}
                    />
                  </label>
                  <div className="form-grid contact-fields">
                    <label>
                      {pageData.extracted.text_94}<select name="preferredService" required defaultValue="">
                        <option value="" disabled>
                          {pageData.extracted.text_95}</option>
                        <option>{pageData.extracted.text_96}</option>
                        <option>{pageData.extracted.text_97}</option>
                        <option>{pageData.extracted.text_98}</option>
                        <option>{pageData.extracted.text_99}</option>
                        <option>{pageData.extracted.text_100}</option>
                      </select>
                    </label>
                    <label>
                      {pageData.extracted.text_101}<select name="planningSupport" required defaultValue="">
                        <option value="" disabled>
                          {pageData.extracted.text_102}</option>
                        <option>{pageData.extracted.text_103}</option>
                        <option>{pageData.extracted.text_104}</option>
                        <option>{pageData.extracted.text_105}</option>
                        <option>{pageData.extracted.text_106}</option>
                        <option>{pageData.extracted.text_107}</option>
                        <option>{pageData.extracted.text_108}</option>
                      </select>
                    </label>
                    <label>
                      {pageData.extracted.text_109}<select name="setupSurface" required defaultValue="">
                        <option value="" disabled>
                          {pageData.extracted.text_110}</option>
                        <option>{pageData.extracted.text_111}</option>
                        <option>{pageData.extracted.text_112}</option>
                        <option>{pageData.extracted.text_113}</option>
                        <option>{pageData.extracted.text_114}</option>
                        <option>{pageData.extracted.text_115}</option>
                        <option>{pageData.extracted.text_116}</option>
                        <option>{pageData.extracted.text_117}</option>
                      </select>
                    </label>
                    <label>
                      {pageData.extracted.text_118}<select name="vehicleAccess" required defaultValue="">
                        <option value="" disabled>
                          {pageData.extracted.text_119}</option>
                        <option>{pageData.extracted.text_120}</option>
                        <option>{pageData.extracted.text_121}</option>
                        <option>{pageData.extracted.text_122}</option>
                        <option>{pageData.extracted.text_123}</option>
                        <option>{pageData.extracted.text_124}</option>
                        <option>{pageData.extracted.text_125}</option>
                        <option>{pageData.extracted.text_126}</option>
                      </select>
                    </label>
                  </div>
                  <label className="contact-textarea">
                    {pageData.extracted.text_127}<textarea
                      name="notes"
                      maxLength={1500}
                      placeholder={pageData.extracted.attr_177}
                    />
                  </label>
                </section>
                <section>
                  <h3>
                    <i>{pageData.extracted.text_128}</i>{pageData.extracted.text_129}</h3>
                  <label className="contact-upload">
                    {pageData.extracted.text_130}<input type="file" multiple accept="image/*,.pdf" />
                  </label>
                  <label className="consent">
                    <input name="consent" type="checkbox" required /> {pageData.extracted.text_131}</label>
                  {submitError && (
                    <p className="form-error" role="alert">
                      {submitError}
                    </p>
                  )}
                  <footer>
                    <a href="/products">{pageData.extracted.text_132}</a>
                    <button type="submit">{pageData.extracted.text_133}</button>
                  </footer>
                </section>
              </form>
              <aside>
                <span>{pageData.extracted.text_134}</span>
                <h3>{summary.eventType}</h3>
                <p>
                  {summary.eventDate}
                  <br />
                  {summary.guests} · {summary.suburb}
                  <br />
                  {summary.setting}
                </p>
                <b>{pageData.extracted.text_135}</b>
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
                    {pageData.extracted.text_136}</button>
                  {formStep < 3 ? (
                    <button
                      type="button"
                      onClick={() => goToFormStep(formStep + 1)}
                    >
                      {pageData.extracted.text_137}</button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => formRef.current?.requestSubmit()}
                    >
                      {pageData.extracted.text_138}</button>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>
        <section className="contact-options editorial-section">
          <span>{pageData.extracted.text_139}</span>
          <h2>{pageData.extracted.text_140}</h2>
          <div>
            {[
              { type: "CALL US", title: "Prefer to talk?", detail: "03 9000 0000", link: "tel:0390000000" },
              { type: "EMAIL US", title: "Send the details", detail: "hello@skeventhire.com.au", link: "mailto:hello@skeventhire.com.au" },
              { type: "VISIT OR COLLECT", title: "By appointment", detail: "Keilor Park, Melbourne", link: "#location" },
              { type: "SERVICE AREA", title: "Plan your event", detail: "Enter the delivery postcode in step one", link: "#contact-form" },
            ].map((x, i) => (
              <article key={x.type}>
                <i>{["⌕", "✉", "⌖", "◇"][i]}</i>
                <span>{x.type}</span>
                <h3>{x.title}</h3>
                <p>{x.detail}</p>
                <a href={x.link}>{pageData.extracted.text_141}</a>
              </article>
            ))}
          </div>
        </section>
        <section className="contact-faq">
          <header>
            <span>{pageData.extracted.text_142}</span>
            <h2>{pageData.extracted.text_143}</h2>
          </header>
          <div>
            {pageData.faqs.map((q, i) => (
              <details key={q} open={i === 0}>
                <summary>
                  {q}
                  <span>＋</span>
                </summary>
                <p>
                  {pageData.extracted.text_144}</p>
              </details>
            ))}
          </div>
        </section>
        {sent && (
          <section className="enquiry-success">
            <i>✓</i>
            <div>
              <span>{pageData.extracted.text_145}</span>
              <h2>{pageData.extracted.text_146}</h2>
              <p>
                {pageData.extracted.text_147}</p>
              <b>{pageData.extracted.text_148}</b>
              <div>
                <small>
                  {pageData.extracted.text_149}<br />
                  <b>{pageData.extracted.text_150}</b>
                </small>
                <small>
                  {pageData.extracted.text_151}<br />
                  <b>{pageData.extracted.text_152}</b>
                </small>
                <small>
                  {pageData.extracted.text_153}<br />
                  <b>{pageData.extracted.text_154}</b>
                </small>
              </div>
              <button onClick={() => setSent(false)}>
                {pageData.extracted.text_155}</button>
              <a href="/">{pageData.extracted.text_156}</a>
            </div>
          </section>
        )}
        <section className="contact-bottom">
          <div>
            <span>{pageData.extracted.text_157}</span>
            <h2>{pageData.extracted.text_158}</h2>
            <p>
              {pageData.extracted.text_159}</p>
          </div>
          <a href="mailto:hello@skeventhire.com.au">{pageData.extracted.text_160}</a>
          <a href="tel:0390000000">{pageData.extracted.text_161}</a>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
