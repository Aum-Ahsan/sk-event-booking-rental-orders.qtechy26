import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { eventHireApi, type EnquiryPayload } from "../../api/eventHireApi";

export const submitEnquiry = createAsyncThunk(
  "enquiry/submit",
  async (payload: EnquiryPayload) => {
    const response = await eventHireApi.submitEnquiry(payload);
    return response.data;
  },
);

type EnquiryState = {
  status: "idle" | "submitting" | "succeeded" | "failed";
  error: string | null;
};

const initialState: EnquiryState = { status: "idle", error: null };

const enquirySlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {
    resetEnquiry: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitEnquiry.pending, (state) => {
        state.status = "submitting";
        state.error = null;
      })
      .addCase(submitEnquiry.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(submitEnquiry.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unable to submit enquiry";
      });
  },
});

export const { resetEnquiry } = enquirySlice.actions;
export default enquirySlice.reducer;
