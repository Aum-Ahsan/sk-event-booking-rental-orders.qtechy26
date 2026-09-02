import React from "react";
import pageData from "../../../../data/pages/help-centre.json";

export function SupportContactSection() {
  return (
    <section id="support-form" className="support-contact">
              <div className="help-width">
                <div>
                  <span>{pageData.support.eyebrow}</span>
                  <h2>{pageData.support.title}</h2>
                  <p>{pageData.support.description}</p>
                  <img src={pageData.support.image} alt={pageData.support.imageAlt} />
                  <div className="support-methods">
                    {pageData.support.methods.map(m => (
                      <a key={m.text} href={m.href}>{m.text}</a>
                    ))}
                  </div>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                    setTimeout(() => jump("support-received"), 50);
                  }}
                >
                  <label>
                    {pageData.support.form.topicLabel}
                    <select>
                      {pageData.support.form.topics.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </label>
                  <div>
                    <Field label={pageData.support.form.fields.firstName} value="Amelia" />
                    <Field label={pageData.support.form.fields.lastName} value="Morgan" />
                    <Field label={pageData.support.form.fields.mobile} value="0412 345 678" />
                    <Field label={pageData.support.form.fields.email} value="amelia@example.com" />
                  </div>
                  <Field
                    wide
                    label={pageData.support.form.fields.subject}
                    value="Existing venue access question"
                  />
                  <Field
                    wide
                    area
                    label={pageData.support.form.fields.help}
                    value="The venue has changed its loading entrance. I need to update the access notes and confirm whether the delivery window is still suitable."
                  />
                  <label>
                    {pageData.support.form.attachmentLabel}
                    <input type="file" />
                  </label>
                  <label className="consent">
                    <input type="checkbox" required defaultChecked /> {pageData.support.form.consentText}
                  </label>
                  <button>{pageData.support.form.submitText}</button>
                </form>
              </div>
            </section>
  );
}
