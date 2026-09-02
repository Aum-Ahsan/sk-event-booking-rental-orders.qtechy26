import {
  CollectionsPage,
  PackagesPage,
} from "../../../components/pages/public-commerce/sections/PublicCommerceSections";
import { PackagesCollectionsLanding } from "../../../components/pages/public-content/sections/PublicContentSections";

export function PackagesLandingExperience() {
  return <PackagesCollectionsLanding />;
}

export function PackageDetailExperience({ detail }: { detail?: string }) {
  return <PackagesPage detail={detail} />;
}

export function CollectionsExperience({ type }: { type?: string }) {
  return <CollectionsPage type={type} />;
}
