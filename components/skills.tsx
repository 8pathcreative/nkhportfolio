"use client"

import { Code, Layout, Layers, ShoppingBag, Cpu, BarChart3 } from "lucide-react"
import { SkillCard } from "./skill-card"

const skills = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Healthcare UX Design",
    description:
      "Specialized in creating intuitive interfaces for complex medical systems, focusing on accessibility and user-centered design principles.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Medical Visualization",
    description:
      "Expert in translating complex medical data into clear, actionable visualizations that aid decision-making for healthcare professionals.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Prototyping",
    description:
      "Skilled in creating interactive prototypes that effectively communicate design concepts to medical stakeholders and facilitate user testing.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Frontend Development",
    description:
      "Experienced in implementing designs with clean, accessible code that meets healthcare industry standards and compliance requirements.",
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "User Research",
    description:
      "Conduct comprehensive user research with patients and healthcare providers to inform design decisions and improve user experiences.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Design Systems",
    description:
      "Create and maintain cohesive design systems that ensure consistency across complex healthcare applications and platforms.",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-8 tracking-tight">My Skills</h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl">
          I love to craft functional solutions for unique problems. These are some skills I've picked up over my career
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} title={skill.title} description={skill.description} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="divider w-full"></div>
      </div>
    </section>
  )
}

