import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CatalogueState = {
  search: string;
  category: string;
  sort: "recommended" | "price-low" | "price-high";
};

const initialState: CatalogueState = {
  search: "",
  category: "All products",
  sort: "recommended",
};

const catalogueSlice = createSlice({
  name: "catalogue",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<CatalogueState["sort"]>) => {
      state.sort = action.payload;
    },
    resetCatalogueFilters: () => initialState,
  },
});

export const { setSearch, setCategory, setSort, resetCatalogueFilters } =
  catalogueSlice.actions;
export default catalogueSlice.reducer;
