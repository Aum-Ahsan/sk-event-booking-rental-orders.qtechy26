import React, { useState } from "react";
import { Field } from "../../landing/shared/FormControls";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/reviews.json";

// Mock data since publicReviews was undefined in the original file
const publicReviews = [
  {
    name: "Sarah M.",
    event: "Wedding",
    location: "Richmond VIC",
    rating: 5,
    title: "Absolutely perfect",
    text: "The team was incredible to work with.",
    image: "/images/hero-event.png",
    product: "Marquee and Furniture"
  }
];

export function ReviewsRatingsPage() {
  const [event, setEvent] = useState("All events");
  const [rating, setRating] = useState("All ratings");
  const [submitted, setSubmitted] = useState(false);
  const visible = publicReviews.filter(
    (r) =>
      (event === "All events" || r.event === event) &&
      (rating === "All ratings" || r.rating === Number(rating)),
  );
  
  return (
    <div className="public-site reviews-page">
      <PublicHeader />
      <main>
        <section className="reviews-hero">
          <div>
            <span>{pageData.hero.eyebrow}</span>
            <h1 dangerouslySetInnerHTML={{ __html: pageData.hero.title }} />
            <p>{pageData.hero.description}</p>
            <div>
              {pageData.hero.links.map(l => <a key={l.text} href={l.href}>{l.text}</a>)}
            </div>
            <small>{pageData.hero.small}</small>
          </div>
          <figure>
            <img
              src={pageData.hero.image}
              alt={pageData.hero.imageAlt}
            />
            <figcaption>
              {pageData.hero.caption.stars}<br />
              <small>{pageData.hero.caption.small}</small>
            </figcaption>
          </figure>
        </section>
        
        <section className="review-summary editorial-section">
          <span>{pageData.summary.eyebrow}</span>
          <h2>{pageData.summary.title}</h2>
          <p>{pageData.summary.description}</p>
          <div>
            <strong>
              {pageData.summary.overall}
              <small>
                {pageData.summary.outOf}<br />
                {pageData.summary.stars}
              </small>
            </strong>
            <div className="rating-bars">
              {pageData.summary.bars.map((x) => (
                <label key={x[0]}>
                  {x[0]} ★{" "}
                  <i>
                    <b style={{ width: `${x[1]}%` }} />
                  </i>
                  <em>{x[1]}%</em>
                </label>
              ))}
            </div>
          </div>
          <nav>
            {pageData.summary.nav.map((x) => (
              <a href="#review-list" key={x}>
                {x}
              </a>
            ))}
          </nav>
        </section>
        
        <section id="review-list" className="editorial-section review-browser">
          <span>{pageData.browser.eyebrow}</span>
          <h2>{pageData.browser.title}</h2>
          <div className="review-filters">
            <label>
              {pageData.browser.filters.event.label}
              <select value={event} onChange={(e) => setEvent(e.target.value)}>
                {pageData.browser.filters.event.options.map(o => <option key={o}>{o}</option>)}
              </select>
            </label>
            <label>
              {pageData.browser.filters.rating.label}
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                {pageData.browser.filters.rating.options.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
            <label>
              {pageData.browser.filters.service.label}
              <select>
                {pageData.browser.filters.service.options.map(o => <option key={o}>{o}</option>)}
              </select>
            </label>
            <label>
              {pageData.browser.filters.sort.label}
              <select>
                {pageData.browser.filters.sort.options.map(o => <option key={o}>{o}</option>)}
              </select>
            </label>
          </div>
          <div className="review-count">
            {visible.length} {pageData.browser.countText}{" "}
            <button
              onClick={() => {
                setEvent("All events");
                setRating("All ratings");
              }}
            >
              {pageData.browser.clearText}
            </button>
          </div>
          {visible.map((r) => (
            <article className="verified-review" key={r.title}>
              <header>
                <i>{r.name[0]}</i>
                <span>
                  <b>{r.name}</b>
                  <small>✓ Verified booking · {r.location}</small>
                </span>
                <strong>{"★".repeat(r.rating)}</strong>
              </header>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              <img src={r.image} alt={r.title} />
              <aside>
                <b>{r.product}</b>
                <span>Products and service used for this event</span>
                <a href="/products">View hire products →</a>
              </aside>
              <footer>
                Helpful? <button>Yes</button>
                <button>Report</button>
                <time>Published July 2026</time>
              </footer>
            </article>
          ))}
          {!visible.length && (
            <div className="empty-reviews">
              <h3>{pageData.browser.empty.title}</h3>
              <p>{pageData.browser.empty.description}</p>
              <button
                onClick={() => {
                  setEvent("All events");
                  setRating("All ratings");
                }}
              >
                {pageData.browser.clearText}
              </button>
            </div>
          )}
        </section>
        
        <section className="review-filter-empty">
          <div>{pageData.filterEmpty.icon}</div>
          <span>
            <small>{pageData.filterEmpty.eyebrow}</small>
            <h2>{pageData.filterEmpty.title}</h2>
            <p>{pageData.filterEmpty.description}</p>
          </span>
          <a href={pageData.filterEmpty.linkHref}>{pageData.filterEmpty.linkText}</a>
        </section>
        
        <section className="post-event editorial-section">
          <div>
            <span>{pageData.postEvent.eyebrow}</span>
            <h2>{pageData.postEvent.title}</h2>
            <p>{pageData.postEvent.description}</p>
            <b>{pageData.postEvent.reference}</b>
            <a href={pageData.postEvent.linkHref}>{pageData.postEvent.linkText}</a>
          </div>
          <img
            src={pageData.postEvent.image}
            alt={pageData.postEvent.imageAlt}
          />
          <aside>
            <img src={pageData.postEvent.aside.image} alt={pageData.postEvent.aside.imageAlt} />
            <b>{pageData.postEvent.aside.title}</b>
            <small>{pageData.postEvent.aside.description}</small>
          </aside>
        </section>
        
        <section id="review-form" className="review-form-wrap">
          <div className="editorial-section">
            <header>
              <span>{pageData.form.eyebrow}</span>
              <h2>{pageData.form.title}</h2>
              <p>{pageData.form.description}</p>
            </header>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                setTimeout(
                  () =>
                    document
                      .getElementById("review-thanks")
                      ?.scrollIntoView({ behavior: "smooth" }),
                  50,
                );
              }}
            >
              <section>
                <h3>
                  <i>1</i> {pageData.form.section1.title}
                </h3>
                <div className="rating-grid">
                  {pageData.form.section1.items.map((x) => (
                    <label key={x}>
                      <span>{x}</span>
                      <b>★★★★★</b>
                    </label>
                  ))}
                </div>
              </section>
              <section>
                <h3>
                  <i>2</i> {pageData.form.section2.title}
                </h3>
                <label>
                  {pageData.form.section2.fields.title.label}
                  <input defaultValue={pageData.form.section2.fields.title.defaultValue} />
                </label>
                <label>
                  {pageData.form.section2.fields.eventDesc.label}
                  <textarea defaultValue={pageData.form.section2.fields.eventDesc.defaultValue} />
                </label>
                <label>
                  {pageData.form.section2.fields.standOut.label}
                  <textarea defaultValue={pageData.form.section2.fields.standOut.defaultValue} />
                </label>
                <div className="form-grid">
                  <Field label={pageData.form.section2.fields.type.label} value={pageData.form.section2.fields.type.value} />
                  <Field label={pageData.form.section2.fields.suburb.label} value={pageData.form.section2.fields.suburb.value} />
                </div>
              </section>
              <section>
                <h3>
                  <i>3</i> {pageData.form.section3.title} <small>{pageData.form.section3.optional}</small>
                </h3>
                <div className="photo-upload">
                  ⇧<b>{pageData.form.section3.uploadTitle}</b>
                  <span>{pageData.form.section3.uploadDesc}</span>
                  <button type="button">{pageData.form.section3.uploadButton}</button>
                </div>
                <div className="upload-previews">
                  {pageData.form.section3.images.map((img, i) => (
                    <img key={i} src={img.src} alt={img.alt} />
                  ))}
                </div>
              </section>
              <section>
                <h3>
                  <i>4</i> {pageData.form.section4.title}
                </h3>
                {pageData.form.section4.checks.map((chk, i) => (
                  <label key={i} className="check">
                    <input type="checkbox" defaultChecked /> {chk}
                  </label>
                ))}
                <div className="privacy-note">
                  {pageData.form.section4.privacyNote}
                </div>
                <footer>
                  <span>{pageData.form.section4.footerNote}</span>
                  <button>{pageData.form.section4.submitButton}</button>
                </footer>
              </section>
            </form>
          </div>
        </section>
        
        <section
          id="review-thanks"
          className={`review-thanks ${submitted ? "show" : ""}`}
        >
          <i>{pageData.thanks.icon}</i>
          <div>
            <span>{pageData.thanks.eyebrow}</span>
            <h2>{pageData.thanks.title}</h2>
            <p>{pageData.thanks.description}</p>
            {pageData.thanks.links.map(l => <a key={l.text} href={l.href}>{l.text}</a>)}
          </div>
          <aside>
            <b>{pageData.thanks.aside.title}</b>
            <p>{pageData.thanks.aside.description}</p>
          </aside>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
