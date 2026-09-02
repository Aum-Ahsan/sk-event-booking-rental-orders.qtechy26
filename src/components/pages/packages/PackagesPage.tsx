import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import { PackageDetailSection, PackagesListHeroSection, PackagesListGridSection } from "./sections/PackagesSections";
import pageData from "../../../data/pages/packages.json";

export function PackagesPage({ detail }: { detail?: string }) {
  const selected = pageData.packages.find((x) => x.slug === detail);
  if (selected)
    return (
      <div className="public-site">
        <PublicHeader />
        <main>
          <div className="product-crumb">
            <a href="/packages">Packages</a>
            <span>›</span>
            {selected.title}
          </div>
          <PackageDetailSection selected={selected} />
        </main>
        <PublicFooter />
      </div>
    );
  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <PackagesListHeroSection />
        <PackagesListGridSection />
      </main>
      <PublicFooter />
    </div>
  );
}