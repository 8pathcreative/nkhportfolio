'use client'

import dynamic from 'next/dynamic'

// Lazy-load client components with loading placeholders
export const ExperimentalFeaturedProject = dynamic(() => import("./featured-project"), { 
  ssr: false,
  loading: () => <div className="min-h-[500px] w-full animate-pulse bg-neutral-900/20 rounded-lg"></div>
})

export const ExperimentalPortfolio = dynamic(() => import("./portfolio"), { 
  ssr: false,
  loading: () => <div className="min-h-[600px] w-full animate-pulse bg-neutral-900/20 rounded-lg"></div>
})

export const Skills = dynamic(() => import("@/components/skills"), { 
  ssr: false,
  loading: () => <div className="min-h-[500px] w-full animate-pulse bg-neutral-900/20 rounded-lg"></div>
})

export const ExperimentalTimeline = dynamic(() => import("@/components/experimental-timeline"), { 
  ssr: false,
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-neutral-900/20 rounded-lg"></div>
})

export const Testimonial = dynamic(() => import("@/components/testimonial"), { 
  ssr: false,
  loading: () => <div className="min-h-[300px] w-full animate-pulse bg-neutral-900/20 rounded-lg"></div>
}) 