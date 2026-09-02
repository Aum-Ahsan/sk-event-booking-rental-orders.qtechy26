import React, { useState } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import categories from "../../../data/commerce/categories.json";
import { policyLibrary } from "../faq/FaqPage";
import pageData from "../../../data/pages/legal.json";
import { LegalHeroSection } from "./sections/LegalHeroSection";
import { PolicySwitcherSection } from "./sections/PolicySwitcherSection";

type PolicyKey = keyof typeof policyLibrary;

export function LegalPage({ kind }: { kind: string }) {
  const initial: PolicyKey =
    kind === "payment-policy"
      ? "payment"
      : kind === "cancellation-policy"
        ? "cancellation"
        : kind === "privacy"
          ? "privacy"
          : "rental";
  const [active, setActive] = useState<PolicyKey>(initial);
  const [optional, setOptional] = useState(true);
  const policy = policyLibrary[active];
  return (
    <div className="public-site legal-hub">
      <PublicHeader />
      <main>
        <LegalHeroSection />
        <PolicySwitcherSection />
      </main>
      <PublicFooter />
    </div>
  );
}
