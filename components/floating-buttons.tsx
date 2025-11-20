"use client"

import { useState, useEffect } from "react"
import { Mail, Phone } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { areAnalyticsCookiesAllowed } from "@/lib/cookies"

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show floating buttons after 2 seconds for better UX
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    // Track analytics if consented
    if (areAnalyticsCookiesAllowed() && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'floating_whatsapp_button'
      })
    }
  }

  const handlePhoneClick = () => {
    // Track analytics if consented
    if (areAnalyticsCookiesAllowed() && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'floating_phone_button'
      })
    }
  }

  const handleEmailClick = () => {
    // Track analytics if consented
    if (areAnalyticsCookiesAllowed() && typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "email_click", {
        event_category: "engagement",
        event_label: "floating_email_button",
      })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-4 sm:gap-6">
      {/* Email Button - Top */}
      <div className="relative group">
        <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-25 scale-110" />
        <a
          href="mailto:chemparks.in@gmail.com"
          onClick={handleEmailClick}
          className="relative flex items-center justify-center w-12 h-12 bg-red-600 text-white
                   rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300
                   hover:scale-110 hover:shadow-red-600/40 border-2 border-red-500/30"
          aria-label="Email us"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

      {/* Phone Button - Middle */}
      <div className="relative group">
        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-25 scale-110" />
        <a
          href="tel:9500506061"
          onClick={handlePhoneClick}
          className="relative flex items-center justify-center w-12 h-12 bg-blue-600 text-white
                   rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300
                   hover:scale-110 hover:shadow-blue-600/40 border-2 border-blue-500/30"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* WhatsApp Button - Bottom */}
      <div className="relative group">
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-25 scale-110" />
        <a
          href="https://wa.me/919500506061?text=Hi%20ChemParks,%20I'm%20interested%20in%20your%20water%20treatment%20solutions."
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="relative flex items-center justify-center w-12 h-12 bg-green-600 text-white
                   rounded-full shadow-2xl hover:bg-green-700 transition-all duration-300
                   hover:scale-110 hover:shadow-green-600/40 border-2 border-green-500/30"
          aria-label="WhatsApp us"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}