import dynamic from "next/dynamic"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import { AboveFoldCTA } from "@/components/above-fold-cta"
import { FAQSection } from "@/components/faq-section"
import Aurora from "@/components/Aurora"

// Dynamic imports for non-critical sections (lazy load, no SSR for heavy components)
const ProblemSolutionSection = dynamic(
  () => import("@/components/problem-solution-section").then(mod => ({ default: mod.ProblemSolutionSection })),
  { ssr: false, loading: () => <div className="h-96" /> }
)

const FeaturesSection = dynamic(
  () => import("@/components/features-section").then(mod => ({ default: mod.FeaturesSection })),
  { ssr: false, loading: () => <div className="h-96" /> }
)

const AITeamSection = dynamic(
  () => import("@/components/ai-team-section").then(mod => ({ default: mod.AITeamSection })),
  { ssr: false, loading: () => <div className="h-96" /> }
)

const TrainingSection = dynamic(
  () => import("@/components/training-section").then(mod => ({ default: mod.TrainingSection })),
  { ssr: false, loading: () => <div className="h-96" /> }
)

const TechStackShowcase = dynamic(
  () => import("@/components/tech-stack-showcase").then(mod => ({ default: mod.TechStackShowcase })),
  { ssr: false, loading: () => <div className="h-40" /> }
)

const CTASection = dynamic(
  () => import("@/components/cta-section").then(mod => ({ default: mod.CTASection })),
  { ssr: false, loading: () => <div className="h-80" /> }
)

const Footer = dynamic(
  () => import("@/components/footer").then(mod => ({ default: mod.Footer })),
  { ssr: false, loading: () => <div className="h-40" /> }
)

// JSON-LD for home page specific data
const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://erebor.world/#webpage",
  url: "https://erebor.world",
  name: "Erebor - Affordable Web Development, AI Solutions & Training",
  description: "Erebor provides affordable web development, mobile app development, AI & ML solutions, business automation, corporate training, and billing software for startups and enterprises.",
  isPartOf: {
    "@id": "https://erebor.world/#website"
  },
  about: {
    "@id": "https://erebor.world/#organization"
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://erebor.world"
      }
    ]
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full pointer-events-none">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          
          <FeaturesSection />
          <AITeamSection />
          <TrainingSection />
          <TechStackShowcase />
          <CTASection />
          <FAQSection />
          <Footer />
        </div>
        {/* Space for fixed CTA bar */}
        <div className="h-20" />
      </main>
      {/* Above-fold CTA Bar */}
      <AboveFoldCTA />
    </div>
  )
}
