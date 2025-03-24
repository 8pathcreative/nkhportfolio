import { NextSeo, NextSeoProps } from "next-seo";

interface PageSeoProps extends NextSeoProps {
  path?: string;
}

/**
 * PageSeo component for per-page SEO customization
 * 
 * @example
 * <PageSeo 
 *   title="About Me"
 *   description="Learn more about my background in healthcare UX design"
 *   path="/about"
 * />
 */
export default function PageSeo({ 
  title, 
  description, 
  path = "", 
  openGraph, 
  ...rest 
}: PageSeoProps) {
  // Current site URL from config or env
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nkhportfolio.vercel.app";
  
  // Construct canonical URL
  const canonical = path ? `${siteUrl}${path}` : siteUrl;

  // Merge openGraph data with defaults
  const og = {
    ...openGraph,
    url: canonical,
    title: title || openGraph?.title,
    description: description || openGraph?.description,
  };

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={og}
      {...rest}
    />
  );
} 