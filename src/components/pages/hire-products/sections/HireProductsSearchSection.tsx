import React from "react";
import data from "../../../../data/pages/products.json";
import pageData from "../../../../data/pages/hire-products.json";

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
        {pageData.extracted.text_6}{" "}
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="recommended">{pageData.extracted.text_7}</option>
          <option value="az">{pageData.extracted.text_8}</option>
          <option value="za">{pageData.extracted.text_9}</option>
          <option value="low">{pageData.extracted.text_10}</option>
          <option value="high">{pageData.extracted.text_11}</option>
          <option value="new">{pageData.extracted.text_12}</option>
        </select>
      </span>
    </section>
  );
}
