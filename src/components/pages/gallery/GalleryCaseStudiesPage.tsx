import React, { useState } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import { GalleryStoryPage } from "./GalleryStoryPage";
import pageData from "../../../data/pages/gallery.json";

export function GalleryCaseStudiesPage({ story = false }: { story?: boolean }) {
  const [visible, setVisible] = useState(8);
  const [activeTag, setActiveTag] = useState("All");
  const [preview, setPreview] = useState<(typeof pageData.showcaseCards)[number] | null>(
    null,
  );
  const shown = pageData.showcaseCards.filter(
    (x) => activeTag === "All" || x.tags.includes(activeTag),
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