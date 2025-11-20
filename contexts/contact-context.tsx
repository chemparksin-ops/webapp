"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface ContactContextType {
  isModalOpen: boolean
  modalType: "quote" | "engineer" | "email" | "contact-sales"
  productName: string
  openModal: (type: ContactContextType["modalType"], productName?: string) => void
  closeModal: () => void
}

const ContactContext = createContext<ContactContextType | undefined>(undefined)

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<ContactContextType["modalType"]>("contact-sales")
  const [productName, setProductName] = useState("")

  const openModal = (type: ContactContextType["modalType"], name?: string) => {
    setModalType(type)
    setProductName(name || "")
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <ContactContext.Provider
      value={{
        isModalOpen,
        modalType,
        productName,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export function useContact() {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider")
  }
  return context
}