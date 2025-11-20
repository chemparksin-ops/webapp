import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"
import { ArrowLeft, CheckCircle, Phone, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import ProductPageClient from "./product-page-client"
import { Suspense } from "react"

const productData = {
  "ro-membrane-solutions": {
    title: "RO Membrane Solutions",
    category: "Membrane Technology",
    tagline: "Maximize Performance & Lifespan of RO Systems",
    description:
      "Our comprehensive range of RO membrane chemicals is designed to prevent scaling, fouling, and biological growth, ensuring your system operates at peak efficiency with extended membrane life.",
    heroImage: "/reverse-osmosis-membrane-industrial.jpg",
    detailImage: "/reverse-osmosis-system.jpg",
    overview:
      "Reverse Osmosis systems are critical for modern water treatment, but they are susceptible to scaling and fouling. Our RO Membrane Solutions provide a complete care package, from antiscalants that handle high silica and hardness to effective cleaners that restore membrane flux.",
    features: [
      {
        title: "RO Antiscalants",
        description: "High-performance antiscalant for broad spectrum scale control.",
        benefits: [
          "Prevents calcium carbonate scaling",
          "Effective against silica fouling",
          "NSF certified for drinking water",
        ],
      },
      {
        title: "Membrane Cleaners",
        description: "Specialized cleaning agents for organic and inorganic fouling.",
        benefits: ["Restores membrane flux", "Low foaming formula", "Compatible with all membrane types"],
      },
      {
        title: "Biocide",
        description: "Non-oxidizing biocide for controlling bacterial growth.",
        benefits: ["Fast-acting formula", "Prevents bio-film formation", "Low toxicity"],
      },
      {
        title: "Online System",
        description: "Real-time monitoring and dosing solutions.",
        benefits: ["Automated dosing control", "Performance tracking", "Remote monitoring capability"],
      },
    ],
    applications: [
      {
        industry: "Desalination",
        uses: ["Seawater RO", "Brackish Water RO"],
        benefits: ["Higher recovery rates", "Lower energy consumption"],
      },
      {
        industry: "Pharmaceuticals",
        uses: ["Purified Water Systems", "WFI Pre-treatment"],
        benefits: ["Compliance with USP standards", "Microbial control"],
      },
      {
        industry: "Power Generation",
        uses: ["Boiler Feed Water", "Cooling Tower Makeup"],
        benefits: ["Reduced blowdown", "Consistent water quality"],
      },
    ],
    specifications: [
      { label: "pH Range", value: "2.0 - 12.0" },
      { label: "Solubility", value: "Complete in water" },
      { label: "Appearance", value: "Clear to pale yellow liquid" },
      { label: "Specific Gravity", value: "1.05 - 1.35" },
    ],
    benefits: [],
    certifications: ["ISO 9001:2015", "NSF/ANSI 60", "Halal Certified", "Kosher Certified"],
    cta: {
      primary: "Request Quote",
      secondary: "Call Expert",
      tertiary: "Email Specs",
    },
  },
  "boiler-water-treatment": {
    title: "Boiler Water Treatment",
    category: "Thermal Systems",
    tagline: "Total Protection for Steam Generation Systems",
    description:
      "Ensure the safety, efficiency, and longevity of your boiler systems with our advanced treatment programs designed to combat scale, corrosion, and carryover.",
    heroImage: "/industrial-boiler-room.jpg",
    detailImage: "/industrial-boiler-water-treatment.jpg",
    overview:
      "Boilers are the heart of many industrial processes. Our Boiler Water Treatment chemicals are engineered to handle varying water qualities and operating pressures, providing complete protection against the most common causes of boiler failure.",
    features: [
      {
        title: "AVT Program",
        description: "All-in-one internal treatment for scale and corrosion control.",
        benefits: ["Simplified dosing", "Phosphate/Polymer blend", "Online cleaning effect"],
      },
      {
        title: "Oxygen Scavenger",
        description: "Rapid reaction chemicals to remove dissolved oxygen.",
        benefits: ["Prevents pitting corrosion", "Catalyzed sulfite/hydrazine options", "Passivates metal surfaces"],
      },
      {
        title: "pH Control",
        description: "Alkalinity builders to maintain optimal boiler pH.",
        benefits: ["Neutralizes acidic condensate", "Protects feed lines", "Concentrated formula"],
      },
      {
        title: "Scale Prevention",
        description: "Advanced polymers to disperse sludge and prevent deposits.",
        benefits: ["Keeps heat transfer surfaces clean", "Prevents overheating", "Easy blowdown removal"],
      },
    ],
    applications: [
      {
        industry: "Food & Beverage",
        uses: ["Steam Sterilization", "Cooking Processes"],
        benefits: ["FDA compliant options", "Steam purity"],
      },
      {
        industry: "Textile",
        uses: ["Dyeing", "Finishing"],
        benefits: ["Consistent steam quality", "Fuel savings"],
      },
      {
        industry: "Power Plants",
        uses: ["Turbine Drive", "Process Heating"],
        benefits: ["High pressure protection", "Turbine safety"],
      },
    ],
    specifications: [
      { label: "Form", value: "Liquid / Powder" },
      { label: "pH (1% solution)", value: "10.0 - 12.5" },
      { label: "Density", value: "1.10 - 1.25 g/cm³" },
      { label: "Shelf Life", value: "2 Years" },
    ],
    benefits: [],
    certifications: ["ISO 14001", "FDA Approved (Selected Products)", "REACH Compliant"],
    cta: {
      primary: "Get Quote",
      secondary: "Talk to Engineer",
      tertiary: "Email Us",
    },
  },
  "cooling-water-treatment": {
    title: "Cooling Water Treatment",
    category: "Cooling Systems",
    tagline: "Efficient Cooling with Zero Downtime",
    description:
      "Control corrosion, scale, and biological growth in your open recirculating and closed loop cooling systems with our specialized chemical programs.",
    heroImage: "/cooling-tower-industrial.jpg",
    detailImage: "/cooling-tower-water-treatment.jpg",
    overview:
      "Cooling towers are efficient air scrubbers but also perfect breeding grounds for bacteria and scale. Our Cooling Water Treatment solutions ensure your heat exchange surfaces remain clean and your system operates at maximum efficiency.",
    features: [
      {
        title: "Corrosion Control",
        description: "Multi-metal corrosion inhibitors.",
        benefits: ["Protects MS, Copper, and Admats", "Forms persistent passive film", "Effective at low dosages"],
      },
      {
        title: "Scale Inhibitors",
        description: "Threshold inhibitors for high hardness waters.",
        benefits: [
          "Operates at higher cycles of concentration",
          "Prevents calcium/magnesium scale",
          "Stable at high temperatures",
        ],
      },
      {
        title: "Oxidizing And Oxidizing Biocides",
        description: "Broad spectrum oxidizing and non-oxidizing biocides.",
        benefits: ["Controls Legionella", "Removes algae and fungi", "Effective against slime"],
      },
    ],
    applications: [
      {
        industry: "HVAC",
        uses: ["Commercial Buildings", "Hospitals"],
        benefits: ["Legionella control", "Energy efficiency"],
      },
      {
        industry: "Refineries",
        uses: ["Process Cooling", "Heat Exchangers"],
        benefits: ["Corrosion protection", "Leak prevention"],
      },
      {
        industry: "Steel Mills",
        uses: ["Furnace Cooling", "Mold Cooling"],
        benefits: ["High heat flux handling", "Suspended solids control"],
      },
    ],
    specifications: [
      { label: "Solubility", value: "100% Water Soluble" },
      { label: "pH", value: "Acidic / Alkaline options" },
      { label: "Packaging", value: "25kg / 50kg / 200kg Drums" },
      { label: "Active Content", value: "High Concentration" },
    ],
    benefits: [],
    certifications: ["ISO 9001", "CTI Member", "Green Building Compliant"],
    cta: {
      primary: "Get Quote",
      secondary: "Call Support",
      tertiary: "Download Brochure",
    },
  },
  "etp-treatment-chemicals": {
    title: "ETP Treatment Chemicals",
    category: "Wastewater Management",
    tagline: "Compliance & Sustainability in Effluent Treatment",
    description:
      "Achieve regulatory compliance and optimize your effluent treatment plant performance with our advanced coagulants, flocculants, and biological cultures.",
    heroImage: "/effluent-treatment-plant.jpg",
    detailImage: "/effluent-treatment-plant-chemicals.jpg",
    overview:
      "Treating industrial effluent is complex due to varying loads and contaminants. Our ETP chemicals are designed to handle tough waste streams, reducing COD/BOD, color, and suspended solids effectively.",
    features: [
      {
        title: "Coagulants",
        description: "Inorganic and organic coagulants for primary treatment.",
        benefits: ["Reduces sludge volume", "Effective color removal", "Works over wide pH range"],
      },
      {
        title: "Flocculants",
        description: "High molecular weight polymers for rapid settling.",
        benefits: ["Fast floc formation", "Clear supernatant", "Improved dewatering"],
      },
      {
        title: "Bio Treatment",
        description: "Specialized bacterial cultures for secondary treatment.",
        benefits: ["Reduces COD/BOD", "Handles shock loads", "Quick startup"],
      },
      {
        title: "pH Control",
        description: "Acids and alkalis for neutralization.",
        benefits: ["Precise pH adjustment", "Safe handling", "Cost effective"],
      },
    ],
    applications: [
      {
        industry: "Textile",
        uses: ["Dye Bath Removal", "Washing Effluent"],
        benefits: ["Color removal", "ZLD support"],
      },
      {
        industry: "Automobile",
        uses: ["Paint Shop", "Oily Waste"],
        benefits: ["Oil & Grease removal", "Heavy metal precipitation"],
      },
      {
        industry: "Paper & Pulp",
        uses: ["Black Liquor", "Whitewater"],
        benefits: ["Fiber recovery", "Lignin removal"],
      },
    ],
    specifications: [
      { label: "Charge Density", value: "Low / Medium / High" },
      { label: "Molecular Weight", value: "High / Ultra High" },
      { label: "Form", value: "Liquid / Powder / Emulsion" },
      { label: "Stability", value: "Stable under normal conditions" },
    ],
    benefits: [],
    certifications: ["ISO 14001", "ZDHC Compliant", "Oeko-Tex Compliant"],
    cta: {
      primary: "Get Quote",
      secondary: "Consult Expert",
      tertiary: "View MSDS",
    },
  },
  "wtp-treatment-chemicals": {
    title: "WTP Treatment Chemicals",
    category: "Raw Water Treatment",
    tagline: "Crystal Clear Water for Every Application",
    description:
      "From river water clarification to disinfection, our WTP chemicals ensure you get the highest quality water for your process and potable needs.",
    heroImage: "/water-treatment-plant.jpg",
    detailImage: "/lab-testing-water-quality.jpg",
    overview:
      "Raw water quality varies seasonally. Our WTP chemicals provide robust performance against turbidity, organics, and pathogens, ensuring a consistent supply of treated water for your plant or community.",
    features: [
      {
        title: "Coagulants",
        description: "Alum, PAC, and organic coagulants.",
        benefits: ["Low dosage requirement", "Effective in cold water", "Reduces alkalinity consumption"],
      },
      {
        title: "Flocculants",
        description: "Polyelectrolytes for clarifiers and filters.",
        benefits: ["Increases clarifier throughput", "Extends filter runs", "Improves water clarity"],
      },
      {
        title: "Disinfectants",
        description: "Chlorine, Chlorine Dioxide, and specialized biocides.",
        benefits: ["Kills bacteria and viruses", "Residual protection", "Taste and odor control"],
      },
      {
        title: "Bio Control",
        description: "Algaecides for reservoirs and tanks.",
        benefits: ["Prevents algae blooms", "Safe for fish (selected grades)", "Long lasting"],
      },
    ],
    applications: [
      {
        industry: "Municipal",
        uses: ["Drinking Water", "Sewage Treatment"],
        benefits: ["Public health safety", "Cost efficiency"],
      },
      {
        industry: "Industrial",
        uses: ["Process Water", "Utility Water"],
        benefits: ["Protects downstream equipment", "Consistent quality"],
      },
      {
        industry: "Commercial",
        uses: ["Hotels", "Resorts"],
        benefits: ["Guest safety", "Aesthetic water quality"],
      },
    ],
    specifications: [
      { label: "Purity", value: "Commercial / Food Grade" },
      { label: "pH", value: "Various" },
      { label: "Solubility", value: "Complete" },
      { label: "Certifications", value: "NSF / ANSI" },
    ],
    benefits: [],
    certifications: ["NSF/ANSI 60", "ISO 9001", "WHO Guidelines Compliant"],
    cta: {
      primary: "Get Quote",
      secondary: "Contact Us",
      tertiary: "Product List",
    },
  },
}

export const dynamic = "force-dynamic"

export default async function ProductPage({ params }: { params: Promise<{ product: string }> }) {
  const { product: productSlug } = await params
  const product = productData[productSlug as keyof typeof productData]

  if (!product) {
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
              href="/products"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Products
            </Link>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.title}</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">{product.tagline}</p>
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="bg-white -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={product.heroImage || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Product Overview</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">{product.overview}</p>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={(product as any).detailImage || "/placeholder.svg"}
                  alt={`${product.title} Detail`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Key Features</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-foreground/60 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact our team to learn more about {product.title} and how it can benefit your organization.
            </p>
            <Suspense fallback={<div className="flex justify-center py-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div></div>}>
            <ProductPageClient product={product} />
          </Suspense>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
