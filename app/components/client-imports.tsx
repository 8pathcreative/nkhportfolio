'use client'

import dynamic from 'next/dynamic'

// Only keep essential client-side components that need dynamic imports
export const StructuredData = dynamic(() => import("@/components/structured-data"), { 
  ssr: false,
  loading: () => null
})

export const LayoutScripts = dynamic(() => import("@/components/layout-scripts"), { 
  ssr: false,
  loading: () => null
})

// Remove other unnecessary dynamic imports - these are now handled directly in page.tsx 