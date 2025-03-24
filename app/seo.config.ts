import type { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  titleTemplate: '%s | Neil Humphrey - UX Design Engineer',
  defaultTitle: 'Neil Humphrey | Healthcare UX Design Engineer Portfolio',
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
        url: 'https://cdn.prod.website-files.com/6593837a237f27f93f257a5e/660f296d2b0fd9bfed7858f6_tablet-view-3d-pelvic-floor-p-1600.webp',
        width: 1200,
        height: 630,
        alt: 'Neil Humphrey - Healthcare UX Design Engineer',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    handle: '@neilhumphrey',
    site: '@neilhumphrey',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.webmanifest',
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
    {
      name: 'author',
      content: 'Neil Humphrey',
    },
    {
      name: 'keywords',
      content: 'UX design, healthcare design, medical UX, clinical workflows, patient experience, healthcare UI',
    },
  ],
  canonical: 'https://nkhportfolio.vercel.app',
};

export default config; 