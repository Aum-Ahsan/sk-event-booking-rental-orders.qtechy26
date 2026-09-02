import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { mobileNavigationOpen: false, quickCartOpen: false },
  reducers: {
    setMobileNavigationOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileNavigationOpen = action.payload;
    },
    setQuickCartOpen: (state, action: PayloadAction<boolean>) => {
      state.quickCartOpen = action.payload;
    },
  },
});

export const { setMobileNavigationOpen, setQuickCartOpen } = uiSlice.actions;
export default uiSlice.reducer;
