// Cookie utilities for ChemParks website
export interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

export const COOKIE_KEYS = {
  CONSENT: 'chemparks-cookie-consent',
  PREFERENCES: 'chemparks-cookie-preferences',
  EXPIRY: 'chemparks-cookie-consent-expiry',
} as const

// Default cookie preferences
export const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true, // Always enabled
  analytics: false,
  marketing: false,
}

// Check if cookies have expired
export function hasCookiesExpired(): boolean {
  try {
    const expiry = localStorage.getItem(COOKIE_KEYS.EXPIRY)
    if (!expiry) return true

    const expiryDate = new Date(expiry)
    return new Date() > expiryDate
  } catch {
    return true
  }
}

// Get user's cookie consent status
export function getCookieConsent(): string | null {
  try {
    if (hasCookiesExpired()) {
      clearCookieData()
      return null
    }
    return localStorage.getItem(COOKIE_KEYS.CONSENT)
  } catch {
    return null
  }
}

// Get user's cookie preferences
export function getCookiePreferences(): CookiePreferences {
  try {
    if (hasCookiesExpired()) {
      clearCookieData()
      return DEFAULT_PREFERENCES
    }

    const preferences = localStorage.getItem(COOKIE_KEYS.PREFERENCES)
    if (!preferences) return DEFAULT_PREFERENCES

    return { ...DEFAULT_PREFERENCES, ...JSON.parse(preferences) }
  } catch {
    return DEFAULT_PREFERENCES
  }
}

// Set cookie consent with expiry
export function setCookieConsent(consent: string, preferences?: CookiePreferences): void {
  try {
    const expiryDate = new Date()

    // Set expiry based on consent type
    if (consent === 'accepted') {
      expiryDate.setFullYear(expiryDate.getFullYear() + 1) // 1 year
    } else if (consent === 'rejected') {
      expiryDate.setMonth(expiryDate.getMonth() + 6) // 6 months
    } else {
      expiryDate.setMonth(expiryDate.getMonth() + 3) // 3 months for customized
    }

    localStorage.setItem(COOKIE_KEYS.CONSENT, consent)
    localStorage.setItem(COOKIE_KEYS.EXPIRY, expiryDate.toISOString())

    if (preferences) {
      localStorage.setItem(COOKIE_KEYS.PREFERENCES, JSON.stringify(preferences))
    }
  } catch (error) {
    console.warn('Failed to set cookie consent:', error)
  }
}

// Clear all cookie data
export function clearCookieData(): void {
  try {
    localStorage.removeItem(COOKIE_KEYS.CONSENT)
    localStorage.removeItem(COOKIE_KEYS.PREFERENCES)
    localStorage.removeItem(COOKIE_KEYS.EXPIRY)
  } catch (error) {
    console.warn('Failed to clear cookie data:', error)
  }
}

// Check if analytics cookies are allowed
export function areAnalyticsCookiesAllowed(): boolean {
  const consent = getCookieConsent()
  if (consent !== 'accepted') return false

  const preferences = getCookiePreferences()
  return preferences.analytics
}

// Check if marketing cookies are allowed
export function areMarketingCookiesAllowed(): boolean {
  const consent = getCookieConsent()
  if (consent !== 'accepted') return false

  const preferences = getCookiePreferences()
  return preferences.marketing
}

// Performance cookies (always enabled with consent)
export function arePerformanceCookiesAllowed(): boolean {
  return getCookieConsent() === 'accepted'
}
