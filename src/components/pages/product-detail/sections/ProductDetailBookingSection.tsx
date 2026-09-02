import React from "react";
import pageData from "../../../../data/pages/product-detail.json";

export function ProductDetailBookingSection({
  startDate, setStartDate,
  startTime, setStartTime,
  returnDate, setReturnDate,
  returnTime, setReturnTime,
  quantity, setQuantity,
  checked, setChecked
}: any) {
  return (
    <section className="booking-panel-detail">
      <h3>{pageData.extracted.text_8}</h3>
      <p className="date-format-note">{pageData.ui.booking.dateFormatNote}</p>
      <div className="booking-date-grid">
        <label>
          {pageData.extracted.text_9}<input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              setChecked(false);
            }}
          />
          <small>{startDate.split("-").reverse().join(" / ")}</small>
        </label>
        <label>
          {pageData.extracted.text_10}<input
            type="time"
            value={startTime}
            onChange={(e) => {
              setStartTime(e.target.value);
              setChecked(false);
            }}
          />
        </label>
        <label>
          {pageData.extracted.text_11}<input
            type="date"
            min={startDate}
            value={returnDate}
            onChange={(e) => {
              setReturnDate(e.target.value);
              setChecked(false);
            }}
          />
          <small>{returnDate.split("-").reverse().join(" / ")}</small>
        </label>
        <label>
          {pageData.extracted.text_12}<input
            type="time"
            value={returnTime}
            onChange={(e) => {
              setReturnTime(e.target.value);
              setChecked(false);
            }}
          />
        </label>
      </div>
      <div className="quantity-availability-row">
        <label>
          {pageData.extracted.text_13}{" "}
          <span>
            <button
              onClick={() => {
                setQuantity(Math.max(1, quantity - 1));
                setChecked(false);
              }}
            >
              −
            </button>
            <input
              inputMode="numeric"
              value={quantity}
              onChange={(e) => {
                setQuantity(Math.max(1, Number(e.target.value) || 1));
                setChecked(false);
              }}
            />
            <button
              onClick={() => {
                setQuantity(quantity + 1);
                setChecked(false);
              }}
            >
              ＋
            </button>
          </span>
        </label>
        {checked && (
          <small>
            <b>{pageData.extracted.text_14}</b> {pageData.extracted.text_15}</small>
        )}
      </div>
      <button
        disabled={
          !startDate ||
          !returnDate ||
          new Date(returnDate) < new Date(startDate)
        }
        onClick={() => setChecked(true)}
      >
        {checked
          ? `✓ ${quantity} available for ${startDate.split("-").reverse().join("/")}–${returnDate.split("-").reverse().join("/")}`
          : "Check availability"}
      </button>
    </section>
  );
}