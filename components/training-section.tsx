"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { GraduationCap } from "lucide-react"
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

  return (
    <section id="training" ref={sectionRef} className="py-20 sm:py-32 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 md:p-16">
          <div
            className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-balance mb-6 sm:mb-8">
              Training That Fixes <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Real Problems</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              We don&apos;t run generic programs.<br />
              We diagnose what&apos;s breaking performance and train teams to execute correctly—fast, consistently, and without dependency.<br />
              <span className="font-semibold text-white">Result: fewer mistakes, faster adoption, predictable outcomes.</span>
            </p>
          </div>

          <div
            className={`mb-16 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">What Makes Our Training Different</h3>
              <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white/80 leading-relaxed">Built around real workflows, not slides</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white/80 leading-relaxed">Focused on behavior + process + execution</span>
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white/80 leading-relaxed">Designed to reduce support, rework, and confusion</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white/80 leading-relaxed">Measurable impact, not attendance certificates</span>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div
            className={`mb-16 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">When Training Makes Sense</h3>
              <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white/80 leading-relaxed">Teams misuse tools or follow broken processes</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white/80 leading-relaxed">Managers struggle to drive consistent performance</span>
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white/80 leading-relaxed">Support and ops are overloaded with avoidable issues</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white/80 leading-relaxed">New hires take too long to become productive</span>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div
            className={`mb-16 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            } text-center`}
          >
            <div className="inline-block rounded-2xl border border-white/20 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-3">Why Partner With Us</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                Training with measurable impact, structured methodology,<br />
                <span className="font-semibold text-white">and results that drive business outcomes.</span>
              </p>
            </div>
          </div>

          <div
            className={`text-center transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 sm:p-10`}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Build Capability, Not Just Skills</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Explore how we turn training into performance.
            </p>
            <Link href="/training">
              <Button
                size="lg"
                className="bg-white text-black rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer"
              >
                Start a Training Consultation
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
