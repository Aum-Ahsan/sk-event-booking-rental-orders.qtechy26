import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/gallery-story.json";
import { CaseBannerSection } from "./sections/CaseBannerSection";
import { EditorialSectionSection } from "./sections/EditorialSectionSection";
import { EditorialSectionSection3 } from "./sections/EditorialSectionSection3";
import { EditorialSectionSection4 } from "./sections/EditorialSectionSection4";
import { SimpleCtaSection } from "./sections/SimpleCtaSection";

export function GalleryStoryPage() {
  return (
    <div className="public-site editorial-page story-detail">
      <PublicHeader active="Gallery" />
      <main>
        <CaseBannerSection />
        <EditorialSectionSection />
        <EditorialSectionSection3 />
        <EditorialSectionSection4 />
        <SimpleCtaSection />
      </main>
      <PublicFooter />
    </div>
  );
}