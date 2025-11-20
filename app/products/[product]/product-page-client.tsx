"use client"

import { useContact } from "@/contexts/contact-context"

interface ProductPageClientProps {
  product: any
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const { openModal } = useContact()

  const handleGetQuote = () => {
    openModal("quote", product.title)
  }

  const handleTalkEngineer = () => {
    openModal("engineer", product.title)
  }

  const handleEmailUs = () => {
    openModal("email", product.title)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={handleGetQuote}
        className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {product.cta.primary}
      </button>
      <button
        onClick={handleTalkEngineer}
        className="border border-white text-white hover:bg-white hover:text-blue-700 bg-transparent px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        {product.cta.secondary}
      </button>
      <button
        onClick={handleEmailUs}
        className="border border-white text-white hover:bg-white hover:text-blue-700 bg-transparent px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        {product.cta.tertiary}
      </button>
    </div>
  )
}