import {
  ProductDetailExperience,
  ProductsExperience,
} from "../../../components/products/ProductExperiences";

export function ProductsPage() {
  return <ProductsExperience />;
}

export function ProductDetailPage({ slug }: { slug: string }) {
  return <ProductDetailExperience slug={slug} />;
}
