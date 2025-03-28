"use client"

import dynamic from 'next/dynamic'
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Timeline from "@/components/timeline"
import Testimonial from "@/components/testimonial"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

// Dynamically import components that use client features to avoid hydration issues
const FeaturedProject = dynamic(() => import("@/components/featured-project"), { ssr: false })
const Portfolio = dynamic(() => import("@/components/portfolio"), { ssr: false })

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

