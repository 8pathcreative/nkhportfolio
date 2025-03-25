"use client"

import { useCallback, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"

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
    title: "Patient Portal Redesign",
    category: "UX Research & Design",
    description:
      "A complete redesign of a healthcare provider's patient portal to improve usability and accessibility.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2022",
  },
  {
    id: "3",
    title: "Medical Device Interface",
    category: "Healthcare UX",
    description:
      "A touchscreen interface for a new medical diagnostic device used in clinical environments.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2023",
  },
  {
    id: "4",
    title: "Healthcare Learning Platform",
    category: "UX/UI Design",
    description:
      "An interactive learning management system for medical professionals to complete continuing education requirements.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2022",
  },
  {
    id: "5",
    title: "Medical Data Visualization",
    category: "UX Engineering",
    description:
      "Complex medical data visualized through intuitive charts and graphs for improved clinical decision-making.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2022",
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

export default function Portfolio() {
  // Use memo to prevent unnecessary recalculations
  const memoizedProjects = useMemo(() => projects, []);

  // Separate component for each project card to isolate re-renders
  const ProjectCard = useCallback(({ project }: { project: typeof projects[0] }) => {
    return (
      <div className="group">
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
                  priority={parseInt(project.id) <= 2} // Only prioritize loading for the first two images
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              >
                <CardItem 
                  translateZ="100" 
                  className="text-white font-medium px-6 py-3 border border-white/30 rounded-full backdrop-blur-xs w-auto"
                >
                  View Case Study
                </CardItem>
              </CardItem>
            </CardBody>
          </CardContainer>

          <div className="space-y-3 mt-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium">{project.title}</h3>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
            <p className="text-sm text-muted-foreground">{project.category}</p>
            <p className="text-base">{project.description}</p>
          </div>
        </Link>
      </div>
    );
  }, []);

  return (
    <section id="portfolio" className="section-spacing px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium section-heading">Selected Work</h2>
        <p className="text-xl md:text-2xl text-muted-foreground section-subheading max-w-3xl">
          I craft digital healthcare solutions that enhance the experience for both patients and medical professionals
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {memoizedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            className="rounded-full border-border text-muted-foreground hover:text-foreground px-8 py-6 h-auto text-base"
          >
            Explore All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="divider w-full"></div>
      </div>
    </section>
  )
}

