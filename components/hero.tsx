"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-16 pb-8 px-4 relative">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-green-500 font-medium">Available for Work</span>
          </div>
        </div>

        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <span className="block">
            Designing with <span className="gradient-text">Purpose</span>,
          </span>
          <span className="block">
            Building for <span className="text-neutral-400">Healthcare</span>.
          </span>
        </h1>
        <p
          className={`text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          UX Design Engineer based in Omaha, Nebraska with 9+ years of experience working with medical centers and
          multinational corporations.
        </p>
      </div>

      <div className="absolute bottom-12 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="divider w-full"></div>
      </div>
    </section>
  )
}

