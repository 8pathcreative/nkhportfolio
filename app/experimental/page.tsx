"use client"

import dynamic from 'next/dynamic'
import ExperimentalHeader from "@/components/experimental-header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Timeline from "@/components/timeline"
import Testimonial from "@/components/testimonial"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

// Dynamically import components that use client features to avoid hydration issues
const ExperimentalFeaturedProject = dynamic(() => import("./featured-project"), { ssr: false })
const ExperimentalPortfolio = dynamic(() => import("./portfolio"), { ssr: false })

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
      <Footer />
    </main>
  )
} 