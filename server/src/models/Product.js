import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, index: true },
    image: { type: String, required: true },
    dailyRate: { type: Number, required: true, min: 0 },
    summary: { type: String, required: true },
    description: { type: String, required: true },
    specifications: { type: Map, of: String, default: {} },
    active: { type: Boolean, default: true, index: true },
  },
  { timestamps: true },
);

export const Product = mongoose.model("Product", productSchema);
