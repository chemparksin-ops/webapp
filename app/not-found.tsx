"use client"

import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"
import { Home, ArrowLeft, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <Loader />
      <Header />

      <main className="min-h-screen flex flex-col">
        {/* Hero Section with Gradient */}
        <section className="flex-1 bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-12">
              <div className="relative w-24 h-24 mx-auto rounded-lg overflow-hidden bg-white p-2 shadow-lg">
                <img
                  src="/Chem_park_Logo_1-01.jpg"
                  alt="ChemParks Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* 404 Message */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-purple-600 mb-4">
                404
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-foreground/60 mb-2">
                Oops! The page you're looking for seems to have vanished.
              </p>
              <p className="text-base text-foreground/50">
                Don't worry, our water treatment solutions are still here to help.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/">
                <Button size="lg" className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
              </Link>
            <Link href="javascript:history.back()">
              <Button size="lg" variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </Link>
            </div>
          </div>
        </section>

        {/* Helpful Links Section */}
        <section className="bg-white border-t border-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                What Were You Looking For?
              </h3>
              <p className="text-foreground/60">
                Here are our most popular pages and services:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Products */}
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-foreground mb-1 group-hover:text-purple-600 transition-colors">
                  Products
                </h4>
                <p className="text-sm text-foreground/60 mb-3">
                  Water treatment solutions
                </p>
                <Link
                  href="/products"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  View Products →
                </Link>
              </div>

              {/* Services */}
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-foreground mb-1 group-hover:text-purple-600 transition-colors">
                  Services
                </h4>
                <p className="text-sm text-foreground/60 mb-3">
                  Expert support solutions
                </p>
                <Link
                  href="/services"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  Our Services →
                </Link>
              </div>

              {/* Blog */}
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-foreground mb-1 group-hover:text-purple-600 transition-colors">
                  Blog
                </h4>
                <p className="text-sm text-foreground/60 mb-3">
                  Latest insights & news
                </p>
                <Link
                  href="/blog"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  Read Blog →
                </Link>
              </div>

              {/* Contact */}
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-foreground mb-1 group-hover:text-purple-600 transition-colors">
                  Contact
                </h4>
                <p className="text-sm text-foreground/60 mb-3">
                  Get in touch with us
                </p>
                <Link
                  href="/contact"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Need Help Section */}
        <section className="bg-gradient-to-r from-purple-700 to-purple-800 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Still Can't Find What You Need?
            </h3>
            <p className="text-purple-100 mb-6">
              Our water treatment experts are here to help you find the right solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700" onClick={() => window.location.reload()}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Page
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}