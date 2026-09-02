import React from "react";

export function HomeGuidanceSection() {
  return (
    <section className="help-split">
      <div>
        <div className="eyebrow">Need a little guidance?</div>
        <h2>Need help bringing it all together?</h2>
        <p>
          Our event team can recommend quantities, combinations and
          logistics for your space, guest count and budget.
        </p>
        <div className="guidance-points">
          <span><b>✓</b> Product quantities for your guest count</span>
          <span><b>✓</b> Venue access and delivery planning</span>
          <span><b>✓</b> Wet-weather and backup options</span>
          <span><b>✓</b> A clear, itemised hire estimate</span>
        </div>
        <div className="guidance-actions">
          <a href="/contact">Talk to our team →</a>
          <a href="/planning">Start an event brief</a>
        </div>
      </div>
      <img src="/images/warehouse-team.png" alt="SK Event Hire team helping a customer plan an event" />
    </section>
  );
}