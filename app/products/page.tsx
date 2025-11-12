import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const productLines = [
    {
      name: "CHEMION® Resins",
      slug: "chemion",
      description: "Advanced ion exchange resins for water purification",
      details:
        "High exchange capacity, chemical stability, and longevity for softening, demineralization, and specialty applications",
      applications: ["Industrial Water Treatment", "Pharmaceuticals", "Food & Beverage", "High Purity Processes"],
      image: "/ion-exchange-resins-water-treatment.jpg",
    },
    {
      name: "AQUAMEM® Membranes",
      slug: "aquamem",
      description: "Latest membrane technology for advanced water purification",
      details:
        "UF, NF, and RO membranes with superior flux, high rejection rate, and low fouling for desalination and recycling",
      applications: ["Desalination", "Municipal Water Treatment", "Industrial Recycling", "Zero Liquid Discharge"],
      image: "/membrane-water-treatment-technology.jpg",
    },
    {
      name: "Specialty Chemicals",
      slug: "chemicals",
      description: "Customized chemicals for various water treatment applications",
      details:
        "Eco-friendly, customizable formulations for cooling water, boiler water, fireside, and process applications",
      applications: ["Sugar Processing", "Paper Manufacturing", "Petrochemical", "Mining & Ceramics"],
      image: "/specialty-chemicals-water-treatment.jpg",
    },
    {
      name: "Treatment Plants & Systems",
      slug: "plants",
      description: "Modular and custom water treatment solutions",
      details: "Raw water treatment, demineralization, softening, ETP, STP, and ZLD systems with scalable capacity",
      applications: ["Industrial Plants", "Municipal Systems", "Pharmaceutical Facilities", "Food Processing"],
      image: "/water-treatment-plant-industrial.jpg",
    },
    {
      name: "ChemPure® Home Solutions",
      slug: "chempure",
      description: "Advanced water purification for homes and communities",
      details: "RO/UV purifiers and dispensers with high capacity, comprehensive warranty, and dedicated support",
      applications: ["Residential Use", "Community Water Systems", "Commercial Buildings", "Institutions"],
      image: "/home-water-purifier-ro-uv.jpg",
    },
    {
      name: "Spare Parts & Consumables",
      slug: "spares",
      description: "Genuine parts and consumables for all systems",
      details: "Reliable supply of membranes, resins, chemicals, filter media, and service kits with online ordering",
      applications: ["Maintenance & Support", "System Upgrades", "Bulk Supply", "Emergency Replacement"],
      image: "/spare-parts-water-treatment-consumables.jpg",
    },
  ]

  return (
    <>
      <Loader />
      <Header />
      <main className="pt-16 md:pt-24">
        {/* Professional Page Header */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                <div key={index} className="bg-white border border-gray-100 rounded-lg hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
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
                            <span className="text-gray-400 mr-3 text-lg">•</span>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors font-light tracking-wide text-base"
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
