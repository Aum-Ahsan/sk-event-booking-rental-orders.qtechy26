import React from "react";
import data from "../../../../data/pages/products.json";

interface HireProductsSearchSectionProps {
  query: string;
  setQuery: (query: string) => void;
  sort: string;
  setSort: (sort: string) => void;
}

export function HireProductsSearchSection({
  query,
  setQuery,
  sort,
  setSort,
}: HireProductsSearchSectionProps) {
  const { search } = data;

  return (
    <section className="catalogue-search">
      <label>
        ⌕
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={search.placeholder}
        />
        <button type="button">{search.buttonText}</button>
      </label>
      <span>
        Sort by{" "}
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="recommended">Recommended</option>
          <option value="az">A to Z</option>
          <option value="za">Z to A</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
          <option value="new">Newest first</option>
        </select>
      </span>
    </section>
  );
}
