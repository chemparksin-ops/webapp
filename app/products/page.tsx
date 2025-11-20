import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const productLines = [
    {
      name: "RO Membrane Solutions",
      slug: "ro-membrane-solutions",
      description:
        "Maximize the lifespan and efficiency of your Reverse Osmosis systems with our specialized chemical solutions.",
      details:
        "Our RO chemicals are formulated to handle high-stress industrial environments, preventing scaling and fouling while maintaining peak performance.",
      image: "/reverse-osmosis-system.jpg",
      applications: [
        "Desalination Plants",
        "Industrial Process Water",
        "Power Generation",
        "Pharmaceutical Manufacturing",
      ],
    },
    {
      name: "Boiler Water Treatment",
      slug: "boiler-water-treatment",
      description: "Protect your boiler systems from corrosion and scale with our advanced treatment programs.",
      details:
        "We offer a complete range of oxygen scavengers, sludge conditioners, and alkalinity builders to ensure safe and efficient boiler operation.",
      image: "/industrial-boiler-room.jpg",
      applications: ["Power Plants", "Textile Industry", "Food & Beverage", "Chemical Processing"],
    },
    {
      name: "Cooling Water Treatment",
      slug: "cooling-water-treatment",
      description: "Optimize heat transfer and prevent biological growth in your cooling towers and systems.",
      details:
        "Our cooling water solutions include corrosion inhibitors, scale inhibitors, and broad-spectrum biocides for open and closed loops.",
      image: "/cooling-tower-industrial.jpg",
      applications: ["HVAC Systems", "Refineries", "Steel Mills", "Data Centers"],
    },
    {
      name: "ETP Treatment Chemicals",
      slug: "etp-treatment-chemicals",
      description: "Ensure environmental compliance with our effective effluent treatment chemicals.",
      details:
        "From coagulation to sludge dewatering, our ETP chemicals help you meet discharge norms and recover water for reuse.",
      image: "/effluent-treatment-plant.jpg",
      applications: ["Textile Dyeing", "Tanneries", "Paper & Pulp", "Metal Finishing"],
    },
    {
      name: "WTP Treatment Chemicals",
      slug: "wtp-treatment-chemicals",
      description: "High-quality chemicals for potable and process water treatment applications.",
      details:
        "Our WTP range ensures removal of turbidity, color, and pathogens, delivering crystal clear water for your needs.",
      image: "/water-treatment-plant.jpg",
      applications: ["Municipal Water Supply", "Beverage Industry", "Institutional Complexes", "Pre-treatment Systems"],
    },
  ]

  return (
    <>
      <Loader />
      <Header />
      <main className="pt-16 md:pt-24">
        {/* Professional Page Header */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">Products</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive water treatment solutions for your industrial needs
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productLines.map((product, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="bg-gray-50 h-56">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-4 tracking-wide">{product.name}</h2>
                    <p className="text-base text-gray-600 mb-6 leading-relaxed font-light">{product.description}</p>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed font-light">{product.details}</p>

                    <div className="mb-8">
                      <h3 className="font-light text-gray-900 mb-4 text-lg tracking-wide">Applications</h3>
                      <ul className="space-y-3">
                        {product.applications.map((app, i) => (
                          <li key={i} className="text-base text-gray-600 leading-relaxed font-light flex items-start">
                            <span className="text-blue-400 mr-3 text-lg">•</span>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-light tracking-wide text-base"
                    >
                      Learn More <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
