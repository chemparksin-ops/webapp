import { Calendar, Clock, ArrowRight, TrendingUp, Droplet, Shield, Users } from "lucide-react"
import Link from "next/link"

export function Blog() {
  const blogPosts = [
    {
      title: "Advanced Ion Exchange Technology: The Future of Water Purification",
      excerpt: "Discover how CHEMION® resins are revolutionizing industrial water treatment with 99.9% contaminant removal efficiency.",
      category: "Technology",
      readTime: "5 min read",
      date: "Nov 8, 2025",
      image: "/ion-exchange-resins-water-treatment-industrial.jpg",
      icon: Droplet,
    },
    {
      title: "Zero Liquid Discharge: Sustainable Solutions for Industries",
      excerpt: "Learn how ZLD systems help industries achieve environmental compliance while reducing water consumption and waste.",
      category: "Sustainability",
      readTime: "7 min read",
      date: "Nov 5, 2025",
      image: "/membrane-water-treatment-technology.jpg",
      icon: Shield,
    },
    {
      title: "Water Treatment in 2025: Trends and Innovations",
      excerpt: "Explore the latest trends in water treatment technology, from IoT-enabled systems to AI-powered optimization.",
      category: "Industry Insights",
      readTime: "6 min read",
      date: "Nov 1, 2025",
      image: "/water-treatment-plant-industrial-facility.jpg",
      icon: TrendingUp,
    },
  ]

  const categories = [
    { name: "Technology", count: 12, icon: Droplet },
    { name: "Sustainability", count: 8, icon: Shield },
    { name: "Industry Insights", count: 15, icon: TrendingUp },
    { name: "Case Studies", count: 6, icon: Users },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-yellow-50/30 to-blue-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-wide">
            Latest Insights & Innovations
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Stay updated with the latest water treatment technologies, industry trends, and expert insights from our team
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link
                key={index}
                href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}
                className="group bg-white border border-gray-100 rounded-lg p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-500 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-600/50 transition-all">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-light text-base text-gray-900 mb-2 tracking-wide group-hover:text-purple-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 font-light">{category.count} articles</p>
              </Link>
            )
          })}
        </div>

        {/* Featured Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {blogPosts.map((post, index) => {
            const Icon = post.icon
            return (
              <article
                key={index}
                className="group bg-white border border-gray-100 rounded-lg overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-yellow-100/50 via-purple-100/50 to-pink-100/50 relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg?height=200&width=400&query=water-treatment-blog"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full font-light tracking-wide">
                      {post.category}
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span className="font-light">{post.date}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={14} />
                      <span className="font-light">{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4 line-clamp-2 tracking-wide group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 line-clamp-3 flex-grow font-light">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                    className="inline-flex items-center gap-3 text-gray-900 hover:text-gray-600 text-base font-light tracking-wide transition-colors mt-auto"
                  >
                    Read More
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/blog">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-4 rounded-lg font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-500 inline-flex items-center gap-3">
              View All Articles
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}