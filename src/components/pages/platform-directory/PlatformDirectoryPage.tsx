import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/platform-directory.json";
import { SimpleHeroSection } from "./sections/SimpleHeroSection";
import { PlatformCardGridSection } from "./sections/PlatformCardGridSection";
import { PlatformSeparationSection } from "./sections/PlatformSeparationSection";

export function PlatformDirectoryPage() {
  return (
    <div className="public-site platform-directory">
      <PublicHeader />
      <main>
        <SimpleHeroSection />
        <PlatformCardGridSection />
        <PlatformSeparationSection />
      </main>
      <PublicFooter />
    </div>
  );
}
