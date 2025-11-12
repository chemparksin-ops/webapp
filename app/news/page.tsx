import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar } from "lucide-react"

export default function NewsPage() {
  const newsItems = [
    {
      date: "November 2024",
      title: "ChemParks Receives Sustainability Excellence Award",
      excerpt: "Recognition for innovative environmental management solutions and carbon-neutral operations",
      category: "Awards",
    },
    {
      date: "October 2024",
      title: "New AQUAMEM® RO Membrane Technology Launch",
      excerpt: "Advanced membrane technology offering superior performance and 30% greater efficiency",
      category: "Product Launch",
    },
    {
      date: "September 2024",
      title: "ChemParks Expands Manufacturing Capacity",
      excerpt: "Opening new facility to meet growing demand for water treatment solutions in Asia",
      category: "Expansion",
    },
    {
      date: "August 2024",
      title: "Partnership with Leading Research Institute",
      excerpt: "Collaborating on next-generation water purification technologies and sustainability initiatives",
      category: "Partnership",
    },
    {
      date: "July 2024",
      title: "50th Installation Milestone Achieved",
      excerpt: "Celebrating successful deployment of 10,000th treatment system worldwide",
      category: "Milestone",
    },
    {
      date: "June 2024",
      title: "Zero Liquid Discharge Project Success",
      excerpt: "Successfully implemented ZLD system at major pharmaceutical facility in India",
      category: "Success Story",
    },
  ]

  return (
    <>
      <Loader />
      <Header />
      <main className="pt-24">
        {/* Page Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-4">News & Press</h1>
            <p className="text-xl text-foreground/60 max-w-2xl">
              Latest updates, press releases, and company milestones
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <article
                  key={index}
                  className="p-8 bg-card border border-border rounded-lg hover:border-accent transition-colors group"
                >
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-foreground/60">
                      <Calendar size={16} />
                      <span className="text-sm">{item.date}</span>
                    </div>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">{item.category}</span>
                  </div>

                  <Link href="#">
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {item.title}
                    </h2>
                  </Link>

                  <p className="text-foreground/70 leading-relaxed">{item.excerpt}</p>

                  <Link
                    href="#"
                    className="inline-block mt-4 text-accent font-semibold hover:text-accent/80 transition-colors"
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Resources & Downloads</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="p-6 bg-card border border-border rounded-lg text-center">
                <div className="text-3xl mb-3">📄</div>
                <h3 className="font-bold text-foreground mb-2">Brochures & Datasheets</h3>
                <p className="text-sm text-foreground/60 mb-4">Download product specifications and technical data</p>
                <Link href="#" className="text-accent text-sm font-semibold hover:text-accent/80">
                  Download
                </Link>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg text-center">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold text-foreground mb-2">Case Studies</h3>
                <p className="text-sm text-foreground/60 mb-4">Real-world success stories and implementation details</p>
                <Link href="#" className="text-accent text-sm font-semibold hover:text-accent/80">
                  Download
                </Link>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg text-center">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="font-bold text-foreground mb-2">Annual Reports</h3>
                <p className="text-sm text-foreground/60 mb-4">Company performance and sustainability metrics</p>
                <Link href="#" className="text-accent text-sm font-semibold hover:text-accent/80">
                  Download
                </Link>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg text-center">
                <div className="text-3xl mb-3">🎥</div>
                <h3 className="font-bold text-foreground mb-2">Media Kit</h3>
                <p className="text-sm text-foreground/60 mb-4">Press releases, images, and video content</p>
                <Link href="#" className="text-accent text-sm font-semibold hover:text-accent/80">
                  Download
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
