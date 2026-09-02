import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/gallery-story.json";

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
            <h1>{pageData.story.title}</h1>
            <p>{pageData.story.description}</p>
            <small>{pageData.story.meta}</small>
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
              {pageData.story.stats.map(s => (
                <b key={s[0]}>{s[0]}<small>{s[1]}</small></b>
              ))}
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
            {pageData.story.products.map((x) => (
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
                <em>{x[2]}</em>
              </div>
            ))}
          </div>
        </section>
        <section className="editorial-section case-gallery">
          <h2>More from this event</h2>
          <div className="case-gallery-grid">
            <img src="/images/tableware-product.png" alt="Detail shot" />
            <img src="/images/decor-product.png" alt="Detail shot" />
            <img src="/images/lighting-product.png" alt="Detail shot" />
          </div>
        </section>
        <section className="simple-cta case-cta">
          <div>
            <h2>Planning a similar event?</h2>
            <p>
              We can help recreate this look or tailor a package for your
              venue.
            </p>
            <div>
              <a className="primary" href="/products">
                Browse products
              </a>
              <a href="/contact">Get a quote</a>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}