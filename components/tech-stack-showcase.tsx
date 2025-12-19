"use client"

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiNodedotjs } from "react-icons/si"
import LogoLoop from "./LogoLoop2"

const techLogos = [
  { node: <SiReact className="w-12 h-12 text-cyan-400" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="w-12 h-12 text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="w-12 h-12 text-blue-500" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="w-12 h-12 text-cyan-300" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython className="w-12 h-12 text-yellow-400" />, title: "Python", href: "https://www.python.org" },
  { node: <SiNodedotjs className="w-12 h-12 text-green-500" />, title: "Node.js", href: "https://nodejs.org" },
]

export function TechStackShowcase() {
  return (
    <section className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Modern Tech Stack</h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            We build with industry-leading technologies and frameworks to deliver scalable, maintainable, and performant solutions. Our team stays current with the latest developments in web and software engineering.
          </p>
        </div>

        <div className="relative">
          {/* Gradient fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none rounded-l-2xl" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none rounded-r-2xl" />

          {/* Logo Loop */}
          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={56}
              gap={48}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={false}
              ariaLabel="Technology stack"
              className="py-4"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm md:text-base font-light">
            Expertise in React, Next.js, TypeScript, Tailwind CSS, Python, Node.js, and many more technologies
          </p>
        </div>
      </div>
    </section>
  )
}
