import mongoose from "mongoose";

const bookingItemSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    dailyRate: { type: Number, required: true, min: 0 },
  },
  { _id: false },
);

const bookingSchema = new mongoose.Schema(
  {
    reference: { type: String, required: true, unique: true, index: true },
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true, lowercase: true },
      phone: { type: String, required: true },
    },
    eventDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
    items: { type: [bookingItemSchema], validate: (items) => items.length > 0 },
    paymentMethod: { type: String, enum: ["payid", "bank-transfer", "cash"], required: true },
    status: { type: String, enum: ["requested", "confirmed", "completed", "cancelled"], default: "requested" },
    totals: {
      subtotal: { type: Number, required: true },
      gst: { type: Number, required: true },
      total: { type: Number, required: true },
    },
  },
  { timestamps: true },
);

export const Booking = mongoose.model("Booking", bookingSchema);
