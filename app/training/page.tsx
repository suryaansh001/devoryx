"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Users, CheckCircle, Lightbulb, AlertCircle, BookOpen, ClipboardList, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"
import SpotlightCard from "@/components/SpotlightCard"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { ProcessFlowchart } from "@/components/process-flowchart"
import { FeatureCard } from "@/components/feature-card"

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

  const trainingBenefits = [
    {
      title: "Work Faster",
      description: "Teams operate with greater efficiency and reduced learning time.",
      icon: <Zap className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Make Fewer Mistakes",
      description: "Prevent costly errors through standardized usage patterns.",
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Reduce Support Burden",
      description: "Teams depend less on support and senior members for guidance.",
      icon: <Users className="w-8 h-8 text-purple-400" />,
    },
  ]

  const whatWeTrain = [
    {
      title: "Product Usage & Onboarding",
      items: ["End-to-end product workflows", "Role-based usage (sales, ops, support, devs)", "Correct vs incorrect usage patterns"],
    },
    {
      title: "Process Alignment",
      items: ["How the product fits into existing processes", "Where teams usually break things", "Standardizing usage across teams"],
    },
    {
      title: "Team Enablement",
      items: ["Training internal leads and trainers", "SOPs, checklists, and playbooks", "Reducing single-person dependency"],
    },
    {
      title: "Workshops (College & Corporate)",
      items: ["Product-focused, hands-on sessions", "Real scenarios, not theory", "Custom programs per team or institution"],
    },
  ]

  const processSteps = [
    {
      title: "Assess Current Usage",
      description: "Evaluate how teams currently use the product, identify pain points, bottlenecks, and areas of misuse or confusion.",
    },
    {
      title: "Design Training Program",
      description: "Create role-specific training paths tailored to sales, ops, support, dev, or management workflows.",
    },
    {
      title: "Deliver Hands-On Training",
      description: "Run live product sessions with real scenarios, not slides. Teams practice with their actual workflows.",
    },
    {
      title: "Build Internal Capability",
      description: "Train your internal leads and trainers so training continues independently. Provide SOPs and playbooks.",
    },
    {
      title: "Validate & Measure",
      description: "Track adoption metrics, reduce support tickets, ensure teams apply learning to daily workflows.",
    },
  ]

  const forWho = [
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Companies Launching or Scaling Products",
      description: "Ensure teams can use your product effectively from day one.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Teams Struggling with Adoption or Misuse",
      description: "Fix broken workflows and bad habits before they become costly.",
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Support & Ops Teams Overloaded",
      description: "Reduce avoidable issues and free up your team for strategic work.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Institutions Needing Product-First Learning",
      description: "Teach students and professionals real product skills, not theory.",
    },
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
          <section className="pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <p className="text-sm font-medium text-white/80">Product Training That Works</p>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                Make Your Product <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Actually Work</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                We don't explain features — we train people on how the product is actually used in daily workflows.
              </p>
            </div>
          </section>

          {/* Key Benefits Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-transparent via-white/5 to-transparent">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">After Training, Teams:</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {trainingBenefits.map((benefit, index) => (
                  <FeatureCard key={index} title={benefit.title} description={benefit.description} icon={benefit.icon} delay={index * 100} />
                ))}
              </div>
            </div>
          </section>

          {/* About Product Training */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-12 backdrop-blur-sm">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Our Product Training</h2>
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  At Devoryx, product training is about making teams operational. We focus on practical, real-world application rather than theory or feature lists.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Our training ensures teams can execute without guessing. The outcome: <span className="font-semibold text-white">teams stop guessing and start executing.</span>
                </p>
              </div>
            </div>
          </section>

          {/* What We Train Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">What We Train</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {whatWeTrain.map((category, index) => (
                  <SpotlightCard key={index}>
                    <div className="p-2">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                        {category.title}
                      </h3>
                      <ul className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-white/80 text-base leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </section>

          {/* Our Approach - Process Flow */}
          <section className="py-20 px-4 bg-gradient-to-b from-white/5 to-transparent">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">Our Approach</h2>
              <p className="text-lg text-white/70 text-center mb-16 max-w-2xl mx-auto">
                Real workflows, not slides. Live product usage and scenarios. We fix bad habits and misuse through hands-on validation.
              </p>

              <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-12 backdrop-blur-sm">
                <ProcessFlowchart steps={processSteps} />
              </div>
            </div>
          </section>

          {/* Who This Is For */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Who This Is For</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {forWho.map((item, index) => (
                  <FeatureCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl" />
                <div className="absolute inset-0 border border-white/20 rounded-3xl" />

                {/* Content */}
                <div className="relative p-8 sm:p-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Make Your Product Work for Your Team?
                  </h2>
                  <p className="text-lg text-white/70 mb-8">
                    Let's discuss how we can transform your team's product capability.
                  </p>
                  <a
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-8 py-3 text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
                  >
                    Enquire About Product Training
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
