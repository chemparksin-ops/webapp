import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const strengths = [
    "30+ years of industry expertise in water treatment",
    "Complete sector solutions across all industries",
    "Manufacturing excellence with advanced facilities",
    "Comprehensive product portfolio for water management",
    "Dedicated service support network worldwide",
    "Proven expertise with successful global projects",
    "Advanced R&D and innovation capabilities",
  ]

  const achievements = [
    "1000+ successful projects completed globally",
    "Operations across 5 continents",
    "Serving 50+ countries worldwide",
    "ISO 9001, ISO 14001, and ISO 45001 certified",
    "Industry leader in sustainable water solutions",
  ]

  return (
    <>
      <Loader />
      <Header />
      <main className="pt-16 md:pt-24">
        {/* Professional Page Header */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">About ChemParks</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive water treatment solutions for your industrial needs
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide">Our Mission</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                To conserve our planet's water, air, soil, and energy through innovative environmental solutions.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide">Our Vision</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                To be the leader in water treatment solutions that protect our environment.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 tracking-wide">Our Story</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12 font-light max-w-3xl mx-auto">
              ChemParks was founded with a commitment to solve water challenges through innovative technology and dedicated service. Over three decades, we have grown into a global leader in water and environment management solutions with operations across five continents.
            </p>
            <div className="flex justify-center">
              <img
                src="/water-treatment-facility-industrial.jpg"
                alt="ChemParks water treatment facility"
                className="w-full max-w-lg h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Key Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-thin text-gray-900 mb-3 tracking-wider">500+</div>
              <div className="text-base text-gray-600 font-light">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-thin text-gray-900 mb-3 tracking-wider">30+</div>
              <div className="text-base text-gray-600 font-light">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-thin text-gray-900 mb-3 tracking-wider">50+</div>
              <div className="text-base text-gray-600 font-light">Countries Served</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
