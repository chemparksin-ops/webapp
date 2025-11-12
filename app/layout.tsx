import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { DynamicTitle } from "@/components/seo-title"
import { CookieConsent } from "@/components/cookie-consent"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { PhoneCapturePopup } from "@/components/phone-capture-popup"
import { Toaster } from "@/components/ui/sonner"
import { ContactSalesPopup } from "@/components/contact-sales-popup"
import { LeadChatWidget } from "@/components/lead-chat-widget"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "ChemParks India - Best Water Treatment Solutions Company | Industrial RO Plant Manufacturer",
    template: "%s | ChemParks India"
  },
  description: "Top water treatment company in India providing industrial RO plants, ETP STP systems, ion exchange resins, water softeners, and zero liquid discharge (ZLD) solutions. 30+ years expertise in water purification technology across Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Gujarat with PAN India presence.",
  keywords: [
    "water treatment company India",
    "industrial RO plant manufacturer India",
    "ETP STP plant manufacturer",
    "water treatment Delhi Mumbai Bangalore",
    "ion exchange resins India",
    "zero liquid discharge ZLD India",
    "water softener manufacturer",
    "sewage treatment plant supplier",
    "effluent treatment plant Gujarat",
    "water treatment Chennai Hyderabad",
    "commercial RO system manufacturer",
    "industrial water purification",
    "drinking water plant supplier",
    "wastewater treatment solutions India",
    "water treatment equipment supplier",
    "CHEMION resins India",
    "AQUAMEM membranes India",
    "water audit consultancy",
    "industrial water plant manufacturer",
    "municipal water treatment India",
    "packaged drinking water plant",
    "mineral water plant manufacturer",
    "water treatment chemicals supplier",
    "best water treatment company India",
    "water treatment plant cost",
    "water treatment equipment price",
    "industrial RO system dealer",
    "sewage treatment plant cost",
    "water purifier plant manufacturer"
  ],
  authors: [{ name: "ChemParks Team" }],
  creator: "ChemParks",
  publisher: "ChemParks",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chemparks.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chemparks.in",
    title: "ChemParks - Advanced Water & Environment Management Solutions",
    description: "Leading provider of comprehensive water treatment solutions with 30+ years of expertise in water and environment management.",
    siteName: "ChemParks",
    images: [
      {
        url: "/Chem_park_Logo_1-01.jpg",
        width: 1200,
        height: 630,
        alt: "ChemParks Water Treatment Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChemParks - Advanced Water & Environment Management Solutions",
    description: "Leading provider of comprehensive water treatment solutions with 30+ years of expertise.",
    images: ["/Chem_park_Logo_1-01.jpg"],
    creator: "@ChemParks",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      {
        url: "/Chem_park_Logo_1-01.jpg",
        type: "image/jpeg",
        sizes: "32x32",
      },
      {
        url: "/Chem_park_Logo_1-01.jpg",
        type: "image/jpeg",
        sizes: "16x16",
      },
      {
        url: "/Chem_park_Logo_1-01.jpg",
        type: "image/jpeg",
        sizes: "48x48",
      },
      {
        url: "/Chem_park_Logo_1-01.jpg",
        type: "image/jpeg",
        sizes: "64x64",
      },
      {
        url: "/Chem_park_Logo_1-01.jpg",
        type: "image/jpeg",
        sizes: "128x128",
      },
      {
        url: "/Chem_park_Logo_1-01.jpg",
        type: "image/jpeg",
        sizes: "256x256",
      },
    ],
    shortcut: "/Chem_park_Logo_1-01.jpg",
    apple: [
      {
        url: "/Chem_park_Logo_1-01.jpg",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ChemParks",
  "url": "https://chemparks.in",
  "logo": "https://chemparks.in/Chem_park_Logo_1-01.jpg",
  "description": "Leading provider of comprehensive water treatment solutions including ion exchange resins, membrane systems, and specialty chemicals for industrial, municipal, and residential applications.",
  "sameAs": [
    "https://twitter.com/ChemParks",
    "https://linkedin.com/company/chemparks"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-XXX-XXXX",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "XXXXX",
    "addressCountry": "Your Country"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={`${geistSans.className} font-sans antialiased`}>
        <DynamicTitle />
        {children}
        <CookieConsent />
        <FloatingWhatsApp />
        <PhoneCapturePopup />
        <ContactSalesPopup />
        <LeadChatWidget />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
