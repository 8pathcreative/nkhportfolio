import { ArticleJsonLd } from "next-seo";
import PageSeo from "./page-seo";

interface ArticleSeoProps {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category?: string;
  tags?: string[];
  path: string;
  image?: string;
  author?: {
    name: string;
    url?: string;
  };
}

/**
 * ArticleSeo component for blog posts and case studies with JSON-LD structured data
 * 
 * @example
 * <ArticleSeo 
 *   title="Healthcare Dashboard Case Study"
 *   description="A comprehensive redesign of a medical dashboard"
 *   publishedAt="2023-05-15T09:00:00Z"
 *   path="/case-studies/healthcare-dashboard"
 *   category="Case Study"
 *   tags={["Healthcare", "UX Design", "Dashboard"]}
 * />
 */
export default function ArticleSeo({
  title,
  description,
  publishedAt,
  updatedAt,
  category = "Case Study",
  tags = [],
  path,
  image,
  author = {
    name: "Neil Humphrey",
    url: "https://nkhportfolio.vercel.app/about",
  },
}: ArticleSeoProps) {
  // Current site URL from config or env
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nkhportfolio.vercel.app";
  const url = `${siteUrl}${path}`;
  const defaultImage = "/static/pelvic-model.webp";
  const imageUrl = image || defaultImage;

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path={path}
        openGraph={{
          type: "article",
          article: {
            publishedTime: publishedAt,
            modifiedTime: updatedAt,
            section: category,
            tags: tags,
          },
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
        }}
      />

      <ArticleJsonLd
        type="Article"
        url={url}
        title={title}
        images={[imageUrl]}
        datePublished={publishedAt}
        dateModified={updatedAt || publishedAt}
        authorName={[author.name]}
        publisherName="Neil Humphrey Portfolio"
        publisherLogo={`${siteUrl}/logo.png`}
        description={description}
      />
    </>
  );
} 