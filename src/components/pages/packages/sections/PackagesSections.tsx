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
        <p>
          A curated starting point that stays fully editable. Change
          quantities, finishes or substitute products before availability
          and the final price are confirmed.
        </p>
        <div className="package-price">
          {selected.price}
          <small>Indicative package price incl. GST</small>
        </div>
        <h3>Starting inclusions</h3>
        <p>{selected.items}</p>
        <div className="package-options">
          <label>
            <span>Guest count</span>
            <input defaultValue={selected.guests.split(" ")[0]} />
          </label>
          <label>
            <span>Service</span>
            <select>
              <option>Delivery & collection</option>
              <option>Warehouse pickup & return</option>
            </select>
          </label>
        </div>
        <a className="public-cta" href="/request-quote">
          Customise this package
        </a>
      </div>
    </section>
  );
}

export function PackagesListHeroSection() {
  return (
    <section className="image-hero">
      <img src="/images/hero-event.png" alt="Curated event hire package" />
      <div>
        <div className="eyebrow">Editable hire packages</div>
        <h1>Start complete. Make it yours.</h1>
        <p>
          Choose a guest-ready bundle, then adjust quantities, finishes,
          logistics and optional extras around your real venue.
        </p>
        <a className="public-cta" href="/collections">
          Browse by event type
        </a>
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
                <a href={`/package-${p.slug}`}>View & customise →</a>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}