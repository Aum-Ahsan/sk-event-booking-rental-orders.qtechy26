"use client";
/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import {
  articleSections,
  blogCategories,
  blogGuides,
  type BlogGuide,
} from "../../../../app/blogData";
import { Field, ReviewBlock } from "../../../landing/shared/FormControls";
import {
  PublicFooter,
  PublicHeader,
  eventTypes,
} from "../../public-commerce/sections/PublicCommerceSections";
const showcaseCards = [
  {
    title: "Garden wedding under warm lights",
    meta: "Wedding · Richmond",
    image: "/images/hero-event.png",
    tags: ["Wedding", "Outdoor", "Warm lighting"],
    details:
      "An 80-guest garden reception with timber dining, weather cover, festoon lighting and full setup support.",
    slug: "garden-wedding-warm-lights",
  },
  {
    title: "Rustic table styling",
    meta: "Wedding · Yarra Valley",
    image: "/images/tableware-product.png",
    tags: ["Wedding", "Indoor", "Rustic"],
    details:
      "A vineyard reception combining long timber tables, neutral tableware and natural centrepiece styling.",
    slug: "rustic-table-styling",
  },
  {
    title: "Corporate presentation setup",
    meta: "Corporate · Docklands",
    image: "/images/flooring-product.png",
    tags: ["Corporate", "Indoor", "Modern"],
    details:
      "A polished presentation and networking layout with staging, audience seating and clear circulation zones.",
    slug: "corporate-presentation-setup",
  },
  {
    title: "Winter celebration dining",
    meta: "Private event · Carlton",
    image: "/images/lighting-product.png",
    tags: ["Private event", "Indoor", "Warm lighting"],
    details:
      "An intimate winter dinner with layered lighting, heaters and a warm seated dining arrangement.",
    slug: "winter-celebration-dining",
  },
  {
    title: "Candlelit dinner setting",
    meta: "Wedding · Brighton",
    image: "/images/decor-product.png",
    tags: ["Wedding", "Indoor", "Elegant"],
    details:
      "A refined evening reception using candlelight, ivory décor and coordinated dining furniture.",
    slug: "candlelit-dinner-setting",
  },
  {
    title: "White garden ceremony",
    meta: "Ceremony · Kew",
    image: "/images/chairs-product.png",
    tags: ["Wedding", "Outdoor", "Elegant white"],
    details:
      "A clean garden ceremony layout with white guest seating, a central aisle and signing-table setup.",
    slug: "white-garden-ceremony",
  },
  {
    title: "Warm timber reception",
    meta: "Wedding · Fitzroy",
    image: "/images/tables-product.png",
    tags: ["Wedding", "Indoor", "Warm lighting"],
    details:
      "A relaxed reception built around warm timber tables, bentwood chairs and soft ambient lighting.",
    slug: "warm-timber-reception",
  },
  {
    title: "Festoon-lit courtyard",
    meta: "Outdoor party · Brunswick",
    image: "/images/lighting-product.png",
    tags: ["Party", "Outdoor", "Warm lighting"],
    details:
      "A courtyard celebration with overhead festoons, cocktail zones and flexible weather-ready seating.",
    slug: "festoon-lit-courtyard",
  },
  {
    title: "Relaxed marquee lounge",
    meta: "Birthday · Mornington",
    image: "/images/marquee-product.png",
    tags: ["Birthday", "Outdoor", "Marquee"],
    details:
      "A coastal birthday with a covered lounge, casual dining and a practical wind-and-weather plan.",
    slug: "relaxed-marquee-lounge",
  },
] as const;

