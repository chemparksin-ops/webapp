"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submittedFirstName, setSubmittedFirstName] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Reset success status when user starts typing again
    if (submitStatus === "success") {
      setSubmitStatus("idle")
      setSubmittedFirstName("")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmittedFirstName(formData.firstName)
        setSubmitStatus("success")
        setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Loader />
      <Header />
      <main className="pt-16 md:pt-24">
        {/* Professional Page Header */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">Contact</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive water treatment solutions for your industrial needs
            </p>
          </div>
        </section>

        {/* Professional Contact Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 md:p-12">
              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-base">Thank you, {submittedFirstName}!</h4>
                      <p className="text-sm">Our team will contact you shortly.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-base">Something went wrong</h4>
                      <p className="text-sm">Please try again or call us directly.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2 tracking-wide">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-900 placeholder-gray-400 text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2 tracking-wide">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-900 placeholder-gray-400 text-base"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2 tracking-wide">Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john.doe@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-900 placeholder-gray-400 text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2 tracking-wide">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-900 placeholder-gray-400 text-base"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2 tracking-wide">Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Acme Corporation"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-900 placeholder-gray-400 text-base"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2 tracking-wide">Message *</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-900 placeholder-gray-400 resize-none text-base"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-lg text-base font-light tracking-wide transition-colors"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Professional Office Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">Office Information</h2>
              <p className="text-lg text-gray-600 font-light">Reach out to us for any inquiries</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Address */}
              <div className="bg-white border border-gray-100 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">Address</h3>
                <p className="text-base text-gray-600 leading-relaxed font-light">
                  5A, Thiruvalluvar Nagar<br />
                  Sirupoolvapatti, Ring Road<br />
                  Tirupur - 641603<br />
                  Tamil Nadu
                </p>
              </div>

              {/* Phone */}
              <a href="tel:9500506061" className="block bg-white border border-gray-100 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">Phone</h3>
                <p className="text-base text-gray-600 font-mono font-light">9500506061</p>
              </a>

              {/* Email */}
              <a href="mailto:info@chemparks.in" className="block bg-white border border-gray-100 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">Email</h3>
                <p className="text-base text-gray-600 font-mono font-light">chemparks@chemparks.in</p>
                                <p className="text-base text-gray-600 font-mono font-light">chemparks.in@gmail.com</p>
              </a>
            </div>

            {/* GST Information */}

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
