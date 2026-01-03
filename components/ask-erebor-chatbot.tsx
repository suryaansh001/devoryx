"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, Send, X, Bot, User, AlertTriangle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { getSmartResponse } from "@/lib/erebor-chatbot"

// Rate limiting configuration
const RATE_LIMIT_CONFIG = {
  maxRequestsPerMinute: 10,
  maxRequestsPerHour: 50,
  windowMs: 60 * 1000, // 1 minute
  hourlyWindowMs: 60 * 60 * 1000, // 1 hour
}

interface RateLimitData {
  requests: number[]
  lastReset: number
  hourlyRequests: number[]
  hourlyLastReset: number
}

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
  isPrefilled?: boolean
  showContactButton?: boolean
  isRateLimited?: boolean
}

const initialMessages: Message[] = [
  {
    id: '1',
    content: "Hello! I'm Erebor's AI consultant. I can provide instant answers to common questions or use advanced AI for more complex inquiries. Choose from the quick options below or ask me anything!",
    role: 'assistant',
    timestamp: new Date(),
    isPrefilled: false,
    showContactButton: false
  }
]

const suggestedQuestions = [
  "What services does Erebor offer?",
  "How much do your services cost?",
  "How long does a typical project take?",
  "Do you work with startups?",
  "What technologies do you use?"
]

const predefinedResponses = {
  "What services does Erebor offer?": "Erebor offers custom web development, AI & ML solutions, automation systems, mobile app development, corporate training, and billing software. We specialize in building tailored solutions for real business workflows.",
  "How much do your services cost?": "Our pricing is project-based and depends on complexity and scope. We offer competitive rates starting from $5,000 for smaller projects. Contact us for a free consultation and detailed quote.",
  "How long does a typical project take?": "Most projects take 2-8 weeks depending on complexity. We deliver in phases to ensure early value and faster iteration. Larger systems are broken down into manageable milestones.",
  "Do you work with startups?": "Yes! We love working with startups. We understand budget constraints and can help you build MVPs quickly. Many of our clients are early-stage companies looking to scale.",
  "What technologies do you use?": "We use modern technologies like React, Next.js, Node.js, Python, AI/ML frameworks (TensorFlow, PyTorch), cloud platforms (AWS, Vercel), and databases (PostgreSQL, MongoDB). We choose the best tools for each project."
}

// Rate limiting utility functions
const getClientIdentifier = (): string => {
  // Use a combination of user agent and screen properties as a simple client identifier
  // In production, you'd want to use proper IP-based tracking on the server
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  ctx?.fillText(navigator.userAgent, 0, 0)
  return btoa(canvas.toDataURL()).substring(0, 16)
}

const getRateLimitData = (): RateLimitData => {
  const clientId = getClientIdentifier()
  const stored = localStorage.getItem(`chatbot_ratelimit_${clientId}`)
  if (stored) {
    return JSON.parse(stored)
  }
  return {
    requests: [],
    lastReset: Date.now(),
    hourlyRequests: [],
    hourlyLastReset: Date.now()
  }
}

const saveRateLimitData = (data: RateLimitData): void => {
  const clientId = getClientIdentifier()
  localStorage.setItem(`chatbot_ratelimit_${clientId}`, JSON.stringify(data))
}

const checkRateLimit = (): { allowed: boolean; resetTime?: number; limitType?: 'minute' | 'hour' } => {
  const now = Date.now()
  const data = getRateLimitData()

  // Clean up old requests
  data.requests = data.requests.filter(time => now - time < RATE_LIMIT_CONFIG.windowMs)
  data.hourlyRequests = data.hourlyRequests.filter(time => now - time < RATE_LIMIT_CONFIG.hourlyWindowMs)

  // Check minute limit
  if (data.requests.length >= RATE_LIMIT_CONFIG.maxRequestsPerMinute) {
    const oldestRequest = Math.min(...data.requests)
    const resetTime = oldestRequest + RATE_LIMIT_CONFIG.windowMs
    return { allowed: false, resetTime, limitType: 'minute' }
  }

  // Check hourly limit
  if (data.hourlyRequests.length >= RATE_LIMIT_CONFIG.maxRequestsPerHour) {
    const oldestRequest = Math.min(...data.hourlyRequests)
    const resetTime = oldestRequest + RATE_LIMIT_CONFIG.hourlyWindowMs
    return { allowed: false, resetTime, limitType: 'hour' }
  }

  return { allowed: true }
}

const recordRequest = (): void => {
  const now = Date.now()
  const data = getRateLimitData()

  data.requests.push(now)
  data.hourlyRequests.push(now)

  saveRateLimitData(data)
}

const getRateLimitMessage = (resetTime: number, limitType: 'minute' | 'hour'): string => {
  const resetInMinutes = Math.ceil((resetTime - Date.now()) / (1000 * 60))
  if (limitType === 'minute') {
    return `You've reached the limit of ${RATE_LIMIT_CONFIG.maxRequestsPerMinute} messages per minute. Please wait ${resetInMinutes} minute(s) before sending another message.`
  } else {
    const resetInHours = Math.ceil((resetTime - Date.now()) / (1000 * 60 * 60))
    return `You've reached the limit of ${RATE_LIMIT_CONFIG.maxRequestsPerHour} messages per hour. Please wait ${resetInHours} hour(s) before sending another message.`
  }
}

