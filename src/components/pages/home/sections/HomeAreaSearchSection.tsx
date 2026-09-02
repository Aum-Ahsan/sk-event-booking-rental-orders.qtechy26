import React from "react";

export function HomeAreaSearchSection() {
  return (
    <section className="service-area-home">
      <img src="/images/warehouse-team.png" alt="Event hire delivery team in Melbourne" />
      <div>
        <div className="eyebrow">Delivery & collection across Victoria</div>
        <h2>Event hire across Melbourne</h2>
        <p>
          Professional delivery, setup and collection for homes, venues,
          gardens and corporate spaces.
        </p>
        <div className="area-search">
          <input placeholder="Enter your suburb or postcode" />
          <a href="/contact">Check area</a>
        </div>
        <small>Warehouse pickup is available by appointment for eligible items.</small>
      </div>
    </section>
  );
}