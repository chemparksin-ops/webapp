"use client"

import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"
import { ArrowLeft, CheckCircle, Users, Clock, Award, Shield, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

const serviceData = {
  "operations-maintenance": {
    title: "Operations & Maintenance",
    tagline: "24/7 Comprehensive Support for Optimal Performance",
    description: "Our expert operations and maintenance services ensure your water treatment systems operate at peak efficiency with zero downtime and maximum reliability.",
    heroImage: "/industrial-maintenance-service-engineers-at-work.jpg",
    overview: "ChemParks provides comprehensive O&M services backed by 500+ certified service engineers across multiple locations, ensuring round-the-clock support for all your water treatment needs.",
    services: [
      {
        title: "Preventive Maintenance",
        description: "Scheduled maintenance programs to prevent breakdowns and optimize performance",
        features: [
          "Quarterly system audits and performance checks",
          "Regular calibration of instrumentation",
          "Chemical dosing optimization",
          "Membrane cleaning and replacement programs",
          "Predictive maintenance using advanced analytics"
        ]
      },
      {
        title: "Emergency Support",
        description: "Rapid response team available 24/7 for critical breakdown situations",
        features: [
          "4-hour response time for critical issues",
          "Dedicated emergency hotline",
          "Fully equipped service vehicles",
          "On-site spare parts inventory",
          "Remote monitoring and diagnostics"
        ]
      },
      {
        title: "Performance Optimization",
        description: "Continuous improvement programs to enhance system efficiency and reduce costs",
        features: [
          "Real-time performance monitoring",
          "Energy consumption optimization",
          "Water quality enhancement programs",
          "Chemical usage optimization",
          "Operational cost reduction strategies"
        ]
      },
      {
        title: "Technical Training",
        description: "Comprehensive training programs for your plant operators and maintenance staff",
        features: [
          "Hands-on operational training",
          "Troubleshooting workshops",
          "Safety and compliance programs",
          "Best practices implementation",
          "Certification programs"
        ]
      }
    ],
    benefits: [
      "99.9% uptime guarantee for critical systems",
      "30% reduction in operational costs through optimization",
      "Extended equipment life through proper maintenance",
      "Compliance with all regulatory requirements",
      "Access to latest technological upgrades"
    ],
    stats: [
      { number: "500+", label: "Certified Engineers" },
      { number: "24/7", label: "Support Availability" },
      { number: "99.9%", label: "Uptime Guarantee" },
      { number: "15min", label: "Average Response Time" }
    ]
  },
  "system-rehabilitation": {
    title: "System Rehabilitation",
    tagline: "Revitalize Your Existing Water Treatment Infrastructure",
    description: "Transform aging water treatment systems into modern, efficient facilities with our comprehensive rehabilitation and upgrade solutions.",
    heroImage: "/water-system-upgrade-industrial-rehabilitation.jpg",
    overview: "Our rehabilitation services breathe new life into aging water treatment infrastructure, enhancing performance, efficiency, and longevity while minimizing capital expenditure.",
    services: [
      {
        title: "System Audits & Assessment",
        description: "Comprehensive evaluation of existing systems to identify improvement opportunities",
        features: [
          "Detailed performance analysis",
          "Equipment condition assessment",
          "Water quality compliance evaluation",
          "Energy efficiency studies",
          "Cost-benefit analysis for upgrades"
        ]
      },
      {
        title: "Capacity Enhancement",
        description: "Scale-up existing systems to meet increased demand without complete replacement",
        features: [
          "Modular capacity expansion solutions",
          "Equipment optimization for higher throughput",
          "Process intensification techniques",
          "Advanced membrane retrofits",
          "Smart control system integration"
        ]
      },
      {
        title: "Technology Upgrades",
        description: "Integration of latest technologies to enhance system performance and efficiency",
        features: [
          "Advanced membrane system upgrades",
          "AI-powered control systems",
          "Energy recovery devices",
          "Smart monitoring solutions",
          "Automated chemical dosing systems"
        ]
      },
      {
        title: "Environmental Compliance",
        description: "Upgrade systems to meet current and future environmental regulations",
        features: [
          "Zero Liquid Discharge implementation",
          "Wastewater reuse systems",
          "Effluent treatment enhancement",
          "Noise pollution control",
          "Carbon footprint reduction"
        ]
      }
    ],
    benefits: [
      "Up to 40% improvement in system performance",
      "50% reduction in energy consumption",
      "Extended equipment life by 15-20 years",
      "Compliance with latest environmental regulations",
      "Significant cost savings vs new installation"
    ],
    stats: [
      { number: "500+", label: "Systems Rehabilitated" },
      { number: "40%", label: "Performance Improvement" },
      { number: "20+", label: "Years Extended Life" },
      { number: "50%", label: "Energy Savings" }
    ]
  },
  "water-audits-consulting": {
    title: "Water Audits & Consulting",
    tagline: "Expert Analysis for Sustainable Water Management",
    description: "Professional water auditing and consulting services to optimize water usage, reduce costs, and ensure regulatory compliance.",
    heroImage: "/water-audit-consulting-professional-analysis.jpg",
    overview: "Our team of water management experts provides comprehensive audits and strategic consulting to help industries achieve optimal water efficiency and sustainability.",
    services: [
      {
        title: "Comprehensive Water Audits",
        description: "Thorough analysis of water usage patterns and identification of optimization opportunities",
        features: [
          "Water balance studies",
          "Usage pattern analysis",
          "Loss and wastage identification",
          "Quality parameter evaluation",
          "Benchmarking against industry standards"
        ]
      },
      {
        title: "Regulatory Compliance",
        description: "Ensure adherence to environmental regulations and avoid penalties",
        features: [
          "Regulatory requirement assessment",
          "Compliance gap analysis",
          "Permit application assistance",
          "Documentation support",
          "Regular compliance monitoring"
        ]
      },
      {
        title: "Sustainability Consulting",
        description: "Develop comprehensive water sustainability strategies for long-term success",
        features: [
          "Water footprint analysis",
          "Conservation strategy development",
          "Zero liquid discharge planning",
          "Water recycling and reuse design",
          "Sustainability reporting"
        ]
      },
      {
        title: "Cost Optimization",
        description: "Identify and implement cost-saving opportunities in water management",
        features: [
          "Cost-benefit analysis",
          "ROI calculation for water investments",
          "Tariff optimization studies",
          "Alternative water source evaluation",
          "Financial impact assessment"
        ]
      }
    ],
    benefits: [
      "Reduce water consumption by up to 40%",
      "Save 30% on water-related costs",
      "Achieve 100% regulatory compliance",
      "Enhance sustainability credentials",
      "Improve operational efficiency"
    ],
    stats: [
      { number: "1000+", label: "Audits Completed" },
      { number: "40%", label: "Water Savings" },
      { number: "30%", label: "Cost Reduction" },
      { number: "100%", label: "Compliance Rate" }
    ]
  },
  "project-financing": {
    title: "Project Financing",
    tagline: "Flexible Financial Solutions for Water Treatment Projects",
    description: "Innovative financing models to make advanced water treatment solutions accessible without upfront capital investment.",
    heroImage: "/project-financing-business-growth-chart.jpg",
    overview: "We offer flexible financing solutions including EPC, BOO, BOT, and BOOT models to help you implement advanced water treatment projects without straining your capital budget.",
    services: [
      {
        title: "EPC (Engineering, Procurement, Construction)",
        description: "Turnkey project execution with single-point responsibility",
        features: [
          "Complete project design and engineering",
          "Equipment procurement at competitive rates",
          "Construction and installation management",
          "Commissioning and handover",
          "Performance guarantee"
        ]
      },
      {
        title: "BOO (Build-Own-Operate)",
        description: "We build, own, and operate water treatment facilities on your behalf",
        features: [
          "Zero capital investment required",
          "Fixed water treatment costs",
          "Professional operation and maintenance",
          "Technology upgrades included",
          "Performance guarantees"
        ]
      },
      {
        title: "BOT (Build-Operate-Transfer)",
        description: "We build and operate the facility, then transfer ownership after contract period",
        features: [
          "Shared risk model",
          "Technology transfer during operation",
          "Training for your staff",
          "Gradual ownership transfer",
          "Post-transfer support available"
        ]
      },
      {
        title: "BOOT (Build-Own-Operate-Transfer)",
        description: "Extended operation period for better return on investment",
        features: [
          "Long-term operational stability",
          "Comprehensive maintenance included",
          "Technology updates during operation",
          "Revenue sharing options",
          "Flexible transfer terms"
        ]
      }
    ],
    benefits: [
      "No upfront capital investment required",
      "Fixed operational costs for better budgeting",
      "Access to latest technology without additional investment",
      "Professional operation and maintenance included",
      "Performance guarantees ensure water quality standards"
    ],
    stats: [
      { number: "$500M+", label: "Projects Financed" },
      { number: "0%", label: "Upfront Investment" },
      { number: "15+", label: "Financing Models" },
      { number: "100%", label: "Project Success Rate" }
    ]
  }
}

export const dynamic = "force-dynamic"

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = serviceData[params.service as keyof typeof serviceData]

  if (!service) {
    notFound()
  }

  return (
    <>
      <Loader />
      <Header />

      <main className="pt-16 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Services
            </Link>

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6">
                {service.tagline}
              </p>
              <p className="text-lg text-blue-100">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="bg-white -mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Service Overview
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed text-center">
                {service.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              What We Offer
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {service.services.map((serviceItem, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {serviceItem.title}
                  </h3>
                  <p className="text-foreground/60 mb-6">
                    {serviceItem.description}
                  </p>
                  <ul className="space-y-3">
                    {serviceItem.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Key Benefits
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {service.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">
                    {stat.number}
                  </div>
                  <div className="text-base md:text-lg text-blue-100">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-foreground/60 mb-8">
              Contact our team to discuss how our {service.title.toLowerCase()} solutions can benefit your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}