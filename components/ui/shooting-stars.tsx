"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export const ShootingStarField = ({
  className,
  quantity = 20,
  size = { min: 1, max: 2 },
  speed = { min: 50, max: 150 },
}: {
  className?: string
  quantity?: number
  size?: { min: number; max: number }
  speed?: { min: number; max: number }
}) => {
  // Use state to avoid hydration mismatch
  const [stars, setStars] = useState<React.ReactNode[]>([])
  
  useEffect(() => {
    // Generate stars only on client side to avoid hydration issues
    const generatedStars = Array.from({ length: quantity }).map((_, index) => {
      const sizePx = Math.floor(Math.random() * (size.max - size.min + 1)) + size.min
      const speedMs = Math.floor(Math.random() * (speed.max - speed.min + 1)) + speed.min
      const delay = Math.floor(Math.random() * 10) * 1.5
      const top = Math.floor(Math.random() * 100)
      const left = Math.floor(Math.random() * 100)
      const angle = Math.random() * 45 + 45 // Angle between 45 and 90 degrees
      
      return (
        <div
          key={`shooting-star-${index}`}
          className="absolute rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.8)]"
          style={{
            width: `${sizePx}px`,
            height: `${sizePx}px`,
            top: `${top}%`,
            left: `${left}%`,
            opacity: 0,
            transform: 'translateX(0) translateY(0)',
            animation: `${speedMs / 100}s linear ${delay}s infinite alternate`,
            animationName: 'custom-shooting-star',
          } as React.CSSProperties}
        />
      )
    })
    
    // Create a style element for custom keyframes animations
    const styleElement = document.createElement('style')
    styleElement.textContent = `
      @keyframes custom-shooting-star {
        0% {
          transform: translateX(0) translateY(0);
          opacity: 1;
        }
        70% {
          opacity: 1;
        }
        100% {
          transform: translateX(-200px) translateY(-100px);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(styleElement)
    
    setStars(generatedStars)
    
    return () => {
      document.head.removeChild(styleElement)
    }
  }, [quantity, size.max, size.min, speed.max, speed.min])

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {stars}
    </div>
  )
}

export const StarsField = ({
  className,
  quantity = 50,
}: {
  className?: string
  quantity?: number
}) => {
  // Use state to avoid hydration mismatch
  const [stars, setStars] = useState<React.ReactNode[]>([])
  
  useEffect(() => {
    // Generate stars only on client side to avoid hydration issues
    const generatedStars = Array.from({ length: quantity }).map((_, index) => {
      const starSize = Math.floor(Math.random() * 2) + 1
      const animationDuration = Math.floor(Math.random() * 10) + 5
      const top = Math.floor(Math.random() * 100)
      const left = Math.floor(Math.random() * 100)
      const animationDelay = Math.floor(Math.random() * 10)
      
      return (
        <div
          key={`star-${index}`}
          className="absolute rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.5)]"
          style={{
            width: `${starSize}px`,
            height: `${starSize}px`,
            top: `${top}%`,
            left: `${left}%`,
            animation: `twinkling ${animationDuration}s linear infinite`,
            animationDelay: `${animationDelay}s`,
          }}
        />
      )
    })
    
    setStars(generatedStars)
  }, [quantity])

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {stars}
    </div>
  )
} 