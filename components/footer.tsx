"use client"
import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { InstagramIcon, LinkedinIcon, ArrowRight, Phone } from "lucide-react"
import Image from "next/image"
import { TransitionLink } from "./transition-link"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Services",
    links: [
      { title: "Web Development", href: "/development" },
      { title: "Mobile App Development", href: "/development" },
      { title: "AI & Automation", href: "/ai-automation" },
      { title: "Corporate Training", href: "/training" },
      { title: "Digital Marketing & SEO", href: "/services" },
      { title: "Billing Software", href: "/services" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About Us", href: "/#about" },
      { title: "Our Process", href: "/#process" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Connect",
    links: [
      { title: "hello@erebor.world", href: "mailto:hello@erebor.world" },
      { title: "WhatsApp", href: "https://wa.me/" },
    ],
  },
  {
    label: "Social",
    links: [
      { title: "LinkedIn", href: "https://linkedin.com/company/erebor-world", icon: LinkedinIcon },
      { title: "Instagram", href: "https://instagram.com/erebor.world", icon: InstagramIcon },
    ],
  },
]

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 xl:gap-8">
        {/* Logo and Brand Info - Responsive */}
        <AnimatedContainer className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
          <Image src="/images/cliste-logo.png" alt="Erebor Logo" width={64} height={64} className="size-14 sm:size-16" />
          <div className="text-muted-foreground text-xs sm:text-sm space-y-1">
            <p>© {new Date().getFullYear()} Erebor</p>
            <p>erebor.world</p>
            <p className="text-xs leading-relaxed">Custom solutions scoped per project</p>
          </div>
        </AnimatedContainer>

        {/* Footer Links - Responsive Grid */}
        {footerLinks.map((section, index) => (
          <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
            <div className="">
              <h3 className="text-xs font-semibold text-white mb-3 sm:mb-4">{section.label}</h3>
              <ul className="text-muted-foreground space-y-2 text-xs sm:text-sm">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="hover:text-foreground inline-flex items-center transition-all duration-300 break-words"
                    >
                      {link.icon && <link.icon className="me-1 size-3 sm:size-4 flex-shrink-0" />}
                      <span className="text-left">{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedContainer>
        ))}
      </div>

      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <TransitionLink href="/services">
          <button className="group relative flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-white/20 active:scale-95">
            View Services
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </TransitionLink>
        <TransitionLink href="/contact">
          <button className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-white/40 text-white rounded-lg font-semibold text-sm sm:text-base hover:border-white/60 hover:bg-white/5 transition-all duration-300 active:scale-95">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Book Call
          </button>
        </TransitionLink>
      </div>

      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-foreground/10 w-full">
        <p className="text-muted-foreground text-xs text-center">Custom solutions scoped per project</p>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
