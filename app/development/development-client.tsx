"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Smartphone, Zap, LayoutDashboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import SpotlightCard from "@/components/SpotlightCard"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export default function DevelopmentPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const developmentServices = [
    {
      icon: Code,
      title: "Website Development",
      description: "We build websites that work under load, age well, and don't become liabilities. No page-builder junk. No fragile animations masking bad structure. Clean code, fast performance, and a setup you won't need to rebuild in a year.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Apps built for real users and real edge cases, not pitch decks. We design for stability, versioning, and growth from day one — so you're not firefighting when adoption starts.",
    },
    {
      icon: Zap,
      title: "Custom Web Systems",
      description: "Tailored web applications designed for your specific business needs.",
    },
    {
      icon: LayoutDashboard,
      title: "Internal Dashboards & Tools",
      description: "Purpose-built tools for data visualization, reporting, and operations.",
    },
  ]

  const developmentPrinciples = [
    "Clear requirements and scope",
    "Clean architecture and codebase",
    "Scalable foundations for growth",
    "Practical feature sets focused on value",
  ]

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Development Services
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Digital systems built for reliability and long-term use.
          </p>
        </div>
      </section>

      {/* About Development Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Our Development</h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              We build websites, mobile applications, and custom web systems with a focus on performance,
              maintainability, and usability. Every project is scoped clearly before execution.
            </p>
          </div>

          {/* What Breaks Products */}
          <div className="mt-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">We've seen what breaks products</h3>
                <p className="text-lg text-white/70 leading-relaxed mb-4">
                  Rushed builds. Unclear scope. Shortcuts.
                </p>
                <p className="text-lg text-white/70 leading-relaxed">
                  We avoid all three.
                </p>
              </div>
              <SpotlightCard>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white text-base leading-relaxed"><span className="font-semibold">Built to survive traffic, updates, and time.</span></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white text-base leading-relaxed"><span className="font-semibold">Built for users, not demos.</span></p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section ref={sectionRef} className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Development Services</h2>

          
          <div
            className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {developmentServices.map((service, index) => (
              <SpotlightCard key={index}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/20 flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70 text-sm">{service.description}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Development Principles */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Principles</h2>
          <div className="max-w-3xl mx-auto">
            <SpotlightCard>
              <div className="space-y-4">
                {developmentPrinciples.map((principle, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80 text-lg leading-relaxed">{principle}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build?</h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a development plan tailored to your needs.
            </p>
            <a href="/contact" className="inline-block bg-white text-black rounded-full px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors">
              Discuss a Development Project
            </a>
          </div>
        </div>
      </section>
        <Footer />
        </div>
      </main>
    </div>
  )
}
