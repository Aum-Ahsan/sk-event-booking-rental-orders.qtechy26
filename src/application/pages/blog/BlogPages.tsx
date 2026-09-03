import type { BlogGuide } from "../../../../app/blogData";
import {
  BlogArticleExperience,
  BlogLandingExperience,
} from "../../../components/blog/BlogExperiences";

export const BlogPage = () => <BlogLandingExperience />;
export const BlogArticlePage = ({ guide }: { guide: BlogGuide }) => (
  <BlogArticleExperience guide={guide} />
);
