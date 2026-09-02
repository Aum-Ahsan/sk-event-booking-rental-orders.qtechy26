import { productService } from "../services/productService.js";

export async function listProducts(req, res, next) {
  try {
    const products = await productService.list({ category: req.query.category });
    res.status(200).json({ data: products });
  } catch (error) {
    next(error);
  }
}

export async function getProduct(req, res, next) {
  try {
    const product = await productService.getBySlug(req.params.slug);
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.status(200).json({ data: product });
  } catch (error) {
    return next(error);
  }
}
