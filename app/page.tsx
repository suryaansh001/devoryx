import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import Aurora from "@/components/Aurora"
import { FeaturesSection } from "@/components/features-section"
import { AITeamSection } from "@/components/ai-team-section"
import { TrainingSection } from "@/components/training-section"
import { TechStackShowcase } from "@/components/tech-stack-showcase"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

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
        <div className="fixed inset-0 w-full h-full">
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
          <Footer />
        </div>
      </main>
    </div>
  )
}
