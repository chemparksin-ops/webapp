import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { DynamicTitle } from "@/components/seo-title"
import { CookieConsent } from "@/components/cookie-consent"
import { FloatingButtons } from "@/components/floating-buttons"
import { PhoneCapturePopup } from "@/components/phone-capture-popup"
import { ContactSalesPopup } from "@/components/contact-sales-popup"
import { LeadChatWidget } from "@/components/lead-chat-widget"
import { ContactProvider } from "@/contexts/contact-context"
import { ContactModalManager } from "@/components/contact-modal-manager"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "ChemParks India - Industrial Water Treatment Plant Manufacturer & Solutions",
    template: "%s | ChemParks India",
  },
  description:
    "Leading water treatment company in India offering Industrial RO Plants, ETP, STP, ZLD Systems, and Water Treatment Chemicals. Expert solutions for boiler & cooling tower water treatment, water audits, and membrane technologies.",
  keywords: [
    "water treatment plant manufacturer",
    "industrial RO plant India",
    "effluent treatment plant ETP",
    "sewage treatment plant STP",
    "zero liquid discharge ZLD system",
    "boiler water treatment chemicals",
    "cooling tower water treatment",
    "industrial water purification",
    "water treatment chemicals supplier",
    "RO membrane cleaning chemicals",
    "water audit services India",
    "commercial water softener",
    "demineralization plant DM plant",
    "water treatment consultation",
    "industrial water filters",
    "wastewater recycling plant",
    "ChemParks water solutions",
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
    description:
      "Leading provider of comprehensive water treatment solutions with 30+ years of expertise in water and environment management.",
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
    icon: "/Chem_park_Logo_1-01.jpg",
    shortcut: "/Chem_park_Logo_1-01.jpg",
    apple: "/Chem_park_Logo_1-01.jpg",
  },
  generator: "v0.app",
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ChemParks",
  url: "https://chemparks.in",
  logo: "https://chemparks.in/Chem_park_Logo_1-01.jpg",
  description:
    "Leading provider of comprehensive water treatment solutions including ion exchange resins, membrane systems, and specialty chemicals for industrial, municipal, and residential applications.",
  sameAs: ["https://twitter.com/ChemParks", "https://linkedin.com/company/chemparks"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-XXX-XXXX",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Your City",
    addressRegion: "Your State",
    postalCode: "XXXXX",
    addressCountry: "Your Country",
  },
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
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${geistSans.className} font-sans antialiased`}>
        <ContactProvider>
          <DynamicTitle />
          {children}
          <ContactModalManager />
          <CookieConsent />
          <FloatingButtons />
          <PhoneCapturePopup />
          <ContactSalesPopup />
          <LeadChatWidget />
          <Analytics />
        </ContactProvider>
      </body>
    </html>
  )
}
