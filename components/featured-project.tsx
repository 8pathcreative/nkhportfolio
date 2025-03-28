"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"

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
            <CardContainer className="w-full" containerClassName="py-0">
              <CardBody className="w-full h-auto relative aspect-video rounded-lg overflow-hidden">
                <CardItem translateZ="60" className="w-full h-full">
                  <Image
                    src="https://cdn.prod.website-files.com/6593837a237f27f93f257a5e/660f296d2b0fd9bfed7858f6_tablet-view-3d-pelvic-floor-p-1600.webp"
                    alt="Healthcare Provider Dashboard - 3D Pelvic Floor View"
                    width={1600}
                    height={1068}
                    className="w-full h-full object-cover"
                  />
                </CardItem>
                <CardItem
                  translateZ="80"
                  className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm"
                >
                  UX/UI Design • 2023
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="divider w-full"></div>
      </div>
    </section>
  )
}

