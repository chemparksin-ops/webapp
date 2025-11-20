"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function DynamicTitle() {
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Only run on client-side
    if (!isClient) return

    // Dynamic page titles based on route
    const titles = {
      "/": "ChemParks India - Best Water Treatment Solutions Company",
      "/about": "About Us - ChemParks India | Leading Water Treatment Experts",
      "/products": "Water Treatment Products | Industrial RO Plants & Systems",
      "/products/chemion-resins": "CHEMION® Resins - Advanced Ion Exchange Technology",
      "/products/aquamem-membranes": "AQUAMEM® Membranes - High-Performance UF/NF/RO Systems",
      "/products/specialty-chemicals": "Water Treatment Chemicals - Custom Formulated Solutions",
      "/products/treatment-plants": "ETP STP ZLD Plants - Complete Water Treatment Solutions",
      "/products/chempure-home": "Home Water Purifiers - Advanced RO UV Systems",
      "/products/spare-parts": "Water Treatment Spare Parts - OEM Quality Components",
      "/services": "Water Treatment Services | 24/7 Support & Maintenance",
      "/services/operations-maintenance": "O&M Services - Preventive Maintenance & Support",
      "/services/system-rehabilitation": "System Rehabilitation - Water Plant Upgrades",
      "/services/water-audits-consulting": "Water Audits & Consulting - Expert Analysis",
      "/services/project-financing": "Project Financing - EPC BOO BOT BOOT Models",
      "/blog": "Water Treatment Blog - Latest Industry Insights & News",
      "/contact": "Contact ChemParks - Get Free Consultation",
      "/news": "News & Updates - ChemParks India",
    }

    // Handle dynamic routes
    let title = titles[pathname as keyof typeof titles]

    // For blog posts and product/service pages, use their specific titles
    if (pathname.startsWith("/blog/")) {
      // This would come from your blog data
      title = "ChemParks Blog - Water Treatment Insights"
    } else if (pathname.startsWith("/services/")) {
      const service = pathname.replace("/services/", "")
      title = `${service.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} - ChemParks Services`
    } else if (pathname.startsWith("/products/")) {
      const product = pathname.replace("/products/", "")
      title = `${product.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} - ChemParks Products`
    }

    if (title) {
      document.title = title
    }
  }, [pathname, isClient])

  return null // This component doesn't render anything, it just manages the title
}
