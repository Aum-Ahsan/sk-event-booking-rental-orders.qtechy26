import axiosInstance from "./axiosInstance";

export type EnquiryPayload = Record<string, string | number | boolean>;
export type ReferralPayload = {
  name: string;
  email: string;
  phone?: string;
};

export const eventHireApi = {
  getProducts: () => axiosInstance.get("/products"),
  submitEnquiry: (payload: EnquiryPayload) =>
    axiosInstance.post("/enquiries", payload),
  submitReferral: (payload: ReferralPayload) =>
    axiosInstance.post("/referrals", payload),
  createBooking: (payload: Record<string, unknown>) =>
    axiosInstance.post("/bookings", payload),
  requestQuote: (payload: Record<string, unknown>) =>
    axiosInstance.post("/quotes", payload),
};
