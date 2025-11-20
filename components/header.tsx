"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, Package, Wrench, Info, Mail, BookOpen, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useContact } from "@/contexts/contact-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const pathname = usePathname()
  const { openModal } = useContact()
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Swipe detection helpers
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && isOpen) {
      handleCloseMenu()
    }
    if (isRightSwipe && !isOpen && window.innerWidth < 768) {
      handleMenuToggle()
    }
  }

  // Handle expanded items in mobile menu
  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev =>
      prev.includes(itemName)
        ? prev.filter(currentItem => currentItem !== itemName)
        : [...prev, itemName]
    )
  }

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleCloseMenu()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Info },
    {
      name: "Products",
      href: "/products",
      icon: Package,
      subItems: [
        { name: "RO Membrane Solutions", href: "/products/ro-membrane-solutions" },
        { name: "Boiler Water Treatment", href: "/products/boiler-water-treatment" },
        { name: "Cooling Water Treatment", href: "/products/cooling-water-treatment" },
        { name: "ETP Treatment Chemicals", href: "/products/etp-treatment-chemicals" },
        { name: "WTP Treatment Chemicals", href: "/products/wtp-treatment-chemicals" },
      ],
    },
    {
      name: "Services",
      href: "/services",
      icon: Wrench,
      subItems: [
        { name: "ETP Audit Services", href: "/services/etp-audit-services" },
        { name: "WTP Audit Services", href: "/services/wtp-audit-services" },
        { name: "Boiler Water Treatment Audit", href: "/services/boiler-water-treatment-audit" },
        { name: "Cooling Tower Treatment Audit", href: "/services/cooling-tower-treatment-audit" },
        { name: "RO Troubleshooting Audit", href: "/services/ro-troubleshooting-audit" },
        { name: "Water Treatment Consultation", href: "/services/water-treatment-consultation" },
      ],
    },
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
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-400/30"
            : "bg-white border-b border-blue-400/30"
        }`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
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
            <div key={item.name} className="relative group">
              {item.subItems ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-light tracking-wide text-foreground hover:text-primary transition-colors outline-none">
                    {item.name}
                    <ChevronDown size={14} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-white/95 backdrop-blur-sm border-blue-400/20">
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link
                          href={subItem.href}
                          className="w-full cursor-pointer font-light hover:text-primary hover:bg-blue-50/50"
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem asChild>
                      <Link
                        href={item.href}
                        className="w-full cursor-pointer font-medium border-t border-gray-100 mt-1 pt-2 hover:text-primary"
                      >
                        View All {item.name}
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-light tracking-wide transition-colors duration-200 relative ${
                    pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute -bottom-6 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></span>
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-light tracking-wide"
            onClick={() => openModal("contact-sales")}
          >
            Contact Sales
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2.5 rounded-lg hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 transform active:scale-95 ${
            isAnimating ? "pointer-events-none" : ""
          } ${isOpen ? "bg-blue-50 shadow-md" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          disabled={isAnimating}
        >
          <div className={`transform transition-all duration-300 ease-in-out ${isOpen ? "rotate-90" : "rotate-0"}`}>
            {isOpen ? (
              <X size={24} className="text-blue-600" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </div>
        </button>
      </nav>
      </header>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999] md:hidden transition-opacity duration-300 ease-in-out"
            onClick={handleCloseMenu}
          />

          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[100000] md:hidden transition-transform duration-300 ease-out overflow-hidden flex flex-col ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Logo and name at top */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-200 mt-2 bg-gradient-to-r from-blue-50 to-cyan-50 backdrop-blur-sm">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white p-1.5 shadow-sm border border-blue-200">
                <Image
                  src="/Chem_park_Logo_1-01.jpg"
                  alt="ChemParks Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <span className="font-light tracking-wide text-base text-gray-900">ChemParks</span>
                <p className="text-xs text-gray-500 font-light">Water Solutions</p>
              </div>
              {/* Close button in header */}
              <button
                onClick={handleCloseMenu}
                className="p-2 rounded-lg hover:bg-white/60 transition-colors duration-200 active:scale-95 transform"
                aria-label="Close menu"
              >
                <X size={20} className="text-gray-700" />
              </button>
            </div>

  
            {/* Navigation items */}
            <div className="flex-1 flex flex-col py-4 overflow-y-auto">
              {navigation.map((item, index) => {
                const Icon = item.icon
                const isExpanded = expandedItems.includes(item.name)
                const hasSubItems = item.subItems && item.subItems.length > 0
                const isActive = pathname === item.href || (hasSubItems && pathname.startsWith(item.href + "/"))

                return (
                  <div key={item.name} className="px-4">
                    {hasSubItems ? (
                      <div className="mb-2">
                        <button
                          onClick={() => toggleExpanded(item.name)}
                          className={`w-full group flex items-center justify-between px-4 py-3.5 text-sm font-light tracking-wide transition-all duration-200 rounded-lg transform hover:scale-[1.02] active:scale-98 ${
                            isActive
                              ? "bg-blue-50 text-blue-700 shadow-md border border-blue-200"
                              : "text-gray-700 hover:bg-gray-50 hover:text-blue-600 hover:shadow-sm"
                          }`}
                          style={{
                            animationDelay: `${index * 50}ms`,
                            animation: isOpen ? "slideInLeft 0.3s ease-out forwards" : "none",
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              size={18}
                              className={`transform transition-transform duration-200 ${
                                isActive ? "scale-110 text-blue-600" : "group-hover:scale-110"
                              }`}
                            />
                            <span>{item.name}</span>
                          </div>
                          <ChevronRight
                            size={16}
                            className={`transform transition-transform duration-200 ${
                              isExpanded ? "rotate-90" : ""
                            }`}
                          />
                        </button>

                        {/* Expanded Sub-items */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="pl-8 pr-2 py-2 space-y-1">
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-3 py-2 text-sm font-light transition-all duration-200 rounded-md hover:bg-blue-50 hover:text-blue-600 hover:translate-x-1 ${
                                  pathname === subItem.href
                                    ? "bg-blue-100 text-blue-700 font-medium"
                                    : "text-gray-600"
                                }`}
                                onClick={handleCloseMenu}
                                style={{
                                  animationDelay: `${(index * 50) + (subIndex * 25)}ms`,
                                  animation: isOpen && isExpanded ? "fadeInUp 0.3s ease-out forwards" : "none",
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                            <Link
                              href={item.href}
                              className="block px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 border-t border-gray-200 mt-2 pt-3"
                              onClick={handleCloseMenu}
                            >
                              View All {item.name}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`group flex items-center gap-3 px-4 py-3.5 text-sm font-light tracking-wide transition-all duration-200 rounded-lg transform hover:scale-[1.02] active:scale-98 mb-2 ${
                          isActive
                            ? "bg-blue-50 text-blue-700 shadow-md border border-blue-200"
                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-600 hover:shadow-sm"
                        }`}
                        onClick={handleCloseMenu}
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: isOpen ? "slideInLeft 0.3s ease-out forwards" : "none",
                        }}
                      >
                        <Icon
                          size={18}
                          className={`transform transition-transform duration-200 ${
                            isActive ? "scale-110 text-blue-600" : "group-hover:scale-110"
                          }`}
                        />
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                )
              })}

              {/* Contact Sales CTA */}
              <div className="px-4 mt-4">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 font-light tracking-wide py-3"
                  onClick={() => {
                    openModal("contact-sales")
                    handleCloseMenu()
                  }}
                  style={{
                    animationDelay: `${navigation.length * 50}ms`,
                    animation: isOpen ? "slideInLeft 0.3s ease-out forwards" : "none",
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </div>

            {/* Footer with quick info */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="text-center mb-3">
                <p className="text-xs text-gray-600 font-light">30+ Years of Excellence</p>
                <p className="text-xs text-gray-500 font-light mt-1">ISO Certified | Quality Assured</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400 font-light">© {new Date().getFullYear()} ChemParks</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
