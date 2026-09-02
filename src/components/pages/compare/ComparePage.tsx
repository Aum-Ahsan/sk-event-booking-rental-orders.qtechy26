import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import type { HireProduct } from "../../../types/commerce";
import hireProducts from "../../../data/commerce/hireProducts.json";
import { CompareHeroSection, CompareTableSection } from "./sections/CompareSections";

export function ComparePage() {
  const ps = [hireProducts[0], hireProducts[1], hireProducts[2]];
  const rows: [string, (p: HireProduct) => string][] = [
    ["Category", (p) => p.category],
    ["From price", (p) => p.price],
    ["Dimensions", (p) => p.dimensions],
    ["Capacity", (p) => p.capacity],
    ["Finish", (p) => p.finish],
    ["Minimum hire", (p) => p.minimum],
  ];
  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <CompareHeroSection />
        <CompareTableSection ps={ps} rows={rows} />
      </main>
      <PublicFooter />
    </div>
  );
}