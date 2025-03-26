import type React from "react"
import type { Metadata } from "next/types"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { StructuredData, LayoutScripts } from "@/app/components/client-imports"

export const metadata: Metadata = {
  title: "Neil Humphrey | UX Design Engineer",
  description:
    "Personal portfolio of Neil Humphrey, a UX design engineer based in Omaha, Nebraska specializing in medical and healthcare solutions.",
  generator: 'v0.dev',
  metadataBase: new URL('https://nkhportfolio.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nkhportfolio.vercel.app',
    title: 'Neil Humphrey | UX Design Engineer',
    description: 'Personal portfolio of Neil Humphrey, a UX design engineer based in Omaha, Nebraska specializing in medical and healthcare solutions.',
    siteName: 'Neil Humphrey Portfolio',
    images: [
      {
        url: '/static/pelvic-model.webp',
        width: 1200,
        height: 630,
        alt: 'Neil Humphrey - Healthcare UX Design Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neil Humphrey | UX Design Engineer',
    description: 'Personal portfolio of Neil Humphrey, a UX design engineer based in Omaha, Nebraska specializing in medical and healthcare solutions.',
    images: ['/static/pelvic-model.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://rsms.me/" crossOrigin="anonymous" />
        <link rel="preload" href="https://rsms.me/inter/inter.css" as="style" />
        <link 
          rel="stylesheet" 
          href="https://rsms.me/inter/inter.css" 
          media="print" 
          onLoad={(e) => {
            const target = e.currentTarget;
            target.media = 'all';
            target.onload = null;
          }}
        />
        <noscript>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </noscript>
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 100 900;
              font-display: swap;
              src: url('https://rsms.me/inter/font-files/Inter-roman.var.woff2') format('woff2');
              font-named-instance: 'Regular';
            }
          `
        }} />
        <StructuredData type="WebSite" />
        <StructuredData type="Person" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
        <LayoutScripts />
      </body>
    </html>
  )
}