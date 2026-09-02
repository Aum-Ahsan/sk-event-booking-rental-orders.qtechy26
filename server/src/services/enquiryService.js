import { Enquiry } from "../models/Enquiry.js";

export const enquiryService = {
  create(payload) {
    return Enquiry.create(payload);
  },
};
