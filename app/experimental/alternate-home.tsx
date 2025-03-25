"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function AlternateHome() {
  return (
    <div className="relative flex min-h-screen flex-col bg-zinc-950 text-white">
      {/* Navbar */}
      <header className="w-full border-b border-zinc-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="block h-6 w-6 rounded-full bg-white"></span>
              <span className="text-sm font-medium uppercase tracking-wider">Neil Humphrey</span>
            </div>
            
            <nav className="hidden space-x-6 text-sm font-medium md:flex">
              <a href="#" className="transition-colors hover:text-zinc-400">About</a>
              <a href="#" className="transition-colors hover:text-zinc-400">Skills</a>
              <a href="#" className="transition-colors hover:text-zinc-400">Work</a>
              <a href="#" className="transition-colors hover:text-zinc-400">Contact</a>
            </nav>
            
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="text-zinc-200 hover:bg-zinc-800 hover:text-white">
                <MoonIcon className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="ml-4 border-zinc-700 text-sm hover:bg-zinc-800 hover:border-zinc-600">
                Resume
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="section-lg flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative w-32 h-32 mb-8">
              <Image
                src="/neil-profile.jpg"
                alt="Neil Humphrey"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Design Engineer
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl" style={{ marginBottom: "var(--content-gap-lg)" }}>
              I bridge the gap between design and development, crafting beautiful,
              functional, and accessible digital experiences.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-neutral-800 hover:bg-neutral-900"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-neutral-900 mt-auto">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-400">Based In Omaha</span>
              <span className="text-neutral-600">🇺🇸</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm text-neutral-400">Available for Work</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 