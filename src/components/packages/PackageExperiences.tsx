import { CollectionsPage } from "../pages/collections/CollectionsPage";
import { PackagesPage } from "../pages/packages/PackagesPage";
import { PackagesCollectionsLanding } from "../pages/packages-collections-landing/PackagesCollectionsLanding";

export function PackagesLandingExperience() {
  return <PackagesCollectionsLanding />;
}

export function PackageDetailExperience({ detail }: { detail?: string }) {
  return <PackagesPage detail={detail} />;
}

export function CollectionsExperience({ type }: { type?: string }) {
  return <CollectionsPage type={type} />;
}
