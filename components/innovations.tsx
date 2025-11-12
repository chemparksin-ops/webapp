import { Droplets, Zap, Cpu } from "lucide-react"

export function Innovations() {
  const innovations = [
    {
      title: "Advanced Ion Exchange Technology",
      description:
        "CHEMION® resins deliver superior water purification across industrial, municipal, and pharmaceutical applications with 99.9% contaminant removal.",
      icon: Droplets,
      image: "/ion-exchange-resins-water-treatment-industrial.jpg",
    },
    {
      title: "Premium Membrane Solutions",
      description:
        "AQUAMEM® membranes offer UF, NF, and RO with superior flux rates and extended membrane life for cost-effective operations.",
      icon: Zap,
      image: "/membrane-technology-water-filtration-system.jpg",
    },
    {
      title: "Intelligent Treatment Systems",
      description:
        "IoT-enabled systems providing real-time monitoring, predictive maintenance, and automated optimization for maximum efficiency.",
      icon: Cpu,
      image: "/water-treatment-plant-industrial-facility.jpg",
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 text-center tracking-wide">
          Core Technologies
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          Three decades of innovation in water and environment management
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {innovations.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="p-8 bg-white border border-gray-100 rounded-lg hover:border-gray-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="w-full h-48 sm:h-56 -mx-8 mb-6 relative overflow-hidden group rounded-t-lg">
                  <img
                    src={item.image || "/placeholder.svg?height=200&width=400&query=water-treatment-technology"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4 tracking-wide">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
