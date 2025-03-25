'use client'

import React, { useEffect, useState, useRef } from 'react'

interface LightningBackgroundProps {
  className?: string
  color?: string
  frequency?: number
  intensity?: number
  burstProbability?: number
  children?: React.ReactNode
}

export default function LightningBackground({
  className = '',
  color = '#ffffff',
  frequency = 4000,
  intensity = 0.3,
  burstProbability = 0.7,
  children,
}: LightningBackgroundProps) {
  const [isLightning, setIsLightning] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [lightningCount, setLightningCount] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const triggerLightning = () => {
      // Random delay between lightning strikes (more variation)
      const delay = Math.random() * frequency + 200
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        // Decide if we should have a lightning burst (multiple flashes in sequence)
        const isBurst = Math.random() > (1 - burstProbability)
        
        if (isBurst) {
          // First flash - brighter
          const lightningOpacity = Math.random() * intensity + 0.2
          setOpacity(lightningOpacity)
          setIsLightning(true)
          setLightningCount(c => c + 1)
          
          // First flash duration - very quick
          setTimeout(() => {
            setIsLightning(false)
            
            // Second flash after a short delay - even brighter
            setTimeout(() => {
              const lightningOpacity2 = Math.random() * intensity + 0.4
              setOpacity(lightningOpacity2)
              setIsLightning(true)
              setLightningCount(c => c + 1)
              
              // Second flash duration
              setTimeout(() => {
                setIsLightning(false)
                
                // Third flash after a short delay - dimmer
                setTimeout(() => {
                  const lightningOpacity3 = Math.random() * (intensity/2) + 0.1
                  setOpacity(lightningOpacity3)
                  setIsLightning(true)
                  setLightningCount(c => c + 1)
                  
                  // Third flash duration
                  setTimeout(() => {
                    setIsLightning(false)
                    
                    // Sometimes add a fourth dim flash
                    if (Math.random() > 0.5) {
                      setTimeout(() => {
                        const lightningOpacity4 = Math.random() * (intensity/3) + 0.05
                        setOpacity(lightningOpacity4)
                        setIsLightning(true)
                        setLightningCount(c => c + 1)
                        
                        setTimeout(() => {
                          setIsLightning(false)
                          triggerLightning()
                        }, 30 + Math.random() * 40)
                      }, 80 + Math.random() * 120)
                    } else {
                      // Schedule next lightning
                      triggerLightning()
                    }
                  }, 40 + Math.random() * 30)
                }, 40 + Math.random() * 70)
              }, 30 + Math.random() * 40)
            }, 40 + Math.random() * 60)
          }, 20 + Math.random() * 30)
          
        } else {
          // Single flash
          const lightningOpacity = Math.random() * intensity + 0.15
          setOpacity(lightningOpacity)
          setIsLightning(true)
          setLightningCount(c => c + 1)
          
          // Lightning flash duration
          setTimeout(() => {
            setIsLightning(false)
            // Schedule next lightning
            triggerLightning()
          }, 50 + Math.random() * 70)
        }
      }, delay)
    }

    triggerLightning()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [frequency, intensity, burstProbability])

  return (
    <div className={`relative ${className}`}>
      {/* Lightning overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-[20ms]"
        style={{
          opacity: isLightning ? opacity : 0,
          backgroundColor: color,
          boxShadow: isLightning ? `0 0 100px 20px ${color}50` : 'none',
        }}
        aria-hidden="true"
        data-lightning-count={lightningCount}
      />
      
      {/* Content */}
      {children}
    </div>
  )
} 