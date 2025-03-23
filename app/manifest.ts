import type { MetadataRoute } from 'next'

// This ensures the route is statically generated
export const dynamic = 'force-static'
export const revalidate = false

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Neil Humphrey | UX Design Engineer',
    short_name: 'Neil Humphrey',
    description: 'Personal portfolio of Neil Humphrey, a UX design engineer based in Omaha, Nebraska specializing in medical and healthcare solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#030712',
    icons: [
      {
        src: '/placeholder-logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/placeholder-logo.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/placeholder-user.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/neil-profile.jpg',
        sizes: '180x180',
        type: 'image/jpeg',
        purpose: 'maskable',
      }
    ],
  }
} 