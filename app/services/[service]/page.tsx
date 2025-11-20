import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"
import { ArrowLeft, CheckCircle, Award, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { serviceData } from "./service-data"

export const dynamic = "force-dynamic"

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceSlug } = await params
  const service = serviceData[serviceSlug as keyof typeof serviceData]

  if (!service) {
    notFound()
  }

  return (
    <>
      <Loader />
      <Header />

      <main className="pt-16 md:pt-24">
        {/* Hero Section */}
        <section className="bg-background text-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Services
            </Link>

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">{service.tagline}</p>
              <p className="text-lg text-muted-foreground">{service.description}</p>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="bg-white -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={service.heroImage || "/placeholder.svg"}
              alt={service.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={(service as any).detailImage || "/placeholder.svg"}
                  alt={`${service.title} Detail`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Service Overview</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">{service.overview}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">What We Offer</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {service.services.map((serviceItem, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{serviceItem.title}</h3>
                  <p className="text-foreground/60 mb-6">{serviceItem.description}</p>
                  <ul className="space-y-3">
                    {serviceItem.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Key Benefits</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-foreground/60 mb-8">
              Contact our team to discuss how our {service.title.toLowerCase()} solutions can benefit your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
