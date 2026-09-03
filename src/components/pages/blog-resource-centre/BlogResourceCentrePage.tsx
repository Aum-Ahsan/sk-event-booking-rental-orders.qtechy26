import React, { useState } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import { blogCategories, blogGuides, type BlogGuide } from "../../../../app/blogData";
import pageData from "../../../data/pages/blog-resource-centre.json";
import { BlogHeroSection } from "./sections/BlogHeroSection";
import { FeaturedGuideSection } from "./sections/FeaturedGuideSection";
import { TopicBrowserSection } from "./sections/TopicBrowserSection";
import { LatestGuidesSection } from "./sections/LatestGuidesSection";
import { ArticleEntrySection } from "./sections/ArticleEntrySection";
import { MentionedProductsSection } from "./sections/MentionedProductsSection";
import { BlogAdviceSection } from "./sections/BlogAdviceSection";
import { KeepPlanningSection } from "./sections/KeepPlanningSection";
import { NewsletterSection } from "./sections/NewsletterSection";

export function BlogResourceCentrePage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Planning basics");
  const [subscribed, setSubscribed] = useState(false);
  const filtered = blogGuides.filter(
    (guide) =>
      (activeCategory === "All topics" || guide.category === activeCategory) &&
      `${guide.title} ${guide.summary} ${guide.category}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <div className="public-site blog-resource">
      <PublicHeader active="Blog" />
      <main>
        <BlogHeroSection
          query={query}
          setQuery={setQuery}
          setActiveCategory={setActiveCategory}
        />
        <FeaturedGuideSection />
        <TopicBrowserSection
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setQuery={setQuery}
        />
        <LatestGuidesSection
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          query={query}
          setQuery={setQuery}
          filtered={filtered}
        />
        <ArticleEntrySection />
        <MentionedProductsSection />
        <BlogAdviceSection />
        <KeepPlanningSection activeCategory={activeCategory} />
        <NewsletterSection
          subscribed={subscribed}
          setSubscribed={setSubscribed}
        />
      </main>
      <PublicFooter />
    </div>
  );
}