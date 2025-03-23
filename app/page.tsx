import dynamic from 'next/dynamic'
import { Metadata } from "next"
import Header from "@/components/header"
import { FeaturedProject, Portfolio } from "@/app/components/client-imports"

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
const Footer = dynamic(() => import("@/components/footer"), { 
  ssr: true,
  loading: () => <div className="min-h-[100px] w-full animate-pulse bg-neutral-900/20 rounded-lg"></div>
})

export const metadata: Metadata = {
  title: "Neil Humphrey | Healthcare UX Design Engineer Portfolio",
  description: "Specialized portfolio showcasing designs for medical centers and healthcare providers. View my work in creating intuitive, accessible interfaces for healthcare.",
  keywords: "UX design, healthcare design, medical UX, clinical workflows, patient experience, healthcare UI",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <FeaturedProject />
      <Portfolio />
      <Skills />
      <Timeline />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  )
}

