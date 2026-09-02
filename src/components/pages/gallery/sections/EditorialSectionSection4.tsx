import React from "react";
import pageData from "../../../../data/pages/gallery-story.json";

export function EditorialSectionSection4() {
  return (
    <section className="editorial-section case-gallery">
              <h2>{pageData.story.moreFromThisEvent.title}</h2>
              <div className="case-gallery-grid">
                <img src="/images/tableware-product.png" alt={pageData.extracted.attr_7} />
                <img src="/images/decor-product.png" alt={pageData.extracted.attr_8} />
                <img src="/images/lighting-product.png" alt={pageData.extracted.attr_9} />
              </div>
            </section>
  );
}
