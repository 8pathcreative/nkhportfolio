"use client"

import { useMemo } from "react"

interface StructuredDataProps {
  type: "Person" | "WebSite" | "Organization"
}

export default function StructuredData({ type }: StructuredDataProps) {
  const structuredData = useMemo(() => {
    if (type === "Person") {
      return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Neil Humphrey",
        url: "https://nkhportfolio.vercel.app",
        jobTitle: "UX Design Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Healthcare Industry"
        },
        description: "UX Design Engineer with 9+ years of experience working with medical centers and healthcare providers.",
        image: "/static/neil-profile.webp",
        sameAs: [
          "https://linkedin.com",
          "https://github.com"
        ],
        knowsAbout: [
          "UX Design",
          "Healthcare UX",
          "Medical Interface Design",
          "UI Development",
          "Patient Experience",
          "Clinical Workflows"
        ]
      }
    }

    if (type === "WebSite") {
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Neil Humphrey | UX Design Engineer",
        url: "https://nkhportfolio.vercel.app",
        description: "Personal portfolio of Neil Humphrey, a UX design engineer specializing in medical and healthcare solutions.",
        author: {
          "@type": "Person",
          name: "Neil Humphrey"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://nkhportfolio.vercel.app/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    }

    if (type === "Organization") {
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Neil Humphrey Design",
        url: "https://nkhportfolio.vercel.app",
        logo: "https://nkhportfolio.vercel.app/logo.png",
        description: "Healthcare UX design and development services specializing in medical interfaces and patient experience.",
        founder: {
          "@type": "Person",
          name: "Neil Humphrey"
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "contact@neilhumphrey.com",
          contactType: "customer service"
        }
      }
    }

    return {}
  }, [type])

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 