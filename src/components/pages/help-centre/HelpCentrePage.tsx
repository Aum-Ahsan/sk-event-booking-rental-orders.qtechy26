import React, { useState } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import { Field } from "../../landing/shared/FormControls";
import pageData from "../../../data/pages/help-centre.json";

export function HelpCentrePage() {
  const [sent, setSent] = useState(false);
  const jump = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <div className="public-site help-centre">
      <PublicHeader />
      <main>
        <section className="help-hero">
          <div>
            <span>{pageData.hero.eyebrow}</span>
            <h1>{pageData.hero.title}</h1>
            <p>{pageData.hero.description}</p>
            <div className="help-hero-actions">
              {pageData.hero.links.map(l => <a key={l.text} href={l.href}>{l.text}</a>)}
            </div>
            <small>{pageData.hero.small}</small>
          </div>
          <img
            className="help-hero-image"
            src={pageData.hero.image}
            alt={pageData.hero.imageAlt}
          />
        </section>
        <section className="help-topics help-width">
          <header>
            <span>{pageData.topics.eyebrow}</span>
            <h2>{pageData.topics.title}</h2>
            <p>{pageData.topics.description}</p>
          </header>
          <div>
            {pageData.topics.items.map((x, i) => (
              <button type="button" onClick={() => jump(x[2])} key={x[0]}>
                <i>{["▤", "◇", "▣", "↻", "$", "!", "♡"][i]}</i>
                <span>
                  <b>{x[0]}</b>
                  <small>{x[1]}</small>
                </span>
                <em>＋</em>
              </button>
            ))}
          </div>
        </section>
        <section className="popular-help">
          <div className="help-width">
            <header>
              <span>{pageData.popular.eyebrow}</span>
              <h2>{pageData.popular.title}</h2>
              <p>{pageData.popular.description}</p>
            </header>
            <div>
              {pageData.popular.items.map((q, i) => (
                <details open={i < 2} key={q.question}>
                  <summary>
                    {q.question}
                    <b>＋</b>
                  </summary>
                  <p>{q.answer}</p>
                  <a href={q.link}>Read full answer →</a>
                </details>
              ))}
            </div>
          </div>
        </section>
        <article id="booking-article" className="help-article">
          <div className="help-width">
            <aside>
              <b>{pageData.article.sidebar.title}</b>
              {pageData.article.sidebar.links.map(l => (
                <a key={l.text} href={l.href}>{l.text}</a>
              ))}
            </aside>
            <div>
              <span>{pageData.article.eyebrow}</span>
              <h1>{pageData.article.title}</h1>
              <p className="article-lead">{pageData.article.lead}</p>
              <blockquote>{pageData.article.quote}</blockquote>
              
              {pageData.article.sections.map((sec, i) => (
                <React.Fragment key={sec.id}>
                  <h2 id={sec.id}>{sec.title}</h2>
                  <p>{sec.text}</p>
                  {i === 0 && (
                    <div id="change-options" className="change-cards">
                      {pageData.article.options.map((x, j) => (
                        <article key={x[0]}>
                          <i>{j + 1}</i>
                          <b>{x[0]}</b>
                          <small>{x[1]}</small>
                        </article>
                      ))}
                    </div>
                  )}
                  {i === 0 && <div className="article-note">{pageData.article.note}</div>}
                </React.Fragment>
              ))}
              <div className="article-helpful">
                {pageData.article.helpful.text} 
                <button>{pageData.article.helpful.yes}</button>
                <button>{pageData.article.helpful.no}</button>
                <a href={pageData.article.helpful.contactHref}>{pageData.article.helpful.contact}</a>
              </div>
            </div>
          </div>
        </article>
        <section id="delivery-help" className="delivery-guidance help-width">
          <header>
            <span>{pageData.guidance.eyebrow}</span>
            <h2>{pageData.guidance.title}</h2>
          </header>
          {pageData.guidance.sections.map((sec, i) => (
            <article key={i}>
              {i === 0 && <img src={sec.image} alt={sec.imageAlt} />}
              <div>
                <span>{sec.eyebrow}</span>
                <h3>{sec.title}</h3>
                <ul>
                  {sec.items.map(item => <li key={item}>{item}</li>)}
                </ul>
                <a href={sec.link.href}>{sec.link.text}</a>
              </div>
              {i === 1 && <img src={sec.image} alt={sec.imageAlt} />}
            </article>
          ))}
        </section>
        <section className="safe-use">
          <div className="help-width">
            <span>{pageData.safeUse.eyebrow}</span>
            <h2>{pageData.safeUse.title}</h2>
            <p>{pageData.safeUse.description}</p>
            <div>
              {pageData.safeUse.items.map((x) => (
                <article key={x[0]}>
                  <b>✓ {x[0]}</b>
                  <small>{x[1]}</small>
                </article>
              ))}
            </div>
            <blockquote>{pageData.safeUse.quote}</blockquote>
          </div>
        </section>
        <section id="policy-links" className="policy-links help-width">
          <span>{pageData.policyLinks.eyebrow}</span>
          <h2>{pageData.policyLinks.title}</h2>
          <p>{pageData.policyLinks.description}</p>
          <div>
            {pageData.policyLinks.items.map((x) => (
              <a href={x[1]} key={x[0]}>
                <b>{x[0]}</b>
                <small>{pageData.policyLinks.linkText}</small>
              </a>
            ))}
          </div>
        </section>
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
        {sent && (
          <section id="support-received" className="support-received">
            <i>✓</i>
            <div>
              <span>{pageData.support.received.eyebrow}</span>
              <h2>{pageData.support.received.title}</h2>
              <p>{pageData.support.received.description}</p>
              <b>{pageData.support.received.reference}</b>
              <dl>
                {pageData.support.received.details.map(d => (
                  <div key={d.label}>
                    <dt>{d.label}</dt>
                    <dd>{d.value}</dd>
                  </div>
                ))}
              </dl>
              {pageData.support.received.links.map(l => (
                <a key={l.text} href={l.href}>{l.text}</a>
              ))}
            </div>
          </section>
        )}
      </main>
      <PublicFooter />
    </div>
  );
}
