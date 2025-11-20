import Link from "next/link"
import { ArrowRight, Droplets, FlaskConical, Atom, Factory, Recycle } from "lucide-react"

export function Products() {
  const products = [
    {
      name: "RO Membrane Solutions",
      description:
        "Advanced reverse osmosis chemicals including antiscalants, cleaners, and biocides for optimal membrane performance.",
      icon: Droplets,
      specs: "RO Antiscalants, Membrane Cleaners, Biocide, Online System",
      image: "/reverse-osmosis-membrane-industrial.jpg",
    },
    {
      name: "Boiler Water Treatment",
      description:
        "Complete boiler water solutions to prevent scale, corrosion, and carryover, ensuring safety and efficiency.",
      icon: Factory,
      specs: "AVT Program, Oxygen Scavenger, pH Control, Scale Prevention",
      image: "/industrial-boiler-water-treatment.jpg",
    },
    {
      name: "Cooling Water Treatment",
      description: "Specialized chemicals for cooling towers to control corrosion, scale, and biological growth.",
      icon: Recycle,
      specs: "Corrosion Control, Scale Inhibitors, BioSits, Biocides",
      image: "/cooling-tower-water-treatment.jpg",
    },
    {
      name: "ETP Treatment Chemicals",
      description: "High-performance coagulants and flocculants for effective effluent treatment and water recovery.",
      icon: FlaskConical,
      specs: "Coagulants, Flocculants, Bio Treatment, pH Control",
      image: "/effluent-treatment-plant.jpg",
    },
    {
      name: "WTP Treatment Chemicals",
      description: "Comprehensive range of chemicals for raw water treatment, clarification, and disinfection.",
      icon: Atom,
      specs: "Coagulants, Flocculants, Disinfectants, Bio Control",
      image: "/water-treatment-plant.jpg",
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-cyan-50/50">
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
              <Link
                key={index}
                href={`/products/${product.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(®|®|\s)+/g, "-")
                  .replace(/(^-|-$)/g, "")}`}
              >
                <div className="h-full bg-white border border-gray-100 rounded-lg overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                  <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-teal-50/30 relative overflow-hidden group">
                    <img
                      src={product.image || "/placeholder.svg?height=200&width=400&query=water-treatment-product"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-600/50 transition-all">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4 tracking-wide group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed font-light text-base md:text-lg flex-grow">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <span className="text-sm font-light text-blue-600 tracking-wide">{product.specs}</span>
                      <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
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
