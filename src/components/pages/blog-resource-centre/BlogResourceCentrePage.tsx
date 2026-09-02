import React, { useState } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import { blogCategories, blogGuides, type BlogGuide } from "../../../../app/blogData";
import pageData from "../../../data/pages/blog-resource-centre.json";
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
