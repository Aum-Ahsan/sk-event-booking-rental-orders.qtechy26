import { ProductDetailPage as ProductDetail } from "../pages/product-detail/ProductDetailPage";
import { HireProductsPage as ProductsExperience } from "../pages/hire-products/HireProductsPage";

export { ProductsExperience };

export function ProductDetailExperience({ slug }: { slug: string }) {
  return <ProductDetail slug={slug} />;
}
