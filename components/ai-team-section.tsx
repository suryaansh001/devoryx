"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, Clock, Zap, CheckCircle } from "lucide-react"

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
    <section id="ai-team" ref={sectionRef} className="relative z-10">
      <div className="rounded-b-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden" style={{ background: 'transparent' }}>
        <div className="container mx-auto px-4 relative z-10 border border-white/20 rounded-2xl p-8 sm:p-12" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              AI & Automation Demo
            </div>

            <h2
              className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-balance mb-6 lg:mb-8 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Automation That{" "}
              <span className="bg-gradient-to-r from-white/80 to-white/60 bg-clip-text text-transparent">
                Fits Your Business
              </span>
            </h2>

            <p
              className={`text-xl text-white/70 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              We design automation systems that integrate smoothly into existing workflows instead of disrupting them.
              Our focus is on reducing manual effort while maintaining clarity and control.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* Left side - Text content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:h-[600px] space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div
                className={`transition-all duration-1000 delay-600 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">Our Automation Process</h3>

              <div className="space-y-3 lg:space-y-4 text-base lg:text-lg text-white leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle />
                    <p>Capture data</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle />
                    <p>Verify inputs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle />
                    <p>Automate workflows</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle />
                    <p>Notify stakeholders</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle />
                    <p>Scale efficiently</p>
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-800 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="p-4 lg:p-6 bg-white/5 rounded-xl border-l-4 border-white backdrop-blur-md">
                  <p className="text-white font-medium text-sm lg:text-base">
                    "Devoryx built an automation system that reduced our manual data entry by 80%. The scope was clear,
                    the timeline was met, and the system just works."
                  </p>
                  <p className="text-xs lg:text-sm text-gray-300 mt-2">— Sarah Chen, Operations Manager</p>
                </div>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="max-w-md w-full">
                <div
                  className={`relative transition-all duration-1000 delay-600 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
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
                            <img
                              src="/images/michael-ai-agent.jpg"
                              alt="AI Agent"
                              className="w-8 h-8 rounded-full object-cover mr-2 mt-1 flex-shrink-0"
                            />
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
                          className="h-96 overflow-y-scroll scrollbar-hide p-4 space-y-3 bg-slate-50"
                          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                          {displayedMessages.map((message, index) => (
                            <div
                              key={index}
                              className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"}`}
                            >
                              {message.sender === "ai" && (
                                <img
                                  src="/images/michael-ai-agent.jpg"
                                  alt="AI"
                                  className="w-6 h-6 rounded-full object-cover mr-2 mt-1 flex-shrink-0"
                                />
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
                              <img
                                src="/images/michael-ai-agent.jpg"
                                alt="AI"
                                className="w-6 h-6 rounded-full object-cover mr-2 mt-1 flex-shrink-0"
                              />
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
        </div>
      </div>
    </section>
  )
}
