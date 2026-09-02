import { Product } from "../models/Product.js";

export const productService = {
  list(filters = {}) {
    const query = { active: true };
    if (filters.category) query.category = filters.category;
    return Product.find(query).sort({ dailyRate: 1, name: 1 }).lean();
  },
  getBySlug(slug) {
    return Product.findOne({ slug, active: true }).lean();
  },
};
