"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { MessageCircle, Clock, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const conversations = [
  {
    title: "Lead Capture & Verification",
    messages: [
      { text: "Hi! I'm interested in your automation services. Can you help?", sender: "customer", delay: 0 },
      {
        text: "I can capture your information and connect you with our team. What type of automation are you looking for?",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "I need help automating our lead capture process",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "Perfect! We specialize in verified lead capture and validation systems. Can I get your email address to send you more information?",
        sender: "ai",
        delay: 3500,
      },
      { text: "Sure, it's john@example.com", sender: "customer", delay: 5000 },
      {
        text: "Thanks! I've verified your email and forwarded your inquiry to our automation team. They'll reach out within 24 hours with a detailed proposal.",
        sender: "ai",
        delay: 6000,
      },
    ],
  },
  {
    title: "Workflow Automation Inquiry",
    messages: [
      { text: "Do you build custom workflow automation?", sender: "customer", delay: 0 },
      {
        text: "Yes! We design automation pipelines that connect forms, databases, and notifications seamlessly.",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "Can you integrate with our existing CRM?",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "Most CRM platforms are supported. We ensure smooth integration while maintaining data clarity and control.",
        sender: "ai",
        delay: 4000,
      },
      { text: "What's the typical timeline?", sender: "customer", delay: 5500 },
      {
        text: "Timelines vary based on complexity, but most workflow automation projects are completed within 2-4 weeks. Would you like to discuss your specific use case?",
        sender: "ai",
        delay: 6500,
      },
    ],
  },
  {
    title: "AI Chatbot Information",
    messages: [
      {
        text: "I need a chatbot for my website. What can you offer?",
        sender: "customer",
        delay: 0,
      },
      {
        text: "We build website-based chatbots for lead capture, support, and automation. They work 24/7 to help your visitors.",
        sender: "ai",
        delay: 1000,
      },
      { text: "Can it handle customer support questions?", sender: "customer", delay: 2500 },
      {
        text: "Yes! Our chatbots can answer FAQs, capture leads, and escalate complex queries to your team when needed.",
        sender: "ai",
        delay: 3500,
      },
      {
        text: "How do I get started?",
        sender: "customer",
        delay: 5000,
      },
      {
        text: "I can connect you with our team right now. They'll provide a clear scope and timeline based on your specific requirements.",
        sender: "ai",
        delay: 6000,
      },
    ],
  },
]

