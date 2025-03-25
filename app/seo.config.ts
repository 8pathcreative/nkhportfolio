import type { Metadata } from 'next';

const config: Metadata = {
  metadataBase: new URL('https://nkhportfolio.vercel.app'),
  title: {
    template: '%s | Neil Humphrey - UX Design Engineer',
    default: 'Neil Humphrey | Healthcare UX Design Engineer Portfolio',
  },
  description: 'Personal portfolio of Neil Humphrey, a UX design engineer based in Omaha, Nebraska specializing in medical and healthcare solutions.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nkhportfolio.vercel.app',
    siteName: 'Neil Humphrey Portfolio',
    title: 'Neil Humphrey | UX Design Engineer',
    description: 'Personal portfolio of Neil Humphrey, a UX design engineer based in Omaha, Nebraska specializing in medical and healthcare solutions.',
    images: [
      {
        url: '/static/pelvic-model.webp',
        width: 1200,
        height: 630,
        alt: 'Neil Humphrey - Healthcare UX Design Engineer',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    creator: '@neilhumphrey',
    site: '@neilhumphrey',
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  themeColor: '#000000',
  keywords: ['UX design', 'healthcare design', 'medical UX', 'clinical workflows', 'patient experience', 'healthcare UI'],
  authors: [{ name: 'Neil Humphrey' }],
  viewport: 'width=device-width, initial-scale=1',
  alternates: {
    canonical: 'https://nkhportfolio.vercel.app',
  },
};

export default config; 