"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  // Use a ref instead of state for scroll functionality to avoid unnecessary re-renders
  const [isClientSide, setIsClientSide] = useState(false)

  useEffect(() => {
    setIsClientSide(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section 
      className="flex flex-col justify-center items-center bg-white dark:bg-black relative"
      style={{ 
        height: '100svh', // Use svh (small viewport height) for better mobile support
        maxHeight: '100vh',
        overflowY: 'hidden' 
      }}
    >
      {/* Grid Background - reducing opacity for faster paint */}
      <div
        className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e780_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e780_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#26262680_1px,transparent_1px),linear-gradient(to_bottom,#26262680_1px,transparent_1px)]"
        aria-hidden="true"
      />
      {/* Radial gradient with will-change:opacity optimization */}
      <div 
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"
        aria-hidden="true"
        style={{ willChange: 'opacity' }}
      ></div>
      
      <div className="text-center max-w-5xl mx-auto z-10 px-4 mt-0 flex flex-col items-center">
        {isClientSide ? (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-green-500 font-medium">Available for Work</span>
          </div>
        ) : (
          <div className="h-8 mb-6"></div> // Smaller placeholder to reduce space
        )}

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6">
          <span className="block">
            Design by <span className="day-gradient-text">Day</span>,
          </span>
          <span className="block">
            Code by <span className="night-gradient-text">Night</span>.
          </span>
        </h1>
        
        {/* Optimized LCP element - no animations or transitions on initial render */}
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          style={{
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: 400,
            maxWidth: '42rem',
            fontSize: 'clamp(1.125rem, 1vw + 0.9rem, 1.25rem)'
          }}
        >
          UX Design Engineer based in Omaha, Nebraska with 9+ years of experience working with medical centers and
          multinational corporations.
        </p>
      </div>

      <button 
        onClick={scrollToAbout} 
        className="absolute bottom-5 z-10 p-3 rounded-full hover:bg-background/20 transition-colors cursor-pointer animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="h-7 w-7 text-muted-foreground" />
      </button>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="divider w-full"></div>
      </div>
    </section>
  )
}

