"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import SpotlightCard from "@/components/SpotlightCard"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export default function AIAutomationPage() {
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

  const automationServices = [
    {
      icon: MessageCircle,
      title: "Website-based AI Chatbots",
      description: "24/7 automated customer engagement and lead capture systems.",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Streamline repetitive processes and connect systems seamlessly.",
    },
    {
      icon: CheckCircle,
      title: "Lead Generation & Verification",
      description: "Automated capture, validation, and qualification systems.",
    },
  ]

  const automationProcess = [
    { step: "Capture inputs", description: "Collect data from customers and systems" },
    { step: "Verify data", description: "Validate and clean information automatically" },
    { step: "Automate workflows", description: "Trigger actions based on conditions" },
    { step: "Notify stakeholders", description: "Keep your team informed in real-time" },
    { step: "Scale operations", description: "Handle growing volume without overhead" },
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
            AI & Automation Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Automation that fits your workflow — not the other way around.
          </p>
        </div>
      </section>

      {/* About Automation Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Our Automation</h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              We design AI-driven automation systems that integrate smoothly into existing processes. Our focus is on
              reducing repetitive effort while maintaining clarity and control.
            </p>
          </div>

        </div>
      </section>

      {/* What We Work On */}
      <section ref={sectionRef} className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">What We Work On</h2>
          <div
            className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {automationServices.map((service, index) => (
              <SpotlightCard key={index}>
                <div className="flex flex-col items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/20">
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

      {/* How It Works */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {automationProcess.map((item, index) => (
                <SpotlightCard key={index}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.step}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate?</h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how automation can streamline your operations and reduce manual effort.
            </p>
            <a href="/contact" className="inline-block bg-white text-black rounded-full px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors">
              Discuss an Automation Use Case
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
