"use client"

import { ArrowRight, Phone, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { trackCTAClick } from "@/lib/analytics"

export function AboveFoldCTA() {
  const [isInteractive, setIsInteractive] = useState(false)

  useEffect(() => {
    // Delay animation until after interaction to reduce hydration cost
    const handleInteraction = () => {
      setIsInteractive(true)
    }

    window.addEventListener("click", handleInteraction)
    window.addEventListener("scroll", handleInteraction)

    return () => {
      window.removeEventListener("click", handleInteraction)
      window.removeEventListener("scroll", handleInteraction)
    }
  }, [])

  return (
    <section className="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 sm:py-4 bg-gradient-to-t from-black via-black/95 to-transparent pointer-events-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-center justify-center">
          {/* Primary CTA */}
          <button
            onClick={() => {
              trackCTAClick("view_services", "above_fold")
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group relative flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-white/20 active:scale-95 will-change-transform"
          >
            View Services
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => {
              trackCTAClick("book_call", "above_fold")
              window.location.href = '/contact'
            }}
            className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-white/40 text-white rounded-lg font-semibold text-sm sm:text-base hover:border-white/60 hover:bg-white/5 transition-all duration-300 active:scale-95 will-change-transform"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden xs:inline">Get in Touch</span>
            <span className="xs:hidden">Contact</span>
          </button>
        </div>
      </div>
    </section>
  )
}
