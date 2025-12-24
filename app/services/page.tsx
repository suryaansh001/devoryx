"use client"

import { useEffect, useRef, useState } from "react"
import { Megaphone, DollarSign, Search } from "lucide-react"
import SpotlightCard from "@/components/SpotlightCard"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
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

  const additionalServices = [
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "We handle execution, not guesswork. Our digital marketing service focuses on setting up and managing the technical backbone required for consistent online visibility and lead flow. This includes social media setup, ad account configuration, campaign execution, and performance tracking. We work closely with your team to align campaigns with business goals — not just likes or impressions. Ad spend is client-funded. We don't mark up media costs. You get full transparency on performance, spend, and results.",
    },
    {
      icon: Search,
      title: "SEO",
      description:
        "We provide practical SEO setup and optimization designed to build a strong long-term foundation. This is not keyword stuffing or overnight ranking promises. Our focus is on on-page optimization, technical SEO hygiene, site structure, performance improvements, and content alignment with search intent. We ensure your website is search-engine ready and scalable as your business grows. SEO is a process, not a switch. We set it up right so it compounds over time.",
    },
    {
      icon: DollarSign,
      title: "Billing Software (Open-Source)",
      description:
        "We help businesses deploy and customize open-source billing and invoicing software tailored to their operational needs. Our service includes setup, customization, workflow alignment, and team training. You retain full control over your data with no vendor lock-in or recurring license fees. Ideal for startups, service businesses, and growing teams that need a reliable billing system without paying for bloated SaaS tools.",
    },
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
            Additional Services
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Supporting services to complement your core projects.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Beyond Our Core Focus</h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Alongside our core focus areas — Training, AI & Automation, and Development — we provide supporting
              services as required to complete project objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section ref={sectionRef} className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">

          <div
            className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {additionalServices.map((service, index) => (
              <SpotlightCard key={index}>
                <div className="flex flex-col items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/20">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/70 text-base leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Support?</h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our additional services can support your project goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-black rounded-full px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get in Touch
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
