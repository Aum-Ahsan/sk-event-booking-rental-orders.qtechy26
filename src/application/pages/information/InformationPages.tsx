import {
  AboutExperience,
  ContactExperience,
  FaqExperience,
  GenericPublicExperience,
  HelpCentreExperience,
  LegalExperience,
  NotFoundExperience,
  OurStoryExperience,
  PlanningExperience,
  PlatformDirectoryExperience,
  ReferralExperience,
  ReviewsExperience,
  RoadmapExperience,
  SitemapExperience,
  genericPages,
} from "../../../components/information/InformationExperiences";

export const AboutPage = () => <AboutExperience />;
export const ContactPage = () => <ContactExperience />;
export const FaqPage = () => <FaqExperience />;
export const HelpCentrePage = () => <HelpCentreExperience />;
export const OurStoryPage = () => <OurStoryExperience />;
export const PlanningPage = () => <PlanningExperience />;
export const PlatformDirectoryPage = () => <PlatformDirectoryExperience />;
export const ReferralPage = () => <ReferralExperience />;
export const ReviewsPage = () => <ReviewsExperience />;
export const RoadmapPage = () => <RoadmapExperience />;
export const SitemapPage = () => <SitemapExperience />;
export const NotFoundPage = () => <NotFoundExperience />;
export const LegalPage = ({ kind }: { kind: string }) => (
  <LegalExperience kind={kind} />
);
export const GenericPublicPage = ({ kind }: { kind: string }) => (
  <GenericPublicExperience kind={kind} />
);
export { genericPages };
