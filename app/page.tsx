import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import FeaturedProject from "@/components/featured-project"
import Portfolio from "@/components/portfolio"
import Skills from "@/components/skills"
import Timeline from "@/components/timeline"
import Testimonial from "@/components/testimonial"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

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

