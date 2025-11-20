"use client"

import { useState, useEffect } from "react"
import { X, Phone, User, MessageCircle, Send } from "lucide-react"
import { getCookieConsent } from "@/lib/cookies"

const STORAGE_KEY = "chemparks-lead-widget-submitted"

export function LeadChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [shouldShowWidget, setShouldShowWidget] = useState(false)

  useEffect(() => {
    // Check if widget was already submitted in this session
    const alreadySubmitted = localStorage.getItem(STORAGE_KEY) === 'true'
    if (alreadySubmitted) {
      setIsSubmitted(true)
      return
    }

    // Check if user has already made cookie consent decision
    const hasConsent = getCookieConsent()

    // Only show widget if user has already made consent decision (cookies not showing)
    if (hasConsent) {
      // Auto-popup after 5 seconds if not already submitted and cookies are not showing
      const timer = setTimeout(() => {
        if (!isSubmitted && !isOpen) {
          setShouldShowWidget(true)
          setIsOpen(true)
        }
      }, 5000)

      return () => clearTimeout(timer)
    } else {
      // Don't show widget at all if cookies are still waiting for consent
      setShouldShowWidget(false)
    }
  }, [])

  useEffect(() => {
    // Handle tab close - clean up session storage
    const handleTabClose = () => {
      // Optional: Save current form data in case user accidentally closes tab
      if (formData.name || formData.phone) {
        sessionStorage.setItem('chemparks-widget-form-data', JSON.stringify(formData))
      }
    }

    // Load any saved form data from session storage
    const savedFormData = sessionStorage.getItem('chemparks-widget-form-data')
    if (savedFormData) {
      try {
        const parsed = JSON.parse(savedFormData)
        setFormData(parsed)
        // Clear the saved data after loading
        sessionStorage.removeItem('chemparks-widget-form-data')
      } catch (error) {
        console.error('Error parsing saved form data:', error)
      }
    }

    window.addEventListener('beforeunload', handleTabClose)
    return () => {
      window.removeEventListener('beforeunload', handleTabClose)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: formData.name,
          lastName: "",
          email: "",
          phone: formData.phone,
          company: "",
          message: "Lead submitted from chat widget",
          source: "chat-widget",
          sendTo: "info@chemparks.in" // Specify where to send the email
        })
      })

      if (response.ok) {
        setShowSuccess(true)
        setFormData({ name: "", phone: "" })
        setIsSubmitted(true)
        // Mark as submitted in localStorage to prevent re-showing
        localStorage.setItem(STORAGE_KEY, 'true')

        setTimeout(() => {
          setShowSuccess(false)
          setIsOpen(false)
        }, 3000)
      }
    } catch (error) {
      console.error("Error submitting lead:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Don't render anything if already submitted, not open, or if widget shouldn't show (cookies are showing)
  if (isSubmitted || !isOpen || !shouldShowWidget) {
    return null
  }

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-24 z-50 w-full sm:w-auto max-w-[calc(100vw-2rem)] sm:max-w-none">
      {/* Chat Window Only - positioned for mobile responsiveness */}
      <div className="absolute bottom-0 right-0 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all duration-300 scale-100 opacity-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 sm:p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-xs sm:text-sm">Chat with ChemParks</h3>
                <p className="text-xs opacity-90">We typically reply in minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          {showSuccess ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Thank You!</h4>
              <p className="text-foreground/60 text-sm">Thanks for the submission, our team will contact you ASAP!</p>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <p className="text-sm text-foreground/70 mb-1">
                  Hello! 👋 Welcome to ChemParks
                </p>
                <p className="text-xs text-foreground/50">
                  Please share your details and our team will get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.phone}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-foreground/40 text-center mt-3">
                By sending, you agree to our privacy policy
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
