"use client"

import { useEffect, useRef, useState } from "react"
import { Database, Brain, Zap, TrendingUp, MessageCircle, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import SpotlightCard from "@/components/SpotlightCard"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export default function AIMlSolutionsPage() {
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

  const solutionsWeBuild = [
    {
      icon: CheckCircle,
      title: "Tender Discovery & Management Automation",
      description: "End-to-end systems for government and enterprise tenders. Automated tender discovery across portals and sources, filtering based on eligibility, value, location, and deadlines. Centralized dashboards with alerts, deadline tracking, and compliance checklists.",
    },
    {
      icon: Zap,
      title: "Workflow & Process Automation",
      description: "Execution systems that remove follow-ups and handoffs. Approval flows, task routing, escalations, SLAs, and audit trails. System-driven status updates.",
    },
    {
      icon: TrendingUp,
      title: "Lead Capture & Qualification Systems",
      description: "Automation that ensures sales teams engage only with real prospects. Intent detection from forms and conversations, automated verification, scoring, routing, and CRM updates without manual effort.",
    },
    {
      icon: MessageCircle,
      title: "Conversational Assistants",
      description: "Systems that respond, route, and trigger actions. Customer support and internal assistants with answers grounded in business data. Actions triggered directly from conversations.",
    },
    {
      icon: Database,
      title: "Document & Data Intelligence",
      description: "Systems that understand and act on documents. Processing of scanned and digital documents, information extraction and validation, automated workflows triggered by content.",
    },
    {
      icon: Brain,
      title: "Predictive & Decision Support Systems",
      description: "Intelligence that informs action before issues arise. Risk, demand, and outcome forecasting. Scoring and prioritization logic. Signals consumed by automation workflows.",
    },
  ]

const solutionProcess = [
    { step: "Identify friction and manual choke points", description: "Map where time is wasted and where human bottlenecks slow execution." },
    { step: "Decide where rules are sufficient", description: "Start with simple logic. Add complexity only where needed." },
    { step: "Add intelligence only where complexity demands it", description: "Deploy ML, NLP, or AI where rules can't handle the variability." },
    { step: "Embed intelligence inside automation", description: "Build systems where intelligence triggers actions, not reports." },
    { step: "Monitor, refine, and scale", description: "Track performance, catch drift, and expand as processes evolve." },
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
            Intelligence where it's needed. Automation where it matters.
          </p>
        </div>
      </section>

      {/* About Section - Founder Tone */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border-4 border-white/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <p className="text-2xl md:text-3xl text-white/90 leading-relaxed mb-6">
                    Most businesses don't need more "AI".
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                    They need less manual work and better decisions.
                  </p>
                </div>
                
                <div className="border-t border-white/30 pt-6 space-y-4">
                  <p className="text-white/70 text-base leading-relaxed">
                    We build systems where <span className="text-white font-semibold">intelligence handles complexity</span> and <span className="text-white font-semibold">automation handles execution</span>.
                  </p>
                  <p className="text-white/70 text-base leading-relaxed">
                    Models don't live in isolation. Automation doesn't run blind.
                  </p>
                  <p className="text-white/70 text-base leading-relaxed">
                    Both work together inside production systems.
                  </p>
                </div>

                <div className="border-t border-white/30 pt-6 space-y-4">
                  <p className="text-white/70 text-base leading-relaxed">
                    We scope each project individually, decide what should be automated, and add intelligence only where it improves outcomes.
                  </p>
                  <p className="text-white/70 text-base leading-relaxed">
                    <span className="text-white font-semibold">No templates. No forced platforms. No unnecessary complexity.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Means for You Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">What This Means for You</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border-4 border-white/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white text-lg leading-relaxed"><span className="font-semibold">No overengineering</span></p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white text-lg leading-relaxed"><span className="font-semibold">No unnecessary AI</span></p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white text-lg leading-relaxed"><span className="font-semibold">No rebuilding when you scale</span></p>
                </div>
                <div className="border-t border-white/30 pt-6 mt-6">
                  <p className="text-white/80 text-lg leading-relaxed text-center">
                    Every system is designed for your problem, not for a demo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Think Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">How We Think About Systems</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border-4 border-white/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="space-y-6 text-center">
                <p className="text-xl md:text-2xl text-white leading-relaxed">
                  <span className="font-semibold">Intelligence understands.</span>
                </p>
                <p className="text-xl md:text-2xl text-white leading-relaxed">
                  <span className="font-semibold">Automation executes.</span>
                </p>
                <p className="text-xl md:text-2xl text-white leading-relaxed">
                  <span className="font-semibold">Systems scale</span> when both are designed together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">How We Build These Systems</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {solutionProcess.map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl border-4 border-white/30 rounded-2xl p-6 shadow-2xl hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-white font-bold text-sm shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{item.step}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Solutions Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What We Build</h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Systems where intelligence and automation work together in production.
            </p>
          </div>

        </div>
      </section>

      {/* Solutions We Build */}
      <section ref={sectionRef} className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {solutionsWeBuild.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border-4 border-white/30 rounded-2xl p-6 shadow-2xl hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                <div className="flex flex-col items-start gap-4 h-full">
                  <div className="p-3 rounded-lg bg-white/20 shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">What We Don't Do</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border-4 border-white/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white/80 text-lg leading-relaxed">We don't deploy intelligence without a clear purpose.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white/80 text-lg leading-relaxed">We don't automate broken processes.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white/80 text-lg leading-relaxed">We don't build systems that need constant babysitting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Build Solutions */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto">
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center bg-white/5 backdrop-blur-xl border-4 border-white/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Intelligent Systems?</h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Let's map your manual processes, identify where intelligence adds value, and build automation that actually works.
            </p>
            <a href="/contact" className="inline-block bg-white text-black rounded-full px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors shadow-xl">
              Scope My Use Case
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
