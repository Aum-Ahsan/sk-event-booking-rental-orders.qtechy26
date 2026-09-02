import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basket/basketSlice";
import catalogueReducer from "../features/catalogue/catalogueSlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
import referralReducer from "../features/referral/referralSlice";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    catalogue: catalogueReducer,
    enquiry: enquiryReducer,
    referral: referralReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
