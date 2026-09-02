import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true },
    phone: { type: String, required: true },
    eventType: { type: String, required: true },
    eventDate: { type: Date, required: true },
    details: { type: mongoose.Schema.Types.Mixed, default: {} },
    status: { type: String, enum: ["new", "in-progress", "resolved"], default: "new" },
  },
  { timestamps: true },
);

export const Enquiry = mongoose.model("Enquiry", enquirySchema);
