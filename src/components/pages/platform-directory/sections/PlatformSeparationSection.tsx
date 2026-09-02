import React from "react";
import pageData from "../../../../data/pages/platform-directory.json";

export function PlatformSeparationSection() {
  return (
    <section className="platform-separation">
              <h2>{pageData.separation.title}</h2>
              <p>{pageData.separation.description}</p>
            </section>
  );
}
