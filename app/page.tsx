import dynamic from 'next/dynamic'
import { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import FeaturedProject from "@/components/featured-project"

// Defer loading of these components until after LCP is complete
const DynamicPortfolio = dynamic(() => import("@/components/portfolio"), { 
  ssr: true,
  loading: () => <div className="min-h-[400px] w-full bg-neutral-900/20 rounded-lg"></div>
})

const DynamicSkills = dynamic(() => import("@/components/skills"), { 
  ssr: false, // Disable SSR for this heavy component
  loading: () => <div className="min-h-[500px] w-full bg-neutral-900/20 rounded-lg"></div>
})

const DynamicTimeline = dynamic(() => import("@/components/timeline"), { 
  ssr: false, // Disable SSR for this heavy component
  loading: () => <div className="min-h-[400px] w-full bg-neutral-900/20 rounded-lg"></div>
})

// Completely defer these below-the-fold components
const DynamicTestimonial = dynamic(() => import("@/components/testimonial"), { 
  ssr: false,
  loading: () => <div className="min-h-[300px] w-full bg-neutral-900/20 rounded-lg"></div>
})

const DynamicContact = dynamic(() => import("@/components/contact"), { 
  ssr: false,
  loading: () => <div className="min-h-[300px] w-full bg-neutral-900/20 rounded-lg"></div>
})

const DynamicFooter = dynamic(() => import("@/components/footer"), { 
  ssr: false,
  loading: () => <div className="min-h-[100px] w-full bg-neutral-900/20 rounded-lg"></div>
})

export const metadata: Metadata = {
  title: "Neil Humphrey | Healthcare UX Design Engineer Portfolio",
  description: "Specialized portfolio showcasing designs for medical centers and healthcare providers. View my work in creating intuitive, accessible interfaces for healthcare.",
  keywords: "UX design, healthcare design, medical UX, clinical workflows, patient experience, healthcare UI",
  alternates: {
    canonical: "/",
  },
}

// Force static generation
export const staticParams = {}
export const dynamicRendering = "force-static"
export const revalidate = 3600 // Revalidate at most every hour

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <FeaturedProject />
      
      {/* Reduce spacing between components */}
      <div className="mt-0">
        <DynamicPortfolio />
      </div>
      
      {/* Reduce spacing between lazy-loaded components */}
      <div className="mt-0" data-loading="lazy">
        <DynamicSkills />
      </div>
      
      <div className="mt-0" data-loading="lazy">
        <DynamicTimeline />
      </div>
      
      <div className="mt-0" data-loading="lazy">
        <DynamicTestimonial />
      </div>
      
      <div className="mt-0" data-loading="lazy">
        <DynamicContact />
      </div>
      
      <DynamicFooter />
    </main>
  )
}

