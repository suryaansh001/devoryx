"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"

export default function ThreeDemoPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          <section className="pt-32 pb-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Three.js Demo
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                Interactive 3D demonstrations and visual experiences.
              </p>
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </div>
  )
}
