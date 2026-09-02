import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/sitemap.json";
import { SimpleHeroSection } from "./sections/SimpleHeroSection";
import { SitemapGridSection } from "./sections/SitemapGridSection";

export function SitemapPage() {
  return (
    <div className="public-site">
      <PublicHeader />
      <main className="public-main">
        <SimpleHeroSection />
        <SitemapGridSection />
      </main>
      <PublicFooter />
    </div>
  );
}
