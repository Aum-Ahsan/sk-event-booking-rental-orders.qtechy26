import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/about.json";

import { AboutMainHeroSection } from "./sections/AboutMainHeroSection";
import { AboutStorySection } from "./sections/AboutStorySection";
import { AboutExpectSection } from "./sections/AboutExpectSection";
import { AboutProcessSection } from "./sections/AboutProcessSection";
import { AboutPreparedSection } from "./sections/AboutPreparedSection";
import { AboutCtaSection } from "./sections/AboutCtaSection";

export function AboutPage() {
  const { hero, story, expect, process, prepared, cta, standards } = pageData;
  return (
    <div className="public-site about-editorial">
      <PublicHeader active="About" />
      <main>
        <AboutMainHeroSection />
        <AboutStorySection />
        <AboutExpectSection />
        <AboutProcessSection />
        <AboutPreparedSection />
        <AboutCtaSection />
      </main>
      <PublicFooter />
    </div>
  );
}
