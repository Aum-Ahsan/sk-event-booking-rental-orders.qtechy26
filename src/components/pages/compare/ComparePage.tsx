import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import type { HireProduct } from "../../../types/commerce";
import hireProducts from "../../../data/commerce/hireProducts.json";
import { CompareHeroSection, CompareTableSection } from "./sections/CompareSections";

export function ComparePage() {
  const ps = [hireProducts[0], hireProducts[1], hireProducts[2]];
  const rows: { label: string; render: (p: HireProduct) => string }[] = [
    { label: "Category", render: (p) => p.category },
    { label: "From price", render: (p) => p.price },
    { label: "Dimensions", render: (p) => p.dimensions },
    { label: "Capacity", render: (p) => p.capacity },
    { label: "Finish", render: (p) => p.finish },
    { label: "Minimum hire", render: (p) => p.minimum },
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