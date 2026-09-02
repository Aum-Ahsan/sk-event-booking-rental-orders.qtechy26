import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/roadmap.json";
import { RoadmapHeroSection } from "./sections/RoadmapHeroSection";
import { RoadmapFlowSection } from "./sections/RoadmapFlowSection";
import { RoadmapCheckpointsSection } from "./sections/RoadmapCheckpointsSection";
import { RoadmapCtaSection } from "./sections/RoadmapCtaSection";

export function RoadmapPage() {
  return (
    <div className="public-site roadmap-page">
      <PublicHeader />
      <main>
        <RoadmapHeroSection />
        
        <RoadmapFlowSection />
        
        <RoadmapCheckpointsSection />
        
        <RoadmapCtaSection />
      </main>
      <PublicFooter />
    </div>
  );
}
