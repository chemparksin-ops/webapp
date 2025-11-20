import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ClipboardCheck, Droplets, Thermometer, Wind, Activity, Users } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "ETP Audit Services",
      description:
        "Comprehensive evaluation of Effluent Treatment Plants to ensure regulatory compliance and optimal performance.",
      icon: <ClipboardCheck className="w-12 h-12 text-purple-600" />,
      slug: "etp-audit-services",
      image: "/effluent-treatment-plant.jpg",
      features: [
        "Complete ETP system evaluation",
        "Regulatory compliance assessment",
        "Performance optimization analysis",
        "Efficiency improvement recommendations",
        "Treatment process optimization",
      ],
    },
    {
      title: "WTP Audit Services",
      description: "Detailed assessment of Water Treatment Plants to guarantee water quality and system efficiency.",
      icon: <Droplets className="w-12 h-12 text-blue-500" />,
      slug: "wtp-audit-services",
      image: "/water-treatment-plant.jpg",
      features: [
        "Water quality analysis",
        "Treatment process audit",
        "Equipment performance check",
        "Chemical dosing optimization",
        "Drinking water compliance",
      ],
    },
    {
      title: "Boiler Water Treatment Audit",
      description: "Specialized audit to prevent scale and corrosion, optimizing energy efficiency in boiler systems.",
      icon: <Thermometer className="w-12 h-12 text-red-500" />,
      slug: "boiler-water-treatment-audit",
      image: "/industrial-boiler-room.jpg",
      features: [
        "Water chemistry analysis",
        "Scale and corrosion assessment",
        "Blowdown optimization",
        "Chemical treatment evaluation",
        "Energy efficiency analysis",
      ],
    },
    {
      title: "Cooling Tower Treatment Audit",
      description: "Expert analysis of cooling tower systems to control biological growth, corrosion, and scale.",
      icon: <Wind className="w-12 h-12 text-cyan-500" />,
      slug: "cooling-tower-treatment-audit",
      image: "/cooling-tower-industrial.jpg",
      features: [
        "Water microbiology testing",
        "Legionella risk assessment",
        "Corrosion and scale control",
        "Drift and evaporation analysis",
        "Treatment program optimization",
      ],
    },
    {
      title: "RO Troubleshooting Audit",
      description: "Diagnostic services for Reverse Osmosis systems to identify fouling and improve recovery rates.",
      icon: <Activity className="w-12 h-12 text-green-500" />,
      slug: "ro-troubleshooting-audit",
      image: "/reverse-osmosis-system.jpg",
      features: [
        "Membrane performance analysis",
        "Fouling identification",
        "Recovery rate optimization",
        "Pressure vessel inspection",
        "Pre-treatment system review",
      ],
    },
    {
      title: "Water Treatment Consultation",
      description: "Professional consulting for system design, technology selection, and sustainability planning.",
      icon: <Users className="w-12 h-12 text-orange-500" />,
      slug: "water-treatment-consultation",
      image: "/water-treatment-facility-industrial.jpg",
      features: [
        "System design optimization",
        "Technology selection guidance",
        "Regulatory compliance support",
        "Cost reduction strategies",
        "Sustainability planning",
      ],
    },
  ]

  return (
    <>
      <Loader />
      <Header />
      <main className="pt-16 md:pt-24">
        {/* Professional Page Header */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/water-treatment-facility-industrial.jpg"
              alt="Services Background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
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
                  className="bg-white border border-gray-100 rounded-lg hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Added image to service card */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-12"></div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-4">{service.icon}</div>
                    <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-4 tracking-wide">{service.title}</h2>
                    <p className="text-base text-gray-600 mb-6 leading-relaxed font-light">{service.description}</p>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                          <span className="text-gray-400 mt-1 text-lg">•</span>
                          <span className="font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={`/services/${service.slug}`} className="mt-auto">
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-base font-light tracking-wide">
                        Learn More
                      </Button>
                    </Link>
                  </div>
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
