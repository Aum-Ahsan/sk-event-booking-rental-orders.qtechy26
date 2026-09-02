import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { eventHireApi, type ReferralPayload } from "../../api/eventHireApi";

export const submitReferral = createAsyncThunk(
  "referral/submit",
  async (payload: ReferralPayload) => {
    const response = await eventHireApi.submitReferral(payload);
    return response.data;
  },
);

const referralSlice = createSlice({
  name: "referral",
  initialState: { status: "idle" as "idle" | "submitting" | "succeeded" | "failed" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitReferral.pending, (state) => {
        state.status = "submitting";
      })
      .addCase(submitReferral.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(submitReferral.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default referralSlice.reducer;
