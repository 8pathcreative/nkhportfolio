'use client'

import dynamic from 'next/dynamic'

// Dynamically import components that need client-side features with optimized loading
export const StructuredData = dynamic(() => import("@/components/structured-data"), { 
  ssr: false,
  loading: () => null
})
export const LayoutScripts = dynamic(() => import("@/components/layout-scripts"), { 
  ssr: false,
  loading: () => null
})
export const FeaturedProject = dynamic(() => import("@/components/featured-project"), { 
  ssr: false,
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-neutral-800/50 rounded-lg"></div>
})
export const Portfolio = dynamic(() => import("@/components/portfolio"), { 
  ssr: false,
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-neutral-800/50 rounded-lg"></div>
})

// Experimental components
export const ExperimentalFeaturedProject = dynamic(() => import("@/app/experimental/featured-project"), { 
  ssr: false,
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-neutral-800/50 rounded-lg"></div>
})
export const ExperimentalPortfolio = dynamic(() => import("@/app/experimental/portfolio"), { 
  ssr: false,
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-neutral-800/50 rounded-lg"></div>
}) 