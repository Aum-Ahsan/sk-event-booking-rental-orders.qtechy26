import React from "react";
import type { HireProduct } from "../../../../types/commerce";

export function ProductDetailPriceSection({
  p, quantity, rentalDays, unitDaily, hireSubtotal, bond, gst, total
}: any) {
  return (
    <section className="price-panel rental-breakdown">
      <small>Estimated rental total</small>
      <b>${total.toFixed(2)}</b>
      <p>
        {quantity} × ${unitDaily.toFixed(2)} per day × {rentalDays} day
        {rentalDays === 1 ? "" : "s"}
      </p>
      <hr />
      <span>
        Selected product <b>{p.name}</b>
      </span>
      <span>
        Hire subtotal <b>${hireSubtotal.toFixed(2)}</b>
      </span>
      <span>
        Refundable security bond <b>${bond.toFixed(2)}</b>
      </span>
      <span>
        GST (10%) <b>${gst.toFixed(2)}</b>
      </span>
      <span className="price-total">
        Total payable <b>${total.toFixed(2)}</b>
      </span>
      <em>
        Bond is $50 up to $300 hire value, $100 above $300, and $200
        from $1,000. Final availability and delivery charges are
        confirmed during booking.
      </em>
      <a href={`/request-quote?product=${p.slug}`}>Add to quote</a>
      <a href={`/basket?book=${p.slug}`}>Book this product</a>
    </section>
  );
}