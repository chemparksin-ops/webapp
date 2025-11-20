"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Phone } from "lucide-react"
import { areAnalyticsCookiesAllowed } from "@/lib/cookies"

export function FloatingWhatsApp() {
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

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-4 sm:gap-6">
      {/* Phone Button */}
      <div className="relative group">
        {/* Pulse Animation Background */}
        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-25 scale-110" />

        <a
          href="tel:9500506061"
          onClick={handlePhoneClick}
          className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white
                   rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300
                   hover:scale-110 hover:shadow-blue-600/40 border-2 border-blue-500/30"
          aria-label="Call us"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>

      {/* WhatsApp Button */}
      <div className="relative group">
        {/* Pulse Animation Background */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-25 scale-110" />

        <a
          href="https://wa.me/919500506061?text=Hi%20ChemParks,%20I%20need%20help%20with%20water%20treatment%20solutions"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-500 text-white
                   rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300
                   hover:scale-110 hover:shadow-green-500/40 border-2 border-green-400/30"
          aria-label="WhatsApp us"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
