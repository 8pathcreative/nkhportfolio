"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Menu } from "lucide-react";

export default function AlternateHome() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-medium tracking-wider">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
              Neil Humphrey
            </span>
          </Link>
          
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex gap-8">
              <li>
                <a href="#about" className="text-sm hover:text-neutral-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#work" className="text-sm hover:text-neutral-400 transition-colors">Work</a>
              </li>
              <li>
                <a href="#skills" className="text-sm hover:text-neutral-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-neutral-400 transition-colors">Contact</a>
              </li>
            </ul>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Moon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden rounded-full">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="relative w-32 h-32 mb-8">
          <Image
            src="public/neil-profile.jpg"
            alt="Neil Humphrey"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
          Design Engineer
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mb-12">
          I bridge the gap between design and development, crafting beautiful,
          functional, and accessible digital experiences.
        </p>
        <div className="flex gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
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
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-neutral-900">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-400">Based In Omaha</span>
            <span className="text-neutral-600">🇺🇸</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-sm text-neutral-400">Available for Work</span>
          </div>
        </div>
      </footer>
    </div>
  );
} 