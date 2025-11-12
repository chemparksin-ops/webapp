import Link from "next/link"
import { ArrowRight, Beaker, Droplets, Building2, Home, Package } from "lucide-react"

export function Products() {
  const products = [
    {
      name: "CHEMION® Resins",
      description: "Advanced cationic and anionic ion exchange resins with superior selectivity and durability",
      specs: "Industrial | Municipal | Pharmaceutical",
      icon: Beaker,
      image: "/ion-exchange-resins-water-treatment-industrial.jpg",
    },
    {
      name: "AQUAMEM® Membranes",
      description: "UF, NF, and RO membranes engineered for maximum flux and minimal fouling",
      specs: "UF | NF | RO Solutions",
      icon: Droplets,
      image: "/membrane-technology-water-filtration-system.jpg",
    },
    {
      name: "Specialty Chemicals",
      description: "Customized treatment chemicals for cooling systems, boiler feed, and process applications",
      specs: "Cooling | Boiler | Process",
      icon: Beaker,
      image: "/chemical-treatment-water-processing-industrial.jpg",
    },
    {
      name: "Treatment Plants",
      description: "Modular and custom systems designed for capacities from 10 KLD to 1000+ MLD",
      specs: "ETP | STP | ZLD Solutions",
      icon: Building2,
      image: "/water-treatment-plant-industrial-facility.jpg",
    },
    {
      name: "ChemPure® Home",
      description: "Advanced RO and UV purifiers delivering premium drinking water quality for homes",
      specs: "Residential Water Purification",
      icon: Home,
      image: "/home-water-purifier-ro-uv-system.jpg",
    },
    {
      name: "Spare Parts & Consumables",
      description: "Genuine membranes, resins, and service kits ensuring optimal system performance",
      specs: "OEM Quality | In-Stock",
      icon: Package,
      image: "/industrial-spare-parts-water-treatment-equipment.jpg",
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-yellow-50/30 to-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 text-center tracking-wide">
          Comprehensive Product Portfolio
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          Complete water treatment solutions for every application and scale
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Link key={index} href={`/products/${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(®|®|\s)+/g, '-').replace(/(^-|-$)/g, '')}`}>
                <div
                  className="h-full bg-white border border-gray-100 rounded-lg overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                >
                  <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-yellow-50/30 via-purple-50/20 to-pink-50/30 relative overflow-hidden group">
                    <img
                      src={product.image || "/placeholder.svg?height=200&width=400&query=water-treatment-product"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-600/50 transition-all">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4 tracking-wide group-hover:text-purple-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed font-light text-base md:text-lg flex-grow">{product.description}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <span className="text-sm font-light text-purple-600 tracking-wide">{product.specs}</span>
                      <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                    </div>
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
