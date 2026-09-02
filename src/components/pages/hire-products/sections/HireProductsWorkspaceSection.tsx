import React from "react";
import data from "../../../../data/pages/products.json";
import type { HireProduct } from "../../../../types/commerce";
import eventTypes from "../../../../data/commerce/eventTypes.json";
import pageData from "../../../../data/pages/hire-products.json";

interface HireProductsWorkspaceSectionProps {
  clearFilters: () => void;
  availableOnly: boolean;
  setAvailableOnly: (val: boolean) => void;
  category: string;
  setCategory: (val: string) => void;
  eventType: string;
  setEventType: (val: string) => void;
  maxPrice: number;
  setMaxPrice: (val: number) => void;
  page: number;
  setPage: (val: number) => void;
  view: "grid" | "list";
  setView: (val: "grid" | "list") => void;
  listing: HireProduct[];
  visibleProducts: HireProduct[];
  pageCount: number;
  availability: string;
  hireProductsLength: number;
  goToPage: (next: number) => void;
}

export function HireProductsWorkspaceSection({
  clearFilters,
  availableOnly,
  setAvailableOnly,
  category,
  setCategory,
  eventType,
  setEventType,
  maxPrice,
  setMaxPrice,
  page,
  setPage,
  view,
  setView,
  listing,
  visibleProducts,
  pageCount,
  availability,
  hireProductsLength,
  goToPage,
}: HireProductsWorkspaceSectionProps) {
  const { workspace, advice } = data;

  return (
    <section className="catalogue-workspace">
      <aside className="catalogue-filters">
        <div className="filter-card-head">
          <div>
            <div className="eyebrow">{workspace.refineEyebrow}</div>
            <h3>{workspace.refineTitle}</h3>
          </div>
          <button onClick={clearFilters}>{workspace.clearAll}</button>
        </div>
        <fieldset>
          <legend>{workspace.availabilityLegend}</legend>
          <label>
            <input
              type="checkbox"
              checked={availableOnly}
              onChange={(e) => setAvailableOnly(e.target.checked)}
            />
            {workspace.availableForDates}<small>{pageData.extracted.text_13}</small>
          </label>
          <label>
            <input type="checkbox" />
            {workspace.showAlternatives}<small>{pageData.extracted.text_14}</small>
          </label>
        </fieldset>
        <fieldset>
          <legend>{workspace.categoryLegend}</legend>
          <label>
            <input
              type="radio"
              name="category"
              checked={category === "All"}
              onChange={() => setCategory("All")}
            />
            {workspace.allProducts}<small>{hireProductsLength}</small>
          </label>
          {["Chairs", "Tables", "Marquees", "Lighting", "Tableware"].map(
            (x, i) => (
              <label key={x}>
                <input
                  type="radio"
                  name="category"
                  checked={category === x}
                  onChange={() => setCategory(x)}
                />
                {x}
                <small>{18 - i * 2}</small>
              </label>
            ),
          )}
        </fieldset>
        <fieldset>
          <legend>{workspace.eventLegend}</legend>
          <label>
            <input
              type="radio"
              name="event"
              checked={eventType === "All"}
              onChange={() => {
                setEventType("All");
                setPage(1);
              }}
            />
            {workspace.allEvents}
          </label>
          {eventTypes.map((x) => (
            <label key={x}>
              <input
                type="radio"
                name="event"
                checked={eventType === x}
                onChange={() => {
                  setEventType(x);
                  setPage(1);
                }}
              />
              {x}
            </label>
          ))}
        </fieldset>
        <fieldset className="price-range-filter">
          <legend>{workspace.priceLegend}</legend>
          <div>
            <span>{pageData.extracted.text_15}</span>
            <output>${maxPrice.toLocaleString()}</output>
          </div>
          <input
            aria-label="Maximum price"
            type="range"
            min="0"
            max="3000"
            step="50"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <small>
            {pageData.extracted.text_16}{maxPrice.toLocaleString()}
          </small>
        </fieldset>
      </aside>
      <div className="catalogue-results">
        <div className="results-head">
          <div>
            <h2>{listing.length} {pageData.extracted.text_17}</h2>
            <small>{availability}</small>
          </div>
          <div>
            <button
              className={view === "grid" ? "active" : ""}
              onClick={() => setView("grid")}
              aria-label="Grid view"
            >
              ▦
            </button>
            <button
              className={view === "list" ? "active" : ""}
              onClick={() => setView("list")}
              aria-label="List view"
            >
              ☷
            </button>
          </div>
        </div>
        <div className="filter-chips">
          {availableOnly && (
            <span>
              {workspace.availableForDates}{" "}
              <button onClick={() => setAvailableOnly(false)}>×</button>
            </span>
          )}
          {category !== "All" && (
            <span>
              {category}{" "}
              <button onClick={() => setCategory("All")}>×</button>
            </span>
          )}
          {eventType !== "All" && (
            <span>
              {eventType}{" "}
              <button onClick={() => setEventType("All")}>×</button>
            </span>
          )}
          <button onClick={clearFilters}>{workspace.clearFilters}</button>
        </div>
        <div
          className={`reference-product-grid ${view === "list" ? "list-view" : ""}`}
        >
          {visibleProducts.map((p, i) => (
            <article key={p.slug}>
              <a className="product-image" href={`/product-${p.slug}`}>
                <img src={p.image} alt={p.name} />
                <em>
                  {i % 4 === 0 ? "POPULAR" : i % 5 === 0 ? "PREMIUM" : ""}
                </em>
                <i>♡</i>
              </a>
              <div>
                <small>{p.category}</small>
                <h3>
                  <a href={`/product-${p.slug}`}>{p.name}</a>
                </h3>
                <span className="stars">
                  ★ {p.rating ?? `4.${9 - (i % 3)}`}{" "}
                  <small>({p.reviews ?? 12 + i} {pageData.extracted.text_18}</small>
                </span>
                <p>{pageData.extracted.text_19}</p>
                <div className="colour-dot">
                  {pageData.extracted.text_20}{(i % 3) + 1} {pageData.extracted.text_21}{i % 3 ? "s" : ""}
                </div>
                <b className="catalogue-price">
                  <strong>{p.price}</strong>{" "}
                  <small>
                    {pageData.extracted.text_22}<br />
                    {pageData.extracted.text_23}</small>
                </b>
                <footer>
                  <a href={`/product-${p.slug}`}>{pageData.extracted.text_24}</a>
                  <a href={`/basket?add=${p.slug}`}>{pageData.extracted.text_25}</a>
                </footer>
              </div>
            </article>
          ))}
        </div>
        {listing.length === 0 && (
          <div className="empty-results">
            <h3>{workspace.emptyTitle}</h3>
            <p>{workspace.emptyDesc}</p>
            <button onClick={clearFilters}>{workspace.clearFilters}</button>
          </div>
        )}
        {listing.length > 0 && (
          <nav className="catalogue-pages" aria-label="Product pages">
            <button
              disabled={page === 1}
              onClick={() => goToPage(page - 1)}
            >
              {pageData.extracted.text_26}</button>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <button
                className={page === n ? "active" : ""}
                aria-current={page === n ? "page" : undefined}
                onClick={() => goToPage(n)}
                key={n}
              >
                {n}
              </button>
            ))}
            <button
              disabled={page === pageCount}
              onClick={() => goToPage(page + 1)}
            >
              {pageData.extracted.text_27}</button>
          </nav>
        )}
        <section className="catalogue-advice">
          <img
            src={advice.image}
            alt={advice.imageAlt}
          />
          <div>
            <div className="eyebrow">{advice.eyebrow}</div>
            <h2>{advice.title}</h2>
            <p>{advice.description}</p>
            {advice.links.map((link, i) => (
              <b key={i}>{link}</b>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
