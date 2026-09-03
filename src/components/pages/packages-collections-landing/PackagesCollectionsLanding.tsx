import React, { useState } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/packages.json";
import { HomePackagesGridSection } from "../home/sections/HomePackagesGridSection";

const curatedPackages = pageData.landingPackages;
export function PackagesCollectionsLanding() {
  const [eventType, setEventType] = useState("Wedding");
  const [eventDate, setEventDate] = useState("2026-09-12");
  const [guestCount, setGuestCount] = useState(60);
  const [faqOpen, setFaqOpen] = useState(0);
  const matchHref = `/request-quote?event=${encodeURIComponent(eventType)}&date=${eventDate}&guests=${guestCount}`;
  return (
    <div className="public-site package-landing">
      <PublicHeader active="Packages" />
      <main>
        <section className="package-hero">
          <img
            src="/images/marquee-product.png"
            alt="Beautiful marquee event"
          />
          <div>
            <span>CURATED EVENT HIRE</span>
            <h1>
              Everything you need,
              <br />
              beautifully brought together.
            </h1>
            <p>
              Start with a ready-made package, explore a coordinated collection
              or let our team tailor the right mix for your event.
            </p>
            <div>
              <a href="#packages">Explore packages</a>
              <a href="/request-quote">Build a custom package</a>
            </div>
          </div>
        </section>
        <section className="package-planner">
          <span>FIND YOUR STARTING POINT</span>
          <h2>What are you planning?</h2>
          <p>
            We’ll suggest a practical package, collection and service level for
            your event.
          </p>
          <div>
            <label>
              Event type
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                <option>Wedding</option>
                <option>Birthday & celebration</option>
                <option>Corporate event</option>
                <option>Community & cultural</option>
                <option>Outdoor party</option>
              </select>
            </label>
            <label>
              Event date
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </label>
            <label>
              Guest count
              <span className="guest-stepper">
                <button
                  type="button"
                  onClick={() => setGuestCount(Math.max(10, guestCount - 10))}
                >
                  −
                </button>
                <input
                  aria-label="Guest count"
                  type="number"
                  min="10"
                  value={guestCount}
                  onChange={(e) =>
                    setGuestCount(Math.max(10, Number(e.target.value) || 10))
                  }
                />
                <button
                  type="button"
                  onClick={() => setGuestCount(guestCount + 10)}
                >
                  ＋
                </button>
              </span>
            </label>
            <a href={matchHref}>Show my matches</a>
          </div>
          <small>
            Recommended for {eventType.toLowerCase()} · 4 packages · 6
            collections  <a href="#packages"> View packages →</a>
          </small>
        </section>
        <section className="editorial-section event-types">
          <div className="split-heading">
            <div>
              <span className="section-kicker">PLAN BY OCCASION</span>
              <h2>Start with your event type</h2>
              <p>
                Browse ideas and packages coordinated around how your event
                needs to work.
              </p>
            </div>
            <a href="/collections">See all event types →</a>
          </div>
          <div>
            {[
              [
                "Weddings & engagements",
                "Create a beautiful, practical celebration.",
                "/images/marquee-product.png",
                "wedding",
              ],
              [
                "Birthdays & celebrations",
                "Flexible hire for every milestone.",
                "/images/decor-product.png",
                "birthday",
              ],
              [
                "Corporate events",
                "Presentation-ready, polished and practical.",
                "/images/flooring-product.png",
                "corporate",
              ],
              [
                "Community & cultural",
                "Adaptable layouts for shared celebrations.",
                "/images/tableware-product.png",
                "community",
              ],
              [
                "Outdoor parties",
                "Weather-aware entertaining after dark.",
                "/images/lighting-product.png",
                "outdoor",
              ],
            ].map((x, i) => (
              <a
                className={i === 0 ? "large" : ""}
                href={`/collection-${x[3]}`}
                key={x[0]}
              >
                <img src={x[2]} alt={x[0]} />
                <span>
                  <b>{x[0]}</b>
                  <em>{x[1]}</em>
                  <small>Explore this event →</small>
                </span>
              </a>
            ))}
          </div>
        </section>
        <HomePackagesGridSection />
        <section className="editorial-section package-collections">
          <div className="split-heading">
            <div>
              <span className="section-kicker">SHOP A COORDINATED LOOK</span>
              <h2>Collections made to work together</h2>
              <p>
                Explore products grouped by style and occasion, then add only
                what your event needs.
              </p>
            </div>
            <a href="/collections">Browse all collections →</a>
          </div>
          <div>
            {[
              [
                "Classic White Wedding",
                "From $880",
                "/images/hero-event.png",
                "classic-white",
              ],
              [
                "Modern Corporate",
                "From $1,250",
                "/images/flooring-product.png",
                "modern-corporate",
              ],
              [
                "Rustic Garden",
                "From $760",
                "/images/tableware-product.png",
                "rustic-garden",
              ],
              [
                "Elegant Dinner",
                "From $1,480",
                "/images/lighting-product.png",
                "elegant-dinner",
              ],
              [
                "Winter Outdoor",
                "From $1,850",
                "/images/marquee-product.png",
                "winter-outdoor",
              ],
              [
                "Kids & Family Party",
                "From $560",
                "/images/decor-product.png",
                "kids-family",
              ],
            ].map((x) => (
              <article key={x[0]}>
                <a href={`/collection-${x[3]}`}>
                  <img src={x[2]} alt={x[0]} />
                </a>
                <small>CURATED COLLECTION</small>
                <h3>{x[0]}</h3>
                <p>
                  Coordinated furniture, lighting and finishing details ready to
                  tailor.
                </p>
                <footer>
                  <b>{x[1]}</b>
                  <a href={`/collection-${x[3]}`}>View collection →</a>
                </footer>
              </article>
            ))}
          </div>
        </section>
        <section className="build-package">
          <div>
            <span>BUILD YOUR OWN PACKAGE</span>
            <h2>Need something more specific?</h2>
            <p>
              Choose a starting style and tell us about your venue, guest count
              and priorities.
            </p>
            <div className="build-stats">
              <b>
                01<small>Choose a style</small>
              </b>
              <b>
                02<small>Tell us details</small>
              </b>
              <b>
                03<small>Confirm logistics</small>
              </b>
            </div>
            <a href="/request-quote">Build my package</a>
            <a href="/contact">Talk to a planner</a>
          </div>
          <img
            src="/images/warehouse-team.png"
            alt="Planning a custom event package"
          />
        </section>
        <section
          id="compare-packages"
          className="editorial-section compare-packages"
        >
          <span className="section-kicker">PACKAGE COMPARISON</span>
          <h2>Find the right starting point</h2>
          <p>
            Compare typical capacity and inclusions. Final quantities depend on
            your venue and event layout.
          </p>
          <div className="package-compare-table">
            <b>Package</b>
            {curatedPackages.map((x) => (
              <span key={x.name}>
                <img src={x.image} alt="" />
                <strong>{x.name}</strong>
                <em>{x.price}</em>
              </span>
            ))}
            <b>Recommended guests</b>
            {curatedPackages.map((x, i) => (
              <span key={x.name}>
                {["30–60", "50–90", "60–120", "80–150"][i]}
              </span>
            ))}
            <b>Seating & tables</b>
            {curatedPackages.map((x) => (
              <span key={x.name}>Included</span>
            ))}
            <b>Marquee</b>
            {curatedPackages.map((x, i) => (
              <span key={x.name}>{i === 2 ? "Included" : "Optional"}</span>
            ))}
            <b>Heating</b>
            {curatedPackages.map((x, i) => (
              <span key={x.name}>{i === 2 ? "Optional" : "—"}</span>
            ))}
            <b>Lighting</b>
            {curatedPackages.map((x, i) => (
              <span key={x.name}>{i > 1 ? "Included" : "Optional"}</span>
            ))}
            <b>Setup support</b>
            {curatedPackages.map((x, i) => (
              <span key={x.name}>{i === 3 ? "Included" : "Optional"}</span>
            ))}
            <b></b>
            {curatedPackages.map((x, i) => (
              <a
                href={`/package-${["backyard", "celebration-dinner", "outdoor-winter", "corporate-presentation"][i]}`}
                key={x.name}
              >
                View package
              </a>
            ))}
          </div>
        </section>
        <section className="package-steps">
          <div className="editorial-section">
            <span className="section-kicker">HOW PACKAGE HIRE WORKS</span>
            <h2>From idea to event day</h2>
            <div>
              {[
                ["01", "Choose a starting point"],
                ["02", "Tailor the details"],
                ["03", "Confirm logistics"],
                ["04", "Enjoy your event"],
              ].map((x) => (
                <article key={x[0]}>
                  <i>{x[0]}</i>
                  <b>{x[1]}</b>
                  <p>Clear choices and support at every step.</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="editorial-section package-faq shared-faq">
          <div>
            <span className="section-kicker">PACKAGE QUESTIONS</span>
            <h2>Before you choose</h2>
            <a href="/help" style={{ display: 'inline-block', marginTop: '16px' }}>View all FAQs</a>
          </div>
          <div>
            {[
              "Can I change the products or quantities in a package?",
              "Are delivery and setup included in the displayed price?",
              "What happens if an item is unavailable for my date?",
              "Can I collect and return a package myself?",
              "When is the final package price confirmed?",
            ].map((x, i) => (
              <div
                className={`faq-item ${faqOpen === i ? "open" : ""}`}
                key={x}
              >
                <button
                  type="button"
                  aria-expanded={faqOpen === i}
                  onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
                >
                  <span>{x}</span>
                  <b>{faqOpen === i ? "−" : "＋"}</b>
                </button>
                {faqOpen === i && (
                  <p>
                    Yes. Every starting package can be adjusted before
                    availability and final pricing are confirmed.
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="package-cta">
          <div>
            <span>READY TO PLAN?</span>
            <h2>Start with a package that fits.</h2>
            <p>Receive a clear, tailored quotation for your event.</p>
          </div>
          <a href="#packages">Explore packages</a>
          <a href="/request-quote">Get a tailored quote</a>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
