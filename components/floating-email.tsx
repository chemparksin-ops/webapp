"use client"

import { useState, useEffect } from "react"
import { Mail } from "lucide-react"
import { areAnalyticsCookiesAllowed } from "@/lib/cookies"

export function FloatingEmail() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show floating buttons after 2 seconds for better UX
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

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
    <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 flex flex-col items-end gap-4 sm:gap-6">
      {/* Email Button */}
      <div className="relative group">
        {/* Pulse Animation Background */}
        <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-25 scale-110" />

        <a
          href="mailto:chemparks.in@gmail.com"
          onClick={handleEmailClick}
          className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-600 text-white
                   rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300
                   hover:scale-110 hover:shadow-red-600/40 border-2 border-red-500/30"
          aria-label="Email us"
        >
          <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </div>
  )
}
