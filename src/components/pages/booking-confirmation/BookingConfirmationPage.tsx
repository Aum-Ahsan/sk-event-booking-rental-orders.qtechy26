import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/booking-confirmation.json";
import { BookingConfirmationSection } from "./sections/BookingConfirmationSection";

export function BookingConfirmationPage() {
  return (
    <div className="public-site standalone-confirmation">
      <PublicHeader />
      <main>
        <BookingConfirmationSection />
      </main>
      <PublicFooter />
    </div>
  );
}