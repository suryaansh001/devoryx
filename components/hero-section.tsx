import { Button } from "@/components/ui/button"
import RotatingText from "./RotatingText"   
import Image from "next/image"
import { TransitionLink } from "./transition-link"

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
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative" id="hero">
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-12 animate-fade-in-badge">
          <span className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></span>
          devoryx.xyz
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-heading">

          <span className="text-foreground">
            Devoryx Provides Solutions
            <br />
            Built with 
            <span className="ml-3 px-6 py-2 bg-white text-black rounded-lg inline-block font-bold">
              <RotatingText 
                texts={["Clarity", "Precision", "Excellence"]} 
                rotationInterval={3000}
                splitBy="words"
              />
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-xl md:text-2xl text-white text-balance max-w-sm sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
          Devoryx delivers practical technology training, AI-driven automation, and dependable digital systems for
          individuals, institutions, and businesses.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
          <TransitionLink href="/development"
            className="bg-white text-black rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer relative overflow-hidden inline-flex items-center"
          >
            Start a Project
            <ArrowRight />
          </TransitionLink>

          <TransitionLink href="/services"
            className="rounded-full px-8 py-4 text-lg font-medium border border-white hover:bg-white/10 transition-all duration-200 hover:scale-105 group bg-transparent cursor-pointer inline-flex items-center text-white"
          >
            <Play />
            Explore Our Capabilities
          </TransitionLink>
        </div>

        {/* Trust Indicators */}
        <div className="text-center px-4 hidden sm:block overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-white mb-6">Custom solutions scoped per project</p>
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

        {/* Mobile Trust Indicators */}
        <div className="text-center px-4 mb-8 sm:hidden overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-white mb-6">Custom solutions scoped per project</p>
          <div className="relative overflow-hidden w-full max-w-sm mx-auto">
            {/* Left blur fade */}
            <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            {/* Right blur fade */}
            <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            <div className="flex items-center gap-6 opacity-60 animate-slide-left-mobile">
              <div className="flex items-center gap-6 whitespace-nowrap">
                <div className="text-sm font-semibold">Web Dev</div>
                <div className="text-sm font-semibold">Mobile Apps</div>
                <div className="text-sm font-semibold">AI Automation</div>
                <div className="text-sm font-semibold">Training</div>
                <div className="text-sm font-semibold">Marketing</div>
                <div className="text-sm font-semibold">Custom Systems</div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-6 whitespace-nowrap">
                <div className="text-sm font-semibold">Web Dev</div>
                <div className="text-sm font-semibold">Mobile Apps</div>
                <div className="text-sm font-semibold">AI Automation</div>
                <div className="text-sm font-semibold">Training</div>
                <div className="text-sm font-semibold">Marketing</div>
                <div className="text-sm font-semibold">Custom Systems</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative z-10 animate-fade-in-hero">
          <Image
            src="/images/HomePage.png"
            alt="Devoryx Services"
            width={700}
            height={400}
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}