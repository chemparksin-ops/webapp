import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    Products: [
      { name: "RO Membrane Solutions", href: "/products/ro-membrane-solutions" },
      { name: "Boiler Water Treatment", href: "/products/boiler-water-treatment" },
      { name: "Cooling Water Treatment", href: "/products/cooling-water-treatment" },
      { name: "ETP Treatment Chemicals", href: "/products/etp-treatment-chemicals" },
      { name: "WTP Treatment Chemicals", href: "/products/wtp-treatment-chemicals" },
    ],
    Services: [
      { name: "ETP Audit Services", href: "/services/etp-audit-services" },
      { name: "WTP Audit Services", href: "/services/wtp-audit-services" },
      { name: "Boiler Water Treatment Audit", href: "/services/boiler-water-treatment-audit" },
      { name: "Cooling Tower Treatment Audit", href: "/services/cooling-tower-treatment-audit" },
      { name: "RO Troubleshooting Audit", href: "/services/ro-troubleshooting-audit" },
      { name: "Water Treatment Consultation", href: "/services/water-treatment-consultation" },
    ],
  }

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      {/* Main footer content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand section */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1 fade-in">
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="/Chem_park_Logo_1-01.jpg"
                  alt="ChemParks Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="font-light tracking-wide text-lg">ChemParks</span>
              </div>
              <p className="text-white/85 text-sm leading-relaxed font-light">
                30+ years of excellence in total water and environment management solutions.
              </p>
            </div>

            {/* Links sections */}
            {Object.entries(footerLinks).map(([category, links], idx) => (
              <div key={category} className={`fade-in stagger-${idx + 1}`}>
                <h3 className="font-light tracking-wide mb-4 text-lg">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors text-sm duration-200 font-light"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div className="fade-in stagger-4">
              <h3 className="font-light tracking-wide mb-4 text-lg">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm duration-200">
                  <Mail size={16} className="flex-shrink-0" />
                  <a href="mailto:chemparks.in@gmail.com" className="font-light">
                    chemparks.in@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm duration-200">
                  <Phone size={16} className="flex-shrink-0" />
                  <a href="tel:9500506061" className="font-light">
                    9500506061
                  </a>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span className="font-light">
                    5A, Thiruvalluvar Nagar
                    <br />
                    Sirupoolvapatti, Ring Road
                    <br />
                    Tirupur - 641603, Tamil Nadu
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center sm:text-left font-light">
              © {new Date().getFullYear()} ChemParks. All rights reserved.
              <br />
              Developed by{" "}
              <a
                href="tel:9001270298"
                className="text-white/80 hover:text-white transition-colors duration-200 underline decoration-dotted underline-offset-2"
              >
                Yesp Tech Solutions
              </a>
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-white/70 hover:text-white text-sm transition-colors duration-200 font-light"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-white/70 hover:text-white text-sm transition-colors duration-200 font-light"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
