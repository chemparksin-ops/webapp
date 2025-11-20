import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Loader } from "@/components/loader"
// import { Innovations } from "@/components/innovations"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { Blog } from "@/components/blog"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ChemParks - Advanced Industrial Water Treatment & Management Solutions",
  description:
    "ChemParks provides comprehensive industrial water treatment solutions including RO Plants, ETP, STP, ZLD, and specialty chemicals. 30+ years of expertise in optimizing water systems for efficiency and compliance.",
  openGraph: {
    title: "ChemParks - Advanced Industrial Water Treatment & Management Solutions",
    description:
      "Leading provider of industrial water treatment solutions: RO, ETP, STP, ZLD, and Chemicals. Optimize your water systems with ChemParks.",
    images: [
      {
        url: "/water-treatment-plant.jpg",
        width: 1200,
        height: 630,
        alt: "ChemParks Industrial Water Treatment Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChemParks - Advanced Industrial Water Treatment Solutions",
    description: "Expert industrial water treatment solutions: RO, ETP, STP, ZLD, and Chemicals.",
    images: ["/water-treatment-plant.jpg"],
  },
}

export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <Hero />
      {/* <Innovations /> */}
      <Services />
      <Products />
      <Blog />
      <Footer />
    </>
  )
}
