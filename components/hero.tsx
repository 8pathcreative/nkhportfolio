"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  // Use null as initial state to detect if we've hydrated yet
  const [isVisible, setIsVisible] = useState<boolean | null>(null)

  useEffect(() => {
    // Only run this effect on the client
    setIsVisible(true)
  }, [])

  // Determine opacity classes based on isVisible state
  // Use opacity-0 only if we've explicitly set isVisible to false
  // If null (initial state) or true, show the content
  const opacityClass = isVisible === false ? "opacity-0 translate-y-10" : "opacity-100"

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-16 pb-8 px-0 relative overflow-hidden bg-white dark:bg-black">
      {/* Grid Background */}
      <div
        className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
      <div className="text-center max-w-5xl mx-auto space-y-8 z-10 px-4">
        <div
          className={`transition-all duration-1000 delay-300 ${opacityClass}`}
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
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] transition-all duration-1000 ${opacityClass}`}
        >
          <span className="block">
            Design by <span className="day-gradient-text">Day</span>,
          </span>
          <span className="block">
            Code by <span className="night-gradient-text">Night</span>.
          </span>
        </h1>
        <p
          className={`text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${opacityClass}`}
        >
          UX Design Engineer based in Omaha, Nebraska with 9+ years of experience working with medical centers and
          multinational corporations.
        </p>
      </div>

      <div className="absolute bottom-12 animate-bounce z-10">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="divider w-full"></div>
      </div>
    </section>
  )
}

