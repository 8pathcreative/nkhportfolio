import { MetadataRoute } from 'next'

// This ensures the route is statically generated
export const dynamic = 'force-static'
export const revalidate = false

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/admin/*'],
    },
    sitemap: 'https://nkhportfolio.vercel.app/sitemap.xml',
  }
} 