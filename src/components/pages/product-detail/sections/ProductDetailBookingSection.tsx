import React from "react";

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
      <h3>When do you need it?</h3>
      <p className="date-format-note">
        Enter dates in day / month / year order.
      </p>
      <div className="booking-date-grid">
        <label>
          Event / start date
          <input
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
          Start time
          <input
            type="time"
            value={startTime}
            onChange={(e) => {
              setStartTime(e.target.value);
              setChecked(false);
            }}
          />
        </label>
        <label>
          Return date
          <input
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
          Return time
          <input
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
          Quantity{" "}
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
            <b>155 available</b> on your selected dates
          </small>
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