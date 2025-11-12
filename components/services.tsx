import { Wrench, Zap, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      name: "Operations & Maintenance",
      description:
        "Round-the-clock preventive and emergency support with 500+ certified service engineers ensuring zero downtime",
      icon: Wrench,
      image: "/industrial-maintenance-service-engineers-at-work.jpg",
    },
    {
      name: "System Rehabilitation",
      description: "Comprehensive audits, performance optimization, and capacity upgrades for existing installations",
      icon: Zap,
      image: "/water-system-upgrade-industrial-rehabilitation.jpg",
    },
    {
      name: "Water Audits & Consulting",
      description:
        "Expert analysis for regulatory compliance, efficiency improvement, and sustainable water management strategies",
      icon: CheckCircle,
      image: "/water-audit-consulting-professional-analysis.jpg",
    },
    {
      name: "Project Financing",
      description: "Flexible EPC, BOO, BOT, and BOOT financing models tailored to your project requirements and budget",
      icon: TrendingUp,
      image: "/project-financing-business-growth-chart.jpg",
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 text-center tracking-wide relative">
          <span className="relative">
            24x7 Services & Support
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></span>
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          Complete solutions backed by industry expertise and dedicated support teams
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} href={`/services/${service.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
                <div
                  className="h-full bg-white border border-gray-100 rounded-lg overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all duration-500 group cursor-pointer"
                >
                <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-yellow-100/50 via-purple-100/50 to-pink-100/50 relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg?height=200&width=400&query=industrial-water-services"}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-600/50 transition-all">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4 tracking-wide group-hover:text-purple-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">{service.description}</p>
                </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
