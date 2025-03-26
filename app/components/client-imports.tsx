'use client'

import dynamic from 'next/dynamic'

// Only include the bare minimum needed for initial render
// and defer everything else
export const StructuredData = dynamic(() => import("@/components/structured-data"), { 
  ssr: false,
  loading: () => null
})

export const LayoutScripts = dynamic(() => 
  // Use a more aggressive code splitting to reduce bundle size
  import("@/components/layout-scripts").then(mod => ({
    default: mod.default
  })), 
  { 
    ssr: false,
    loading: () => null
  }
)

// Only export the minimal API surface needed
export default {
  StructuredData,
  LayoutScripts
} 