export function AITeamSection() {
  const sectionRef = useRef<HTMLElement>(null) // Added section ref for intersection observer
  const [isVisible, setIsVisible] = useState(false)
  const [currentConversation, setCurrentConversation] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<any[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("[v0] AI Team Section is now visible")
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

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [displayedMessages, isTyping])

  useEffect(() => {
    const conversation = conversations[currentConversation]
    setDisplayedMessages([])
    setIsTyping(false)

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    let messageIndex = 0

    const showNextMessage = () => {
      if (messageIndex >= conversation.messages.length) {
        // Wait 3 seconds then move to next conversation
        timeoutRef.current = setTimeout(() => {
          setCurrentConversation((prev) => (prev + 1) % conversations.length)
        }, 3000)
        return
      }

      const message = conversation.messages[messageIndex]

      timeoutRef.current = setTimeout(() => {
        if (message.sender === "ai") {
          setIsTyping(true)
          timeoutRef.current = setTimeout(() => {
            setDisplayedMessages((prev) => [...prev, message])
            setIsTyping(false)
            messageIndex++
            showNextMessage()
          }, 800) // Reduced typing delay from 1500ms to 800ms for faster replies
        } else {
          setDisplayedMessages((prev) => [...prev, message])
          messageIndex++
          showNextMessage()
        }
      }, message.delay)
    }

    showNextMessage()

    // Cleanup timeout on unmount or conversation change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentConversation])

  return (
    <section id="ai-team" ref={sectionRef} className="relative z-10 py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden">
          {/* Background gradient glow */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium mb-6 transition-all duration-1000 backdrop-blur-sm shadow-lg shadow-blue-500/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <MessageCircle className="w-4 h-4 text-blue-400" />
              AI & ML Solutions
            </div>

            <h2
              className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-balance mb-6 lg:mb-8 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              End-to-End AI & ML Solutions
            </h2>

            <p
              className={`text-xl text-white/70 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Built to solve real business problems—not run experiments.<br />
              We design and deploy production-grade AI systems that turn data into decisions and automation into impact.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 max-w-7xl mx-auto mb-8">
            {/* Left side - Text content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div
                className={`transition-all duration-1000 delay-600 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
              <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 lg:p-8 mb-8 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:border-blue-400/30 group">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Zap className="w-5 h-5 text-white" />
                  </span>
                  What We Deliver
                </h3>

                <div className="space-y-3 lg:space-y-4 text-base lg:text-lg text-white/90 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <p>AI strategy aligned to business goals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <p>Machine learning & predictive models</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <p>Computer vision & language systems</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <p>Intelligent automation & AI agents</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <p>Scalable deployment, monitoring, and control</p>
                  </div>
                </div>
              </div>

              

              <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 lg:p-8 mb-8 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:border-purple-400/30 group">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </span>
                  Why It Works
                </h3>

                <div className="space-y-3 lg:space-y-4 text-base lg:text-lg text-white/90 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Built around real workflows</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Integrated with your existing systems</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Measurable outcomes, not demos</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-md p-6 lg:p-8 mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </span>
                  The Outcome
                </h3>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-medium text-sm">⚡ Faster operations</span>
                  <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-medium text-sm">✓ Fewer errors</span>
                  <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-medium text-sm">🧠 Smarter decisions</span>
                  <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-medium text-sm">📈 AI that pays for itself</span>
                </div>
              </div>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-2">
              <div className="max-w-md w-full">
                <div
                  className={`relative transition-all duration-1000 delay-600 flex-shrink-0 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl shadow-blue-500/20 ring-1 ring-white/10">
                    <div className="bg-black rounded-[2rem] p-1">
                      <div className="bg-white rounded-[1.5rem] overflow-hidden">
                        {/* Status bar */}
                        <div className="bg-slate-50 px-6 py-3 flex justify-between items-center text-sm">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                            <span className="font-medium text-slate-700">Devoryx AI Assistant</span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-500">
                            <Clock className="w-3 h-3" />
                            <span className="text-xs">24/7</span>
                          </div>
                        </div>

                        <div className="bg-slate-900 px-6 py-4 text-white">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mr-2 mt-1 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">AI</div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-sm">Devoryx Assistant</h3>
                              <p className="text-xs text-slate-300">devoryx.xyz</p>
                            </div>
                            <div className="text-xs text-green-400 flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              Online
                            </div>
                          </div>
                        </div>

                        {/* Chat messages */}
                        <div
                          ref={chatContainerRef}
                          className="h-[700px] overflow-y-scroll scrollbar-hide p-4 space-y-3 bg-slate-50"
                          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                          {displayedMessages.map((message, index) => (
                            <div
                              key={index}
                              className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"}`}
                            >
                              {message.sender === "ai" && (
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mr-2 mt-1 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">A</div>
                              )}
                              <div
                                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                                  message.sender === "customer"
                                    ? "bg-slate-900 text-white rounded-br-md"
                                    : "bg-white text-slate-800 shadow-sm border border-slate-200 rounded-bl-md"
                                }`}
                              >
                                {message.text.split("\n").map((line, i) => (
                                  <div key={i}>{line}</div>
                                ))}
                              </div>
                              {message.sender === "customer" && (
                                <div className="w-6 h-6 rounded-full bg-slate-400 ml-2 mt-1 flex-shrink-0 flex items-center justify-center text-xs text-white font-medium">
                                  C
                                </div>
                              )}
                            </div>
                          ))}

                          {/* Typing indicator */}
                          {isTyping && (
                            <div className="flex justify-start items-start">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mr-2 mt-1 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">A</div>
                              <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border border-slate-200">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                  <div
                                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.1s" }}
                                  ></div>
                                  <div
                                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="p-4 bg-white border-t border-slate-200">
                          <div className="flex items-center gap-3 bg-slate-100 rounded-full px-4 py-2">
                            <span className="text-slate-500 text-sm lg:text-base flex-1">Responding...</span>
                            <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                              <Zap className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - Full Width */}
          <div
            className={`transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-pink-500/20 p-8 backdrop-blur-sm relative overflow-hidden group hover:border-white/30 transition-all duration-500 w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">Build AI That Actually Works</h3>
                <p className="text-white/70 mb-6">
                  Turn intelligence into advantage.
                </p>
                <Link href="/ai-automation">
                  <Button
                    size="lg"
                    className="bg-white text-black rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-xl hover:shadow-white/20 w-full border-0 group cursor-pointer"
                  >
                    Explore how we turn AI into business impact
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
