import React from "react";
import pageData from "../../../../data/pages/product-detail.json";
import type { HireProduct } from "../../../../types/commerce";

export function ProductDetailOverviewSection({ p }: { p: HireProduct }) {
  return (
    <>
      <div className="eyebrow">Product details</div>
      <h2>At a glance</h2>
      <p>Important dimensions and practical details for planning your layout.</p>
      <div className="glance-grid">
        {pageData.glanceGrid.map((x) => (
          <span key={x[0]}>
            <small>{x[0]}</small>
            <b>{x[1]}</b>
          </span>
        ))}
      </div>
      <section className="layout-guide">
        <img src={p.image} alt="Chair dimensions" />
        <div>
          <h3>Check your venue layout</h3>
          <p>
            Use dimensions to plan table spacing and make sure wheelchair
            paths and accessible aisle clearance are allowed.
          </p>
          <button>Download dimension guide</button>
        </div>
      </section>
    </>
  );
}