'use client'

import dynamic from 'next/dynamic'

// Use dynamic import with SSR disabled for WebGL component
const Lightning = dynamic(() => import('@/components/Lightning'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-blue-500/40" />
})

// Interface for Lightning component props
interface LightningWrapperProps {
  hue?: number
  xOffset?: number
  speed?: number
  intensity?: number
  size?: number
}

export default function LightningWrapper({
  hue = 200,
  xOffset = 0,
  speed = 1,
  intensity = 1,
  size = 1,
}: LightningWrapperProps) {
  return (
    <Lightning
      hue={hue}
      xOffset={xOffset}
      speed={speed}
      intensity={intensity}
      size={size}
    />
  )
}
