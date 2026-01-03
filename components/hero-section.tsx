"use client"

import { Button } from "@/components/ui/button"
import RotatingText from "./RotatingText"   
import Image from "next/image"
import { TransitionLink } from "./transition-link"
import { useEffect, useState } from "react"

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

const Play = () => (
  <svg
    className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
)

export function HeroSection() {
  const [enableAnimations, setEnableAnimations] = useState(false)

  // Delay animations until after interaction to reduce hydration cost
  useEffect(() => {
    const handleInteraction = () => {
      setEnableAnimations(true)
    }

    window.addEventListener("click", handleInteraction, { once: true })
    window.addEventListener("scroll", handleInteraction, { once: true })

    return () => {
      window.removeEventListener("click", handleInteraction)
      window.removeEventListener("scroll", handleInteraction)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-20 relative" id="hero">
      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        {/* Badge */}
        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6 sm:mb-8 mt-8 sm:mt-12 transition-opacity duration-700 ${enableAnimations ? "animate-fade-in-badge" : "opacity-0"}`}>
          <span className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></span>
          erebor.world
        </div>

        {/* Main Heading - Optimized for mobile */}
        <h1 className={`text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-4 sm:mb-6 leading-tight sm:leading-normal transition-opacity duration-700 ${enableAnimations ? "animate-fade-in-heading" : "opacity-0"}`}>
          <span className="text-foreground block sm:inline">
            Erebor Provides
            <br className="hidden sm:block" />
            {" "}Solutions
            <br className="sm:hidden" />
            <br />
            Built with 
            <span className="ml-2 sm:ml-3 px-4 sm:px-6 py-2 bg-white text-black rounded-lg inline-block font-bold">
              <RotatingText 
                texts={["Clarity", "Precision", "Excellence"]} 
                rotationInterval={3000}
                splitBy="words"
              />
            </span>
          </span>
        </h1>

        {/* Subheading - Shortened for mobile */}
        <p className={`text-sm sm:text-lg md:text-xl lg:text-2xl text-white text-balance max-w-sm sm:max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-0 transition-opacity duration-700 ${enableAnimations ? "animate-fade-in-subheading" : "opacity-0"} font-light`}>
          <span className="block sm:hidden">Practical training, AI automation, and dependable digital systems for everyone.</span>
          <span className="hidden sm:block">Erebor delivers practical technology training, AI-driven automation, and dependable digital systems for individuals, institutions, and businesses.</span>
        </p>

        {/* Trust Indicators - Desktop */}
        <div className="text-center px-4 hidden sm:block overflow-hidden mb-6">
          <div className={`bg-white/5 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 transition-opacity duration-700 ${enableAnimations ? "animate-fade-in-trust" : "opacity-0"}`}>
            <p className="text-sm text-white mb-4">Explore our range of custom solutions</p>
            <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
              <div className="flex items-center gap-8 opacity-60 hover:opacity-80 transition-all duration-500 animate-slide-left">
                <div className="flex items-center gap-8 whitespace-nowrap">
                  <div className="text-base sm:text-lg font-semibold">Web Development</div>
                  <div className="text-base sm:text-lg font-semibold">Mobile Apps</div>
                  <div className="text-base sm:text-lg font-semibold">AI Automation</div>
                  <div className="text-base sm:text-lg font-semibold">Training</div>
                  <div className="text-base sm:text-lg font-semibold">Digital Marketing</div>
                  <div className="text-base sm:text-lg font-semibold">Custom Systems</div>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex items-center gap-8 whitespace-nowrap">
                  <div className="text-base sm:text-lg font-semibold">Web Development</div>
                  <div className="text-base sm:text-lg font-semibold">Mobile Apps</div>
                  <div className="text-base sm:text-lg font-semibold">AI Automation</div>
                  <div className="text-base sm:text-lg font-semibold">Training</div>
                  <div className="text-base sm:text-lg font-semibold">Digital Marketing</div>
                  <div className="text-base sm:text-lg font-semibold">Custom Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Trust Indicators - Compact */}
        <div className="text-center px-4 mb-4 sm:hidden overflow-hidden">
          <div className={`bg-white/5 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 transition-opacity duration-700 ${enableAnimations ? "animate-fade-in-trust" : "opacity-0"}`}>
            <p className="text-xs text-white mb-3">Custom Solutions</p>
            <div className="relative overflow-hidden w-full max-w-sm mx-auto h-12">
              {/* Left blur fade */}
              <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
              {/* Right blur fade */}
              <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
              <div className="flex items-center gap-4 opacity-60 animate-slide-left-mobile">
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <div className="text-xs font-semibold">Web Dev</div>
                  <div className="text-xs font-semibold">Mobile</div>
                  <div className="text-xs font-semibold">AI</div>
                  <div className="text-xs font-semibold">Training</div>
                  <div className="text-xs font-semibold">Marketing</div>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <div className="text-xs font-semibold">Web Dev</div>
                  <div className="text-xs font-semibold">Mobile</div>
                  <div className="text-xs font-semibold">AI</div>
                  <div className="text-xs font-semibold">Training</div>
                  <div className="text-xs font-semibold">Marketing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}