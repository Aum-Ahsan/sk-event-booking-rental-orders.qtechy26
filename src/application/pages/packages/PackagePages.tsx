import {
  CollectionsExperience,
  PackageDetailExperience,
  PackagesLandingExperience,
} from "../../../components/packages/PackageExperiences";

export function PackagesLandingPage() {
  return <PackagesLandingExperience />;
}

export function PackageDetailPage({ detail }: { detail?: string }) {
  return <PackageDetailExperience detail={detail} />;
}

export function CollectionsPage({ type }: { type?: string }) {
  return <CollectionsExperience type={type} />;
}
