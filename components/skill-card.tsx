"use client"

import type React from "react"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"

interface SkillCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <CardContainer className="w-full" containerClassName="py-2">
      <CardBody className="h-auto w-full">
        <BackgroundGradient className="rounded-[22px] p-6 bg-background/80 backdrop-blur-xs h-full">
          <CardItem translateZ={20}>
            <div className="mb-4 text-muted-foreground">{icon}</div>
          </CardItem>
          <CardItem translateZ={30}>
            <h3 className="text-lg font-medium mb-2">{title}</h3>
          </CardItem>
          <CardItem translateZ={10}>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardItem>
        </BackgroundGradient>
      </CardBody>
    </CardContainer>
  )
}

