import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FeaturedProject() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2 space-y-6">
            <span className="text-sm uppercase tracking-wider text-muted-foreground">Featured Project</span>
            <h2 className="text-3xl md:text-4xl font-medium">Healthcare Provider Dashboard</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive dashboard redesign for a major healthcare provider, improving clinical workflow efficiency
              by 35% and reducing training time for new staff.
            </p>
            <div className="pt-4">
              <Link
                href="#featured-project"
                className="inline-flex items-center text-foreground hover:text-primary transition-colors group"
              >
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative overflow-hidden rounded-lg aspect-video">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Healthcare Provider Dashboard"
                width={1200}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="divider w-full"></div>
      </div>
    </section>
  )
}

