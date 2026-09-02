import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/public-not-found.json";
import { PublicResultSection } from "./sections/PublicResultSection";

export function PublicNotFoundPage() {
  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <PublicResultSection />
      </main>
      <PublicFooter />
    </div>
  );
}
