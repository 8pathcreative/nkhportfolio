"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { BorderMagicLink } from "@/components/ui/border-magic-button"

const projects = [
  {
    id: "1",
    title: "Medical Dashboard",
    category: "UX/UI Design",
    description:
      "A comprehensive dashboard for healthcare professionals to monitor patient data and clinical metrics in real-time.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2023",
  },
  {
    id: "2",
    title: "Patient Portal",
    category: "UX Research & Design",
    description:
      "An accessible patient portal that simplifies appointment scheduling, medical record access, and provider communication.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2023",
  },
  {
    id: "3",
    title: "Healthcare Learning Platform",
    category: "UX/UI Design",
    description:
      "An interactive learning management system for medical professionals to complete continuing education requirements.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2022",
  },
  {
    id: "4",
    title: "Medical Data Visualization",
    category: "UX Engineering",
    description:
      "Complex medical data visualized through intuitive charts and graphs for improved clinical decision-making.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2022",
  },
  {
    id: "5",
    title: "Telemedicine Application",
    category: "UX/UI Design",
    description:
      "A secure video consultation platform connecting patients with healthcare providers for remote medical care.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2021",
  },
  {
    id: "6",
    title: "Healthcare Provider Platform",
    category: "UX Engineering",
    description:
      "A comprehensive platform for healthcare providers to manage patient care, scheduling, and clinical documentation.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2021",
  },
]

export default function ExperimentalPortfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="portfolio" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium mb-4">Selected Work</h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl">
          I craft digital healthcare solutions that enhance the experience for both patients and medical professionals
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="block">
                <Link href={`/project/${project.id}`} className="block">
                  <CardContainer className="w-full" containerClassName="py-4">
                    <CardBody className="w-full h-auto relative aspect-4/3 rounded-lg overflow-hidden border border-border">
                      <CardItem translateZ="100" className="w-full h-full">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={1200}
                          height={800}
                          className="w-full h-full object-cover"
                        />
                      </CardItem>
                      <CardItem
                        translateZ="50"
                        className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-500 ${
                          hoveredId === project.id ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <CardItem translateZ="100">
                          <div className="text-xs text-white border-magic-button-inner">
                            View Case Study
                          </div>
                        </CardItem>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </Link>

                <div className="space-y-3 mt-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                  <p className="text-base">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <BorderMagicLink href="/projects" className="text-muted-foreground font-medium border-magic-link">
            Explore All Projects
          </BorderMagicLink>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="divider w-full"></div>
      </div>
    </section>
  )
} 