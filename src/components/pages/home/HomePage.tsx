import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import { HomeHeroSection } from "./sections/HomeHeroSection";
import { HomePlanningSearchSection } from "./sections/HomePlanningSearchSection";
import { HomeMiniBenefitsSection } from "./sections/HomeMiniBenefitsSection";
import { HomeCategoryRailSection } from "./sections/HomeCategoryRailSection";
import { HomeOccasionGridSection } from "./sections/HomeOccasionGridSection";
import { HomePopularGridSection } from "./sections/HomePopularGridSection";
import { HomeServiceGridSection } from "./sections/HomeServiceGridSection";
import { HomeProcessSection } from "./sections/HomeProcessSection";
import { HomeGuidanceSection } from "./sections/HomeGuidanceSection";
import { HomeInspirationGridSection } from "./sections/HomeInspirationGridSection";
import { HomeTestimonialSection } from "./sections/HomeTestimonialSection";
import { HomeAreaSearchSection } from "./sections/HomeAreaSearchSection";
import { HomeArticlesSection } from "./sections/HomeArticlesSection";
import { HomeFaqSection } from "./sections/HomeFaqSection";
import { HomeReadyBandSection } from "./sections/HomeReadyBandSection";

export function HomePage() {
  return (
    <div className="public-site home-v4">
      <PublicHeader active="Home" />
      <main>
        <HomeHeroSection />
        <HomePlanningSearchSection />
        <HomeMiniBenefitsSection />
        <HomeCategoryRailSection />
        <HomeOccasionGridSection />
        <HomePopularGridSection />
        <HomeServiceGridSection />
        <HomeProcessSection />
        <HomeGuidanceSection />
        <HomeInspirationGridSection />
        <HomeTestimonialSection />
        <HomeAreaSearchSection />
        <HomeArticlesSection />
        <HomeFaqSection />
        <HomeReadyBandSection />
      </main>
      <PublicFooter />
    </div>
  );
}