import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Operations & Maintenance",
      slug: "om",
      description: "Comprehensive preventive, routine, and emergency support",
      features: [
        "Preventive maintenance programs",
        "Routine monitoring and reporting",
        "AMC contracts with guaranteed SLAs",
        "Quality assurance checks",
        "24/7 emergency support",
      ],
      icon: "🔧",
    },
    {
      title: "Plant Rehabilitation & Upgrade",
      slug: "rehabilitation",
      description: "System optimization and technology upgrades",
      features: [
        "Comprehensive system audits",
        "Performance optimization analysis",
        "Technology and equipment upgrades",
        "Staff training programs",
        "Efficiency improvements",
      ],
      icon: "⚡",
    },
    {
      title: "Water Audits & Consulting",
      slug: "audits",
      description: "Expert analysis and sustainability strategy",
      features: [
        "Water efficiency analysis",
        "Regulatory compliance assessment",
        "Sustainability strategy development",
        "Recycling opportunity identification",
        "Technical recommendations",
      ],
      icon: "📊",
    },
    {
      title: "Spare Parts & Consumables",
      slug: "spares",
      description: "Reliable supply of genuine parts and consumables",
      features: [
        "Genuine membranes and resins",
        "Filter media and hardware",
        "Service kits and replacement parts",
        "Online ordering and bulk discounts",
        "Expedited delivery options",
      ],
      icon: "📦",
    },
    {
      title: "Project Financing",
      slug: "financing",
      description: "Flexible financial models for water projects",
      features: [
        "EPC (Engineering, Procurement, Construction)",
        "BOO (Build, Own, Operate)",
        "BOT (Build, Operate, Transfer)",
        "BOOT models available",
        "Technical and financial consultancy",
      ],
      icon: "💰",
    },
    {
      title: "24x7 Emergency Support",
      slug: "support",
      description: "Round-the-clock technical and emergency assistance",
      features: [
        "Immediate response helpline",
        "Rapid breakdown support",
        "Guaranteed SLAs",
        "Remote and onsite assistance",
        "Expert technical team",
      ],
      icon: "🆘",
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
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">Services</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive water treatment solutions for your industrial needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 bg-white border border-gray-100 rounded-lg hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-4 tracking-wide">{service.title}</h2>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed font-light">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                        <span className="text-gray-400 mt-1 text-lg">•</span>
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/services/${service.slug}`}>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-base font-light tracking-wide">Learn More</Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">Need Custom Solutions?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
              Our expert team can develop tailored solutions for your specific requirements
            </p>
            <Link href="/contact">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base font-light tracking-wide">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
