import {
  ProductDetail,
  ProductsPage as ProductsExperience,
} from "../../../components/pages/public-commerce/sections/PublicCommerceSections";

export { ProductsExperience };

export function ProductDetailExperience({ slug }: { slug: string }) {
  return <ProductDetail slug={slug} />;
}
