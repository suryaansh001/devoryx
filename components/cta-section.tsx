"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-8 px-4 sm:px-6 lg:px-8 mb-32">
      <div className="relative max-w-4xl mx-auto">
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center p-8 md:p-10 rounded-3xl border border-white/20 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/15%),theme(backgroundColor.white/5%))]">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-6 text-balance leading-tight">
            Let's build something{" "}
            <span className="font-medium italic bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              reliable, scalable, and well-defined
            </span>
          </h3>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Share your requirement and we'll respond with clarity — no pressure and no unnecessary upselling.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 px-4">
            <button className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 md:px-12 md:py-6 bg-gradient-to-r from-white to-slate-100 text-slate-900 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:from-slate-50 hover:to-slate-200 transition-all duration-300 hover:scale-105 shadow-2xl w-full sm:w-auto justify-center">
              Get in Touch
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
