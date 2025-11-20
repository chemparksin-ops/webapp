import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Loader />
      <Header />

      <main className="pt-16 md:pt-24">
        {/* Page Header */}
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
      </main>

      <Footer />
    </>
  )
}