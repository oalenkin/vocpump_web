import { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
}

export function generateSEO({
  title,
  description,
  path = '',
  image = '/og-image.png'
}: SEOProps): Metadata {
  const url = `${SITE_CONFIG.url}${path}`

  return {
    title,
    description,
    metadataBase: new URL(SITE_CONFIG.url),
    openGraph: {
      title,
      description,
      url,
      images: [image],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}

// Schema.org structured data
export function generateSchemaOrg() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": SITE_CONFIG.name,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Telegram",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": SITE_CONFIG.description,
    "featureList": [
      "Spaced repetition algorithm",
      "Custom deck creation",
      "Popular language support",
      "Progress tracking"
    ]
  }
}
