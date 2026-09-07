"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { blogGuides } from "../../app/blogData";
import { BlogArticlePage, BlogPage } from "../application/pages/blog/BlogPages";
import {
  BasketPage,
  BookingConfirmationPage,
  BookingRequestConfirmationPage,
  PaymentConfirmationPage,
  PaymentPage,
} from "../application/pages/checkout/CheckoutPages";
import { ComparePage } from "../application/pages/compare/ComparePage";
import { GalleryPage } from "../application/pages/gallery/GalleryPages";
import { HomePage } from "../application/pages/home/HomePage";
import {
  AboutPage,
  ContactPage,
  FaqPage,
  GenericPublicPage,
  HelpCentrePage,
  LegalPage,
  NotFoundPage,
  OurStoryPage,
  PlanningPage,
  PlatformDirectoryPage,
  ReferralPage,
  ReviewsPage,
  RoadmapPage,
  SitemapPage,
  genericPages,
} from "../application/pages/information/InformationPages";
import {
  CollectionsPage,
  PackageDetailPage,
  PackagesLandingPage,
} from "../application/pages/packages/PackagePages";
import { ProductDetailPage, ProductsPage } from "../application/pages/products/ProductPages";
import { QuoteJourneyPage, QuoteSubmittedPage } from "../application/pages/quote/QuotePages";

const subscribePath = (notify: () => void) => {
  window.addEventListener("popstate", notify);
  return () => window.removeEventListener("popstate", notify);
};

const currentPath = () => window.location.pathname.replace(/^\/|\/$/g, "");
const serverPath = () => "";

export function AppRouter() {
  const path = useSyncExternalStore(subscribePath, currentPath, serverPath);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Intercept all internal anchor clicks → SPA navigation (no full reload)
    const onLinkClick = (event: MouseEvent) => {
      const target = (event.target as Element).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;
      // Only intercept same-origin, non-hash, non-external links
      if (
        target.target === "_blank" ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("http") ||
        href.startsWith("//")
      )
        return;
      // Allow hash-only links to work normally (scroll to anchor)
      if (href.startsWith("#")) return;
      event.preventDefault();
      const newPath = href.startsWith("/") ? href : `/${href}`;
      if (window.location.pathname !== newPath) {
        window.history.pushState(null, "", newPath);
        window.dispatchEvent(new PopStateEvent("popstate"));
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };

    const onToggle = (event: Event) => {
      const target = event.target as HTMLDetailsElement;
      if (target.tagName !== "DETAILS" || !target.open) return;
      target.parentElement?.querySelectorAll("details[open]").forEach((node) => {
        if (node !== target) (node as HTMLDetailsElement).open = false;
      });
    };

    document.addEventListener("click", onLinkClick, true);
    document.addEventListener("toggle", onToggle, true);

    // Reload when viewport crosses device breakpoints (mobile ↔ tablet ↔ desktop)
    // BUT skip reload if the change was caused by browser zoom (devicePixelRatio changes on zoom)
    let lastPixelRatio = window.devicePixelRatio;
    const breakpoints = [
      window.matchMedia("(max-width: 700px)"),
      window.matchMedia("(min-width: 701px) and (max-width: 1024px)"),
    ];
    const onBreakpointChange = () => {
      const currentRatio = window.devicePixelRatio;
      // If pixel ratio changed → user zoomed, not resized → skip reload
      if (Math.abs(currentRatio - lastPixelRatio) > 0.05) {
        lastPixelRatio = currentRatio;
        return;
      }
      lastPixelRatio = currentRatio;
      window.location.reload();
    };
    breakpoints.forEach((mq) => mq.addEventListener("change", onBreakpointChange));

    return () => {
      document.removeEventListener("click", onLinkClick, true);
      document.removeEventListener("toggle", onToggle, true);
      breakpoints.forEach((mq) => mq.removeEventListener("change", onBreakpointChange));
    };
  }, []);

  if (!mounted) return null;
  if (!path) return <HomePage />;
  if (path === "products" || path === "search") return <ProductsPage />;
  if (path === "compare") return <ComparePage />;
  if (path === "packages") return <PackagesLandingPage />;
  if (path.startsWith("package-"))
    return <PackageDetailPage detail={path.replace("package-", "")} />;
  if (path === "collections") return <CollectionsPage />;
  if (path.startsWith("collection-"))
    return <CollectionsPage type={path.replace("collection-", "")} />;
  if (path === "basket") return <BasketPage />;
  if (path === "payment") return <PaymentPage />;
  if (path === "booking-request-confirmation")
    return <BookingRequestConfirmationPage />;
  if (path === "booking-confirmation") return <BookingConfirmationPage />;
  if (path === "payment-confirmation") return <PaymentConfirmationPage />;
  if (path === "request-quote") return <QuoteJourneyPage />;
  if (path === "quote-submitted") return <QuoteSubmittedPage />;
  if (["rental-terms", "payment-policy", "privacy", "cancellation-policy"].includes(path))
    return <LegalPage kind={path} />;
  if (path === "help") return <HelpCentrePage />;
  if (path === "faq") return <FaqPage />;
  if (path === "roadmap") return <RoadmapPage />;
  if (path === "referrals" || path === "affiliate") return <ReferralPage />;
  if (path === "about") return <AboutPage />;
  if (path === "our-story") return <OurStoryPage />;
  if (path === "platforms") return <PlatformDirectoryPage />;
  if (path === "contact") return <ContactPage />;
  if (path === "sitemap") return <SitemapPage />;
  if (path.startsWith("product-"))
    return <ProductDetailPage slug={path.replace("product-", "")} />;
  if (path === "gallery" || path === "inspiration") return <GalleryPage />;
  if (path === "gallery-warm-timber-reception" || path.startsWith("gallery-event-"))
    return <GalleryPage story />;
  if (path === "planning") return <PlanningPage />;
  if (path === "reviews") return <ReviewsPage />;
  if (path === "blog") return <BlogPage />;
  if (path.startsWith("blog-")) {
    const guide = blogGuides.find((item) => item.slug === path.replace("blog-", ""));
    if (guide) return <BlogArticlePage guide={guide} />;
  }
  if (genericPages[path]) return <GenericPublicPage kind={path} />;
  return <NotFoundPage />;
}
