import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, Search, Filter, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    title: "Advanced Ion Exchange Technology: The Future of Water Purification",
    excerpt: "Discover how CHEMION® resins are revolutionizing industrial water treatment with 99.9% contaminant removal efficiency and enhanced membrane life cycles.",
    category: "Technology",
    readTime: "5 min read",
    date: "Nov 8, 2025",
    image: "/ion-exchange-resins-water-treatment-industrial.jpg",
    featured: true,
  },
  {
    title: "Zero Liquid Discharge: Sustainable Solutions for Industries",
    excerpt: "Learn how ZLD systems help industries achieve environmental compliance while reducing water consumption and waste through advanced membrane technologies.",
    category: "Sustainability",
    readTime: "7 min read",
    date: "Nov 5, 2025",
    image: "/membrane-water-treatment-technology.jpg",
    featured: false,
  },
  {
    title: "Water Treatment in 2025: Trends and Innovations",
    excerpt: "Explore the latest trends in water treatment technology, from IoT-enabled systems to AI-powered optimization and predictive maintenance.",
    category: "Industry Insights",
    readTime: "6 min read",
    date: "Nov 1, 2025",
    image: "/water-treatment-plant-industrial-facility.jpg",
    featured: false,
  },
  {
    title: "Membrane Fouling Prevention: Best Practices and Solutions",
    excerpt: "Essential strategies to prevent membrane fouling and extend operational life in industrial water treatment systems.",
    category: "Technology",
    readTime: "8 min read",
    date: "Oct 28, 2025",
    image: "/membrane-technology-water-filtration-system.jpg",
    featured: false,
  },
  {
    title: "Case Study: Water Audit Success in Manufacturing Plant",
    excerpt: "How a comprehensive water audit helped reduce water consumption by 40% and improve operational efficiency in a large manufacturing facility.",
    category: "Case Studies",
    readTime: "10 min read",
    date: "Oct 25, 2025",
    image: "/water-audit-consulting-professional-analysis.jpg",
    featured: false,
  },
  {
    title: "ChemPure® Home: The Future of Residential Water Purification",
    excerpt: "Introducing our advanced RO and UV purification systems designed for modern homes with smart monitoring features.",
    category: "Product Launch",
    readTime: "4 min read",
    date: "Oct 22, 2025",
    image: "/home-water-purifier-ro-uv-system.jpg",
    featured: false,
  },
]

const categories = ["All", "Technology", "Sustainability", "Industry Insights", "Case Studies", "Product Launch"]

export default function BlogPage() {
  return (
    <>
      <Header />

      {/* Professional Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">Blog</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive water treatment solutions for your industrial needs
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full text-base font-light tracking-wide transition-all ${
                  category === "All"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Post */}
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md mb-12">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-8 md:p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="bg-gray-900 text-white text-sm px-4 py-2 rounded-full font-light tracking-wide">
                          Featured
                        </span>
                        <span className="text-gray-500 text-base font-light">{post.category}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 tracking-wide">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed font-light text-lg">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-base text-gray-500 font-light">
                          <span className="flex items-center gap-2">
                            <Calendar size={16} />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock size={16} />
                            {post.readTime}
                          </span>
                        </div>
                        <Link
                          href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                          className="text-gray-900 hover:text-gray-600 font-light tracking-wide inline-flex items-center gap-2 text-base"
                        >
                          Read More
                          <ChevronRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              {/* Regular Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.filter(post => !post.featured).map((post, index) => (
                  <article key={index} className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                    <div className="h-56 bg-gray-50">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-gray-900 text-base font-light tracking-wide">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-light text-gray-900 mb-4 line-clamp-2 tracking-wide">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed font-light">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-base text-gray-500 font-light">
                          <span className="flex items-center gap-2">
                            <Calendar size={14} />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock size={14} />
                            {post.readTime}
                          </span>
                        </div>
                        <Link
                          href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                          className="text-gray-900 hover:text-gray-600 font-light tracking-wide text-base"
                        >
                          Read →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">

              {/* Popular Categories */}
              <div className="bg-white rounded-lg border border-gray-100 p-8 mb-8">
                <h3 className="text-xl font-light text-gray-900 mb-6 tracking-wide">
                  Popular Categories
                </h3>
                <div className="space-y-4">
                  {["Technology", "Sustainability", "Industry Insights", "Case Studies"].map((category, index) => (
                    <Link
                      key={index}
                      href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center justify-between hover:text-gray-900 transition-colors p-2"
                    >
                      <span className="text-gray-700 font-light text-base">{category}</span>
                      <ChevronRight size={18} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-lg border border-gray-100 p-8">
                <h3 className="text-xl font-light text-gray-900 mb-6 tracking-wide">
                  Recent Posts
                </h3>
                <div className="space-y-6">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <Link
                      key={index}
                      href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                      className="group"
                    >
                      <h4 className="text-base font-light text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-2 mb-2 tracking-wide leading-relaxed">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500 font-light">{post.date}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}