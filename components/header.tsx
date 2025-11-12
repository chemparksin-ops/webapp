"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, Package, Wrench, Info, Mail, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Products", href: "/products", icon: Package },
    { name: "Services", href: "/services", icon: Wrench },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Contact", href: "/contact", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle menu open/close with animation state
  const handleMenuToggle = () => {
    if (isAnimating) return // Prevent multiple rapid toggles

    setIsAnimating(true)
    setIsOpen(!isOpen)

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 300) // Match the animation duration
  }

  // Handle close menu with animation
  const handleCloseMenu = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setIsOpen(false)

    setTimeout(() => {
      setIsAnimating(false)
    }, 300)
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-yellow-400/30"
        : "bg-white border-b border-yellow-400/30"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-white p-1.5">
          <Image
            src="/Chem_park_Logo_1-01.jpg"
            alt="ChemParks Logo"
            width={32}
            height={32}
            className="w-full h-full object-contain"
          />
        </div>
          <span className="font-light tracking-wide text-base sm:text-lg text-foreground">ChemParks</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-light tracking-wide transition-all duration-300 relative ${
                pathname === item.href
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute -bottom-6 left-0 right-0 h-0.5 bg-yellow-400 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-light tracking-wide"
            onClick={() => window.dispatchEvent(new CustomEvent('open-contact-sales-popup'))}
          >
            Contact Sales
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 transform active:scale-95 ${
            isAnimating ? 'pointer-events-none' : ''
          }`}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          disabled={isAnimating}
        >
          <div className={`transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
            {isOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </div>
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-[9998] md:hidden transition-opacity duration-300 ease-in-out"
            onClick={handleCloseMenu}
          />

          {/* Sidebar */}
          <div className={`fixed top-0 left-0 h-full w-72 bg-background shadow-2xl z-[9999] md:hidden transition-transform duration-300 ease-out overflow-hidden flex flex-col ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            {/* Logo and name at top */}
            <div className="flex items-center gap-3 p-4 border-b border-border mt-2 bg-white/50 backdrop-blur-sm">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white p-1.5 shadow-sm">
                <Image
                  src="/Chem_park_Logo_1-01.jpg"
                  alt="ChemParks Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-light tracking-wide text-base text-foreground">ChemParks</span>
              {/* Close button in header */}
              <button
                onClick={handleCloseMenu}
                className="ml-auto p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={20} className="text-foreground" />
              </button>
            </div>

            {/* Navigation items */}
            <div className="flex-1 flex flex-col p-6 gap-2 overflow-y-auto">
              {navigation.map((item, index) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center gap-3 px-4 py-3 text-sm font-light tracking-wide transition-all duration-200 rounded-lg transform hover:scale-[1.02] ${
                      pathname === item.href
                        ? "bg-primary/10 text-primary shadow-md"
                        : "text-foreground hover:bg-primary/10 hover:text-primary hover:shadow-sm"
                    }`}
                    onClick={handleCloseMenu}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <Icon size={18} className={`transform transition-transform duration-200 ${
                      pathname === item.href ? 'scale-110' : 'group-hover:scale-110'
                    }`} />
                    <span className="transform transition-transform duration-200">
                      {item.name}
                    </span>
                  </Link>
                )
              })}
              <Button
                className="w-full bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white mt-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 font-light tracking-wide"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-contact-sales-popup'));
                  handleCloseMenu();
                }}
                style={{
                  animationDelay: `${navigation.length * 50}ms`,
                  animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
              >
                Contact Sales
              </Button>
            </div>

            {/* Powered by at bottom */}
            <div className="border-t border-border p-4 text-center bg-white/30 backdrop-blur-sm">
              <p className="text-xs text-foreground/60 font-light tracking-wide">Powered by ChemParks</p>
            </div>
          </div>
        </>
      )}
    </header>
  )
}