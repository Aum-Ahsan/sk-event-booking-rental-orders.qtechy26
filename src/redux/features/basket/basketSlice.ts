import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type BasketItem = {
  productSlug: string;
  name: string;
  dailyRate: number;
  quantity: number;
};

type BasketState = { items: BasketItem[] };
const initialState: BasketState = { items: [] };

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<BasketItem>) => {
      const existing = state.items.find(
        (item) => item.productSlug === action.payload.productSlug,
      );
      if (existing) existing.quantity += action.payload.quantity;
      else state.items.push(action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productSlug: string; quantity: number }>,
    ) => {
      const item = state.items.find(
        (entry) => entry.productSlug === action.payload.productSlug,
      );
      if (item) item.quantity = Math.max(1, action.payload.quantity);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.productSlug !== action.payload,
      );
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, updateQuantity, removeItem, clearBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
