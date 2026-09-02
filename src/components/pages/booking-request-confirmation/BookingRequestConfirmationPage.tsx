import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/booking-request-confirmation.json";
import { ConfirmationHeroSection } from "./sections/ConfirmationHeroSection";

export function BookingRequestConfirmationPage() {
  return (
    <div className="public-site standalone-confirmation">
      <PublicHeader />
      <main>
        <ConfirmationHeroSection />
      </main>
      <PublicFooter />
    </div>
  );
}