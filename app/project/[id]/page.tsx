import { ArrowLeft } from "lucide-react"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/header"

// Lazy load non-critical components
const Footer = dynamic(() => import("@/components/footer"), {
  ssr: true,
  loading: () => <div className="min-h-[100px] w-full animate-pulse bg-neutral-900/20 rounded-lg"></div>
})

// Import only the icons used immediately
const ProjectDetails = dynamic(() => import("@/components/project-details"), {
  ssr: true,
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-neutral-900/20 rounded-lg"></div>
})

// This would typically come from a database or CMS
const projects = [
  {
    id: "1",
    title: "Medical Dashboard",
    category: "UX/UI Design",
    description:
      "A comprehensive dashboard for healthcare professionals to monitor patient data and clinical metrics in real-time.",
    fullDescription:
      "This medical dashboard was designed to help healthcare professionals monitor patient data and clinical metrics in real-time. The project involved extensive research with medical staff to understand their workflow and information needs.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2023",
    client: "Major Healthcare Provider",
    role: "Lead UX Designer & Developer",
    duration: "4 months",
    technologies: ["React", "TypeScript", "D3.js", "Figma"],
    teamSize: "4 people",
    tools: ["Figma", "React", "TypeScript", "D3.js"],
    challenge:
      "Healthcare professionals needed a way to quickly access and interpret patient data across multiple departments. The existing system was fragmented and required logging into multiple platforms.",
    solution:
      "I designed a unified dashboard that brings together critical patient information, lab results, and clinical metrics in a single interface. The design prioritizes quick scanning of information with clear visual hierarchies and color-coding for critical values.",
    outcome:
      "The new dashboard reduced the time spent accessing patient information by 35% and improved clinical decision-making according to post-implementation surveys.",
    process: [
      {
        title: "Research & Discovery",
        description:
          "Conducted interviews with 15 healthcare professionals across different roles to understand their workflow and pain points.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "User Flows & Wireframes",
        description:
          "Created detailed user flows and low-fidelity wireframes to establish the information architecture and core functionality.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Visual Design",
        description:
          "Developed a visual design system that emphasizes clarity and accessibility, with careful consideration of color for indicating clinical values.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Prototyping & Testing",
        description:
          "Built interactive prototypes and conducted usability testing with end users to refine the interface before development.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Development",
        description:
          "Implemented the design using React and TypeScript, with D3.js for data visualizations and charts.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  },
  {
    id: "2",
    title: "Patient Portal Redesign",
    category: "UX/UI Design",
    description:
      "A complete redesign of a healthcare provider's patient portal to improve usability and accessibility.",
    fullDescription:
      "This patient portal redesign focused on improving the user experience for patients accessing their healthcare information and communicating with providers. The existing portal had poor usability metrics and was failing to meet accessibility standards.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2022",
    client: "Regional Medical Center",
    role: "UX Designer & Accessibility Specialist",
    duration: "6 months",
    technologies: ["React", "WCAG 2.1", "Figma", "Jest"],
    teamSize: "3 people",
    tools: ["Figma", "React", "WCAG 2.1", "Jest"],
    challenge:
      "The existing patient portal had low adoption rates due to confusing navigation, poor mobile experience, and accessibility barriers for users with disabilities.",
    solution:
      "I designed a simplified information architecture, consistent UI patterns, and fully accessible components that work across all devices and assistive technologies.",
    outcome:
      "Portal usage increased by 47% within 3 months of launch, and the solution achieved WCAG 2.1 AA compliance certification.",
    process: [
      {
        title: "Accessibility Audit",
        description:
          "Conducted a comprehensive audit of the existing portal against WCAG 2.1 standards to identify barriers.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "User Research",
        description:
          "Interviewed patients including those with disabilities to understand their needs and pain points with the existing portal.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Information Architecture",
        description:
          "Reorganized content and navigation based on user needs and common tasks.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Accessible Design System",
        description:
          "Developed a design system with components that meet or exceed WCAG 2.1 AA standards.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Usability Testing",
        description:
          "Conducted testing with screen readers and other assistive technologies to validate accessibility.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  },
  {
    id: "3",
    title: "Medical Device Interface",
    category: "Healthcare UX",
    description:
      "A touchscreen interface for a new medical diagnostic device used in clinical environments.",
    fullDescription:
      "This project involved designing the touchscreen interface for a new diagnostic device used by clinicians in time-sensitive situations. The interface needed to be extremely intuitive, error-resistant, and usable while wearing PPE.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2023",
    client: "Medical Device Manufacturer",
    role: "Lead UX Designer",
    duration: "9 months",
    technologies: ["Qt", "Embedded Systems", "Figma", "Usability Testing"],
    teamSize: "6 people",
    tools: ["Qt", "Figma", "Usability Testing", "Embedded Systems"],
    challenge:
      "Clinicians needed to operate the device quickly and accurately while wearing gloves in high-stress environments with limited training time.",
    solution:
      "I created a simplified workflow with large touch targets, high-contrast visuals, and contextual help to guide users through complex procedures.",
    outcome:
      "The device received FDA approval with exceptional usability scores and 98% first-time user success rates in validation testing.",
    process: [
      {
        title: "Contextual Inquiry",
        description:
          "Observed clinicians in their work environment to understand workflow constraints and environmental factors.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Workflow Design",
        description:
          "Mapped out the ideal task flow to minimize cognitive load during critical procedures.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Prototyping",
        description:
          "Created interactive prototypes for testing on hardware similar to the final device.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Usability Testing",
        description:
          "Conducted simulated use scenarios with clinicians wearing PPE to validate usability.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Design Documentation",
        description:
          "Prepared detailed specifications for the engineering team for implementation.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  }
]

// Required for static export
export function generateStaticParams() {
  return projects.map(project => ({
    id: project.id
  }))
}

// Dynamic metadata
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;
  const project = projects.find(p => p.id === id)
  
  if (!project) {
    return {
      title: "Project Not Found"
    }
  }
  
  return {
    title: `${project.title} | Neil Humphrey Portfolio`,
    description: `Case study for ${project.title} - a healthcare UX project by Neil Humphrey.`
  }
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = projects.find(p => p.id === id)
  
  if (!project) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <Link
              href="/#portfolio"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all projects
            </Link>

            <ProjectDetails project={project} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

