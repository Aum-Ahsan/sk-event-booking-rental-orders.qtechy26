import React from "react";
import pageData from "../../../../data/pages/packages.json";

export function PackageDetailSection({ selected }: { selected: any }) {
  return (
    <section className="package-detail">
      <img src={selected.image} alt={selected.title} />
      <div>
        <div className="eyebrow">
          {selected.event} · {selected.guests}
        </div>
        <h1>{selected.title}</h1>
        <p>{pageData.ui.packageDetailText}</p>
        <div className="package-price">
          {selected.price}
          <small>{pageData.extracted.text_2}</small>
        </div>
        <h3>{pageData.extracted.text_3}</h3>
        <p>{selected.items}</p>
        <div className="package-options">
          <label>
            <span>{pageData.extracted.text_4}</span>
            <input defaultValue={selected.guests.split(" ")[0]} />
          </label>
          <label>
            <span>{pageData.extracted.text_5}</span>
            <select>
              <option>{pageData.extracted.text_6}</option>
              <option>{pageData.extracted.text_7}</option>
            </select>
          </label>
        </div>
        <a className="public-cta" href="/request-quote">{pageData.ui.customiseText}</a>
      </div>
    </section>
  );
}

export function PackagesListHeroSection() {
  return (
    <section className="image-hero">
      <img src="/images/hero-event.png" alt={pageData.extracted.attr_10} />
      <div>
        <div className="eyebrow">{pageData.extracted.text_8}</div>
        <h1>{pageData.extracted.text_9}</h1>
        <p>{pageData.ui.browsePackagesText}</p>
        <a className="public-cta" href="/collections">{pageData.ui.browseByEventText}</a>
      </div>
    </section>
  );
}

export function PackagesListGridSection() {
  return (
    <section className="public-section">
      <div className="package-grid">
        {pageData.packages.map((p) => (
          <article className="package-card" key={p.slug}>
            <img src={p.image} alt={p.title} />
            <div>
              <small>
                {p.event} · {p.guests}
              </small>
              <h2>{p.title}</h2>
              <p>{p.items}</p>
              <footer>
                <b>{p.price}</b>
                <a href={`/package-${p.slug}`}>{pageData.ui.viewCustomiseText}</a>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}