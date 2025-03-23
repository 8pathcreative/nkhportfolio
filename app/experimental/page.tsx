import dynamic from 'next/dynamic'
import { Metadata } from "next"
import ExperimentalHeader from "@/components/experimental-header"
import { ExperimentalFeaturedProject, ExperimentalPortfolio } from "@/app/components/client-imports"
import AlternateFooter from "@/components/alternate-footer"

// Import critical above-the-fold components normally
import Hero from "@/components/hero"
import About from "@/components/about"

// Lazy-load below-the-fold components with loading placeholders
const Skills = dynamic(() => import("@/components/skills"), { 
  ssr: true,
  loading: () => <div className="min-h-[500px] w-full animate-pulse bg-neutral-900/20 rounded-lg"></div>
})
const Timeline = dynamic(() => import("@/components/timeline"), { 
  ssr: true,
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-neutral-900/20 rounded-lg"></div>
})
const Testimonial = dynamic(() => import("@/components/testimonial"), { 
  ssr: true,
  loading: () => <div className="min-h-[300px] w-full animate-pulse bg-neutral-900/20 rounded-lg"></div>
})
const Contact = dynamic(() => import("@/components/contact"), { 
  ssr: true,
  loading: () => <div className="min-h-[300px] w-full animate-pulse bg-neutral-900/20 rounded-lg"></div>
})

export const metadata: Metadata = {
  title: "Experimental Design | Neil Humphrey Portfolio",
  description: "Explore the experimental UI designs and interactive elements for healthcare applications. Testing ground for innovative medical interface concepts.",
  keywords: "UI experiments, healthcare design, interactive UI, experimental design, medical interfaces, UX innovation",
  alternates: {
    canonical: "/experimental",
  },
}

export default function ExperimentalPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <ExperimentalHeader />
      <Hero />
      <About />
      <ExperimentalFeaturedProject />
      <ExperimentalPortfolio />
      <Skills />
      <Timeline />
      <Testimonial />
      <Contact />
      <AlternateFooter />
    </main>
  )
} 