import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Experimental Design | Neil Humphrey Portfolio",
  description: "Explore experimental UI designs and interactive elements for healthcare applications.",
  keywords: "UI experiments, healthcare design, interactive UI, experimental design, medical interfaces, UX innovation",
  alternates: {
    canonical: "/experimental",
  },
}

export default function ExperimentalPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-8 flex items-center gap-3 text-amber-800">
          <AlertCircle className="h-5 w-5" />
          <p className="text-sm">
            These experimental designs are only available in development mode and won't impact production performance.
          </p>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">Experimental Designs</h1>
        <div className="grid gap-6">
          <div className="bg-card p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Alternate Home Design</h2>
            <p className="text-muted-foreground mb-4">
              A modern, minimalist design with animated wavy background and clean typography.
            </p>
            <Link href="/experimental/alternate-home">
              <Button>View Design</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 