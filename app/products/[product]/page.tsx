import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"
import { ArrowLeft, CheckCircle, Star, Shield, Award, Truck, Phone, Mail, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

const productData = {
  "chemion-resins": {
    title: "CHEMION® Resins",
    tagline: "Advanced Ion Exchange Technology for Superior Water Treatment",
    description: "Revolutionary ion exchange resins with 99.9% contaminant removal efficiency and enhanced membrane compatibility for industrial water treatment applications.",
    heroImage: "/ion-exchange-resins-water-treatment-industrial.jpg",
    category: "Ion Exchange Resins",
    overview: "CHEMION® resins represent the pinnacle of ion exchange technology, offering unmatched performance for water treatment applications across industries. Our advanced resin technology delivers superior ion exchange capacity, chemical stability, and operational longevity.",
    features: [
      {
        title: "Superior Exchange Capacity",
        description: "40% higher ion exchange capacity compared to conventional resins",
        benefits: ["Reduced chemical consumption", "Lower operating costs", "Longer service intervals"]
      },
      {
        title: "Enhanced Chemical Stability",
        description: "Exceptional resistance to pH variations, oxidizing agents, and temperature fluctuations",
        benefits: ["Extended lifespan", "Consistent performance", "Reduced replacement frequency"]
      },
      {
        title: "Optimized Particle Size",
        description: "Engineered particle distribution for maximum flow rates and minimal pressure drop",
        benefits: ["Energy savings", "Higher throughput", "Improved system efficiency"]
      },
      {
        title: "Membrane Compatibility",
        description: "Specially designed to work seamlessly with modern membrane systems",
        benefits: ["Enhanced membrane life", "Reduced fouling", "Optimal pretreatment"]
      }
    ],
    applications: [
      {
        industry: "Power Generation",
        uses: ["Boiler feed water demineralization", "Condensate polishing", "Cooling water treatment"],
        benefits: ["99.9% water purity", "Scale prevention", "Corrosion control"]
      },
      {
        industry: "Pharmaceutical",
        uses: ["USP purified water", "Water for injection (WFI)", "Process water treatment"],
        benefits: ["FDA compliance", "Consistent quality", "Validated performance"]
      },
      {
        industry: "Food & Beverage",
        uses: ["Process water", "Ingredient water", "Cleaning-in-place systems"],
        benefits: ["Taste enhancement", "Product safety", "Extended shelf life"]
      },
      {
        industry: "Textile",
        uses: ["Dyeing process water", "Rinsing water", "Effluent treatment"],
        benefits: ["Color fastness", "Reduced water usage", "Environmental compliance"]
      }
    ],
    specifications: [
      { label: "Exchange Capacity", value: "5.2 meq/ml (minimum)" },
      { label: "Particle Size", value: "0.3-1.2 mm (uniform)" },
      { label: "Operating pH Range", value: "0-14 (acid & base stable)" },
      { label: "Operating Temperature", value: "0-120°C" },
      { label: "Chemical Stability", value: "Excellent against oxidizers" },
      { label: "Service Life", value: "5-8 years (properly maintained)" },
      { label: "Compliance", value: "NSF/ANSI 61, ISO 9001" }
    ],
    benefits: [
      "40% higher exchange capacity than standard resins",
      "99.9% contaminant removal efficiency",
      "Extended service life up to 8 years",
      "Compatible with all major OEM equipment",
      "ISO certified manufacturing process",
      "Comprehensive technical support",
      "Custom formulations available",
      "Environmentally friendly regeneration"
    ],
    testimonials: [
      {
        name: "Dr. Ramesh Kumar",
        title: "Plant Manager, Tata Steel",
        content: "CHEMION® resins have reduced our operating costs by 35% while improving water quality. The performance is exceptional.",
        rating: 5
      },
      {
        name: "Priya Nair",
        title: "Quality Head, Sun Pharma",
        content: "The reliability and consistency of CHEMION® resins have been crucial for our GMP compliance. Excellent product.",
        rating: 5
      }
    ],
    certifications: ["ISO 9001", "NSF/ANSI 61", "IS 14237", "UL Listed", "CE Marked"],
    cta: {
      primary: "Request Technical Data Sheet",
      secondary: "Get Quote",
      tertiary: "Schedule Consultation"
    }
  },
  "aquamem-membranes": {
    title: "AQUAMEM® Membranes",
    tagline: "Advanced Membrane Technology for Maximum Efficiency",
    description: "Next-generation UF, NF, and RO membranes engineered for superior flux, minimal fouling, and extended operational life in demanding water treatment applications.",
    heroImage: "/membrane-technology-water-filtration-system.jpg",
    category: "Membrane Systems",
    overview: "AQUAMEM® membranes utilize cutting-edge nanotechnology to deliver unmatched performance in water purification. Our proprietary membrane technology ensures high flux rates, excellent rejection efficiency, and remarkable resistance to fouling.",
    features: [
      {
        title: "High Flux Technology",
        description: "Up to 50% higher permeate flow rates compared to conventional membranes",
        benefits: ["Reduced system footprint", "Lower energy consumption", "Higher productivity"]
      },
      {
        title: "Anti-Fouling Surface",
        description: "Advanced surface chemistry prevents organic and biological fouling",
        benefits: ["Longer intervals between cleaning", "Reduced chemical usage", "Consistent performance"]
      },
      {
        title: "Broad pH Compatibility",
        description: "Stable performance across pH 2-11 range",
        benefits: ["Versatile applications", "Acid and caustic cleaning", "Extended membrane life"]
      },
      {
        title: "High Rejection Rates",
        description: "99.5%+ rejection of contaminants and dissolved solids",
        benefits: ["Superior water quality", "Meeting regulatory standards", "Product reliability"]
      }
    ],
    applications: [
      {
        industry: "Municipal Water Treatment",
        uses: ["Drinking water purification", "Wastewater reclamation", "Desalination plants"],
        benefits: ["WHO/ISO compliance", "Cost-effective operation", "Reliable performance"]
      },
      {
        industry: "Industrial Process",
        uses: ["Boiler feed pretreatment", "Process water recycling", "Effluent polishing"],
        benefits: ["Water conservation", "Process optimization", "Environmental compliance"]
      },
      {
        industry: "Healthcare",
        uses: ["Hospital water systems", "Dialysis water", "Laboratory pure water"],
        benefits: ["Medical grade purity", "Reliable performance", "Low maintenance"]
      },
      {
        industry: "Hospitality",
        uses: ["Hotel water treatment", "Bottled water production", "Pool filtration"],
        benefits: ["Guest satisfaction", "Cost efficiency", "Brand reputation"]
      }
    ],
    specifications: [
      { label: "Rejection Rate", value: "99.5%+ (NaCl)" },
      { label: "Flux Rate", value: "45-75 GFD" },
      { label: "pH Range", value: "2-11" },
      { label: "Max Temperature", value: "45°C" },
      { label: "Chlorine Tolerance", value: "2000 ppm·h" },
      { label: "Compaction", value: "<10% at 70 psi" },
      { label: "Certifications", value: "NSF/ANSI 58, CE, ISO" }
    ],
    benefits: [
      "50% higher flux than conventional membranes",
      "Extended service life up to 5 years",
      "Reduced cleaning frequency by 60%",
      "99.5% contaminant rejection",
      "Energy-efficient operation",
      "Easy installation and maintenance",
      "Custom module configurations",
      "Comprehensive warranty"
    ],
    testimonials: [
      {
        name: "Mohan Reddy",
        title: "Operations Director, L&T Water",
        content: "AQUAMEM® membranes have revolutionized our plant efficiency. The flux rates and low fouling are game-changers.",
        rating: 5
      }
    ],
    certifications: ["ISO 9001", "NSF/ANSI 58", "IS 16291", "UL Listed", "CE Marked"],
    cta: {
      primary: "Download Technical Specs",
      secondary: "Request Pricing",
      tertiary: "Book a Demo"
    }
  },
  "specialty-chemicals": {
    title: "Specialty Chemicals",
    tagline: "Custom-Formulated Treatment Chemicals for Optimal Performance",
    description: "Comprehensive range of water treatment chemicals formulated for specific industrial applications, ensuring system protection, efficiency, and environmental compliance.",
    heroImage: "/chemical-treatment-water-processing-industrial.jpg",
    category: "Treatment Chemicals",
    overview: "Our specialty chemicals are formulated using advanced chemistry to address specific water treatment challenges across industries. Each product undergoes rigorous testing to ensure optimal performance and safety.",
    features: [
      {
        title: "Custom Formulations",
        description: "Tailored chemical solutions based on water analysis and system requirements",
        benefits: ["Optimal performance", "Cost-effective", "Problem-specific solutions"]
      },
      {
        title: "Environmentally Safe",
        description: "Biodegradable formulations meeting environmental regulations",
        benefits: ["Regulatory compliance", "Reduced environmental impact", "Sustainable operations"]
      },
      {
        title: "Multi-Functional",
        description: "Single products addressing multiple treatment objectives",
        benefits: ["Simplified dosing", "Reduced inventory", "Lower operational costs"]
      },
      {
        title: "Quality Certified",
        description: "Manufactured under ISO 9001 quality standards",
        benefits: ["Consistent quality", "Traceability", "Documentation support"]
      }
    ],
    applications: [
      {
        industry: "Power Plants",
        uses: ["Boiler water treatment", "Cooling tower chemicals", "Condensate treatment"],
        benefits: ["Scale prevention", "Corrosion control", "Microbial control"]
      },
      {
        industry: "Oil & Gas",
        uses: ["Produced water treatment", "Refinery processes", "Enhanced oil recovery"],
        benefits: ["Process optimization", "Environmental compliance", "Equipment protection"]
      },
      {
        industry: "Pulp & Paper",
        uses: ["Process water treatment", "Effluent treatment", "Paper machine additives"],
        benefits: ["Quality improvement", "Production efficiency", "Water reuse"]
      }
    ],
    specifications: [
      { label: "pH Range", value: "1-14 (product-specific)" },
      { label: "Concentration", value: "10-80% (customizable)" },
      { label: "Temperature Stability", value: "-10°C to 60°C" },
      { label: "Shelf Life", value: "24 months (proper storage)" },
      { label: "Packaging", value: "1L to 1000L containers" },
      { label: "Certifications", value: "ISO 9001, REACH, RoHS" },
      { label: "MSDS Available", value: "Yes (comprehensive)" }
    ],
    benefits: [
      "Custom formulations for specific needs",
      "Environmentally friendly and biodegradable",
      "ISO certified manufacturing",
      "Comprehensive technical support",
      "RTP and custom synthesis available",
      "Quality assurance testing",
      "Cost-effective solutions",
      "Regulatory compliance documentation"
    ],
    certifications: ["ISO 9001", "ISO 14001", "OHSAS 18001", "REACH Compliant"],
    cta: {
      primary: "Request Technical Data",
      secondary: "Custom Formulation",
      tertiary: "Sample Request"
    }
  },
  "treatment-plants": {
    title: "Treatment Plants & Systems",
    tagline: "Complete Water Treatment Solutions from 10 KLD to 1000+ MLD",
    description: "Comprehensive water treatment plants including ETP, STP, ZLD, and custom systems designed for municipal and industrial applications with modular construction for rapid deployment.",
    heroImage: "/water-treatment-plant-industrial-facility.jpg",
    category: "Treatment Systems",
    overview: "Our turnkey water treatment plants are engineered for optimal performance, energy efficiency, and compliance with environmental regulations. From conceptual design to commissioning, we deliver complete solutions.",
    features: [
      {
        title: "Modular Construction",
        description: "Prefabricated modules for quick installation and easy expansion",
        benefits: ["Reduced construction time", "Lower civil costs", "Scalable design"]
      },
      {
        title: "Smart Controls",
        description: "Advanced PLC-based automation with remote monitoring",
        benefits: ["Reduced manpower", "Consistent performance", "Real-time monitoring"]
      },
      {
        title: "Energy Recovery",
        description: "Heat recovery systems for energy optimization",
        benefits: ["Reduced operating costs", "Lower carbon footprint", "Sustainable operation"]
      },
      {
        title: "Custom Design",
        description: "Tailored solutions based on specific water quality and flow requirements",
        benefits: ["Optimal performance", "Cost-effective", "Site-specific optimization"]
      }
    ],
    applications: [
      {
        industry: "Municipal",
        uses: ["Sewage treatment", "Water purification", "Waste management"],
        benefits: ["Public health protection", "Environmental compliance", "Resource recovery"]
      },
      {
        industry: "Industrial",
        uses: ["Effluent treatment", "Process water", "Zero liquid discharge"],
        benefits: ["Regulatory compliance", "Water reuse", "Cost optimization"]
      },
      {
        industry: "Institutional",
        uses: ["Campus treatment", "Hospital waste", "Hotel sewage"],
        benefits: ["Waste reduction", "Water recycling", "Cost savings"]
      }
    ],
    specifications: [
      { label: "Capacity Range", value: "10 KLD to 1000+ MLD" },
      { label: "Installation Time", value: "3-12 months (turnkey)" },
      { label: "Footprint", value: "50-5000 sq.m (site specific)" },
      { label: "Power Consumption", value: "0.5-2.5 kWh/m³" },
      { label: "Automation Level", value: "PLC + SCADA available" },
      { label: "Warranty", value: "24 months (extendable)" },
      { label: "AMC Available", value: "Yes (comprehensive)" }
    ],
    benefits: [
      "Turnkey project execution",
      "Fast track construction possible",
      "Energy-efficient operation",
      "Comprehensive AMC support",
      "Customized financing options",
      "Built-in redundancy",
      "Remote monitoring capability",
      "Comprehensive documentation"
    ],
    testimonials: [
      {
        name: "Ankit Sharma",
        title: "Project Head, Reliance Industries",
        content: "The turnkey plant delivered by ChemParks exceeded our expectations. Commissioning was smooth and performance is outstanding.",
        rating: 5
      }
    ],
    certifications: ["ISO 9001", "ISO 14001", "CE", "UL Listed", "NSF Certified"],
    cta: {
      primary: "Request Project Proposal",
      secondary: "Site Visit Request",
      tertiary: "Financing Options"
    }
  },
  "chempure-home": {
    title: "ChemPure® Home",
    tagline: "Advanced Residential Water Purification Solutions",
    description: "State-of-the-art RO and UV water purifiers designed for modern homes, delivering premium drinking water quality with smart monitoring and low maintenance requirements.",
    heroImage: "/home-water-purifier-ro-uv-system.jpg",
    category: "Residential Systems",
    overview: "ChemPure® Home water purifiers combine advanced RO technology with UV purification to deliver safe, healthy, and great-tasting drinking water for your family. Our smart features ensure hassle-free operation.",
    features: [
      {
        title: "7-Stage Purification",
        description: "Advanced multi-stage purification process for complete water safety",
        benefits: ["Removes all contaminants", "Retains essential minerals", "Great taste"]
      },
      {
        title: "Smart Monitoring",
        description: "IoT-enabled monitoring with mobile app integration",
        benefits: ["Real-time alerts", "Filter life tracking", "Remote diagnostics"]
      },
      {
        title: "High Recovery Rate",
        description: "Advanced technology for 60%+ water recovery",
        benefits: ["Reduced water wastage", "Cost savings", "Environmentally friendly"]
      },
      {
        title: "Low Maintenance",
        description: "Long-life filters with easy replacement system",
        benefits: ["Hassle-free operation", "Cost-effective", "Time-saving"]
      }
    ],
    applications: [
      {
        industry: "Residential",
        uses: ["Drinking water", "Cooking water", "Ice making", "Beverage preparation"],
        benefits: ["Health protection", "Better taste", "Family safety"]
      }
    ],
    specifications: [
      { label: "Purification Capacity", value: "15-25 LPH" },
      { label: "Storage Capacity", value: "8-12 liters" },
      { label: "Power Consumption", value: "25-35W" },
      { label: "Voltage Range", value: "100-300V AC" },
      { label: "Dimensions", value: "40×25×50 cm (standard)" },
      { label: "Warranty", value: "2 years (extendable)" },
      { label: "Certifications", value: "NSF, CE, ISI, BIS" }
    ],
    benefits: [
      "99.9% contaminant removal",
      "Smart monitoring with mobile app",
      "60%+ water recovery rate",
      "Mineral retention technology",
      "Compact and aesthetic design",
      "Low maintenance requirements",
      "2-year comprehensive warranty",
      "After-sales service support"
    ],
    certifications: ["NSF/ANSI 53", "CE", "ISI", "BIS Certified", "FSSAI Approved"],
    cta: {
      primary: "Book Free Demo",
      secondary: "Get Quote",
      tertiary: "Find Dealers"
    }
  },
  "spare-parts": {
    title: "Spare Parts & Consumables",
    tagline: "Genuine OEM Quality Parts for Optimal System Performance",
    description: "Comprehensive inventory of genuine membranes, resins, filters, and service kits designed to maintain peak performance and extend equipment life for all major water treatment systems.",
    heroImage: "/industrial-spare-parts-water-treatment-equipment.jpg",
    category: "Spares & Consumables",
    overview: "Our genuine spare parts and consumables are manufactured to exact OEM specifications, ensuring perfect fit, optimal performance, and extended equipment life. We maintain extensive inventory for quick delivery.",
    features: [
      {
        title: "OEM Quality",
        description: "Manufactured to original equipment specifications",
        benefits: ["Perfect fit", "Optimal performance", "Warranty protection"]
      },
      {
        title: "Large Inventory",
        description: "Comprehensive stock of all major brands and models",
        benefits: ["Quick delivery", "No downtime", "Emergency support"]
      },
      {
        title: "Expert Support",
        description: "Technical assistance for proper selection and installation",
        benefits: ["Correct selection", "Proper installation", "Optimal performance"]
      },
      {
        title: "Competitive Pricing",
        description: "Best prices with quantity discounts available",
        benefits: ["Cost savings", "Value for money", "Budget optimization"]
      }
    ],
    applications: [
      {
        industry: "All Industries",
        uses: ["Maintenance", "Upgrades", "Repairs", "Inventory management"],
        benefits: ["System reliability", "Extended life", "Cost optimization"]
      }
    ],
    specifications: [
      { label: "Product Range", value: "500+ SKUs available" },
      { label: "Brands Supported", value: "All major OEMs" },
      { label: "Delivery Time", value: "24-72 hours (India)" },
      { label: "Warranty", value: "6-24 months (item specific)" },
      { label: "Packaging", value: "Industrial grade packaging" },
      { label: "Testing", value: "100% pre-dispatch testing" },
      { label: "Documentation", value: "Technical datasheets provided" }
    ],
    benefits: [
      "Genuine OEM quality parts",
      "Extended warranty available",
      "Fast delivery across India",
      "Technical support included",
      "Quantity discounts",
      "AMC contracts available",
      "Emergency support",
      "Inventory management solutions"
    ],
    certifications: ["ISO 9001", "CE", "UL Listed", "Manufacturer Authorized"],
    cta: {
      primary: "Search Parts",
      secondary: "Request Quote",
      tertiary: "AMC Inquiry"
    }
  }
}

export async function generateStaticParams() {
  return Object.keys(productData).map((product) => ({
    product: product,
  }))
}

export default function ProductPage({ params }: { params: { product: string } }) {
  const product = productData[params.product as keyof typeof productData]

  if (!product) {
    notFound()
  }

  return (
    <>
      <Loader />
      <Header />

      <main className="pt-16 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Products
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-yellow-400 text-purple-900 text-sm px-3 py-1 rounded-full font-medium">
                  {product.category}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-yellow-400 text-sm ml-1">4.9</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {product.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6">
                {product.tagline}
              </p>
              <p className="text-lg text-blue-100">
                {product.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { label: "ISO Certified", icon: Shield },
                  { label: "Fast Delivery", icon: Truck },
                  { label: "24/7 Support", icon: Phone },
                  { label: "Expert Team", icon: Award }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
                    <stat.icon className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="bg-white -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={product.heroImage}
              alt={product.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Product Overview
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {product.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {product.features.map((feature, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 mb-6">
                    {feature.description}
                  </p>
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

        {/* Applications */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Industry Applications
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.applications.map((app, index) => (
                <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-bold text-foreground mb-3">{app.industry}</h3>
                  <div className="mb-4">
                    <p className="text-sm text-foreground/600 mb-2">Key Uses:</p>
                    <ul className="space-y-1">
                      {app.uses.map((use, useIndex) => (
                        <li key={useIndex} className="text-sm text-foreground/80">• {use}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/600 mb-2">Benefits:</p>
                    <ul className="space-y-1">
                      {app.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-purple-600 font-medium">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Technical Specifications
            </h2>

            <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-foreground/70">{spec.label}</span>
                    <span className="font-semibold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Choose {product.title}?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-purple-800" />
                  </div>
                  <p className="text-blue-100">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {product.testimonials && (
          <section className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Customer Testimonials
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {product.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-foreground/70 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Certifications & Compliance
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {product.certifications.map((cert, index) => (
                <div key={index} className="bg-gray-100 rounded-lg px-6 py-3 text-center">
                  <div className="text-2xl mb-1">🏆</div>
                  <p className="text-sm font-medium text-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-purple-700 to-purple-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact our team to learn more about {product.title} and how it can benefit your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 text-purple-800 hover:bg-yellow-300">
                <FileText className="w-4 h-4 mr-2" />
                {product.cta.primary}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-800">
                <Phone className="w-4 h-4 mr-2" />
                {product.cta.secondary}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-800">
                <Mail className="w-4 h-4 mr-2" />
                {product.cta.tertiary}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}