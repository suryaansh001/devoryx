import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Dancing_Script, Caveat } from "next/font/google"
import { PageTransitionProvider } from "@/components/page-transition-provider"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Erebor - Web Development, AI Automation & Training Solutions | Affordable Digital Services",
    template: "%s | Erebor"
  },
  description:
    "Erebor offers affordable web development, mobile app development, AI & ML solutions, automation systems, corporate training, and billing software. Expert consultancy for startups and enterprises at competitive rates.",
  keywords: [
    "web development",
    "mobile app development", 
    "AI solutions",
    "ML solutions",
    "machine learning",
    "automation",
    "workflow automation",
    "corporate training",
    "product training",
    "billing software",
    "open source billing",
    "digital marketing",
    "SEO services",
    "custom software development",
    "affordable web development",
    "AI automation",
    "business automation",
    "enterprise solutions",
    "startup solutions",
    "consultancy services",
    "technology consulting",
    "digital transformation",
    "erebor.world"
  ],
  authors: [{ name: "Erebor", url: "https://erebor.world" }],
  creator: "Erebor",
  publisher: "Erebor",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://erebor.world",
    siteName: "Erebor",
    title: "Erebor - Web Development, AI Automation & Training Solutions",
    description: "Affordable web development, mobile apps, AI/ML solutions, automation, training, and billing software. Expert consultancy for businesses of all sizes.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Erebor - Digital Solutions & Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erebor - Web Development, AI Automation & Training Solutions",
    description: "Affordable web development, mobile apps, AI/ML solutions, automation, training, and billing software.",
    images: ["/images/og-image.png"],
    creator: "@erebor_world",
  },
  alternates: {
    canonical: "https://erebor.world",
  },
  category: "technology",
  classification: "Business/Technology Services",
  icons: {
    icon: "/images/logo.ico",
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://erebor.world"),
  other: {
    "google-site-verification": "your-google-verification-code",
  },
}

// JSON-LD Structured Data for Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://erebor.world/#organization",
      name: "Erebor",
      url: "https://erebor.world",
      logo: {
        "@type": "ImageObject",
        url: "https://erebor.world/images/cliste-logo.png",
      },
      description: "Erebor is a technology consultancy providing web development, mobile app development, AI & ML solutions, automation systems, corporate training, and billing software at affordable rates.",
      foundingDate: "2024",
      sameAs: [
        "https://linkedin.com/company/erebor-world",
        "https://twitter.com/erebor_world",
        "https://instagram.com/erebor.world"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@erebor.world",
        availableLanguage: ["English", "Hindi"]
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "20.5937",
          longitude: "78.9629"
        },
        geoRadius: "5000"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://erebor.world/#website",
      url: "https://erebor.world",
      name: "Erebor",
      publisher: {
        "@id": "https://erebor.world/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://erebor.world/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://erebor.world/#service",
      name: "Erebor Digital Solutions",
      image: "https://erebor.world/images/cliste-logo.png",
      url: "https://erebor.world",
      telephone: "+91-XXXXXXXXXX",
      email: "hello@erebor.world",
      priceRange: "$$",
      description: "Affordable technology consultancy offering web development, mobile app development, AI/ML solutions, automation, training, and billing software.",
      serviceType: [
        "Web Development",
        "Mobile App Development", 
        "AI & ML Solutions",
        "Business Automation",
        "Corporate Training",
        "Billing Software",
        "Digital Marketing",
        "SEO Services"
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Development",
              description: "Modern, responsive websites and web applications built with clean code"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service", 
              name: "Mobile App Development",
              description: "Native and cross-platform mobile applications for iOS and Android"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI & Automation Solutions",
              description: "Intelligent automation systems, ML models, and workflow optimization"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Training",
              description: "Product training, leadership development, and capability building programs"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Billing Software",
              description: "Open-source billing and invoicing software setup and customization"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://erebor.world/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Erebor provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Erebor provides web development, mobile app development, AI & ML solutions, business automation, corporate training, billing software setup, digital marketing, and SEO services at affordable rates."
          }
        },
        {
          "@type": "Question",
          name: "Is Erebor affordable for startups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Erebor offers competitive pricing designed for startups and growing businesses. We scope each project individually and provide transparent pricing with no hidden costs."
          }
        },
        {
          "@type": "Question",
          name: "What kind of AI and automation solutions does Erebor build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Erebor builds workflow automation, process automation, lead capture systems, document intelligence, conversational assistants, predictive analytics, and custom ML models tailored to business needs."
          }
        },
        {
          "@type": "Question",
          name: "Does Erebor provide training services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Erebor provides corporate training, product training, leadership development, onboarding programs, and capability building designed to improve team performance and reduce dependency."
          }
        }
      ]
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased ${dancingScript.variable} ${caveat.variable}`}>
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
