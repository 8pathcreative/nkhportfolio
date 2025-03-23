"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function ExperimentalHero() {
  // Use null as initial state to detect if we've hydrated yet
  const [isVisible, setIsVisible] = useState<boolean | null>(true) // Start with visible to improve LCP

  useEffect(() => {
    // Only run this effect on the client
    setIsVisible(true)
  }, [])

  // Simplified opacity class without translate to improve paint performance
  const opacityClass = isVisible === false ? "opacity-0" : "opacity-100"

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section 
      className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-white dark:bg-black"
      style={{ height: 'calc(100vh)' }}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
      <div className="text-center max-w-5xl mx-auto space-y-8 z-10 px-4 mt-[var(--header-height)]">
        <div
          className={`transition-opacity duration-500 delay-300 ${opacityClass}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm bg-black/10 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-green-500 font-medium">Available for Work</span>
          </div>
        </div>

        <h1
          className={`text-3 sm:text-375 md:text-45 lg:text-5 font-medium tracking-tight leading-[1.1] transition-opacity duration-500 ${opacityClass}`}
        >
          <span className="block">
            Design by{" "}
            <span className="inline-flex items-center">
              <svg className="sun h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 inline-block text-yellow-500 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2" strokeLinecap="round"></line>
                <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2" strokeLinecap="round"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2" strokeLinecap="round"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2" strokeLinecap="round"></line>
                <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2" strokeLinecap="round"></line>
                <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2" strokeLinecap="round"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2" strokeLinecap="round"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2" strokeLinecap="round"></line>
              </svg>
              Day
            </span>,
          </span>
          <span className="block">
            Code by{" "}
            <span className="inline-flex items-center">
              <svg className="moon h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 inline-block text-blue-800 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              Night
            </span>.
          </span>
        </h1>
        
        {/* Prerender the LCP element without transitions initially */}
        <p
          className="text-1125 md:text-125 text-muted-foreground mt-6 max-w-2xl mx-auto font-display text-pretty"
        >
          UX Design Engineer based in Omaha, Nebraska with 9+ years of experience working with medical centers and
          multinational corporations.
        </p>
      </div>

      <button 
        onClick={scrollToAbout} 
        className="absolute bottom-8 animate-bounce z-10 p-3 rounded-full hover:bg-background/20 transition-colors cursor-pointer"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="h-9 w-9 text-muted-foreground" />
      </button>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="divider w-full"></div>
      </div>
    </section>
  )
} 