export function GalleryCaseStudiesPage({ story = false }: { story?: boolean }) {
  const [visible, setVisible] = useState(8);
  const [activeTag, setActiveTag] = useState("All");
  const [preview, setPreview] = useState<(typeof showcaseCards)[number] | null>(
    null,
  );
  const shown = showcaseCards.filter(
    (x) => activeTag === "All" || x.tags.includes(activeTag as never),
  );
  if (story) return <GalleryStoryPage />;
  return (
    <div className="public-site editorial-page">
      <PublicHeader active="Gallery" />
      <main>
        <section className="gallery-restored-hero">
          <div>
            <span>REAL EVENT INSPIRATION</span>
            <h1>Ideas brought to life.</h1>
            <p>
              Explore real Melbourne celebrations and see how furniture,
              lighting, marquees and practical planning came together.
            </p>
            <a href="#gallery-browser">Explore the gallery ↓</a>
          </div>
          <img
            src="/images/hero-event.png"
            alt="Warm outdoor wedding reception prepared by SK Event Hire"
          />
        </section>
        <section
          id="gallery-browser"
          className="gallery-browser gallery-listing-only"
        >
          <div className="editorial-section">
            <div className="filter-pills gallery-chip-bar">
              {["All", "Wedding", "Outdoor", "Warm lighting"].map((tag) => (
                <button
                  className={activeTag === tag ? "active" : ""}
                  onClick={() => {
                    setActiveTag(tag);
                    setVisible(8);
                  }}
                  key={tag}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="masonry-gallery gallery-event-grid">
              {shown.slice(0, visible).map((x) => (
                <article key={x.title}>
                  <button
                    className="gallery-image-button"
                    onClick={() => setPreview(x)}
                    aria-label={`Preview ${x.title}`}
                  >
                    <img src={x.image} alt={x.title} />
                    <span>View image</span>
                  </button>
                  <div className="gallery-card-details">
                    <div className="gallery-card-tags">
                      {x.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a
                      className="gallery-event-title"
                      href={`/gallery-event-${x.slug}`}
                    >
                      <h3>{x.title}</h3>
                    </a>
                    <b>{x.meta}</b>
                    <p>{x.details}</p>
                    <a
                      className="gallery-view-action"
                      href={`/gallery-event-${x.slug}`}
                    >
                      View event details <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            {visible < shown.length && (
              <button
                className="load-more"
                onClick={() => setVisible(visible + 4)}
              >
                Load more events
              </button>
            )}
          </div>
        </section>
        {preview && (
          <div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${preview.title} image preview`}
            onClick={() => setPreview(null)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <button
                className="gallery-lightbox-close"
                onClick={() => setPreview(null)}
                aria-label="Close image preview"
              >
                ×
              </button>
              <img src={preview.image} alt={preview.title} />
              <footer>
                <div>
                  <b>{preview.title}</b>
                  <span>{preview.meta}</span>
                </div>
                <a href={`/gallery-event-${preview.slug}`}>
                  View event details →
                </a>
              </footer>
            </div>
          </div>
        )}
      </main>
      <PublicFooter />
    </div>
  );
}

export function GalleryStoryPage() {
  return (
    <div className="public-site editorial-page story-detail">
      <PublicHeader active="Gallery" />
      <main>
        <section className="case-banner event-result-hero">
          <img
            src="/images/hero-event.png"
            alt="Weather-ready garden reception"
          />
          <div>
            <a href="/gallery">← Back to gallery</a>
            <span>THE FINAL RESULT</span>
            <h1>Weather-ready garden reception</h1>
            <p>Warm, welcoming and ready before the first guest arrived.</p>
            <small>Richmond, Victoria · 80 guests · Full-service setup</small>
          </div>
        </section>
        <section className="editorial-section case-story">
          <div>
            <span className="section-kicker">THE BRIEF</span>
            <h2>A warm outdoor celebration with a practical weather plan</h2>
            <p>
              The couple wanted an intimate garden atmosphere without risking
              comfort or logistics. The plan paired natural timber furniture
              with covered dining, layered lighting and a clear wet-weather
              fallback.
            </p>
            <div className="story-stats">
              <b>
                80<small>guests</small>
              </b>
              <b>
                5 hrs<small>setup</small>
              </b>
              <b>
                2<small>crew</small>
              </b>
              <b>
                1<small>delivery</small>
              </b>
            </div>
          </div>
          <img
            src="/images/warehouse-team.png"
            alt="Event planners reviewing the setup plan"
          />
        </section>
        <section className="editorial-section case-products">
          <div>
            <span className="section-kicker">WHAT MADE IT WORK</span>
            <h2>Products and services working as one plan</h2>
            {[
              ["Natural Bentwood Chairs", "80 × dining chairs", "$352"],
              ["Rustic Timber Tables", "10 × 1.8m tables", "$420"],
              ["Warm Festoon Lighting", "4 × lighting runs", "$380"],
              ["Marquee & weather cover", "Installed structure", "$1,850"],
            ].map((x) => (
              <div className="case-product-row" key={x[0]}>
                <img
                  src={
                    x[0].includes("Chair")
                      ? "/images/chairs-product.png"
                      : x[0].includes("Table")
                        ? "/images/tables-product.png"
                        : x[0].includes("Marquee")
                          ? "/images/marquee-product.png"
                          : "/images/lighting-product.png"
                  }
                  alt=""
                />
                <span>
                  <b>{x[0]}</b>
                  <small>{x[1]}</small>
                </span>
                <strong>{x[2]}</strong>
              </div>
            ))}
          </div>
          <div className="case-collage">
            <img src="/images/hero-event.png" alt="Finished dining setup" />
            <img src="/images/chairs-product.png" alt="White chairs" />
            <img src="/images/decor-product.png" alt="Garden details" />
          </div>
        </section>
        <section className="case-lesson editorial-section">
          <div className="case-collage">
            <img src="/images/lighting-product.png" alt="Warm lighting" />
            <img src="/images/hero-event.png" alt="Dining layout" />
            <img
              src="/images/decor-product.png"
              alt="Styled table and garden details"
            />
          </div>
          <div>
            <span className="section-kicker">WHY THIS LAYOUT WORKED</span>
            <h2>
              A clear layout, covered dining and an organised setup sequence
            </h2>
            <p>
              One circulation route kept service practical while the lighting
              layers made the garden feel intimate after dark.
            </p>
            <blockquote>
              Practical takeaway: build the weather plan into the layout from
              the beginning.
            </blockquote>
            <a href="/request-quote">Build my event options</a>
          </div>
        </section>
        <section className="case-final">
          <img src="/images/hero-event.png" alt="Garden event" />
          <div>
            <span>PLANNING YOUR EVENT?</span>
            <h2>Use this event as a practical starting point.</h2>
            <p>
              Tell us what you liked and we’ll adapt the products, quantities
              and logistics for your venue.
            </p>
            <a href="/request-quote">Build a similar event</a>
            <a href="/products">Explore hire range</a>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

const publicReviews = [
  {
    name: "Amelia M.",
    event: "Wedding",
    location: "Richmond",
    rating: 5,
    title: "Everything arrived beautifully presented",
    text: "The team made our garden reception feel completely manageable. Every chair was spotless, delivery was exactly within the confirmed window and the marquee looked wonderful after dark.",
    image: "/images/hero-event.png",
    product: "Garden Event Furniture Hire",
  },
  {
    name: "Daniel K.",
    event: "Corporate",
    location: "Docklands",
    rating: 5,
    title: "Simple booking and genuinely helpful service",
    text: "Clear advice on quantities, a detailed quotation and a professional setup. The whole process was organised without feeling complicated.",
    image: "/images/tableware-product.png",
    product: "Corporate Event Hire",
  },
  {
    name: "Priya S.",
    event: "Birthday",
    location: "Brighton",
    rating: 5,
    title: "Professional setup from start to finish",
    text: "The delivery crew checked access in advance and had everything ready before our guests arrived. Collection the following morning was just as smooth.",
    image: "/images/warehouse-team.png",
    product: "Outdoor Celebration Package",
  },
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
            <span>VERIFIED CUSTOMER REVIEWS</span>
            <h1>
              Real events.
              <br />
              Honest experiences.
            </h1>
            <p>
              Read feedback from customers who hired furniture, marquees,
              lighting and complete event support from SK Event Hire.
            </p>
            <div>
              <a href="#review-form">Share your experience</a>
              <a href="#review-list">Write a review</a>
            </div>
            <small>
              ✓ Every published review is linked to a completed hire
            </small>
          </div>
          <figure>
            <img
              src="/images/hero-event.png"
              alt="Beautiful marquee wedding reception"
            />
            <figcaption>
              ★★★★★ 4.8 out of 5<br />
              <small>Based on verified event hires</small>
            </figcaption>
          </figure>
        </section>
        <section className="review-summary editorial-section">
          <span>AT A GLANCE</span>
          <h2>Reviews from real SK Event Hire bookings</h2>
          <p>
            Only customers connected to completed bookings can submit verified
            event feedback.
          </p>
          <div>
            <strong>
              4.8
              <small>
                out of 5<br />
                ★★★★★
              </small>
            </strong>
            <div className="rating-bars">
              {[
                [5, 78],
                [4, 16],
                [3, 4],
                [2, 1],
                [1, 1],
              ].map((x) => (
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
            {[
              "Hire experience",
              "Delivery & setup",
              "Product quality",
              "Customer care",
              "Value",
            ].map((x) => (
              <a href="#review-list" key={x}>
                {x}
              </a>
            ))}
          </nav>
        </section>
        <section id="review-list" className="editorial-section review-browser">
          <span>FIND THE RIGHT FEEDBACK</span>
          <h2>Find relevant reviews</h2>
          <div className="review-filters">
            <label>
              Event type
              <select value={event} onChange={(e) => setEvent(e.target.value)}>
                <option>All events</option>
                <option>Wedding</option>
                <option>Corporate</option>
                <option>Birthday</option>
              </select>
            </label>
            <label>
              Rating
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option>All ratings</option>
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
              </select>
            </label>
            <label>
              Service
              <select>
                <option>All services</option>
                <option>Delivery & setup</option>
                <option>Product hire</option>
              </select>
            </label>
            <label>
              Sort by
              <select>
                <option>Most helpful</option>
                <option>Newest</option>
                <option>Highest rated</option>
              </select>
            </label>
          </div>
          <div className="review-count">
            {visible.length} verified reviews{" "}
            <button
              onClick={() => {
                setEvent("All events");
                setRating("All ratings");
              }}
            >
              Clear filters
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
              <h3>No reviews match these filters.</h3>
              <p>Clear one or more filters to see verified event feedback.</p>
              <button
                onClick={() => {
                  setEvent("All events");
                  setRating("All ratings");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
        <section className="review-filter-empty">
          <div>⌕</div>
          <span>
            <small>FILTERED RESULT</small>
            <h2>No reviews match these filters.</h2>
            <p>Try another event type, service or rating.</p>
          </span>
          <a href="#review-list">Clear filters</a>
        </section>
        <section className="post-event editorial-section">
          <div>
            <span>YOUR COMPLETED EVENT</span>
            <h2>How did your event hire go?</h2>
            <p>
              Your verified booking is ready for feedback. Reviews help future
              customers plan with confidence.
            </p>
            <b>SK-260611-084 · Wedding reception</b>
            <a href="#review-form">Share your review →</a>
          </div>
          <img
            src="/images/tableware-product.png"
            alt="Dining setup from completed event"
          />
          <aside>
            <img src="/images/lighting-product.png" alt="Event lighting" />
            <b>Your hire included</b>
            <small>Chairs · tables · lighting · delivery and setup</small>
          </aside>
        </section>
        <section id="review-form" className="review-form-wrap">
          <div className="editorial-section">
            <header>
              <span>SHARE YOUR EXPERIENCE</span>
              <h2>Tell us about your experience</h2>
              <p>
                Your feedback is connected to your completed booking and
                reviewed before publication.
              </p>
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
                  <i>1</i> Rate your experience
                </h3>
                <div className="rating-grid">
                  {[
                    "Overall rating",
                    "Delivery & setup",
                    "Product quality",
                    "Customer care",
                    "Communication",
                    "Value for money",
                  ].map((x) => (
                    <label key={x}>
                      <span>{x}</span>
                      <b>★★★★★</b>
                    </label>
                  ))}
                </div>
              </section>
              <section>
                <h3>
                  <i>2</i> Share the helpful details
                </h3>
                <label>
                  Review title
                  <input defaultValue="Beautiful products and a very organised team" />
                </label>
                <label>
                  Tell us about your event
                  <textarea defaultValue="The products arrived clean and beautifully presented. Delivery and collection were both on time, and the team answered every question clearly." />
                </label>
                <label>
                  What stood out most?
                  <textarea defaultValue="The care taken with setup and the quality of the furniture." />
                </label>
                <div className="form-grid">
                  <Field label="Event type" value="Wedding reception" />
                  <Field label="Suburb / venue" value="Richmond VIC" />
                </div>
              </section>
              <section>
                <h3>
                  <i>3</i> Add event photos <small>Optional</small>
                </h3>
                <div className="photo-upload">
                  ⇧<b>Drop photos here</b>
                  <span>JPG or PNG · up to 10MB each</span>
                  <button type="button">Choose photos</button>
                </div>
                <div className="upload-previews">
                  <img
                    src="/images/hero-event.png"
                    alt="Uploaded event photo"
                  />
                  <img
                    src="/images/tableware-product.png"
                    alt="Uploaded table setting"
                  />
                </div>
              </section>
              <section>
                <h3>
                  <i>4</i> Before you submit
                </h3>
                <label className="check">
                  <input type="checkbox" defaultChecked /> I confirm this review
                  reflects my genuine experience.
                </label>
                <label className="check">
                  <input type="checkbox" defaultChecked /> SK Event Hire may
                  publish my first name, initial and event photos.
                </label>
                <div className="privacy-note">
                  Your address, phone number, email and booking value are never
                  displayed publicly.
                </div>
                <footer>
                  <span>Your review will be checked before publication.</span>
                  <button>Submit review →</button>
                </footer>
              </section>
            </form>
          </div>
        </section>
        <section
          id="review-thanks"
          className={`review-thanks ${submitted ? "show" : ""}`}
        >
          <i>✓</i>
          <div>
            <span>REVIEW RECEIVED</span>
            <h2>Thank you for your feedback.</h2>
            <p>
              Your review is being checked against booking SK-260611-084. We’ll
              let you know when it is published.
            </p>
            <a href="/reviews-account">View my reviews</a>
            <a href="/gallery">See event inspiration</a>
          </div>
          <aside>
            <b>What happens next?</b>
            <p>
              Verification usually takes one to two business days. You can
              update photo consent from your account.
            </p>
          </aside>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function BlogResourceCentrePage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Planning basics");
  const [subscribed, setSubscribed] = useState(false);
  const filtered = blogGuides.filter(
    (guide) =>
      (activeCategory === "All topics" || guide.category === activeCategory) &&
      `${guide.title} ${guide.summary} ${guide.category}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <div className="public-site blog-resource">
      <PublicHeader active="Blog" />
      <main>
        <section className="blog-hero">
          <div>
            <span>THE SK EVENT PLANNING GUIDE</span>
            <h1>The SK Event Planning Guide</h1>
            <p>
              Explore 48 detailed guides covering planning, furniture, marquees,
              delivery, lighting, weather, venues and the complete guest
              experience.
            </p>
            <label>
              <i aria-hidden="true">⌕</i>
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (e.target.value) setActiveCategory("All topics");
                }}
                placeholder="Search all 48 planning guides"
              />
              <button type="button">Search</button>
            </label>
          </div>
          <img
            src="/images/tableware-product.png"
            alt="Elegant event planning notebook and table setting"
          />
        </section>
        <section className="featured-guide editorial-section">
          <img
            src="/images/marquee-product.png"
            alt="Round tables arranged inside a marquee"
          />
          <div>
            <span>EVENT PLANNING</span>
            <h2>How Many Tables and Chairs Do I Need?</h2>
            <p>
              A simple guest-count guide for ceremony, seated dining and
              cocktail layouts, with practical space and access checks.
            </p>
            <a href="/blog-how-many-tables-and-chairs">Read this guide →</a>
          </div>
        </section>
        <section className="topic-browser editorial-section">
          <span>BROWSE BY TOPIC</span>
          <h2>Browse planning topics</h2>
          <p>Each topic contains six complete planning articles.</p>
          <div>
            {blogCategories.map((category, i) => (
              <button
                type="button"
                className={activeCategory === category ? "active" : ""}
                onClick={() => {
                  setActiveCategory(category);
                  setQuery("");
                  setTimeout(
                    () =>
                      document
                        .getElementById("latest-guides")
                        ?.scrollIntoView({ behavior: "smooth" }),
                    20,
                  );
                }}
                key={category}
              >
                <i>{["▣", "◫", "⌂", "▤", "✦", "☂", "⌖", "♡"][i]}</i>
                <span>
                  <b>{category}</b>
                  <small>6 detailed articles</small>
                </span>
                <em>→</em>
              </button>
            ))}
          </div>
        </section>
        <section id="latest-guides" className="latest-guides">
          <div className="editorial-section">
            <header>
              <div>
                <span>{activeCategory.toUpperCase()}</span>
                <h2>
                  {activeCategory === "All topics"
                    ? "All 48 event guides"
                    : `${activeCategory}: six practical guides`}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All topics");
                }}
              >
                View all 48 guides
              </button>
            </header>
            <div>
              {filtered.map((guide) => (
                <article key={guide.slug}>
                  <img src={guide.image} alt={guide.title} />
                  <div>
                    <small>{guide.category}</small>
                    <h3>{guide.title}</h3>
                    <p>{guide.summary}</p>
                    <footer>
                      <span>{guide.read}</span>
                      <a href={`/blog-${guide.slug}`}>Read guide →</a>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
            {!filtered.length && (
              <div className="blog-empty">
                <h3>No planning guides match “{query}”.</h3>
                <button type="button" onClick={() => setQuery("")}>
                  Show this category’s six articles
                </button>
              </div>
            )}
          </div>
        </section>
        <section className="article-entry editorial-section">
          <span>FEATURED LONG-FORM GUIDE</span>
          <h2>Ready for the complete planning guide?</h2>
          <p>
            Open the dedicated article page for layouts, quantities, examples
            and venue checks.
          </p>
          <a className="public-cta" href="/blog-how-many-tables-and-chairs">
            Read complete guide →
          </a>
        </section>
        <section className="mentioned-products">
          <div className="editorial-section">
            <header>
              <div>
                <span>PRODUCTS IN THIS GUIDE</span>
                <h2>Products mentioned in this guide</h2>
              </div>
              <a href="/products">Browse all products</a>
            </header>
            <div>
              {[
                ["White Bentwood Chair", "/images/chairs-product.png"],
                ["Rustic Timber Trestle Table", "/images/tables-product.png"],
                ["Round Dining Table", "/images/tableware-product.png"],
                ["Table & Tableware Package", "/images/decor-product.png"],
              ].map((x) => (
                <article key={x[0]}>
                  <img src={x[1]} alt={x[0]} />
                  <h3>{x[0]}</h3>
                  <a href="/products">Check availability</a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="blog-advice"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(7,35,58,.96),rgba(7,35,58,.72),rgba(7,35,58,.28)),url('/images/warehouse-team.png')",
          }}
        >
          <div>
            <span>PRACTICAL EVENT SUPPORT</span>
            <h2>Need advice for your event?</h2>
            <p>
              Share your guest count and venue details. We’ll help calculate a
              practical starting list.
            </p>
            <a href="/planning">Ask a planning specialist</a>
            <small>No obligation · Melbourne support</small>
          </div>
        </section>
        <section className="keep-planning editorial-section">
          <span>KEEP READING</span>
          <h2>Keep planning</h2>
          <div>
            {blogGuides
              .filter(
                (guide) =>
                  guide.category === activeCategory ||
                  activeCategory === "All topics",
              )
              .slice(0, 3)
              .map((guide) => (
                <article key={guide.slug}>
                  <img src={guide.image} alt={guide.title} />
                  <h3>{guide.title}</h3>
                  <a href={`/blog-${guide.slug}`}>Read guide →</a>
                </article>
              ))}
          </div>
        </section>
        <section className="newsletter">
          <div>
            <b>Helpful ideas, occasionally</b>
            <p>Practical planning guides and seasonal event advice.</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
          >
            <input type="email" required placeholder="Email address" />
            <button>{subscribed ? "Subscribed ✓" : "Subscribe"}</button>
            <small>
              {subscribed
                ? "✓ You’re subscribed. Check your inbox for confirmation."
                : "No spam. Unsubscribe whenever you like."}
            </small>
          </form>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function BlogArticlePage({ guide }: { guide: BlogGuide }) {
  const sections =
    articleSections[guide.category] || articleSections["Planning basics"];
  const related = blogGuides
    .filter(
      (item) => item.category === guide.category && item.slug !== guide.slug,
    )
    .slice(0, 3);
  return (
    <div className="public-site blog-resource article-detail">
      <PublicHeader active="Blog" />
      <main>
        <div className="detail-back">
          <a href="/blog">← Back to planning guides</a>
        </div>
        <article className="guide-article">
          <header>
            <div>
              <span>{guide.category.toUpperCase()} GUIDE</span>
              <h1>{guide.title}</h1>
              <p>{guide.summary}</p>
              <small>
                By SK Event Hire planning team · Updated 31 August 2026 ·{" "}
                {guide.read}
              </small>
            </div>
            <img src={guide.image} alt={guide.title} />
          </header>
          <div className="article-layout">
            <aside>
              <b>In this guide</b>
              {sections.map((section, index) => (
                <a href={`#guide-${index + 1}`} key={section[0]}>
                  {index + 1}. {section[0]}
                </a>
              ))}
              <a href="/request-quote">Get planning help</a>
            </aside>
            <div className="article-copy">
              <p>
                {guide.summary} This guide explains the decisions to make, the
                information to collect and the checks that help customers,
                venues and suppliers work from the same practical plan.
              </p>
              <p>
                Use the recommendations as a structured starting point, then
                confirm the final quantities, timing, access and
                responsibilities in your current SK Event Hire quotation.
                Product availability and venue conditions remain specific to
                each event.
              </p>
              <blockquote>
                <b>Planning principle</b> Confirm the facts that affect safety,
                access, quantities and timing before approving the visual
                details.
              </blockquote>
              {sections.map((section, index) => (
                <section id={`guide-${index + 1}`} key={section[0]}>
                  <h2>
                    {index + 1}. {section[0]}
                  </h2>
                  <p>{section[1]}</p>
                  <p>
                    For “{guide.title},” record this information against the
                    current guest count and venue plan. Share changes promptly
                    so product availability, labour and timing can be reviewed
                    before the final quotation is accepted.
                  </p>
                  {index === 2 && (
                    <img
                      src={guide.image}
                      alt={`${guide.title} planning example`}
                    />
                  )}
                </section>
              ))}
              <section className="article-tip">
                <h2>Final checklist before confirmation</h2>
                <p>
                  Recheck the event date, guest count, venue contact, access
                  instructions, selected products, quantities, service scope and
                  any weather decision. Keep only the latest approved version
                  with the people responsible for setup.
                </p>
              </section>
              <a className="public-cta" href="/request-quote">
                Ask us to review your event plan →
              </a>
            </div>
          </div>
        </article>
        <section className="keep-planning editorial-section article-related">
          <span>MORE IN {guide.category.toUpperCase()}</span>
          <h2>Continue with this topic</h2>
          <div>
            {related.map((item) => (
              <article key={item.slug}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <a href={`/blog-${item.slug}`}>Read guide →</a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function EventPlanningConsultationPage() {
  const [support, setSupport] = useState("Full event plan");
  const supportOptions = [
    ["Equipment advice", "Products, quantities and practical alternatives."],
    [
      "Styling direction",
      "A coordinated visual direction for furniture, linen and décor.",
    ],
    [
      "Venue & logistics",
      "Access, delivery, setup, pack-down and weather planning.",
    ],
    ["On-site coordination", "A clear supplier and event-day handover plan."],
    [
      "Full event plan",
      "One connected plan from the first conversation to event day.",
    ],
  ];
  const eventHelp = [
    [
      "Weddings",
      "Ceremony, dining, lighting and weather-ready reception planning.",
      "/images/marquee-product.png",
    ],
    [
      "Private celebrations",
      "Birthdays, anniversaries and intimate milestone events.",
      "/images/decor-product.png",
    ],
    [
      "Long-table dinners",
      "Practical layouts, tableware, linen and warm lighting.",
      "/images/hero-event.png",
    ],
    [
      "Baby showers",
      "Relaxed seating, shade, tables and coordinated details.",
      "/images/lounge-product.png",
    ],
    [
      "Backyard events",
      "Flexible outdoor plans with cover and lighting options.",
      "/images/lighting-product.png",
    ],
    [
      "Corporate events",
      "Professional guest flow, staging, furniture and logistics.",
      "/images/flooring-product.png",
    ],
    [
      "Community events",
      "Scalable layouts, equipment, access and supplier timing.",
      "/images/tables-product.png",
    ],
    [
      "Cultural celebrations",
      "Respectful layouts, dining, staging and guest-flow planning.",
      "/images/tableware-product.png",
    ],
    [
      "School & university events",
      "Graduations, presentations, seating and practical site logistics.",
      "/images/chairs-product.png",
    ],
  ];
  return (
    <div className="public-site planning-consultation">
      <PublicHeader active="Event Planning" />
      <main>
        <section className="planning-hero">
          <img
            src="/images/warehouse-team.png"
            alt="Event planner preparing a customer plan"
          />
          <div>
            <span>EVENT PLANNING & CONSULTATION</span>
            <h1>
              Your event,
              <br />
              thoughtfully planned.
            </h1>
            <p>
              From product choices and quantities to delivery, setup and
              event-day details, our Melbourne team helps turn your ideas into
              one practical plan.
            </p>
            <div>
              <a href="/contact">Contact our planning team</a>
              <a href="/request-quote">Request a quote</a>
            </div>
            <small>FROM $120 · CLEAR SCOPE BEFORE YOU COMMIT</small>
          </div>
        </section>
        <section className="planning-section support-choice">
          <header>
            <span>CHOOSE YOUR SUPPORT</span>
            <h2>Choose the support you need</h2>
            <p>
              Start with one area or select a complete plan. We’ll confirm scope
              and timing before work begins.
            </p>
          </header>
          <div>
            {supportOptions.map((x, i) => (
              <button
                type="button"
                className={support === x[0] ? "selected" : ""}
                onClick={() => setSupport(x[0])}
                key={x[0]}
              >
                <i>{["◉", "✦", "⌖", "◎", "✓"][i]}</i>
                <b>{x[0]}</b>
                <small>{x[1]}</small>
                <em>{support === x[0] ? "Selected" : "Choose support →"}</em>
              </button>
            ))}
          </div>
        </section>
        <section className="planning-events">
          <div className="planning-section">
            <header>
              <span>EVENTS WE SUPPORT</span>
              <h2>Events we can help with</h2>
              <p>
                Every plan is shaped around the venue, guest experience, timing
                and practical requirements.
              </p>
            </header>
            <div className="planning-event-grid">
              {eventHelp.map((x, i) => (
                <a
                  className={i === 0 ? "large" : ""}
                  href="/contact"
                  key={x[0]}
                >
                  <img src={x[2]} alt={x[0]} />
                  <span>
                    <b>{x[0]}</b>
                    <small>{x[1]}</small>
                    <em>Plan this event →</em>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="planning-section practical-team">
          <div>
            <span>ONE PRACTICAL TEAM</span>
            <h2>One team for the practical details</h2>
            <p>
              Use only the services your event needs. Your planner keeps the
              products, venue details and timing connected.
            </p>
            <ul>
              {[
                "Product selection & quantities",
                "Styling and colour direction",
                "Venue access review",
                "Delivery and collection plan",
                "Setup and pack-down timing",
                "Weather and contingency planning",
                "Supplier coordination",
                "Event-day support",
              ].map((x) => (
                <li key={x}>✓ {x}</li>
              ))}
            </ul>
            <a href="/contact">Discuss your event</a>
          </div>
          <div className="planning-collage">
            <img src="/images/hero-event.png" alt="Warm garden dining setup" />
            <img src="/images/warehouse-team.png" alt="Delivery team" />
            <img src="/images/chairs-product.png" alt="Prepared event chairs" />
          </div>
        </section>
        <section className="planning-process">
          <div className="planning-section">
            <span>A CLEAR, SUPPORTED PROCESS</span>
            <h2>A clear plan from first conversation to event day</h2>
            <div>
              {[
                ["01", "Share your event"],
                ["02", "Review the venue"],
                ["03", "Build the plan"],
                ["04", "Confirm every detail"],
                ["05", "Deliver the event"],
              ].map((x) => (
                <article key={x[0]}>
                  <i>{x[0]}</i>
                  <b>{x[1]}</b>
                  <p>
                    Clear decisions, responsibilities and next steps at every
                    stage.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="planning-section pricing-support">
          <header>
            <span>CLEAR STARTING POINTS</span>
            <h2>Planning support that fits your event</h2>
            <p>Choose a focused consultation or a tailored planning scope.</p>
          </header>
          <div>
            <article>
              <span>EVENT CONSULTATION</span>
              <h3>$120</h3>
              <p>
                A focused session covering priorities, quantities, layout and
                next steps.
              </p>
              <ul>
                <li>60-minute consultation</li>
                <li>Practical recommendation summary</li>
                <li>Product and service shortlist</li>
              </ul>
              <a href="/contact">Book a consultation</a>
            </article>
            <article>
              <span>TAILORED EVENT PLAN</span>
              <h3>Tailored quote</h3>
              <p>
                For events needing a connected product, supplier and logistics
                plan.
              </p>
              <ul>
                <li>Venue and access planning</li>
                <li>Product and service recommendations</li>
                <li>Run sheet and supplier coordination</li>
              </ul>
              <a href="/contact">Contact the planning team</a>
            </article>
          </div>
        </section>
        <section className="planning-section meet-team">
          <header>
            <span>MEET YOUR PLANNING TEAM</span>
            <h2>Meet the people behind the plan</h2>
          </header>
          <div>
            <article>
              <img
                src="/images/warehouse-team.png"
                alt="Event planning consultant"
              />
              <span>
                <b>Your planning consultant</b>
                <small>Brief, layout and styling coordination</small>
                <a href="/contact">Meet the planning team →</a>
              </span>
            </article>
            <article>
              <img src="/images/hero-event.png" alt="Event operations team" />
              <span>
                <b>Your event operations team</b>
                <small>Products, delivery, setup and collection</small>
                <a href="/contact">How delivery works →</a>
              </span>
            </article>
          </div>
        </section>
        <section className="planning-thinking">
          <div className="planning-section">
            <header>
              <span>PLANNING INSIGHTS</span>
              <h2>See the thinking behind each event</h2>
            </header>
            <div>
              {[
                ["Weather-ready garden reception", "/images/hero-event.png"],
                ["Practical venue access plan", "/images/warehouse-team.png"],
                [
                  "A coordinated dining layout",
                  "/images/tableware-product.png",
                ],
              ].map((x) => (
                <article key={x[0]}>
                  <img src={x[1]} alt={x[0]} />
                  <div>
                    <h3>{x[0]}</h3>
                    <p>
                      See the product, timing and logistics decisions that made
                      the event work.
                    </p>
                    <a href="/gallery">Read case study →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="planning-section remembered">
          <div>
            <span>WHAT CUSTOMERS REMEMBER</span>
            <h2>Support customers remember</h2>
            <p>
              “The plan was calm, clear and practical. Every supplier knew the
              timing and the setup looked exactly as discussed.”
            </p>
            <b>Verified Melbourne event customer</b>
            <a href="/reviews">Read verified reviews →</a>
          </div>
          <img
            src="/images/marquee-product.png"
            alt="Completed marquee celebration"
          />
        </section>
        <section className="planning-cta">
          <div>
            <span>READY TO PLAN?</span>
            <h2>Let’s turn the details into a clear plan.</h2>
          </div>
          <a href="/contact">Contact our planning team</a>
          <a href="/request-quote">Request a quotation</a>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

const curatedPackages = [
  [
    "Backyard Celebration",
    "40 guests · outdoor",
    "$420",
    "/images/chairs-product.png",
  ],
  [
    "Celebration Dinner",
    "60 guests · dining",
    "$1,050",
    "/images/tableware-product.png",
  ],
  [
    "Outdoor Winter Event",
    "80 guests · covered",
    "$2,450",
    "/images/lighting-product.png",
  ],
  [
    "Corporate Presentation",
    "100 guests · theatre",
    "$1,900",
    "/images/flooring-product.png",
  ],
] as const;

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
            collections <a href="#packages">View packages →</a>
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
        <section id="packages" className="package-cards-wrap">
          <div className="editorial-section">
            <div className="split-heading">
              <div>
                <span className="section-kicker">POPULAR EVENT STARTERS</span>
                <h2>A simpler way to hire</h2>
                <p>
                  Start with a clear package, then customise products, colours
                  and service.
                </p>
              </div>
              <a href="#compare-packages">View package guide →</a>
            </div>
            <div className="curated-package-grid">
              {curatedPackages.map((x, i) => (
                <article key={x[0]}>
                  <div className="package-image">
                    <img src={x[3]} alt={x[0]} />
                    <span>
                      {
                        [
                          "MOST POPULAR",
                          "BEST FOR DINING",
                          "WEATHER READY",
                          "COMPLETE AV",
                        ][i]
                      }
                    </span>
                    <i>♡</i>
                  </div>
                  <div>
                    <small>EVENT HIRE PACKAGE</small>
                    <h3>{x[0]}</h3>
                    <p>{x[1]}</p>
                    <ul>
                      <li>
                        {
                          [
                            "40 white folding chairs",
                            "6 trestle tables",
                            "80 seats and tables",
                            "100 conference chairs",
                          ][i]
                        }
                      </li>
                      <li>
                        {
                          [
                            "White table linen",
                            "Cutlery and glassware",
                            "Clearspan marquee",
                            "Stage and lectern",
                          ][i]
                        }
                      </li>
                      <li>
                        {
                          [
                            "Warm festoon lighting",
                            "Table décor starter",
                            "Heating and lighting",
                            "Presentation lighting",
                          ][i]
                        }
                      </li>
                    </ul>
                    <b>
                      {x[2]} <em>starting price</em>
                    </b>
                    <a
                      href={`/package-${["backyard", "celebration-dinner", "outdoor-winter", "corporate-presentation"][i]}`}
                    >
                      View & customise
                    </a>
                    <button
                      type="button"
                      onClick={() => (location.href = matchHref)}
                    >
                      ＋ Compare package
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <div className="package-note">
              <span>Packages are flexible.</span> Swap colours, change
              quantities, add accessories or request a complete custom plan.
              <a href="/contact">Ask about a package</a>
            </div>
          </div>
        </section>
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
              <span key={x[0]}>
                <img src={x[3]} alt="" />
                <strong>{x[0]}</strong>
                <em>{x[2]}</em>
              </span>
            ))}
            <b>Recommended guests</b>
            {curatedPackages.map((x, i) => (
              <span key={x[0]}>
                {["30–60", "50–90", "60–120", "80–150"][i]}
              </span>
            ))}
            <b>Seating & tables</b>
            {curatedPackages.map((x) => (
              <span key={x[0]}>Included</span>
            ))}
            <b>Marquee</b>
            {curatedPackages.map((x, i) => (
              <span key={x[0]}>{i === 2 ? "Included" : "Optional"}</span>
            ))}
            <b>Heating</b>
            {curatedPackages.map((x, i) => (
              <span key={x[0]}>{i === 2 ? "Optional" : "—"}</span>
            ))}
            <b>Lighting</b>
            {curatedPackages.map((x, i) => (
              <span key={x[0]}>{i > 1 ? "Included" : "Optional"}</span>
            ))}
            <b>Setup support</b>
            {curatedPackages.map((x, i) => (
              <span key={x[0]}>{i === 3 ? "Included" : "Optional"}</span>
            ))}
            <b></b>
            {curatedPackages.map((x, i) => (
              <a
                href={`/package-${["backyard", "celebration-dinner", "outdoor-winter", "corporate-presentation"][i]}`}
                key={x[0]}
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
            <a href="/help">View all FAQs</a>
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

export function QuoteJourneyPage() {
  const [step, setStep] = useState(0);
  const submitQuote = () => {
    window.location.href = "/quote-submitted";
  };
  return (
    <div className={`public-site quote-journey quote-wizard-${step}`}>
      <PublicHeader />
      <main>
        <section id="quote-request-top" className="quote-top">
          <div>
            <span>NO PAYMENT REQUIRED</span>
            <h1>Request your event hire quote</h1>
            <p>
              Review your products and tell us about your event. We’ll confirm
              availability, logistics and the final price before anything is
              booked.
            </p>
          </div>
          <aside>
            <b>Need help with quantities?</b>
            <p>Our team can check your selection and venue requirements.</p>
            <a href="/contact">Talk to our event hire specialists →</a>
          </aside>
        </section>
        <div className="quote-progress">
          {["Your items", "Event details", "Your details", "Review"].map(
            (x, i) => (
              <button
                type="button"
                onClick={() => setStep(i)}
                className={i === step ? "active" : i < step ? "done" : ""}
                key={x}
              >
                <i>{i < step ? "✓" : i + 1}</i>
                {x}
              </button>
            ),
          )}
        </div>
        <div className="wizard-actions">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => setStep((x) => Math.max(0, x - 1))}
          >
            ← Back
          </button>
          <span>Step {step + 1} of 4</span>
          {step < 3 ? (
            <button
              className="next"
              type="button"
              onClick={() => setStep((x) => x + 1)}
            >
              Save & continue →
            </button>
          ) : (
            <button className="next" type="button" onClick={submitQuote}>
              Submit quote request →
            </button>
          )}
        </div>
        <section className="quote-form-layout">
          <div>
            <section className="quote-card" hidden={step !== 0}>
              <div className="quote-card-title">
                <span>STEP 1</span>
                <h2>Your selected items</h2>
                <a href="/products">＋ Add products</a>
              </div>
              {[
                [
                  "White Tiffany Chair",
                  "100 × white",
                  "$330.00",
                  "/images/chairs-product.png",
                ],
                [
                  "1.8m Round Banquet Table",
                  "8 × white top",
                  "$174.00",
                  "/images/tables-product.png",
                ],
                [
                  "Warm Festoon Lighting",
                  "3 × 20m runs",
                  "$180.00",
                  "/images/lighting-product.png",
                ],
              ].map((x) => (
                <div className="selected-hire-item" key={x[0]}>
                  <img src={x[3]} alt={x[0]} />
                  <span>
                    <b>{x[0]}</b>
                    <small>{x[1]}</small>
                  </span>
                  <label>
                    Qty
                    <input defaultValue={x[1].split(" ")[0]} />
                  </label>
                  <strong>{x[2]}</strong>
                </div>
              ))}
            </section>
            <section className="quote-card" hidden={step !== 1}>
              <div className="quote-card-title">
                <span>STEP 2</span>
                <h2>Tell us about the event</h2>
                <em>✓ Saved</em>
              </div>
              <div className="form-grid">
                <Field label="Event type" value="Wedding reception" />
                <Field label="Guest count" value="60" />
                <Field label="Event starts" value="12 Sep 2026 · 4:00 pm" />
                <Field label="Event ends" value="14 Sep 2026 · 10:00 am" />
                <Field label="Venue name" value="Willow & Stone Estate" />
                <Field label="Venue postcode" value="3000" />
                <Field
                  wide
                  area
                  label="Add a venue photo or floor plan"
                  value="Optional upload area"
                />
              </div>
            </section>
            <section className="quote-card" hidden={step !== 2}>
              <div className="quote-card-title">
                <span>STEP 3</span>
                <h2>Your details</h2>
              </div>
              <div className="form-grid">
                <Field label="First name" value="Amelia" />
                <Field label="Last name" value="Thompson" />
                <Field label="Email" value="amelia.t@example.com" />
                <Field label="Mobile" value="0412 345 678" />
                <Field label="Company / organisation" value="Optional" />
                <Field label="Preferred contact" value="Email" />
              </div>
            </section>
            <section
              className="quote-card quote-review-card"
              hidden={step !== 3}
            >
              <div className="quote-card-title">
                <span>STEP 4</span>
                <h2>Review your quotation request</h2>
              </div>
              <div className="review-grid">
                <ReviewBlock
                  title="Event details"
                  rows={[
                    ["Event", "Wedding reception"],
                    ["Guests", "60"],
                    ["Dates", "12–14 September 2026"],
                    ["Venue", "Willow & Stone Estate"],
                  ]}
                />
                <ReviewBlock
                  title="Your details"
                  rows={[
                    ["Name", "Amelia Thompson"],
                    ["Email", "amelia.t@example.com"],
                    ["Mobile", "0412 345 678"],
                    ["Contact method", "Email"],
                  ]}
                />
              </div>
              <h3>Selected items</h3>
              {[
                "100 × White Tiffany Chairs",
                "8 × Round Banquet Tables",
                "3 × Warm Festoon Lighting runs",
              ].map((x) => (
                <p className="quote-review-line" key={x}>
                  ✓ {x}
                </p>
              ))}
              <div className="quote-notice">
                <b>Quotation request only</b>
                <p>
                  No payment will be taken and stock is not reserved until you
                  approve the issued quotation.
                </p>
              </div>
            </section>
          </div>
          <aside className="quote-summary-sticky">
            <span>YOUR ESTIMATE</span>
            <h2>Quote request summary</h2>
            <b>Wedding reception</b>
            <small>12–14 September 2026</small>
            {[
              ["Hire items", "$684.00"],
              ["Estimated GST", "$68.40"],
            ].map((x) => (
              <div key={x[0]}>
                <span>{x[0]}</span>
                <b>{x[1]}</b>
              </div>
            ))}
            <strong>$752.40</strong>
            <button onClick={submitQuote}>Submit quote request</button>
            <small>No payment required · No stock reserved</small>
          </aside>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

const helpTopics = [
  [
    "Booking & hired items",
    "Quotes, reservations and item changes",
    "booking-article",
  ],
  [
    "Products & availability",
    "Stock checks, substitutions and colours",
    "booking-article",
  ],
  [
    "Quotes & bookings",
    "Accepting, revising and confirming a quote",
    "booking-article",
  ],
  ["Delivery & setup", "Access, timing, placement and crew", "delivery-help"],
  [
    "Collection & returns",
    "Packing, collection windows and checks",
    "delivery-help",
  ],
  ["Payments", "Deposits, balances, GST and refunds", "policy-links"],
  [
    "Changes & cancellations",
    "What can change and when charges apply",
    "booking-article",
  ],
  [
    "Policies & damage",
    "Care, damage, cleaning and missing items",
    "policy-links",
  ],
  [
    "Account & contact",
    "Sign-in, saved details and support requests",
    "support-form",
  ],
] as const;

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
            <span>SK EVENT HIRE HELP CENTRE</span>
            <h1>Practical support for every event.</h1>
            <p>
              Browse clear guidance for bookings, products, delivery, returns,
              payments, changes and customer support.
            </p>
            <div className="help-hero-actions">
              <a href="/faq">Browse complete FAQs →</a>
              <a href="#support-form">Contact support</a>
            </div>
            <small>
              Guidance for delivery · deposits · returns · cancellations
            </small>
          </div>
          <img
            className="help-hero-image"
            src="/images/warehouse-team.png"
            alt="SK Event Hire support and warehouse team preparing customer equipment"
          />
        </section>
        <section className="help-topics help-width">
          <header>
            <span>START BY TOPIC</span>
            <h2>Browse help topics</h2>
            <p>Choose a topic to find the right guidance quickly.</p>
          </header>
          <div>
            {helpTopics.map((x, i) => (
              <button type="button" onClick={() => jump(x[2])} key={x[0]}>
                <i>{["▤", "◇", "▣", "▱", "↻", "$", "✎", "!", "♡"][i]}</i>
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
              <span>POPULAR QUESTIONS</span>
              <h2>Frequently asked</h2>
              <p>Answers to the questions customers ask most often.</p>
            </header>
            <div>
              {[
                "What is the minimum hire period?",
                "Can I collect my order?",
                "What is the bond and when is it returned?",
                "Can I change quantities after booking?",
                "What if equipment is damaged?",
                "How do payments and refunds work?",
              ].map((q, i) => (
                <details open={i < 2} key={q}>
                  <summary>
                    {q}
                    <b>＋</b>
                  </summary>
                  <p>
                    {i === 0
                      ? "Most items have a one-day minimum hire. Your quotation shows the exact hire window and any weekend arrangements."
                      : "Availability, timing, access and applicable charges are confirmed in your quotation or booking."}
                  </p>
                  <a href={i === 0 ? "/rental-terms" : "#booking-article"}>
                    Read full answer →
                  </a>
                </details>
              ))}
            </div>
          </div>
        </section>
        <article id="booking-article" className="help-article">
          <div className="help-width">
            <aside>
              <b>IN THIS ARTICLE</b>
              <a href="#change-before">Before requesting a change</a>
              <a href="#change-options">Change options</a>
              <a href="#change-next">What happens next?</a>
              <a href="/rental-terms">Related policies</a>
              <a href="#support-form">Ask for help</a>
            </aside>
            <div>
              <span>BOOKING CHANGES</span>
              <h1>Can I change product quantities after booking?</h1>
              <p className="article-lead">
                Yes. Quantity changes can be requested, but they remain subject
                to stock, delivery, labour and price confirmation.
              </p>
              <blockquote>
                ✓ Your existing booking remains confirmed until an updated
                version is approved.
              </blockquote>
              <h2 id="change-before">Before requesting a change</h2>
              <p>
                Have your booking reference ready and tell us which product,
                current quantity and requested quantity you want changed.
              </p>
              <div id="change-options" className="change-cards">
                {[
                  [
                    "Open your booking",
                    "Use the reference from your confirmation email.",
                  ],
                  [
                    "Request the quantity update",
                    "Choose the item and enter the required quantity.",
                  ],
                  [
                    "Wait for confirmation",
                    "We recheck availability, logistics and pricing.",
                  ],
                ].map((x, i) => (
                  <article key={x[0]}>
                    <i>{i + 1}</i>
                    <b>{x[0]}</b>
                    <small>{x[1]}</small>
                  </article>
                ))}
              </div>
              <div className="article-note">
                Changes close to delivery may affect warehouse preparation,
                labour or transport charges.
              </div>
              <h2 id="change-next">What happens next?</h2>
              <p>
                We send a revised quotation or booking change for your approval.
                Nothing changes until you accept it.
              </p>
              <div className="article-helpful">
                Was this article helpful? <button>Yes</button>
                <button>No</button>
                <a href="#support-form">Need more help? Contact support →</a>
              </div>
            </div>
          </div>
        </article>
        <section id="delivery-help" className="delivery-guidance help-width">
          <header>
            <span>DELIVERY, SETUP & RETURN</span>
            <h2>Prepare, collect and return smoothly</h2>
          </header>
          <article>
            <img
              src="/images/hero-event.png"
              alt="Prepared event delivery site"
            />
            <div>
              <span>BEFORE DELIVERY</span>
              <h3>Prepare for delivery</h3>
              <ul>
                <li>Confirm venue access, loading and parking</li>
                <li>Clear the setup area and protect pathways</li>
                <li>Provide an on-site contact and phone number</li>
                <li>Keep children, guests and pets clear of the crew</li>
                <li>Confirm power, lifts, stairs and surface conditions</li>
              </ul>
              <a href="/contact">Read the delivery guide →</a>
            </div>
          </article>
          <article>
            <div>
              <span>COLLECTION & RETURN</span>
              <h3>Collect and return smoothly</h3>
              <ul>
                <li>Keep equipment dry, secure and grouped</li>
                <li>Do not dismantle items unless instructed</li>
                <li>Remove personal items and rubbish</li>
                <li>Report damage or missing pieces promptly</li>
                <li>Be ready for the confirmed collection window</li>
              </ul>
              <a href="/contact">Read the return guide →</a>
            </div>
            <img
              src="/images/warehouse-team.png"
              alt="Event equipment being collected"
            />
          </article>
        </section>
        <section className="safe-use">
          <div className="help-width">
            <span>SAFE USE & CARE</span>
            <h2>Use hired items correctly</h2>
            <p>
              Follow product instructions and use equipment only for its
              intended event purpose.
            </p>
            <div>
              {[
                [
                  "Use as intended",
                  "Do not climb, stand on or modify furniture.",
                ],
                [
                  "Watch the weather",
                  "Secure outdoor items and follow wind restrictions.",
                ],
                ["Age & capacity", "Observe weight, age and occupancy limits."],
                [
                  "Report urgent issues",
                  "Stop using unsafe items and contact us.",
                ],
              ].map((x) => (
                <article key={x[0]}>
                  <b>✓ {x[0]}</b>
                  <small>{x[1]}</small>
                </article>
              ))}
            </div>
            <blockquote>
              ⚠ Do not relocate marquees, heaters, staging or electrical
              equipment after professional setup.
            </blockquote>
          </div>
        </section>
        <section id="policy-links" className="policy-links help-width">
          <span>POLICIES & IMPORTANT INFORMATION</span>
          <h2>Understand the terms that apply</h2>
          <p>Read the current terms before accepting your quotation.</p>
          <div>
            {[
              ["Hire terms", "/rental-terms"],
              ["Changes & cancellations", "/cancellation-policy"],
              ["Delivery & collection", "/rental-terms"],
              ["Damage, loss & bond", "/rental-terms"],
              ["Privacy", "/privacy"],
              ["Accessibility", "/privacy"],
            ].map((x) => (
              <a href={x[1]} key={x[0]}>
                <b>{x[0]}</b>
                <small>View the current policy →</small>
              </a>
            ))}
          </div>
        </section>
        <section id="support-form" className="support-contact">
          <div className="help-width">
            <div>
              <span>CUSTOMER SUPPORT</span>
              <h2>We’re here to help.</h2>
              <p>
                For booking changes, delivery questions or event-day support,
                send the details below.
              </p>
              <img
                src="/images/warehouse-team.png"
                alt="Customer support conversation"
              />
              <div className="support-methods">
                <a href="tel:0390000000">Call 03 9000 0000</a>
                <a href="mailto:help@skeventhire.com.au">Email support</a>
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
                What do you need help with?
                <select>
                  <option>Booking or hiring</option>
                  <option>Delivery or collection</option>
                  <option>Payment or refund</option>
                  <option>Damage or missing item</option>
                </select>
              </label>
              <div>
                <Field label="First name *" value="Amelia" />
                <Field label="Last name *" value="Morgan" />
                <Field label="Mobile *" value="0412 345 678" />
                <Field label="Email *" value="amelia@example.com" />
              </div>
              <Field
                wide
                label="Subject *"
                value="Existing venue access question"
              />
              <Field
                wide
                area
                label="How can we help? *"
                value="The venue has changed its loading entrance. I need to update the access notes and confirm whether the delivery window is still suitable."
              />
              <label>
                Attachment
                <input type="file" />
              </label>
              <label className="consent">
                <input type="checkbox" required defaultChecked /> I confirm
                these details are correct and accept the privacy policy.
              </label>
              <button>Submit support request →</button>
            </form>
          </div>
        </section>
        {sent && (
          <section id="support-received" className="support-received">
            <i>✓</i>
            <div>
              <span>REQUEST SUBMITTED</span>
              <h2>Your support request has been received.</h2>
              <p>
                Our team will review the booking details and reply within one
                business day.
              </p>
              <b>SUP-2026-00482</b>
              <dl>
                <div>
                  <dt>Category</dt>
                  <dd>Booking or hiring</dd>
                </div>
                <div>
                  <dt>Priority</dt>
                  <dd>Standard support</dd>
                </div>
                <div>
                  <dt>Contact</dt>
                  <dd>Email & mobile</dd>
                </div>
              </dl>
              <a href="/contact">Send another enquiry</a>
              <a href="/help">Return to Help Centre</a>
            </div>
          </section>
        )}
      </main>
      <PublicFooter />
    </div>
  );
}

const faqGroups = [
  {
    name: "Rental & booking",
    icon: "▤",
    items: [
      [
        "When is my hire equipment reserved?",
        "Products are reserved only after availability is rechecked, the current quotation is accepted and the required deposit is received. A draft quote or enquiry does not reserve stock.",
      ],
      [
        "How long is the standard hire period?",
        "The exact start and return times appear on your quotation. Extensions require written approval because later bookings, warehouse preparation and transport schedules may be affected.",
      ],
      [
        "Can I change quantities after booking?",
        "Yes. Submit the requested item and quantity change before the warehouse cut-off. Every change remains subject to stock, labour, transport and revised-price confirmation.",
      ],
      [
        "Is there a minimum hire order?",
        "Minimum product or service values may apply depending on collection, delivery zone, crew requirements and event date. The quotation shows any minimum clearly.",
      ],
    ],
  },
  {
    name: "Deposits & payments",
    icon: "$",
    items: [
      [
        "How much deposit is required?",
        "The required deposit is shown on the quotation and depends on order value, sourced products and services. Paying it confirms the booking only while the quotation remains valid.",
      ],
      [
        "When is the remaining balance due?",
        "The balance due date appears on your invoice and is normally before warehouse dispatch. Late payment can delay preparation or release of equipment.",
      ],
      [
        "Which payment methods are accepted?",
        "We accept PayID, approved bank transfer and approved cash payments. Always use the booking reference supplied by SK Event Hire so the payment can be matched correctly.",
      ],
      [
        "Are prices inclusive of GST?",
        "Website and quotation prices are in Australian dollars and include GST unless a line is clearly marked otherwise.",
      ],
    ],
  },
  {
    name: "Damage, loss & missing items",
    icon: "!",
    items: [
      [
        "What happens if an item is damaged?",
        "Tell us as soon as possible and stop using anything unsafe. We record the condition, review dispatch and return evidence, and provide an itemised repair, specialist-cleaning or replacement assessment.",
      ],
      [
        "What if a product is missing at collection?",
        "Check the venue, packing area and supplier zones immediately. Missing items are recorded during collection and may be charged at reasonable replacement cost if they are not recovered.",
      ],
      [
        "How are damage charges decided?",
        "Charges are based on evidence, product age, repairability, specialist labour, cleaning and reasonable replacement cost. You may request the supporting evidence and a review.",
      ],
      [
        "Is a bond or security amount required?",
        "Some orders require a refundable bond or security amount based on value, venue, risk and product type. Any amount and release conditions are disclosed before acceptance.",
      ],
      [
        "What counts as excessive cleaning?",
        "Wax, paint, tape residue, food contamination, mud, smoke damage or other treatment beyond normal commercial cleaning may attract an itemised specialist-cleaning charge.",
      ],
    ],
  },
  {
    name: "Delivery, setup & returns",
    icon: "▱",
    items: [
      [
        "What information is needed for delivery?",
        "Provide the full address, parking or loading area, height restrictions, stairs, lift access, surface conditions, venue contact and required setup completion time.",
      ],
      [
        "Is setup included in delivery?",
        "Only setup work listed in the accepted quotation is included. Product placement, styling, venue work and pack-down outside that scope remain the customer’s responsibility.",
      ],
      [
        "Can I collect and return products myself?",
        "Eligible items may be collected by appointment in a suitable enclosed vehicle. Photo identification, safe restraints and compliance with warehouse instructions are required.",
      ],
      [
        "What happens if collection is delayed?",
        "Keep products secure, dry and accessible. Waiting time, additional crew, failed collection or extended-hire charges may apply when the agreed collection cannot proceed.",
      ],
    ],
  },
  {
    name: "Products & availability",
    icon: "◇",
    items: [
      [
        "Are website products guaranteed to be available?",
        "No. Website availability is indicative until your dates, quantities, venue and logistics are checked and the booking is confirmed.",
      ],
      [
        "Can product colours or finishes vary?",
        "Minor variations can occur between batches, natural materials and screen displays. Material colour or finish requirements should be confirmed on the quotation.",
      ],
      [
        "Will you substitute an unavailable product?",
        "We may recommend a suitable alternative, but nothing is substituted in a confirmed order without communicating the material change and obtaining approval where required.",
      ],
      [
        "Can indoor products be used outside?",
        "Only when explicitly approved and protected from rain, wind, mud, heat and uneven surfaces. Products must be moved to safety when conditions change.",
      ],
    ],
  },
  {
    name: "Changes, weather & cancellation",
    icon: "↻",
    items: [
      [
        "What happens if bad weather is forecast?",
        "Contact us early. Weather does not automatically cancel a booking, but we can review relocation, walling, anchoring, flooring, heating or an approved date change.",
      ],
      [
        "Can I change the event date?",
        "A date change is a request until products, crew, delivery and sourced items are rechecked. Price differences and committed supplier costs may apply.",
      ],
      [
        "How do cancellation charges work?",
        "Charges depend on notice, supplier commitments, custom or sourced items, warehouse preparation and reserved logistics. The current cancellation policy and accepted quotation control the assessment.",
      ],
      [
        "How are approved refunds paid?",
        "Approved refunds are normally returned to the original payment source after final charges and non-refundable items are confirmed.",
      ],
    ],
  },
  {
    name: "Account, privacy & support",
    icon: "♡",
    items: [
      [
        "What information does SK Event Hire keep?",
        "We retain contact, event, venue, quotation, payment-reference, delivery, condition and support records needed to provide the service and meet legal obligations.",
      ],
      [
        "Can I access or correct my information?",
        "Yes. Contact customer care to request access or correction. Deletion and export requests are handled where applicable law and required record-retention periods allow.",
      ],
      [
        "Where can I find invoices and booking documents?",
        "Sign in to the customer account and open Payments & Documents. The current quotation, invoices, receipts and rental agreement remain connected to the booking.",
      ],
      [
        "How quickly will support reply?",
        "Standard enquiries are normally reviewed within one business day. Event-day safety or delivery concerns should use the phone details supplied with the confirmed booking.",
      ],
    ],
  },
] as const;

function completeFaqItems(group: {
  name: string;
  items: readonly (readonly [string, string])[];
}) {
  const topic = group.name.toLowerCase();
  const additional: [string, string][] = [
    [
      `Where can I read the complete ${topic} rules?`,
      `Open Terms & Policies from the footer and select the matching category. The policy shown there applies together with your accepted quotation and any written special conditions.`,
    ],
    [
      `What details should I provide about ${topic}?`,
      `Include your booking or quotation reference, event date, venue, the affected product or service, and clear supporting details so the team can review the correct record.`,
    ],
    [
      `Who should I contact about ${topic}?`,
      `Use the Contact page or customer support form. For an urgent event-day safety concern, stop using the affected equipment and call the number supplied with your confirmed booking.`,
    ],
    [
      `Will a ${topic} request change my confirmed booking automatically?`,
      `No. A request does not alter the confirmed order until availability, pricing, logistics and applicable conditions are reviewed and the revised version is accepted where required.`,
    ],
    [
      `How will a decision about ${topic} be recorded?`,
      `Material decisions are recorded against the quotation, booking, invoice, support request or condition report so the customer and team can refer to the same information.`,
    ],
    [
      `Can I ask for a review of a ${topic} decision?`,
      `Yes. Reply with the relevant reference and supporting information. The team will review the record, evidence and applicable policy and explain the outcome.`,
    ],
  ];
  return [
    ...group.items,
    ...additional.slice(0, Math.max(0, 10 - group.items.length)),
  ];
}

export function FaqPage() {
  const [active, setActive] = useState("All questions");
  const [search, setSearch] = useState("");
  const groups = faqGroups
    .map((group) => ({
      ...group,
      items: completeFaqItems(group).filter((item) =>
        `${item[0]} ${item[1]}`.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter(
      (group) =>
        (active === "All questions" || group.name === active) &&
        group.items.length,
    );
  return (
    <div className="public-site faq-page">
      <PublicHeader />
      <main>
        <section className="faq-hero">
          <div>
            <span>SK EVENT HIRE FAQ</span>
            <h1>Clear answers for every stage of your hire.</h1>
            <p>
              Rental, deposits, payments, delivery, damage, missing products,
              weather, cancellations, privacy and customer support—all organised
              in one place.
            </p>
            <label>
              <i>⌕</i>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search all questions and answers"
              />
              <button type="button" onClick={() => setSearch("")}>
                {search ? "Clear" : "Search"}
              </button>
            </label>
          </div>
          <img
            src="/images/warehouse-team.png"
            alt="SK Event Hire team checking products before dispatch"
          />
        </section>
        <section className="faq-directory">
          <header>
            <span>BROWSE FAQ CATEGORIES</span>
            <h2>Find the answer you need</h2>
          </header>
          <nav aria-label="FAQ categories">
            <button
              className={active === "All questions" ? "active" : ""}
              onClick={() => setActive("All questions")}
            >
              All questions
            </button>
            {faqGroups.map((group) => (
              <button
                className={active === group.name ? "active" : ""}
                onClick={() => setActive(group.name)}
                key={group.name}
              >
                <i>{group.icon}</i>
                {group.name}
              </button>
            ))}
          </nav>
          <div className="faq-groups">
            {groups.map((group) => (
              <section key={group.name}>
                <div>
                  {group.items.map((item, index) => (
                    <details
                      open={index === 0 && groups.length === 1}
                      key={item[0]}
                    >
                      <summary>
                        {item[0]}
                        <span>＋</span>
                      </summary>
                      <p>{item[1]}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
            {!groups.length && (
              <aside>
                <h2>No FAQ answer matches “{search}”.</h2>
                <p>Try a shorter phrase or contact our customer care team.</p>
                <button onClick={() => setSearch("")}>Clear search</button>
              </aside>
            )}
          </div>
        </section>
        <section className="faq-support">
          <div>
            <span>STILL NEED HELP?</span>
            <h2>Ask the event hire team.</h2>
            <p>
              Send your booking reference, event date and question so the team
              can give you a specific answer.
            </p>
          </div>
          <a href="/contact">Contact customer care</a>
          <a href="/rental-terms">Read terms & policies</a>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

const policyLibrary = {
  platform: {
    label: "Platform terms",
    icon: "▤",
    title: "Website and customer-account terms",
    intro:
      "The rules for using the SK Event Hire website, customer account, quotations and online services.",
    summary:
      "Use the platform lawfully, keep account access secure and confirm that information you submit is accurate.",
    sections: [
      [
        "Using the platform",
        "You may browse publicly available content and use account features for genuine event-hire enquiries and bookings. Automated scraping, interference, impersonation and unlawful use are prohibited.",
      ],
      [
        "Account responsibility",
        "Keep verification codes and account access private. Tell us promptly if you believe an account or booking has been accessed without permission.",
      ],
      [
        "Website information",
        "Images, availability, dimensions and guide content help with planning but do not replace the final accepted quotation and product-specific instructions.",
      ],
      [
        "Intellectual property",
        "Site copy, branding, photography and interface elements remain protected. They may not be reproduced commercially without written permission.",
      ],
    ],
  },
  rental: {
    label: "Rental terms",
    icon: "◇",
    title: "Rental terms and responsibilities",
    intro:
      "The core conditions for quotations, confirmed bookings, hire periods, safe use and return.",
    summary:
      "Products are reserved after confirmation and required payment. Keep every item safe and return it on time in the agreed condition.",
    sections: [
      [
        "Quote and confirmation",
        "A product is not reserved until availability is checked, the current quotation is accepted and the required payment is received. The accepted quotation records dates, quantities, pricing and special conditions.",
      ],
      [
        "Hire period",
        "The hire starts and ends at the times shown in the booking. An extension is valid only after stock, transport and charges are confirmed in writing.",
      ],
      [
        "Care and permitted use",
        "Use products only for their intended event purpose. Protect them from unsafe weather, theft, fire, misuse, unauthorised movement and prohibited attachments.",
      ],
      [
        "Return condition",
        "Return every product, cover, component and accessory grouped and accessible. Fair wear is allowed; excess cleaning, missing components and avoidable damage are assessed separately.",
      ],
    ],
  },
  product: {
    label: "Product hire terms",
    icon: "▱",
    title: "Product condition, selection and substitution",
    intro:
      "Specific expectations for hired furniture, marquees, tableware, linen, lighting and accessories.",
    summary:
      "Check product measurements, intended use and quantities before acceptance. Minor batch and screen-colour variation can occur.",
    sections: [
      [
        "Product selection",
        "The customer must review measurements, capacity, finish, quantity and venue suitability. Our team can advise, but venue approval and final selection remain part of the confirmed order.",
      ],
      [
        "Images and finishes",
        "Photography is representative. Timber, fabric, metal and batch finishes may vary slightly, and screens do not reproduce colour exactly.",
      ],
      [
        "Availability and alternatives",
        "Online availability is indicative. If an item becomes unavailable, we will communicate a suitable alternative; a material substitution is not made to a confirmed order without approval.",
      ],
      [
        "Safety instructions",
        "Weight, anchoring, weather, electrical and assembly instructions must be followed. Only authorised crew may alter installed structures or powered equipment.",
      ],
    ],
  },
  payment: {
    label: "Payment terms",
    icon: "$",
    title: "Deposits, balances and refunds",
    intro:
      "How quotations, GST, deposits, balances, payment methods and approved refunds are handled.",
    summary:
      "The invoice shows what is due and when. A booking is not confirmed until the required payment has cleared.",
    sections: [
      [
        "Prices and GST",
        "Prices are in Australian dollars and include GST unless the quotation clearly states otherwise. Delivery, labour, late access and sourced items are itemised where applicable.",
      ],
      [
        "Deposit and balance",
        "The deposit confirms the booking once stock is rechecked. The remaining balance must be received by the invoice due date and before dispatch.",
      ],
      [
        "Payment security",
        "PayID, approved bank transfer and approved cash payment may be available. Customers must use the supplied booking reference, and cash is only recorded as paid after an authorised receipt is issued.",
      ],
      [
        "Refunds and charge review",
        "Approved refunds return to the original payment source after cancellation, damage, missing items and non-refundable commitments are finalised.",
      ],
    ],
  },
  cancellation: {
    label: "Changes & cancellations",
    icon: "↻",
    title: "Changes, cancellations and rescheduling",
    intro:
      "How date, quantity, venue and order changes are reviewed, including weather-related requests.",
    summary:
      "Tell us early. Every change remains a request until stock, crew, suppliers, logistics and price are revalidated.",
    sections: [
      [
        "Order changes",
        "Quantity, product, time, address and access changes may alter availability, labour, transport and price. The revised quotation controls once accepted.",
      ],
      [
        "Cancellation timing",
        "Charges reflect notice, warehouse preparation, reserved logistics, custom items and non-refundable supplier commitments. Your quotation states the applicable schedule.",
      ],
      [
        "Weather and venue decisions",
        "Weather does not automatically cancel a booking. Contact us early to review relocation, walling, anchoring, flooring, heating or an available date change.",
      ],
      [
        "Refund timing",
        "Any approved balance is calculated after committed charges and normally returned to the original payment source.",
      ],
    ],
  },
  damage: {
    label: "Damage, loss & bond",
    icon: "!",
    title: "Damage, loss, cleaning and security amounts",
    intro:
      "The assessment process for damaged, excessively soiled, altered, stolen or missing hire products.",
    summary:
      "Report incidents promptly and keep evidence. Charges are based on reasonable cleaning, repair or replacement cost.",
    sections: [
      [
        "Security amount or bond",
        "A refundable security amount may be required based on order value, product type, venue and risk. It is not an insurance policy or automatic limit on responsibility.",
      ],
      [
        "Damage reporting",
        "Stop using unsafe equipment and contact us promptly. Provide photos, timing and circumstances so the item can be isolated and assessed.",
      ],
      [
        "Missing products",
        "Missing items and accessories remain on hire until returned or resolved. Search the venue and contact suppliers immediately; replacement and extended-hire costs may apply.",
      ],
      [
        "Evidence and review",
        "Condition records, photographs, repair quotations and replacement cost may support an assessment. You can request the evidence and a fair review.",
      ],
    ],
  },
  delivery: {
    label: "Delivery & collection",
    icon: "⌖",
    title: "Delivery, setup, collection and customer return",
    intro:
      "Access, timing, crew, setup boundaries, waiting time and return responsibilities.",
    summary:
      "Provide accurate access details and an authorised contact. Keep the site safe and products ready at the agreed time.",
    sections: [
      [
        "Access and delivery window",
        "Confirm parking, gates, stairs, lifts, surfaces, doorway sizes, venue restrictions and an on-site contact. Time windows depend on route and crew planning.",
      ],
      [
        "Setup boundaries",
        "Only setup work listed in the accepted quotation is included. Venue preparation, utilities and supplier coordination remain the customer’s responsibility unless contracted.",
      ],
      [
        "Collection",
        "Keep all items dry, grouped, unobstructed and accessible. Waiting, failed collection or extra crew charges may apply if the agreed collection cannot proceed.",
      ],
      [
        "Customer pickup and return",
        "Approved pickups require an appointment, photo identification, suitable enclosed transport and load restraint. Late returns require written approval.",
      ],
    ],
  },
  privacy: {
    label: "Privacy policy",
    icon: "♡",
    title: "Privacy and personal information",
    intro:
      "What we collect, why we use it, when it is shared and the choices available to you.",
    summary:
      "We use information to quote, deliver, support, prevent fraud and meet legal obligations—not to sell personal information.",
    sections: [
      [
        "Information collected",
        "We may collect contact, account, event, venue, quotation, payment-reference, delivery, condition, support and website-use information.",
      ],
      [
        "Purpose and lawful use",
        "Information supports enquiries, bookings, logistics, payments, safety, customer care, records, fraud prevention and legally required reporting.",
      ],
      [
        "Service providers and disclosure",
        "Approved payment, hosting, communication, delivery, professional and legal providers receive only the information reasonably needed for their role.",
      ],
      [
        "Access, correction and retention",
        "Request access or correction through customer care. Deletion and export requests are handled where law and required business-record periods allow.",
      ],
    ],
  },
  cookies: {
    label: "Cookie notice",
    icon: "◉",
    title: "Cookie and tracking preferences",
    intro:
      "Essential website storage, optional analytics and how to change your preference.",
    summary:
      "Essential cookies stay on for security and core functions. Optional analytics remain under your control.",
    sections: [
      [
        "Essential storage",
        "Session, security, quotation and preference storage supports login, navigation, basket and abuse prevention.",
      ],
      [
        "Optional analytics",
        "When enabled, aggregated usage information helps identify performance and usability problems.",
      ],
      [
        "Retention",
        "Cookie duration depends on purpose, from the current session to a maximum period disclosed by the provider.",
      ],
      [
        "Changing your choice",
        "You can disable optional cookies below. Browser controls may also remove stored data, but blocking essentials can affect account and quotation features.",
      ],
    ],
  },
  accessibility: {
    label: "Accessibility",
    icon: "♿",
    title: "Accessibility statement",
    intro:
      "Our commitment to understandable content, keyboard access, readable layouts and practical support.",
    summary:
      "Tell us if a page, document or process is difficult to use. We will provide reasonable assistance or an alternative format.",
    sections: [
      [
        "Design approach",
        "We aim for semantic structure, visible focus, sufficient contrast, responsive layouts and text that remains readable when enlarged.",
      ],
      [
        "Keyboard and assistive technology",
        "Core navigation, forms, accordions and account tasks are designed for keyboard and common assistive-technology use.",
      ],
      [
        "Alternative formats",
        "Contact us for a policy, invoice, quotation or instruction in a more accessible format.",
      ],
      [
        "Feedback",
        "Include the page, device and difficulty encountered. Accessibility requests are prioritised by customer care.",
      ],
    ],
  },
} as const;
type PolicyKey = keyof typeof policyLibrary;

function completePolicySections(policy: {
  label: string;
  sections: readonly (readonly [string, string])[];
}) {
  const subject = policy.label.toLowerCase();
  const additional: [string, string][] = [
    [
      "Scope and application",
      `These ${subject} apply to the website, quotations, confirmed orders, customer accounts and related support where relevant. The accepted quotation records booking-specific conditions.`,
    ],
    [
      "Customer responsibilities",
      `Provide accurate information, review the applicable ${subject}, follow safety and timing instructions, and notify SK Event Hire promptly when circumstances change.`,
    ],
    [
      "SK Event Hire responsibilities",
      `We will communicate material requirements clearly, maintain appropriate records and apply these ${subject} consistently to the information available for the booking.`,
    ],
    [
      "Records and evidence",
      `Quotations, invoices, messages, photographs, condition reports, payment references and delivery records may be used to confirm what occurred and support a decision.`,
    ],
    [
      "Exceptions and written approval",
      `An exception is valid only when an authorised SK Event Hire representative confirms it in writing. Silence, an informal conversation or a draft request does not amend the agreement.`,
    ],
    [
      "Questions, complaints and review",
      `Contact customer care with the relevant reference and supporting information. We will review the applicable ${subject}, explain the outcome and identify any available next step.`,
    ],
  ];
  return [
    ...policy.sections,
    ...additional.slice(0, Math.max(0, 10 - policy.sections.length)),
  ];
}

export function LegalPage({ kind }: { kind: string }) {
  const initial: PolicyKey =
    kind === "payment-policy"
      ? "payment"
      : kind === "cancellation-policy"
        ? "cancellation"
        : kind === "privacy"
          ? "privacy"
          : "rental";
  const [active, setActive] = useState<PolicyKey>(initial);
  const [optional, setOptional] = useState(true);
  const policy = policyLibrary[active];
  return (
    <div className="public-site legal-hub">
      <PublicHeader />
      <main>
        <section className="legal-hero">
          <span>LEGAL & CUSTOMER INFORMATION</span>
          <h1>
            Terms, policies and
            <br />
            important information
          </h1>
          <p>
            Choose a category to read clear, organised information without
            leaving this page.
          </p>
          <small>
            ✓ Current policies · Effective 1 July 2026 · Victoria, Australia
          </small>
        </section>
        <section className="policy-switcher legal-width">
          <header>
            <span>POLICY LIBRARY</span>
            <h2>One place for every policy</h2>
            <p>
              Select a category. Its complete content updates inside the card
              below.
            </p>
          </header>
          <nav aria-label="Terms and policy categories">
            {(Object.keys(policyLibrary) as PolicyKey[]).map((key) => (
              <button
                type="button"
                className={active === key ? "active" : ""}
                aria-pressed={active === key}
                onClick={() => setActive(key)}
                key={key}
              >
                <i>{policyLibrary[key].icon}</i>
                <span>{policyLibrary[key].label}</span>
              </button>
            ))}
          </nav>
          <article className="dynamic-policy-card" aria-live="polite">
            <header>
              <span>{policy.label.toUpperCase()}</span>
              <h2>{policy.title}</h2>
              <p>{policy.intro}</p>
            </header>
            <div className="policy-meta">
              <b>
                Effective<small>1 July 2026</small>
              </b>
              <b>
                Version<small>3.2</small>
              </b>
              <b>
                Region<small>Victoria</small>
              </b>
              <b>
                Language<small>English</small>
              </b>
            </div>
            <blockquote>
              <b>Plain-language summary</b>
              <p>{policy.summary}</p>
            </blockquote>
            <div className="policy-sections">
              {completePolicySections(policy).map((section, index) => (
                <section key={section[0]}>
                  <i>{index + 1}</i>
                  <div>
                    <h3>{section[0]}</h3>
                    <p>{section[1]}</p>
                  </div>
                </section>
              ))}
            </div>
            {active === "cookies" && (
              <div className="cookie-preference">
                <div>
                  <b>Essential cookies</b>
                  <small>Always on for security and core site functions.</small>
                </div>
                <label>
                  <input
                    type="checkbox"
                    checked={optional}
                    onChange={(event) => setOptional(event.target.checked)}
                  />{" "}
                  Optional analytics {optional ? "on" : "off"}
                </label>
                <button type="button" onClick={() => setOptional(false)}>
                  Reject optional
                </button>
                <button type="button" onClick={() => setOptional(true)}>
                  Accept optional
                </button>
              </div>
            )}
            <footer>
              <p>
                The accepted quotation and any written special conditions form
                part of the agreement for a specific booking.
              </p>
              <a href="/contact">Ask a policy question →</a>
            </footer>
          </article>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function OurStoryPage() {
  return (
    <div className="public-site our-story-page">
      <PublicHeader active="About" />
      <main>
        <section className="story-founder-hero">
          <div>
            <span>OUR STORY</span>
            <h1>
              Two brothers.
              <br />
              One shared standard.
            </h1>
            <p>
              SK Event Hire began with a simple idea: bring the care,
              reliability and trust of a close family partnership into every
              event.
            </p>
            <a href="#what-sk-means">What SK means ↓</a>
          </div>
          <img
            src="/images/our-story-brothers-v47.png"
            alt="Sekar and Kajan preparing an SK Event Hire celebration together"
          />
        </section>
        <section id="what-sk-means" className="story-meaning editorial-section">
          <div>
            <span>THE NAME BEHIND THE BRAND</span>
            <h2>S is Sekar. K is Kajan.</h2>
            <p>
              Sekar—also known as Shiva—and Kajan are brothers and the founders
              behind SK Event Hire. The brand name combines the first letter of
              each brother’s name: S from Sekar and K from Kajan.
            </p>
            <p>
              They created the platform to offer practical, dependable event
              hire supported by clear communication, prepared products and
              responsible service.
            </p>
          </div>
          <aside>
            <b>S</b>
            <span>
              <strong>Sekar</strong>
              <small>Also known as Shiva</small>
            </span>
            <i>＋</i>
            <b>K</b>
            <span>
              <strong>Kajan</strong>
              <small>Brother and co-founder</small>
            </span>
          </aside>
        </section>
        <section className="story-principles">
          <header>
            <span>WHAT THE STORY MEANS IN PRACTICE</span>
            <h2>A relationship translated into reliable service.</h2>
            <p>
              The story matters because it shapes how the company works—not
              because it needs to be overstated.
            </p>
          </header>
          <div>
            {[
              ["Show up", "Be present, prepared and accountable."],
              ["Support each other", "Solve problems as one connected team."],
              [
                "Prepare with care",
                "Treat every customer’s event as important.",
              ],
              [
                "Communicate clearly",
                "Say what is confirmed and what still needs checking.",
              ],
            ].map((x, i) => (
              <article key={x[0]}>
                <i>{String(i + 1).padStart(2, "0")}</i>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="story-origin editorial-section">
          <img
            src="/images/warehouse-team.png"
            alt="SK Event Hire equipment being checked before an event"
          />
          <div>
            <span>FROM A FAMILY IDEA TO EVENT HIRE</span>
            <h2>Built around helping people come together.</h2>
            <p>
              Sekar and Kajan created the SK brand together. Event hire was a
              practical direction because successful functions depend on
              preparation, teamwork and reliable service.
            </p>
            <p>
              Today that principle appears in practical details—clean equipment,
              clear quotations, careful delivery planning and a team that takes
              ownership from first enquiry to final collection.
            </p>
            <blockquote>
              SK is not a slogan. It is a reminder to work with the loyalty,
              honesty and care expected between brothers.
            </blockquote>
          </div>
        </section>
        <section className="story-timeline">
          <header>
            <span>THE SK JOURNEY</span>
            <h2>How the idea became a working platform.</h2>
          </header>
          <div>
            {[
              [
                "01",
                "The relationship",
                "Two brothers and close friends supporting one another.",
              ],
              [
                "02",
                "The name",
                "S comes from Sekar and K comes from Kajan: a clear identity for the business they created together.",
              ],
              [
                "03",
                "The purpose",
                "Build a dependable event-hire service that helps people gather.",
              ],
              [
                "04",
                "The platform",
                "Connect products, planning, quotations, checkout and support clearly.",
              ],
            ].map((x) => (
              <article key={x[0]}>
                <i>{x[0]}</i>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="story-final">
          <div>
            <span>THE NEXT EVENT</span>
            <h2>The story continues through the work.</h2>
            <p>
              Every prepared chair, confirmed delivery window and completed
              setup is another opportunity to live up to the name.
            </p>
            <a href="/products">Explore hire products</a>
            <a href="/request-quote">Plan an event</a>
          </div>
          <img
            src="/images/hero-event.png"
            alt="Completed event prepared by SK Event Hire"
          />
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function PlatformDirectoryPage() {
  return (
    <div className="public-site platform-directory">
      <PublicHeader />
      <main>
        <section className="simple-hero">
          <div className="eyebrow">SK EVENT HIRE PLATFORMS</div>
          <h1>Choose the platform you need.</h1>
          <p>
            Public customers, registered customers and operations staff use
            separate frontend applications. Their data can connect through
            shared backend services without mixing navigation or page code.
          </p>
        </section>
        <section className="platform-card-grid">
          {[
            [
              "Public landing site",
              "Browse products, request quotations, complete checkout and contact the event team.",
              "/",
              "Open public site",
            ],
            [
              "Customer account",
              "A separate customer application for saved quotations, bookings, payments and messages.",
              "https://sk-event-hire-customer-account.qtechy26.chatgpt.site",
              "Open customer platform",
            ],
            [
              "Admin operations",
              "A separate internal application for inventory, orders, logistics and reporting.",
              "https://sk-event-hire-admin-operations.qtechy26.chatgpt.site",
              "Open admin platform",
            ],
          ].map((x, i) => (
            <article
              id={
                i === 1
                  ? "customer-platform"
                  : i === 2
                    ? "admin-platform"
                    : undefined
              }
              key={x[0]}
            >
              <i>{["◉", "◇", "▦"][i]}</i>
              <small>APPLICATION {i + 1}</small>
              <h2>{x[0]}</h2>
              <p>{x[1]}</p>
              <a href={x[2]}>{x[3]} →</a>
            </article>
          ))}
        </section>
        <section className="platform-separation">
          <h2>Separate frontends. Shared business data.</h2>
          <p>
            The public website never drops visitors into account or admin
            screens. Customer and admin applications are packaged and deployed
            independently, while approved APIs can share inventory, quotation
            and booking records.
          </p>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function PublicNotFoundPage() {
  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <section className="public-result">
          <i>404</i>
          <div className="eyebrow">PAGE NOT FOUND</div>
          <h1>This page is not part of the public landing site.</h1>
          <p>
            Customer and admin applications are intentionally separated from
            public navigation. Use the public catalogue, quotation or contact
            pages to continue.
          </p>
          <div className="hero-actions">
            <a className="public-cta" href="/">
              Return home
            </a>
            <a className="outline-cta" href="/contact">
              Contact support
            </a>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function AboutPage() {
  const standards = [
    [
      "Clean, event-ready equipment",
      "Every piece is washed, inspected and packed for the event.",
    ],
    [
      "Clear communication",
      "Practical updates from quotation to final collection.",
    ],
    [
      "Reliable timing",
      "Delivery and collection windows planned around your venue.",
    ],
    [
      "Transparent quotes",
      "Itemised products, labour, transport and optional extras.",
    ],
    [
      "Respectful service",
      "Friendly people who care for your venue and occasion.",
    ],
  ];
  return (
    <div className="public-site about-editorial">
      <PublicHeader active="About" />
      <main>
        <section className="about-main-hero">
          <div>
            <span>ABOUT SK EVENT HIRE</span>
            <h1>Events feel easier with the right support.</h1>
            <p>
              SK Event Hire provides quality event equipment and practical
              planning help for celebrations across Melbourne and Victoria.
            </p>
            <div>
              <a href="/request-quote">Request a quote →</a>
              <a href="/our-story">Read our story</a>
              <a href="/products">Explore hire products</a>
            </div>
            <small>✓ Local Melbourne delivery & collection</small>
          </div>
          <figure>
            <img
              src="/images/warehouse-team.png"
              alt="SK Event Hire team preparing event furniture"
            />
            <figcaption>
              <b>Equipment prepared for real events</b>
              <span>Clean · Checked · Event-ready</span>
            </figcaption>
          </figure>
        </section>
        <section className="about-story editorial-section">
          <div className="about-collage">
            <img
              src="/images/chairs-product.png"
              alt="Chair quality preparation"
            />
            <img src="/images/hero-event.png" alt="Completed outdoor event" />
            <em>
              FROM WAREHOUSE
              <br />
              TO EVENT DAY
            </em>
          </div>
          <div>
            <span>OUR STORY</span>
            <h2>How SK Event Hire began</h2>
            <p>
              SK Event Hire was created to make event hire clearer, calmer and
              more dependable. We combine a carefully maintained product range
              with practical advice, local knowledge and reliable logistics.
            </p>
            <p>
              Our role is simple: help customers choose confidently, prepare
              every item properly and make delivery, setup and collection easier
              to understand.
            </p>
            <blockquote>
              <b>“Hire should feel organised.”</b>
              <small>
                Clear advice, honest communication and equipment that arrives
                ready.
              </small>
            </blockquote>
          </div>
        </section>
        <section className="about-expect">
          <header>
            <span>OUR SERVICE PROMISE</span>
            <h2>What customers can expect</h2>
            <p>Simple standards guide every product, quotation and event.</p>
          </header>
          <div>
            {standards.map((x, i) => (
              <article key={x[0]}>
                <i>{["✣", "▢", "▣", "◇", "♡"][i]}</i>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="about-process editorial-section">
          <span>HOW WE HELP</span>
          <h2>The way we work</h2>
          <p>Clear steps from your first idea to final collection.</p>
          <div>
            {[
              [
                "01",
                "Helpful",
                "Advice based on venue, guests and event style.",
              ],
              [
                "02",
                "Dependable",
                "Confirmed timing and practical communication.",
              ],
              ["03", "Careful", "Quality checks before every dispatch."],
              [
                "04",
                "Inclusive",
                "Flexible options for different events and budgets.",
              ],
              [
                "05",
                "Straightforward",
                "Clear quotes, choices and next steps.",
              ],
            ].map((x) => (
              <article key={x[0]}>
                <i>{x[0]}</i>
                <b>{x[1]}</b>
                <small>{x[2]}</small>
              </article>
            ))}
          </div>
        </section>
        <section className="prepared-band">
          <div>
            <span>QUALITY & CHECKING</span>
            <h2>Prepared for every booking</h2>
            <img src="/images/chairs-product.png" alt="Team preparing chairs" />
          </div>
          <div className="prepared-list">
            {[
              ["Inspect", "Condition check"],
              ["Clean", "Commercial clean"],
              ["Count", "Quantities confirmed"],
              ["Pack", "Protected for transport"],
              ["Dispatch check", "Booking and loading verified"],
              ["Deliver & set up", "Handled by event crew"],
              ["Return inspection", "Recorded after hire"],
              ["Maintain", "Repair-first approach"],
            ].map((x) => (
              <article key={x[0]}>
                <i>✓</i>
                <b>{x[0]}</b>
                <small>{x[1]}</small>
              </article>
            ))}
          </div>
        </section>
        <section className="venue-planning editorial-section">
          <div>
            <span>VENUES & EVENTS</span>
            <h2>Practical planning for real venues</h2>
            <p>
              Every venue has its own access, surfaces, timing and weather
              considerations. We plan the details before event day.
            </p>
            <div>
              {[
                [
                  "Site and access review",
                  "Parking, stairs, paths and loading.",
                ],
                [
                  "Product information",
                  "Dimensions, capacity and setup needs.",
                ],
                ["Setup process", "Placement and service windows."],
                ["Weather decisions", "Cover, anchoring, heat and wind."],
              ].map((x) => (
                <article key={x[0]}>
                  <b>{x[0]}</b>
                  <small>{x[1]}</small>
                </article>
              ))}
            </div>
            <blockquote>
              ✓ We document important venue and setup details in your quotation.
            </blockquote>
          </div>
          <img src="/images/hero-event.png" alt="Outdoor marquee event setup" />
        </section>
        <section className="people-behind">
          <header>
            <span>THE PEOPLE BEHIND THE EVENTS</span>
            <h2>Meet the people behind your event</h2>
            <p>One connected team plans, prepares and delivers your hire.</p>
          </header>
          <div>
            {[
              [
                "Event planning & customer care",
                "Advice, products and clear quotations.",
                "/images/tableware-product.png",
              ],
              [
                "Warehouse & quality preparation",
                "Cleaning, checking, counting and packing.",
                "/images/warehouse-team.png",
              ],
              [
                "Delivery & event setup",
                "Careful transport, placement and collection.",
                "/images/marquee-product.png",
              ],
            ].map((x) => (
              <article key={x[0]}>
                <img src={x[2]} alt={x[0]} />
                <span>TEAM ROLE</span>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
                <a href="/contact">Meet the team →</a>
              </article>
            ))}
          </div>
          <small>
            ✓ Clear ownership from enquiry to collection, with one connected
            event record.
          </small>
        </section>
        <section className="local-knowledge editorial-section">
          <div className="service-map real-map">
            <iframe
              title="Melbourne event hire service area"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=144.55%2C-38.18%2C145.35%2C-37.55&amp;layer=mapnik&amp;marker=-37.8136%2C144.9631"
            />
            <i>SK</i>
            <span>Melbourne CBD</span>
            <span>Inner North</span>
            <span>Inner East</span>
            <span>Western suburbs</span>
            <span>Bayside</span>
          </div>
          <div>
            <span>WHERE WE WORK</span>
            <h2>Local knowledge across Melbourne</h2>
            <p>
              Our delivery planning is shaped by Melbourne venues, access
              conditions and real travel times.
            </p>
            <ul>
              <li>
                <b>Melbourne metro coverage</b>
                <small>Inner and greater Melbourne delivery.</small>
              </li>
              <li>
                <b>Pickup by appointment</b>
                <small>Eligible products from our warehouse.</small>
              </li>
              <li>
                <b>Venue-aware logistics</b>
                <small>Access, surfaces and timing checked early.</small>
              </li>
            </ul>
            <a href="/contact#contact-form">Check your suburb →</a>
          </div>
        </section>
        <section className="hire-care">
          <div>
            <span>OUR RESPONSIBILITY</span>
            <h2>Hire, reuse and care</h2>
            <p>
              Reusable event equipment works best when it is selected
              thoughtfully, maintained carefully and transported responsibly.
            </p>
            <div>
              {[
                ["Care and maintenance", "Cleaned, checked and repaired."],
                ["Protective transport", "Packed to reduce marks and damage."],
                ["Repair-first approach", "Maintain before replacing."],
                ["End-of-service review", "Responsible reuse and disposal."],
              ].map((x) => (
                <article key={x[0]}>
                  <b>✓ {x[0]}</b>
                  <small>{x[1]}</small>
                </article>
              ))}
            </div>
            <blockquote>
              Better preparation supports longer product life and more reliable
              events.
            </blockquote>
          </div>
          <img
            src="/images/warehouse-team.png"
            alt="Equipment being loaded carefully for delivery"
          />
        </section>
        <section className="about-final">
          <img
            src="/images/tableware-product.png"
            alt="Event consultation and floor plan"
          />
          <div>
            <span>LET&apos;S PLAN WITH PRACTICAL DETAIL</span>
            <h2>Tell us what you’re planning.</h2>
            <p>
              Share your date, location, guest count and priorities. We’ll help
              you build a clear hire plan.
            </p>
            <a href="/request-quote">Request a quote →</a>
            <a href="/planning">Meet with a planner</a>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

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

export function SitemapPage() {
  const groups: Array<[string, Array<[string, string]>]> = [
    [
      "Hire products",
      [
        ["Catalogue & filters", "/products"],
        ["Product comparison", "/compare"],
        ["Event collections", "/collections"],
        ["Hire packages", "/packages"],
        ["Hire basket", "/basket"],
      ],
    ],
    [
      "Plan & enquire",
      [
        ["Request a quotation", "/request-quote"],
        ["Event planning", "/planning"],
        ["Planning roadmap", "/roadmap"],
        ["Gallery & case studies", "/gallery"],
        ["Verified reviews", "/reviews"],
        ["Planning resources", "/blog"],
      ],
    ],
    [
      "Company",
      [
        ["About SK Event Hire", "/about"],
        ["Contact & service areas", "/contact"],
        ["Help centre", "/help"],
        ["Complete FAQs", "/faq"],
        ["Referral program", "/referrals"],
        ["Our story", "/our-story"],
      ],
    ],
    [
      "Policies",
      [
        ["Terms & policies", "/rental-terms"],
        ["Payment policy", "/payment-policy"],
        ["Cancellation policy", "/cancellation-policy"],
        ["Privacy policy", "/privacy"],
      ],
    ],
  ];
  return (
    <div className="public-site">
      <PublicHeader />
      <main className="public-main">
        <section className="simple-hero">
          <div className="eyebrow">Public website directory</div>
          <h1>Sitemap</h1>
          <p>
            Find every public product, package, quotation, planning, company and
            support page.
          </p>
        </section>
        <section className="sitemap-grid">
          {groups.map((g) => (
            <article key={g[0]}>
              <h2>{g[0]}</h2>
              {g[1].map((x) => (
                <a href={x[1]} key={x[0]}>
                  {x[0]} <span>→</span>
                </a>
              ))}
            </article>
          ))}
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export const genericPages: Record<
  string,
  {
    eyebrow: string;
    title: string;
    text: string;
    image: string;
    items: [string, string][];
  }
> = {
  packages: {
    eyebrow: "Ready-made collections",
    title: "Start with a complete event package",
    text: "Use a practical equipment bundle as your starting point, then tailor quantities, finishes, delivery and setup.",
    image: "/images/hero-event.png",
    items: [
      [
        "Garden celebration",
        "Seating, dining tables, tableware and festoon lighting for 40 guests.",
      ],
      [
        "Wedding reception",
        "Bentwood chairs, timber tables, marquee, lighting and setup for 80 guests.",
      ],
      [
        "Corporate gathering",
        "Banquet seating, staging, lectern, service tables and practical lighting.",
      ],
      [
        "Backyard party",
        "Weather cover, bistro seating, cocktail tables and ambient light for 30 guests.",
      ],
    ],
  },
  planning: {
    eyebrow: "Event planning",
    title: "A practical plan for products and logistics",
    text: "Choose equipment advice, styling support, setup coordination or a complete event plan.",
    image: "/images/decor-product.png",
    items: [
      [
        "Equipment consultation",
        "Guest-count quantities, product combinations and available alternatives.",
      ],
      [
        "Venue & access review",
        "Loading, stairs, surfaces, power, setup timing and pack-down planning.",
      ],
      [
        "Styling direction",
        "Furniture, linen, tableware, lighting and décor aligned to one visual brief.",
      ],
      [
        "On-site coordination",
        "Crew scheduling, supplier handover, placement checks and event-day support.",
      ],
    ],
  },
  gallery: {
    eyebrow: "Event inspiration",
    title: "See products working together",
    text: "Explore natural wedding, corporate, private party and outdoor event combinations.",
    image: "/images/hero-event.png",
    items: [
      [
        "Garden wedding",
        "Bentwood seating, timber dining, ivory tableware and warm festoon lighting.",
      ],
      [
        "Modern corporate dinner",
        "Round banquet tables, neutral linen, staging and focused ambient light.",
      ],
      [
        "Intimate birthday",
        "Lounge settings, cocktail tables, décor arches and a compact dance floor.",
      ],
      [
        "Outdoor celebration",
        "Clearspan marquee, weather walls, flooring, practical lighting and heaters.",
      ],
    ],
  },
  reviews: {
    eyebrow: "Customer outcomes",
    title: "Service designed around confidence",
    text: "A clear quotation, visible product information and connected order tracking reduce surprises.",
    image: "/images/lounge-product.png",
    items: [
      [
        "Product clarity",
        "Customers can compare the size, finish, capacity and minimum hire before enquiring.",
      ],
      [
        "Logistics visibility",
        "Delivery windows, setup tasks and return requirements stay attached to the booking.",
      ],
      [
        "Controlled changes",
        "Date, quantity, item and access changes are rechecked before the order is altered.",
      ],
      [
        "Return support",
        "Condition reporting, collection status and final documents stay in the account.",
      ],
    ],
  },
  blog: {
    eyebrow: "Planning guides",
    title: "Make event hire decisions with context",
    text: "Practical Australian guidance for quantities, weather planning, venue access and hire responsibilities.",
    image: "/images/tableware-product.png",
    items: [
      [
        "How many chairs should I hire?",
        "Plan one chair per seated guest, then account for ceremony-to-reception moves and accessible seating.",
      ],
      [
        "Choosing a table size",
        "Allow for place settings, shared serviceware, centrepieces and comfortable chair clearance.",
      ],
      [
        "Melbourne weather plans",
        "Confirm anchoring, walling, drainage, heating and heat-management options early.",
      ],
      [
        "Preparing for pickup",
        "Use an enclosed vehicle, suitable restraints, protective blankets and the approved loading appointment.",
      ],
    ],
  },
  help: {
    eyebrow: "Help centre",
    title: "Clear answers before event day",
    text: "Understand quotations, deposits, delivery, pickup, changes, cancellations and returns.",
    image: "/images/warehouse-team.png",
    items: [
      [
        "When is stock reserved?",
        "Only after availability is rechecked, the final quote is accepted and the required deposit is paid.",
      ],
      [
        "Can I collect my order?",
        "Eligible items may be collected by appointment in a suitable enclosed vehicle with photo ID.",
      ],
      [
        "Can I change quantities?",
        "Yes. Changes remain requests until stock, labour, logistics and price are revalidated.",
      ],
      [
        "What happens on return?",
        "Items are counted and condition-checked. Missing, damaged or excess-cleaning items are documented.",
      ],
    ],
  },
};

export function GenericPublicPage({ kind }: { kind: string }) {
  const p = genericPages[kind] || genericPages.planning;
  return (
    <div className="public-site">
      <PublicHeader />
      <main className="public-main">
        <section className="image-hero">
          <img src={p.image} alt={p.title} />
          <div>
            <div className="eyebrow">{p.eyebrow}</div>
            <h1>{p.title}</h1>
            <p>{p.text}</p>
            <div className="hero-actions">
              <a className="public-cta" href="/request-quote">
                Request a quote
              </a>
              <a className="outline-cta" href="/contact">
                Talk to the team
              </a>
            </div>
          </div>
        </section>
        <section className="public-section">
          <div className="feature-grid">
            {p.items.map((x, i) => (
              <article className="feature-card" key={x[0]}>
                <i>{String(i + 1).padStart(2, "0")}</i>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
                <a href="/contact">Ask about this →</a>
              </article>
            ))}
          </div>
        </section>
        <section className="final-cta compact">
          <div className="eyebrow">Build your event brief</div>
          <h2>Ready to check products, dates and logistics?</h2>
          <a className="public-cta" href="/request-quote">
            Start a quotation request
          </a>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

type ReferralRecord = {
  id: number;
  referredName: string;
  referredEmail: string;
  eventType: string;
  status: string;
  commissionCents: number;
  createdAt: string;
};

export function ReferralPage() {
  const [records, setRecords] = useState<ReferralRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const load = () =>
    fetch("/api/referrals")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((x) => setRecords(x.referrals || []))
      .catch(() => setRecords([]))
      .finally(() => setLoading(false));
  useEffect(() => {
    load();
  }, []);
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotice("");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const response = await fetch("/api/referrals", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        referredName: data.get("referredName"),
        referredEmail: data.get("referredEmail"),
        eventType: data.get("eventType"),
      }),
    });
    const result = (await response.json()) as { error?: string };
    if (!response.ok) {
      setError(result.error || "The referral could not be saved.");
      return;
    }
    setNotice(
      "Referral saved. We’ll email the reference and track eligibility after the referred customer completes an eligible paid hire.",
    );
    form.reset();
    load();
  };
  const samples: ReferralRecord[] = [
    {
      id: -1,
      referredName: "Mia Chen",
      referredEmail: "m•••@example.com",
      eventType: "Wedding",
      status: "Qualified",
      commissionCents: 6200,
      createdAt: "2026-08-24",
    },
    {
      id: -2,
      referredName: "Noah Williams",
      referredEmail: "n•••@example.com",
      eventType: "Corporate event",
      status: "Pending",
      commissionCents: 0,
      createdAt: "2026-08-18",
    },
    {
      id: -3,
      referredName: "Ava Singh",
      referredEmail: "a•••@example.com",
      eventType: "Birthday & celebration",
      status: "Paid",
      commissionCents: 4800,
      createdAt: "2026-07-30",
    },
  ];
  const rows = records.length ? records : samples;
  return (
    <div className="public-site referral-public">
      <PublicHeader />
      <main className="referral-page">
        <section className="referral-hero">
          <div>
            <div className="eyebrow">Refer & earn</div>
            <h1>
              Share great events.
              <br />
              Earn referral rewards.
            </h1>
            <p>
              Refer a new customer directly from the public website. We track
              each referral by email and reference number, so no customer
              account is required.
            </p>
            <div>
              <a href="#refer-form">Refer someone</a>
              <a href="#referral-history">How rewards work</a>
            </div>
          </div>
          <img
            src="/images/hero-event.png"
            alt="A completed event created with SK Event Hire products"
          />
        </section>
        <section className="referral-kpis">
          {[
            ["Referral code", "ALEXEVENTS", "Copy and share"],
            ["Link clicks", "48", "Last 30 days"],
            [
              "Qualified referrals",
              String(
                Math.max(
                  6,
                  records.filter((x) => x.status === "Qualified").length,
                ),
              ),
              "Eligibility confirmed",
            ],
            ["Available earnings", "$186.00", "Payout ready"],
          ].map((x) => (
            <article key={x[0]}>
              <small>{x[0]}</small>
              <b>{x[1]}</b>
              <span>{x[2]}</span>
            </article>
          ))}
        </section>
        <section className="referral-grid">
          <form id="refer-form" onSubmit={submit}>
            <span>NEW REFERRAL</span>
            <h2>Refer someone planning an event</h2>
            <p>
              We use these details only to send and track the referral
              invitation.
            </p>
            <label>
              Your email address *
              <input
                name="referrerEmail"
                type="email"
                required
                placeholder="you@example.com"
              />
            </label>
            <label>
              Full name *
              <input
                name="referredName"
                required
                minLength={2}
                placeholder="Referral’s full name"
              />
            </label>
            <label>
              Email address *
              <input
                name="referredEmail"
                type="email"
                required
                placeholder="name@example.com"
              />
            </label>
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
            <label className="referral-consent">
              <input type="checkbox" required /> I confirm I have permission to
              share these contact details.
            </label>
            <button>Send and track referral →</button>
            {notice && (
              <p className="form-success" role="status">
                ✓ {notice}
              </p>
            )}
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
          </form>
          <aside>
            <span>YOUR SHARE LINK</span>
            <h2>One link for every invitation</h2>
            <code>skeventhire.com.au/r/ALEXEVENTS</code>
            <button
              onClick={() =>
                navigator.clipboard?.writeText(
                  "https://skeventhire.com.au/r/ALEXEVENTS",
                )
              }
            >
              Copy referral link
            </button>
            <ol>
              <li>
                <i>1</i>
                <b>Share your link</b>
                <small>
                  Send it only to people who asked for event-hire information.
                </small>
              </li>
              <li>
                <i>2</i>
                <b>They request a quote</b>
                <small>
                  The referral remains pending while eligibility is checked.
                </small>
              </li>
              <li>
                <i>3</i>
                <b>Eligible booking completes</b>
                <small>Your reward moves to approved and then available.</small>
              </li>
            </ol>
          </aside>
        </section>
        <section id="referral-history" className="referral-history">
          <header>
            <div>
              <span>REFERRAL ACTIVITY</span>
              <h2>Track referrals and rewards</h2>
            </div>
            <small>
              {loading
                ? "Loading saved referrals…"
                : `${rows.length} referrals shown`}
            </small>
          </header>
          <div className="referral-table">
            <b>Name</b>
            <b>Event</b>
            <b>Invited</b>
            <b>Status</b>
            <b>Reward</b>
            {rows.flatMap((x) => [
              <span key={`${x.id}n`}>
                <strong>{x.referredName}</strong>
                <small>{x.referredEmail}</small>
              </span>,
              <span key={`${x.id}e`}>{x.eventType}</span>,
              <span key={`${x.id}d`}>
                {new Date(x.createdAt).toLocaleDateString("en-AU")}
              </span>,
              <span
                className={`referral-status ${x.status.toLowerCase()}`}
                key={`${x.id}s`}
              >
                {x.status}
              </span>,
              <span key={`${x.id}c`}>
                {x.commissionCents
                  ? `$${(x.commissionCents / 100).toFixed(2)}`
                  : "—"}
              </span>,
            ])}
          </div>
        </section>
        <section className="referral-faq">
          <div>
            <span>REFERRAL QUESTIONS</span>
            <h2>How eligibility works</h2>
          </div>
          <div>
            {[
              [
                "When does a referral qualify?",
                "After a new customer uses the referral, confirms and pays for an eligible hire, completes the event and returns the equipment.",
              ],
              [
                "When is a reward available?",
                "Approved rewards become available after the event, return inspection and payment checks are complete.",
              ],
              [
                "Can I refer an existing customer?",
                "No. Referrals are for new customers who have not previously made an SK Event Hire enquiry or booking.",
              ],
              [
                "How are payments handled?",
                "We email the approved reward options to the referrer. No customer account is required to receive status updates.",
              ],
            ].map((x, i) => (
              <details open={i === 0} key={x[0]}>
                <summary>
                  {x[0]}
                  <b>＋</b>
                </summary>
                <p>{x[1]}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function RoadmapPage() {
  const phases = [
    [
      "01",
      "Discover",
      "Browse products, packages, availability and planning guidance.",
    ],
    [
      "02",
      "Plan",
      "Confirm your date, venue, guest count, access and service requirements.",
    ],
    [
      "03",
      "Quote",
      "Receive an itemised quotation with products, logistics, GST and terms.",
    ],
    [
      "04",
      "Confirm",
      "Approve the current quote and pay the required deposit securely.",
    ],
    [
      "05",
      "Prepare",
      "Follow warehouse checks, delivery timing and venue access updates.",
    ],
    [
      "06",
      "Event day",
      "Receive, use and care for the hired equipment as confirmed.",
    ],
    [
      "07",
      "Return",
      "Complete collection, condition review, final documents and rewards.",
    ],
  ];
  return (
    <div className="public-site roadmap-page">
      <PublicHeader />
      <main>
        <section className="roadmap-hero">
          <div>
            <span>YOUR EVENT HIRE ROADMAP</span>
            <h1>A clear path from idea to final collection.</h1>
            <p>
              See what happens at every stage, who owns the next action and
              which details must be confirmed before your event moves forward.
            </p>
            <a href="/request-quote">Start your event plan →</a>
          </div>
          <img
            src="/images/hero-event.png"
            alt="Completed Melbourne event hire setup"
          />
        </section>
        <section className="roadmap-flow">
          <header>
            <span>SEVEN CONNECTED STAGES</span>
            <h2>Know what happens next</h2>
          </header>
          <div>
            {phases.map((x) => (
              <article key={x[0]}>
                <i>{x[0]}</i>
                <div>
                  <h3>{x[1]}</h3>
                  <p>{x[2]}</p>
                </div>
                <b>✓</b>
              </article>
            ))}
          </div>
        </section>
        <section className="roadmap-checkpoints">
          <div>
            <span>IMPORTANT CHECKPOINTS</span>
            <h2>Nothing important is assumed.</h2>
            <p>
              Stock, price, delivery, setup and payment remain visible and
              require confirmation at the correct stage.
            </p>
          </div>
          <div>
            {[
              ["Availability", "Rechecked before reservation"],
              ["Venue access", "Confirmed before dispatch"],
              ["Final quantities", "Approved in the current quote"],
              ["Payment", "Recorded before confirmation"],
              ["Return condition", "Documented after collection"],
              ["Referral rewards", "Released after eligibility checks"],
            ].map((x) => (
              <article key={x[0]}>
                <b>{x[0]}</b>
                <small>{x[1]}</small>
              </article>
            ))}
          </div>
        </section>
        <section className="roadmap-cta">
          <h2>Ready for stage one?</h2>
          <p>
            Start with products, a package or a conversation with the planning
            team.
          </p>
          <a href="/products">Browse products</a>
          <a href="/contact">Talk to our team</a>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
