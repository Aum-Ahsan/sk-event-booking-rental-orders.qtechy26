import React, { useRef } from "react";
import data from "../../../../data/pages/products.json";
import categories from "../../../../data/commerce/categories.json";

interface HireProductsCategoryRailSectionProps {
  category: string;
  setCategory: (cat: string) => void;
}

export function HireProductsCategoryRailSection({
  category,
  setCategory,
}: HireProductsCategoryRailSectionProps) {
  const { rail } = data;
  const categoryRail = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, start: 0, left: 0 });

  return (
    <section className="category-rail">
      <div className="eyebrow">{rail.eyebrow}</div>
      <div className="rail-head">
        <h2>{rail.title}</h2>
        <div className="rail-actions">
          <button
            aria-label="Previous categories"
            onClick={() =>
              categoryRail.current?.scrollBy({
                left: -460,
                behavior: "smooth",
              })
            }
          >
            ←
          </button>
          <button
            aria-label="Next categories"
            onClick={() =>
              categoryRail.current?.scrollBy({
                left: 460,
                behavior: "smooth",
              })
            }
          >
            →
          </button>
          <button onClick={() => setCategory("All")}>{rail.viewAll}</button>
        </div>
      </div>
      <div
        ref={categoryRail}
        className="category-drag-rail"
        onPointerDown={(e) => {
          drag.current = {
            active: true,
            start: e.clientX,
            left: categoryRail.current?.scrollLeft || 0,
          };
          categoryRail.current?.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (drag.current.active && categoryRail.current)
            categoryRail.current.scrollLeft =
              drag.current.left - (e.clientX - drag.current.start);
        }}
        onPointerUp={(e) => {
          drag.current.active = false;
          categoryRail.current?.releasePointerCapture(e.pointerId);
        }}
        onPointerCancel={() => {
          drag.current.active = false;
        }}
      >
        {categories.map((c) => (
          <button
            className={category === c[0] ? "active" : ""}
            onClick={() => setCategory(c[0])}
            key={c[0]}
          >
            <img src={c[2]} alt={c[0]} />
            <b>{c[0]}</b>
          </button>
        ))}
      </div>
    </section>
  );
}
