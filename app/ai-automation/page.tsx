"use client"

import { useEffect, useRef, useState } from "react"
import { Database, Brain, Zap, TrendingUp, MessageCircle, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import SpotlightCard from "@/components/SpotlightCard"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export default function AIMlSolutionsPage() {
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

  const automationServices = [
    {
      icon: Database,
      title: "AI-Powered Data Analysis",
      description: "Transform raw data into actionable insights with machine learning algorithms.",
    },
    {
      icon: Brain,
      title: "Custom ML Models",
      description: "Build and deploy tailored machine learning solutions for your specific business needs.",
    },
    {
      icon: MessageCircle,
      title: "Intelligent Automation",
      description: "24/7 AI chatbots and workflow automation that learns from your operations.",
    },
    {
      icon: Zap,
      title: "Process Optimization",
      description: "Streamline workflows using AI predictions and automated decision-making.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and opportunities before they happen with advanced ML.",
    },
    {
      icon: CheckCircle,
      title: "Lead Generation & Qualification",
      description: "AI-driven capture, verification, and automated lead qualification systems.",
    },
  ]

const solutionProcess = [
    { step: "Understand Your Business", description: "We analyze your industry, data, challenges, and goals to identify where AI & ML can create the most impact." },
    { step: "Design Custom Models", description: "We develop machine learning models specifically trained on your data to solve your exact problems." },
    { step: "Integrate & Automate", description: "We seamlessly integrate AI solutions into your existing systems and workflows for immediate value." },
    { step: "Test & Optimize", description: "Continuous testing, monitoring, and refinement to ensure peak performance and accuracy." },
    { step: "Scale & Support", description: "As your business grows, we scale solutions and provide ongoing support to maintain competitive advantage." },
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
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            AI & ML Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Your Data. Your Requirements. Our Solution.
          </p>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Your Data */}
            <SpotlightCard>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-blue-500/20">
                    <Database className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Your Data</h3>
                <p className="text-white/70 mb-4">
                  We understand that your data is unique. Whether it's customer interactions, transaction history, operational metrics, or behavioral patterns, we analyze and structure your existing data to unlock hidden patterns and opportunities.
                </p>
                <ul className="text-white/60 text-sm space-y-2 text-left">
                  <li>✓ Data collection & integration</li>
                  <li>✓ Quality assessment</li>
                  <li>✓ Privacy & security compliance</li>
                </ul>
              </div>
            </SpotlightCard>

            {/* Your Requirements */}
            <SpotlightCard>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-purple-500/20">
                    <Brain className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Your Requirements</h3>
                <p className="text-white/70 mb-4">
                  Every business is different. We listen to your goals, challenges, and constraints. Do you need prediction? Automation? Customer insights? Lead generation? We design AI & ML solutions tailored to solve your exact problems.
                </p>
                <ul className="text-white/60 text-sm space-y-2 text-left">
                  <li>✓ Business goal analysis</li>
                  <li>✓ Use case identification</li>
                  <li>✓ ROI & impact modeling</li>
                </ul>
              </div>
            </SpotlightCard>

            {/* Our Solution */}
            <SpotlightCard>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-green-500/20">
                    <Zap className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Solution</h3>
                <p className="text-white/70 mb-4">
                  We build, deploy, and maintain AI & ML solutions that work. From predictive models to intelligent automation systems, we ensure your technology is seamlessly integrated, continuously optimized, and delivering measurable value.
                </p>
                <ul className="text-white/60 text-sm space-y-2 text-left">
                  <li>✓ Model development & training</li>
                  <li>✓ System integration</li>
                  <li>✓ Ongoing optimization</li>
                </ul>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* About Solutions Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Our AI & ML Solutions</h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              We combine advanced machine learning with practical automation to solve real business challenges. Our focus is on creating intelligent systems that integrate smoothly into your operations, learn from your data, and deliver measurable results.
            </p>
          </div>

        </div>
      </section>

      {/* Solutions We Build */}
      <section ref={sectionRef} className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Solutions We Build</h2>
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {automationServices.map((service, index) => (
              <SpotlightCard key={index}>
                <div className="flex flex-col items-start gap-4 h-full">
                  <div className="p-3 rounded-lg bg-white/20">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70 text-sm">{service.description}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build Solutions */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Development Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {solutionProcess.map((item, index) => (
                <SpotlightCard key={index}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{item.step}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI & ML?</h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your data, your requirements, and how we can build a custom AI solution that drives real results for your business.
            </p>
            <a href="/contact" className="inline-block bg-white text-black rounded-full px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors">
              Start Your AI Journey
            </a>
          </div>
        </div>
      </section>
        <Footer />
        </div>
      </main>
    </div>
  )
}
