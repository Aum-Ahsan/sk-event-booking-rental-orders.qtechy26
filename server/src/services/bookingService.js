import { Booking } from "../models/Booking.js";

const createReference = () => `SKEH-${Date.now().toString(36).toUpperCase()}`;

export const bookingService = {
  create(payload) {
    return Booking.create({ ...payload, reference: createReference() });
  },
  getByReference(reference) {
    return Booking.findOne({ reference }).populate("items.product").lean();
  },
};
