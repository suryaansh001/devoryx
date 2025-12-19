"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, Code, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import SpotlightCard from "@/components/SpotlightCard"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export default function TrainingPage() {
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

  const trainingAreas = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern web technologies and frameworks for building responsive applications.",
    },
    {
      icon: BookOpen,
      title: "Backend & API Development",
      description: "Server-side development, database design, and RESTful API architecture.",
    },
    {
      icon: Award,
      title: "AI & Automation Basics",
      description: "Introduction to AI integration and workflow automation fundamentals.",
    },
    {
      icon: Users,
      title: "College & Corporate Workshops",
      description: "Custom training programs tailored to institutions and team requirements.",
    },
  ]

  const trainingApproach = [
    "Practical, hands-on sessions",
    "Clear explanations and guided problem-solving",
    "Focus on fundamentals and real use cases",
    "Suitable for beginners and intermediate learners",
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
            Training & Workshops
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Hands-on learning focused on real-world application.
          </p>
        </div>
      </section>

      {/* About Training Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Our Training</h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Training is a core focus at Devoryx. Our programs are designed for students, professionals, and teams who
              want practical skills that translate directly into real projects and work environments.
            </p>
          </div>
        </div>
      </section>

      {/* Training Areas */}
      <section ref={sectionRef} className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Training Areas</h2>
          <div
            className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {trainingAreas.map((area, index) => (
              <SpotlightCard key={index}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/20 flex-shrink-0">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                    <p className="text-white/70 text-sm">{area.description}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Approach</h2>
          <div className="max-w-3xl mx-auto">
            <SpotlightCard>
              <div className="space-y-4">
                {trainingApproach.map((approach, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80 text-lg leading-relaxed">{approach}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Upskill?</h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Contact us to discuss custom training programs tailored to your needs.
            </p>
            <a href="/contact" className="inline-block bg-white text-black rounded-full px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors">
              Enquire About Training
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
