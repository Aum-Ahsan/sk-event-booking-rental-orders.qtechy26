import React from "react";
import pageData from "../../../../data/pages/blog-resource-centre.json";

export function BlogAdviceSection() {
  return (
    <section
              className="blog-advice"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(7,35,58,.96),rgba(7,35,58,.72),rgba(7,35,58,.28)),url('/images/warehouse-team.png')",
              }}
            >
              <div>
                <span>{pageData.extracted.text_20}</span>
                <h2>{pageData.extracted.text_21}</h2>
                <p>
                  {pageData.extracted.text_22}</p>
                <a href="/planning">{pageData.extracted.text_23}</a>
                <small>{pageData.extracted.text_24}</small>
              </div>
            </section>
  );
}
