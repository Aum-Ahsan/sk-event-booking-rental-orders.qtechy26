import React from "react";
import pageData from "../../../../data/pages/gallery-story.json";

export function EditorialSectionSection3() {
  return (
    <section className="editorial-section case-products">
              <div>
                <span className="section-kicker">{pageData.story.whatMadeItWork.kicker}</span>
                <h2>{pageData.story.whatMadeItWork.title}</h2>
                {pageData.story.products.map((x) => (
                  <div className="case-product-row" key={x.name}>
                    <img
                      src={
                        x.name.includes("Chair")
                          ? "/images/chairs-product.png"
                          : x.name.includes("Table")
                            ? "/images/tables-product.png"
                            : x.name.includes("Marquee")
                              ? "/images/marquee-product.png"
                              : "/images/lighting-product.png"
                      }
                      alt=""
                    />
                    <span>
                      <b>{x.name}</b>
                      <small>{x.desc}</small>
                    </span>
                    <em>{x.price}</em>
                  </div>
                ))}
              </div>
            </section>
  );
}
