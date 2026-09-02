import React from "react";
import data from "../../../../data/pages/products.json";
import eventTypes from "../../../../data/commerce/eventTypes.json";
import pageData from "../../../../data/pages/hire-products.json";

interface HireProductsPlannerSectionProps {
  availability: string;
  setAvailability: (msg: string) => void;
  eventType: string;
  setEventType: (type: string) => void;
  setPage: (page: number) => void;
  eventDate: string;
  setEventDate: (date: string) => void;
  returnDate: string;
  setReturnDate: (date: string) => void;
  postcode: string;
  setPostcode: (code: string) => void;
  guestCount: number;
  setGuestCount: (count: number) => void;
  hireProductsLength: number;
}

export function HireProductsPlannerSection({
  availability,
  setAvailability,
  eventType,
  setEventType,
  setPage,
  eventDate,
  setEventDate,
  returnDate,
  setReturnDate,
  postcode,
  setPostcode,
  guestCount,
  setGuestCount,
  hireProductsLength,
}: HireProductsPlannerSectionProps) {
  const { planner } = data;

  return (
    <section className="planning-search catalogue-planner">
      <div className="search-title">
        <div>
          <b>{planner.title}</b>
          <span>{planner.description}</span>
        </div>
        <small>{availability}</small>
      </div>
      <div className="search-fields catalogue-availability-fields">
        <label>
          <span>{pageData.extracted.text_1}</span>
          <select
            value={eventType === "All" ? eventTypes[0] : eventType}
            onChange={(e) => {
              setEventType(e.target.value);
              setPage(1);
            }}
          >
            {eventTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label>
          <span>{pageData.extracted.text_2}</span>
          <input
            id="event-date"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </label>
        <label>
          <span>{pageData.extracted.text_3}</span>
          <input
            id="return-date"
            type="date"
            min={eventDate}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </label>
        <label>
          <span>{pageData.extracted.text_4}</span>
          <input
            id="event-postcode"
            inputMode="numeric"
            value={postcode}
            onChange={(e) =>
              setPostcode(e.target.value.replace(/\D/g, "").slice(0, 4))
            }
          />
        </label>
        <label>
          <span>{pageData.extracted.text_5}</span>
          <input
            type="number"
            min="1"
            value={guestCount}
            onChange={(e) =>
              setGuestCount(Math.max(1, Number(e.target.value) || 1))
            }
          />
        </label>
        <button
          onClick={() =>
            setAvailability(
              eventDate && returnDate && postcode.length === 4
                ? `${hireProductsLength} products checked for ${eventDate.split("-").reverse().join("/")}–${returnDate.split("-").reverse().join("/")} · ${guestCount} guests · ${postcode}`
                : planner.incompleteMsg
            )
          }
        >
          {planner.buttonText}
        </button>
      </div>
    </section>
  );
}
