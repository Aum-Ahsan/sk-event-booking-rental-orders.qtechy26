import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import { CollectionsHeroSection, CollectionsListSection, CollectionsWeddingFavouritesSection } from "./sections/CollectionsSections";

export function CollectionsPage({ type }: { type?: string }) {
  const title = type === "weddings" ? "Wedding hire collection" : "Shop by event";
  
  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <CollectionsHeroSection type={type} title={title} />
        <CollectionsListSection />
        {type && <CollectionsWeddingFavouritesSection />}
      </main>
      <PublicFooter />
    </div>
  );
}