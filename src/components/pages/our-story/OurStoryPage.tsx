import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/our-story.json";
import { StoryFounderHeroSection } from "./sections/StoryFounderHeroSection";
import { StoryMeaningSection } from "./sections/StoryMeaningSection";
import { StoryPrinciplesSection } from "./sections/StoryPrinciplesSection";
import { StoryOriginSection } from "./sections/StoryOriginSection";
import { StoryTimelineSection } from "./sections/StoryTimelineSection";
import { StoryFinalSection } from "./sections/StoryFinalSection";

export function OurStoryPage() {
  return (
    <div className="public-site our-story-page">
      <PublicHeader active="About" />
      <main>
        <StoryFounderHeroSection />
        <StoryMeaningSection />
        <StoryPrinciplesSection />
        <StoryOriginSection />
        <StoryTimelineSection />
        <StoryFinalSection />
      </main>
      <PublicFooter />
    </div>
  );
}
