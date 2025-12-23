"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Users, CheckCircle, Lightbulb, AlertCircle, BookOpen, ClipboardList, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"
import SpotlightCard from "@/components/SpotlightCard"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { TrainingPhasesRows } from "@/components/training-phases-rows"

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
      title: "Work More Efficiently",
      description: "Apply tools correctly within daily workflows and operational processes.",
      icon: <Zap className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Reduce Errors & Rework",
      description: "Follow correct usage patterns, best practices, and standard processes.",
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Lower Support & Dependency",
      description: "Handle tasks independently with confidence and consistency.",
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
      title: "Training & Analysis (T&A) — Identify the Real Problem",
      description: "We start with diagnosis, not training. Understand what is actually going wrong, identify performance gaps, and separate symptoms from root causes. The key question: Is this a skill issue, a process issue, or a behavior issue?",
    },
    {
      title: "Define Company Expectations & Outcomes",
      description: "Clarify what the company expects from its people—role-wise expectations, required behaviors, performance benchmarks, and alignment with business goals. This sets a clear target state before any training begins.",
    },
    {
      title: "Competency Mapping & Gap Identification",
      description: "Evaluate employees against expectations through skill assessment, behavioral evaluation, leadership gaps, and process adherence. The result is a clear view of what is missing, where, and why.",
    },
    {
      title: "Training Roadmap + ROI Projection",
      description: "Design a custom training roadmap including what training is needed, who needs it, duration, and delivery format. We clearly show training investment, expected business improvement, and projected ROI.",
    },
    {
      title: "Execution & Implementation",
      description: "Structured, role-based training delivery using practical, scenario-based learning. Training is hands-on, measurable, and outcome-oriented with real workplace examples and behavior correction.",
    },
    {
      title: "Closure, Validation & Long-Term Impact",
      description: "Post-training validation, behavior and performance checks, process adherence improvement, and capability handover to internal teams. Final result: teams work better, operations become predictable and scalable.",
    },
  ]

  const trainingAreas = [
    {
      title: "Behavioral & Soft Skills Training",
      subtitle: "High Demand • Evergreen Skills",
      items: [
        "Communication (Email, Writing, Public Speaking)",
        "Interpersonal Skills (Team Collaboration, Conflict Management, EQ)",
        "Personal Effectiveness (Time Management, Stress Management, Problem Solving)",
      ],
    },
    {
      title: "Leadership & Management Training",
      subtitle: "High Ticket • For Managers & Leaders",
      items: [
        "First-Time Manager Training (Delegation, Feedback, Performance Management)",
        "Leadership Development (Situational Leadership, Coaching, Remote Leadership)",
        "People Management (Engagement, Difficult Conversations, Motivation)",
      ],
    },
    {
      title: "Corporate Training",
      subtitle: "Mandatory • Workplace Essentials",
      items: [
        "Corporate Ethics & Code of Conduct",
        "POSH (Prevention of Sexual Harassment)",
        "Diversity, Equity & Inclusion (DEI) • Workplace Safety Awareness",
      ],
    },
    {
      title: "Learning & Capability Development",
      subtitle: "Your Strong Zone",
      items: [
        "Train-the-Trainer (TTT) Programs",
        "Instructional Design Fundamentals",
        "Adult Learning Principles & LMS Adoption",
        "Creating Effective Training Content",
      ],
    },
    {
      title: "Sales, Customer & Business Skills",
      subtitle: "Revenue & Relationship Focused",
      items: [
        "Sales Effectiveness & Negotiation Skills",
        "Consultative Selling & Customer Service Excellence",
        "Client Relationship Management",
      ],
    },
    {
      title: "Induction & Onboarding",
      subtitle: "Revenue & Relationship Focused",
      items: [
        "Role clarity and performance alignment",
        "Culture, policies, and ways of working",
        "Tools, processes, and compliance overview",
      ],
    },
    {
      title: "Technical & Digital Skills",
      subtitle: "Non-Coding • Practical Tools",
      items: [
        "MS Excel / Power BI (Business Use)",
        "Digital Productivity Tools (MS Teams, Google Workspace)",
        "AI for Workplace Productivity",
        "Data Literacy for Non-Tech Professionals",
      ],
    },
    {
      title: "Compliance & Process Training",
      subtitle: "Mandatory • Risk Management",
      items: [
        "Information Security Awareness",
        "Data Privacy & GDPR Basics",
        "Quality Management (ISO Awareness)",
        "SOP & Process Training",
      ],
    },
    {
      title: "Product Training",
      subtitle: "Software & Tool Mastery",
      items: [
        "End-to-end product workflows & role-based usage",
        "Correct vs incorrect usage patterns",
        "Machine/factory-based product training",
      ],
    },
    {
      title: "Consulting Services",
      subtitle: "High Value • Long-Term Impact",
      items: [
        "Training Needs Analysis (TNA)",
        "Competency Mapping & Learning Strategy",
        "LMS Selection & Implementation Support",
        "Evaluation & ROI of Training",
      ],
    },
    {
      title: "Custom & Industry-Specific Programs",
      subtitle: "Tailored Solutions",
      items: [
        "Onboarding Programs",
        "Culture Building Programs",
        "Change Management Training",
        "High-Potential (HiPo) Programs",
      ],
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
                Make Your Workforce <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Perform</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                We design and deliver practical training solutions that enable teams to apply tools, systems, and processes effectively in real business workflows — not just understand features.
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
                  At Devoryx, product training is a business enablement function. We focus on making teams operational, consistent, and execution-ready across real workflows.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Our approach reduces misuse, rework, and dependency on support by ensuring teams understand how the product is meant to be used in practice. The result is faster adoption, predictable performance, and stronger ROI on product investments.
                </p>
              </div>
            </div>
          </section>

          {/* What We Train Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">Our Training Domains</h2>
              <p className="text-lg text-white/70 text-center mb-16 max-w-3xl mx-auto">
                Our training spans key organizational capabilities, enabling leaders to build skilled, execution-ready teams aligned to business priorities.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {trainingAreas.map((category, index) => (
                  <SpotlightCard key={index}>
                    <div className="p-3">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                          {category.title}
                        </h3>
                        <p className="text-sm text-white/50 font-medium ml-5">{category.subtitle}</p>
                      </div>
                      <ul className="space-y-3 ml-5">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-1 h-1 bg-white/40 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-white/75 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </section>

          {/* Training Delivery Model - Phase Rows */}
          <TrainingPhasesRows />

          {/* Our Approach - Process Flow */}
          <section className="py-20 px-4 bg-gradient-to-b from-white/5 to-transparent">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">Our Training & Capability Development Process</h2>
              <p className="text-lg text-white/70 text-center mb-16 max-w-3xl mx-auto">
                We solve performance problems using structured analysis, targeted training, and measurable outcomes. Not a one-size-fits-all approach—genuine transformation.
              </p>

              {/* Bottom message */}
              <div className="text-center">
                <div className="inline-block rounded-2xl border border-white/20 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
                  <p className="text-lg text-white/80 leading-relaxed">
                    <span className="font-semibold text-white">We don't sell training programs.</span><br />
                    We solve performance problems and help teams work better, managers manage better, and operations become predictable and scalable.
                  </p>
                </div>
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
                    Let's Build Capability, Not Just Deliver Training
                  </h2>
                  <p className="text-lg text-white/70 mb-8">
                    Tell us your challenges. We'll diagnose, design, and deliver results.
                  </p>
                  <a
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-8 py-3 text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
                  >
                    Start a Training Consultation
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
