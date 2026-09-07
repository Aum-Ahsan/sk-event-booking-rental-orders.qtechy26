import React from "react";
import pageData from "../../../../data/pages/gallery-story.json";

export function EditorialSectionSection4() {
  return (
    <section className="editorial-section case-gallery">
              <h2>{pageData.story.moreFromThisEvent.title}</h2>
              <div className="case-gallery-grid">
                <img src="/images/tableware-product.png" alt="Event tableware setup" />
                <img src="/images/decor-product.png" alt="Event decor details" />
                <img src="/images/lighting-product.png" alt="Festoon lighting at event" />
              </div>
            </section>
  );
}
