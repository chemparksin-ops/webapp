import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Loader } from "@/components/loader"
import { Innovations } from "@/components/innovations"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { Blog } from "@/components/blog"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ChemParks - Advanced Water & Environment Management Solutions",
  description: "Leading provider of comprehensive water treatment solutions including CHEMION® ion exchange resins, AQUAMEM® membranes, and specialty chemicals. 30+ years of expertise in industrial, municipal, and residential water treatment.",
  openGraph: {
    title: "ChemParks - Advanced Water & Environment Management Solutions",
    description: "Leading provider of comprehensive water treatment solutions with 30+ years of expertise. CHEMION® resins, AQUAMEM® membranes, and specialty chemicals.",
    images: [
      {
        url: "/water-treatment-plant-industrial.jpg",
        width: 1200,
        height: 630,
        alt: "ChemParks Water Treatment Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChemParks - Advanced Water & Environment Management Solutions",
    description: "Leading provider of comprehensive water treatment solutions with 30+ years of expertise.",
    images: ["/water-treatment-plant-industrial.jpg"],
  },
}

export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <Hero />
      <Innovations />
      <Services />
      <Products />
      <Blog />
      <Footer />
    </>
  )
}