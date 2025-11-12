"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/water-treatment-plant-industrial.jpg",
    title: "Innovative Water Treatment",
    subtitle: "Advanced solutions for industrial, municipal, and residential water purification",
    badge: "30+ Years Excellence"
  },
  {
    image: "/ion-exchange-resins-water-treatment.jpg",
    title: "CHEMION® Premium Resins",
    subtitle: "High-performance ion exchange resins for superior water quality",
    badge: "Industry Leading"
  },
  {
    image: "/membrane-water-treatment-technology.jpg",
    title: "AQUAMEM® Advanced Systems",
    subtitle: "Cutting-edge membrane technology for ZLD and water recycling",
    badge: "Sustainable Solutions"
  },
  {
    image: "/water-treatment-plant-industrial.jpg",
    title: "Complete Water Management",
    subtitle: "End-to-end solutions for water treatment and environmental management",
    badge: "Turnkey Projects"
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000) // 6s per slide for better reading time
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] mt-[60px] sm:mt-[80px] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="w-full h-full object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm sm:text-base font-light tracking-wide mb-6 sm:mb-8">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="hidden xs:inline">{slides[current].badge}</span>
              <span className="xs:hidden">{slides[current].badge.split(' ')[0]}+</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-3 sm:mb-4 md:mb-6 leading-tight tracking-wide">
              {slides[current].title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed font-light px-2 sm:px-0">
              {slides[current].subtitle}
            </p>

            {/* Trust Indicators */}
            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-white/70 text-xs sm:text-sm md:text-base">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-light tracking-wide hidden sm:inline">ISO Certified</span>
                <span className="font-light tracking-wide sm:hidden">ISO</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-light tracking-wide hidden sm:inline">Quality Assured</span>
                <span className="font-light tracking-wide sm:hidden">Quality</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-light tracking-wide hidden sm:inline">Expert Team</span>
                <span className="font-light tracking-wide sm:hidden">Experts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 z-20 px-4">
        {/* Previous Button */}
        <button
          onClick={() => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Navigation Dots - Hidden on mobile, visible on larger screens */}
        <div className="hidden sm:flex gap-1 md:gap-1.5 lg:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`group transition-all duration-500 ${
                current === index
                  ? "w-4 sm:w-4 md:w-6 lg:w-8 h-1 sm:h-1 md:h-1.5 lg:h-2 bg-white rounded-full scale-110 shadow-lg shadow-white/50"
                  : "w-1 h-1 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 bg-white/30 hover:bg-white/50 rounded-full hover:scale-110"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator - Hidden on mobile to avoid overlap with navigation */}
      <div className="absolute bottom-16 sm:bottom-14 md:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce hidden sm:block">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}