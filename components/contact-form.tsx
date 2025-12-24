"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

// Initialize EmailJS - Get these from your EmailJS dashboard
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Phone validation for Indian numbers only
const validateIndianPhoneNumber = (phone: string): boolean => {
  // Remove spaces and hyphens
  const cleanPhone = phone.replace(/[\s-]/g, "")
  
  // Must start with +91 followed by exactly 10 digits
  const indianPhoneRegex = /^\+91\d{10}$/
  
  return indianPhoneRegex.test(cleanPhone)
}

// Validate email format
const validateEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email)
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  // Initialize EmailJS on component mount
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setFieldErrors({})

    const newErrors: Record<string, string> = {}

    // Validate email
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Validate phone if provided
    if (formData.phone && !validateIndianPhoneNumber(formData.phone)) {
      newErrors.phone = "Phone must be in format +91 followed by 10 digits (e.g., +91 98765 43210)"
    }

    // If there are validation errors, display them
    if (Object.keys(newErrors).length > 0) {
      setFieldErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    try {
      // Check if EmailJS is configured
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS is not properly configured. Please check your environment variables.")
      }

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: "your-email@erebor.world", // Change this to your email
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "Not provided",
          phone: formData.phone || "Not provided",
          service: formData.service,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        })
      }, 3000)
    } catch (err) {
      setIsSubmitting(false)
      const errorMessage = err instanceof Error ? err.message : "Failed to send message. Please try again."
      setError(errorMessage)
      console.error("EmailJS Error:", err)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
        <div className="text-center">
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-white/70">We've received your message and will get back to you within 24 hours.</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-6">
          <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Something Went Wrong</h3>
          <p className="text-white/70 mb-4">{error}</p>
          <button
            onClick={() => setError(null)}
            className="bg-white hover:bg-gray-50 text-black font-medium px-6 py-2 rounded-lg transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2">
              Email Address * {fieldErrors.email && <span className="text-red-400 text-xs">({fieldErrors.email})</span>}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border rounded-lg text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all ${
                fieldErrors.email 
                  ? "border-red-500 focus:ring-red-400" 
                  : "border-white/20 focus:ring-white/30"
              }`}
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2">
              Phone Number (India) {fieldErrors.phone && <span className="text-red-400 text-xs">({fieldErrors.phone})</span>}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border rounded-lg text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all ${
                fieldErrors.phone 
                  ? "border-red-500 focus:ring-red-400" 
                  : "border-white/20 focus:ring-white/30"
              }`}
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2">
            Service Interested In *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          >
            <option value="" className="bg-slate-900">
              Select a service
            </option>
            <option value="web-development" className="bg-slate-900">
              Web Development
            </option>
            <option value="mobile-development" className="bg-slate-900">
              Mobile Development
            </option>
            <option value="ai-chatbot" className="bg-slate-900">
              AI Chatbot Development
            </option>
            <option value="automation" className="bg-slate-900">
              Process Automation
            </option>
            <option value="marketing" className="bg-slate-900">
              Digital Marketing
            </option>
            <option value="training" className="bg-slate-900">
              Training & Development
            </option>
            <option value="other" className="bg-slate-900">
              Other
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none"
            placeholder="Tell us about your project, goals, and timeline..."
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white hover:bg-gray-50 text-black font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group text-sm sm:text-base"
          >
            {isSubmitting ? (
              <>
                <span className="mr-2">Sending...</span>
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              </>
            ) : (
              <>
                <span className="mr-2">Send Message</span>
                <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 hidden sm:inline" />
              </>
            )}
          </button>
        </div>

        <p className="text-sm text-white/50 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  )
}
