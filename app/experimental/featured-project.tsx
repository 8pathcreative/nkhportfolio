"use client"

import Image from "next/image"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { BorderMagicLink } from "@/components/ui/border-magic-button"

export default function ExperimentalFeaturedProject() {
  return (
    <section className="section-lg relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2 content-gap-sm flex flex-col">
            <span className="text-sm uppercase tracking-wider text-muted-foreground">Featured Project</span>
            <h2 className="text-3xl md:text-4xl font-medium">3D Pelvic Floor Visualization</h2>
            <p className="text-lg text-muted-foreground">
              An interactive 3D application for healthcare providers, enabling detailed visualization of pelvic floor anatomy
              for improved patient education and treatment planning.
            </p>
            <div style={{ paddingTop: "var(--content-gap-xs)" }}>
              <BorderMagicLink href="#featured-project" className="text-muted-foreground font-medium border-magic-link">
                View Case Study
              </BorderMagicLink>
            </div>
          </div>

          <div className="md:w-1/2">
            <CardContainer className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
              <CardBody className="group/card relative h-auto w-full rounded-xl p-6">
                <CardItem translateZ="100" className="w-full">
                  <Image 
                    src="/pelvic-model.jpg" 
                    height={600} 
                    width={1000} 
                    className="h-60 w-full rounded-xl object-cover object-center group-hover/card:shadow-xl" 
                    alt="3D Pelvic Floor Visualization"
                  />
                </CardItem>
                <CardItem translateZ="50" className="mt-4 w-full">
                  <h3 className="text-xl font-medium">Anatomical Accuracy</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Created in collaboration with medical specialists to ensure precise anatomical representation and clinical relevance
                  </p>
                </CardItem>
                <CardItem translateZ="60" className="mt-6 w-full">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs text-blue-800 dark:text-blue-300">WebGL</span>
                    <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs text-purple-800 dark:text-purple-300">Three.js</span>
                    <span className="rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-xs text-green-800 dark:text-green-300">React</span>
                    <span className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-xs text-amber-800 dark:text-amber-300">3D Modeling</span>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </section>
  )
} 