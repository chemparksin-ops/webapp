"use client"

import { useEffect } from "react"
import { ContactModal } from "./contact-modal"
import { useContact } from "@/contexts/contact-context"

export function ContactModalManager() {
  const { isModalOpen, modalType, productName, closeModal } = useContact()

  useEffect(() => {
    // Handle custom events for backward compatibility
    const handleContactSales = () => {
      // This event can be dispatched to open the contact modal
    }

    window.addEventListener("open-contact-sales-popup", handleContactSales)

    return () => {
      window.removeEventListener("open-contact-sales-popup", handleContactSales)
    }
  }, [])

  return (
    <ContactModal
      isOpen={isModalOpen}
      onClose={closeModal}
      type={modalType}
      productName={productName}
    />
  )
}