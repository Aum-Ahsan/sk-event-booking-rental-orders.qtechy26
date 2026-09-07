import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";

import { AboutMainHeroSection } from "./sections/AboutMainHeroSection";
import { AboutStorySection } from "./sections/AboutStorySection";
import { AboutExpectSection } from "./sections/AboutExpectSection";
import { AboutProcessSection } from "./sections/AboutProcessSection";
import { AboutPreparedSection } from "./sections/AboutPreparedSection";
import { AboutVenuePlanningSection } from "./sections/AboutVenuePlanningSection";
import { AboutPeopleBehindSection } from "./sections/AboutPeopleBehindSection";
import { AboutLocalKnowledgeSection } from "./sections/AboutLocalKnowledgeSection";
import { AboutHireCareSection } from "./sections/AboutHireCareSection";
import { AboutFinalCtaSection } from "./sections/AboutFinalCtaSection";

export function AboutPage() {
  return (
    <div className="public-site about-editorial">
      <PublicHeader active="About" />
      <main>
        <AboutMainHeroSection />
        <AboutStorySection />
        <AboutExpectSection />
        <AboutProcessSection />
        <AboutPreparedSection />
        <AboutVenuePlanningSection />
        <AboutPeopleBehindSection />
        <AboutLocalKnowledgeSection />
        <AboutHireCareSection />
        <AboutFinalCtaSection />
      </main>
      <PublicFooter />
    </div>
  );
}