// Enhanced AI response function with prefilled responses, LLM fallback, and rate limiting
const getAIResponse = async (userMessage: string): Promise<{
  response: string
  isPrefilled: boolean
  showContactButton: boolean
  isRateLimited: boolean
}> => {
  // Check rate limit first
  const rateLimitCheck = checkRateLimit()
  if (!rateLimitCheck.allowed && rateLimitCheck.resetTime && rateLimitCheck.limitType) {
    return {
      response: getRateLimitMessage(rateLimitCheck.resetTime, rateLimitCheck.limitType),
      isPrefilled: false,
      showContactButton: false,
      isRateLimited: true
    }
  }

  // Record the request
  recordRequest()

  // Get response using the smart response logic
  try {
    const { response, usedLLM } = await getSmartResponse(userMessage)
    return {
      response,
      isPrefilled: !usedLLM,
      showContactButton: false,
      isRateLimited: false
    }
  } catch (error) {
    console.error('Error getting AI response:', error)

    // Fallback to helpful response with contact button
    return {
      response: "I apologize, but I'm having trouble connecting to my knowledge base right now. Please try again or contact us directly at hello@erebor.world for immediate assistance.",
      isPrefilled: false,
      showContactButton: true,
      isRateLimited: false
    }
  }
}

export function AskEreborChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isRateLimited, setIsRateLimited] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = (smooth = true) => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'end'
      })
    }
  }

  useEffect(() => {
    // Scroll to bottom when messages change
    const timeoutId = setTimeout(() => scrollToBottom(), 100)
    return () => clearTimeout(timeoutId)
  }, [messages])

  useEffect(() => {
    // Scroll to bottom when typing starts
    if (isTyping) {
      const timeoutId = setTimeout(() => scrollToBottom(), 100)
      return () => clearTimeout(timeoutId)
    }
  }, [isTyping])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      role: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      const { response, isPrefilled, showContactButton, isRateLimited: messageRateLimited } = await getAIResponse(userMessage.content)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
        isPrefilled,
        showContactButton,
        isRateLimited: messageRateLimited
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsRateLimited(messageRateLimited)
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble responding right now. Please try again or contact us directly at hello@erebor.world",
        role: 'assistant',
        timestamp: new Date(),
        isPrefilled: false,
        showContactButton: true,
        isRateLimited: false
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSuggestedQuestion = (question: string) => {
    // Check rate limit before sending
    const rateLimitCheck = checkRateLimit()
    if (!rateLimitCheck.allowed) {
      setIsRateLimited(true)
      const rateLimitMessage: Message = {
        id: Date.now().toString(),
        content: rateLimitCheck.resetTime && rateLimitCheck.limitType
          ? getRateLimitMessage(rateLimitCheck.resetTime, rateLimitCheck.limitType)
          : "Rate limit exceeded. Please wait before sending more messages.",
        role: 'assistant',
        timestamp: new Date(),
        isPrefilled: false,
        showContactButton: false,
        isRateLimited: true
      }
      setMessages(prev => [...prev, rateLimitMessage])
      return
    }

    setInputValue(question)
    // Immediately send the message without requiring user to press enter
    setTimeout(async () => {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: question,
        role: 'user',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, userMessage])
      setInputValue("")

      // Get prefilled response immediately
      const { response, isPrefilled, showContactButton, isRateLimited: messageRateLimited } = await getAIResponse(question)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
        isPrefilled,
        showContactButton,
        isRateLimited: messageRateLimited
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsRateLimited(messageRateLimited)
    }, 100)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </Button>
      </div>

      {/* Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg h-[80vh] max-h-[800px] p-0 bg-black/95 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col">
          {/* Header */}
          <DialogHeader className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-white text-lg font-semibold">Ask Erebor</DialogTitle>
                  <p className="text-white/60 text-sm">AI Consultant • {messages.length - 1} messages</p>
                </div>
              </div>
              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-cyan-400">Thinking...</span>
                </div>
              )}
            </div>
          </DialogHeader>

          {/* Messages */}
          <ScrollArea className="flex-1 min-h-0">
            <div className="px-6 py-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-lg ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-blue-500/25'
                        : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-black/25'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs opacity-60">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                      {message.role === 'assistant' && message.id !== '1' && (
                        <div className="flex items-center gap-2">
                          {message.isRateLimited && (
                            <span className="text-xs opacity-60 bg-red-500/20 text-red-400 px-2 py-1 rounded-full flex items-center gap-1">
                              <AlertTriangle className="h-3 w-3" />
                              Rate Limited
                            </span>
                          )}
                          {message.isPrefilled && !message.isRateLimited && (
                            <span className="text-xs opacity-60 bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                              Instant
                            </span>
                          )}
                          {!message.isPrefilled && !message.showContactButton && !message.isRateLimited && (
                            <span className="text-xs opacity-40 bg-white/10 px-2 py-1 rounded-full">
                              AI
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    {message.showContactButton && (
                      <div className="mt-3">
                        <a
                          href="mailto:hello@erebor.world"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-colors"
                        >
                          Contact Us
                        </a>
                      </div>
                    )}
                  </div>
                  {message.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Invisible element to scroll to */}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Suggested Questions */}
          {messages.length === 1 && !isTyping && (
            <div className="px-6 pb-4">
              <p className="text-white/60 text-sm mb-3">Quick answers for common questions:</p>
              <div className="space-y-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="w-full text-left px-3 py-3 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/80 hover:text-white transition-all duration-200 hover:border-white/20"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="px-6 pb-6">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isRateLimited ? "Rate limit exceeded. Please wait..." : "Ask me anything about Erebor..."}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                disabled={isTyping || isRateLimited}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping || isRateLimited}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white disabled:opacity-50"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            {isRateLimited && (
              <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" />
                Rate limiting active. Please wait before sending more messages.
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}