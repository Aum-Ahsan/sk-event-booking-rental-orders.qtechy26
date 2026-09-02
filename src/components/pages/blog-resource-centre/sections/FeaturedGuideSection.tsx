import React from "react";
import pageData from "../../../../data/pages/blog-resource-centre.json";

export function FeaturedGuideSection() {
  return (
    <section className="featured-guide editorial-section">
              <img
                src="/images/marquee-product.png"
                alt={pageData.extracted.attr_31}
              />
              <div>
                <span>{pageData.extracted.text_1}</span>
                <h2>{pageData.extracted.text_2}</h2>
                <p>
                  {pageData.extracted.text_3}</p>
                <a href="/blog-how-many-tables-and-chairs">{pageData.extracted.text_4}</a>
              </div>
            </section>
  );
}
