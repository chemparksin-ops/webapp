"use client"

import { useState, useEffect } from "react"
import { X, Shield, Cookie, Check, Info } from "lucide-react"
import { getCookieConsent, setCookieConsent, DEFAULT_PREFERENCES, type CookiePreferences } from "@/lib/cookies"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = getCookieConsent()

    if (!hasConsented) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
        setIsLoading(false)
      }, 2000)

      return () => clearTimeout(timer)
    } else {
      setIsLoading(false)
    }
  }, [])

  const handleAccept = () => {
    // Accept all cookies
    const acceptPreferences = {
      ...DEFAULT_PREFERENCES,
      analytics: true,
      marketing: false, // Still privacy-focused
    }

    setCookieConsent("accepted", acceptPreferences)
    setIsVisible(false)

    // Initialize analytics if consented
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'denied'
      })
    }
  }

  const handleReject = () => {
    // Reject non-essential cookies
    setCookieConsent("rejected", DEFAULT_PREFERENCES)
    setIsVisible(false)

    // Update analytics consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      })
    }
  }

  const handleCustomizeOpen = () => {
    setShowCustomize(true)
  }

  const handleCustomizeSave = () => {
    setCookieConsent("customized", preferences)
    setShowCustomize(false)
    setIsVisible(false)

    // Update analytics consent based on preferences
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': preferences.analytics ? 'granted' : 'denied',
        'ad_storage': preferences.marketing ? 'granted' : 'denied'
      })
    }
  }

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: value }))
  }

  // Don't render while loading or if not visible
  if (isLoading || !isVisible) return null

  // Add TypeScript interface for window.gtag
  declare global {
    interface Window {
      gtag?: (command: string, action: string, options?: any) => void
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6 safe-area-inset">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-lg border border-gray-200 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 transform transition-all duration-500 animate-slide-in-up">
          <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-start">
            {/* Icon */}
            <div className="flex-shrink-0 self-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2 pr-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                  <span className="line-clamp-2">Cookie Preferences</span>
                </h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="flex-shrink-0 p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                We use cookies to enhance your experience and analyze site traffic.
                By clicking "Accept All", you agree to our use of cookies.
              </p>

              <div className="text-xs text-gray-500 space-y-0.5 hidden sm:block">
                <p>• Essential cookies are always enabled for basic functionality</p>
                <p>• Analytics cookies help us improve your experience</p>
                <p>• No third-party advertising or tracking cookies</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={handleAccept}
                className="w-full px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white
                         font-semibold rounded-lg sm:rounded-xl hover:from-purple-700 hover:to-purple-800
                         transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-600/30
                         border-2 border-purple-500/20 text-xs sm:text-sm min-h-[44px]"
              >
                Accept All
              </button>

              <button
                onClick={handleCustomizeOpen}
                className="w-full px-4 py-2.5 sm:px-6 sm:py-3 bg-white border-2 border-gray-300 text-gray-700
                         font-semibold rounded-lg sm:rounded-xl hover:bg-gray-50 hover:border-gray-400
                         transition-all duration-300 text-xs sm:text-sm min-h-[44px]"
              >
                Customize
              </button>

              <button
                onClick={handleReject}
                className="w-full px-4 py-2.5 sm:px-6 sm:py-3 text-gray-500 font-medium rounded-lg sm:rounded-xl
                         hover:text-gray-700 hover:bg-gray-100
                         transition-all duration-300 text-xs sm:text-sm min-h-[44px]"
              >
                Reject
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Customization Modal */}
      {showCustomize && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 safe-area-inset">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8 animate-slide-in-up my-4">
            {/* Header */}
            <div className="flex items-start justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">Cookie Preferences</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Choose which cookies you want to allow</p>
                </div>
              </div>
              <button
                onClick={() => setShowCustomize(false)}
                className="flex-shrink-0 p-1.5 sm:p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {/* Essential Cookies */}
              <div className="border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 flex-wrap">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Essential Cookies</h4>
                      <span className="px-1.5 sm:px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded-full">Required</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">These cookies are necessary for the website to function and cannot be disabled.</p>
                  </div>
                  <div className="ml-2 sm:ml-4 flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 bg-gray-100 border-gray-300 rounded cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 flex-wrap">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Analytics Cookies</h4>
                      <span className="px-1.5 sm:px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Optional</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Help us understand how visitors interact with our website to improve user experience.</p>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-gray-500">
                      <Info className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                      <span className="line-clamp-2">Includes Google Analytics, website performance metrics</span>
                    </div>
                  </div>
                  <div className="ml-2 sm:ml-4 flex-shrink-0">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => updatePreference('analytics', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] sm:after:top-[2px] after:left-[1px] sm:after:left-[2px] after:bg-white after:rounded-full after:h-3.5 sm:after:h-5 after:w-3.5 sm:after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 flex-wrap">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Marketing Cookies</h4>
                      <span className="px-1.5 sm:px-2 py-0.5 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Optional</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Used to deliver advertisements relevant to you and your interests.</p>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-gray-500">
                      <Info className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                      <span className="line-clamp-2">Currently disabled for privacy protection</span>
                    </div>
                  </div>
                  <div className="ml-2 sm:ml-4 flex-shrink-0">
                    <label className="relative inline-flex items-center cursor-pointer opacity-50">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => updatePreference('marketing', e.target.checked)}
                        className="sr-only peer"
                        disabled
                      />
                      <div className="w-9 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] sm:after:top-[2px] after:left-[1px] sm:after:left-[2px] after:bg-white after:rounded-full after:h-3.5 sm:after:h-5 after:w-3.5 sm:after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex items-start gap-2 sm:gap-3">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <h5 className="font-medium text-blue-900 mb-1 text-sm sm:text-base">Your Privacy Matters</h5>
                  <p className="text-xs sm:text-sm text-blue-700">
                    ChemParks is committed to protecting your privacy. We never sell your data and only use cookies to enhance your experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-stretch sm:justify-end">
              <button
                onClick={() => setShowCustomize(false)}
                className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3 text-gray-700 font-medium rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all duration-300 text-xs sm:text-sm min-h-[44px]"
              >
                Cancel
              </button>

              <button
                onClick={handleCustomizeSave}
                className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white
                         font-semibold rounded-lg sm:rounded-xl hover:from-purple-700 hover:to-purple-800
                         transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-600/30 text-xs sm:text-sm min-h-[44px]"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
