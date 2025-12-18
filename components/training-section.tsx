"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Users, Code, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import SpotlightCard from "./SpotlightCard"

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export function TrainingSection() {
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

  const trainingPrograms = [
    {
      icon: Code,
      title: "Web Development Training",
      description: "Hands-on training in modern web technologies and frameworks",
    },
    {
      icon: BookOpen,
      title: "Backend & API Development",
      description: "Learn server-side development and API design",
    },
    {
      icon: GraduationCap,
      title: "AI & Automation Basics",
      description: "Introduction to AI integration and workflow automation",
    },
    {
      icon: Users,
      title: "College & Corporate Workshops",
      description: "Custom training programs for institutions and teams",
    },
  ]

  return (
    <section id="training" ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4 mr-2" />
            Training & Workshops
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            Practical Skills for Real-World Application
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Our training programs focus on hands-on learning, practical skills, and real-world application rather than
            theoretical overload.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-6 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {trainingPrograms.map((program, index) => (
            <SpotlightCard key={index}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/20">
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-white/70 text-sm">{program.description}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8`}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Ready to Upskill Your Team?</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Contact us to discuss custom training programs tailored to your organization's needs.
          </p>
          <Button
            size="lg"
            className="bg-white text-black rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer"
          >
            Enquire About Training
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
