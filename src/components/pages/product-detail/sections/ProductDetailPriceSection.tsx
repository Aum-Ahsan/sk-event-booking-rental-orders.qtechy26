import React from "react";
import pageData from "../../../../data/pages/product-detail.json";
import type { HireProduct } from "../../../../types/commerce";

export function ProductDetailPriceSection({
  p, quantity, rentalDays, unitDaily, hireSubtotal, bond, gst, total
}: any) {
  return (
    <section className="price-panel rental-breakdown">
      <small>{pageData.extracted.text_29}</small>
      <b>${total.toFixed(2)}</b>
      <p>
        {quantity} × ${unitDaily.toFixed(2)} {pageData.extracted.text_30}{rentalDays} {pageData.extracted.text_31}{rentalDays === 1 ? "" : "s"}
      </p>
      <hr />
      <span>
        {pageData.extracted.text_32}<b>{p.name}</b>
      </span>
      <span>
        {pageData.extracted.text_33}<b>${hireSubtotal.toFixed(2)}</b>
      </span>
      <span>
        {pageData.extracted.text_34}<b>${bond.toFixed(2)}</b>
      </span>
      <span>
        {pageData.extracted.text_35}<b>${gst.toFixed(2)}</b>
      </span>
      <span className="price-total">
        {pageData.extracted.text_36}<b>${total.toFixed(2)}</b>
      </span>
      <em>
        {pageData.extracted.text_37}</em>
      <a href={`/request-quote?product=${p.slug}`}>{pageData.ui.price.addQuote}</a>
      <a href={`/basket?book=${p.slug}`}>{pageData.ui.price.bookProduct}</a>
    </section>
  );
}