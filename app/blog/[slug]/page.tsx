import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

const blogPosts = [
  {
    slug: "advanced-ion-exchange-technology-the-future-of-water-purification",
    title: "Advanced Ion Exchange Technology: The Future of Water Purification",
    excerpt: "Discover how CHEMION® resins are revolutionizing industrial water treatment with 99.9% contaminant removal efficiency and enhanced membrane life cycles.",
    category: "Technology",
    readTime: "5 min read",
    date: "Nov 8, 2025",
    author: "Dr. Rajesh Kumar",
    image: "/ion-exchange-resins-water-treatment-industrial.jpg",
    featured: true,
    content: `
      <h2>Revolutionizing Water Treatment with Advanced Ion Exchange</h2>
      <p>The water treatment industry is experiencing a paradigm shift with the introduction of advanced ion exchange technologies. ChemParks' CHEMION® resins represent the cutting edge of this revolution, offering unprecedented efficiency and reliability for industrial water purification systems.</p>

      <h3>What Makes CHEMION® Resins Revolutionary?</h3>
      <p>Traditional ion exchange resins have served the industry well for decades, but they come with limitations. CHEMION® resins overcome these challenges through:</p>
      <ul>
        <li><strong>Enhanced Exchange Capacity:</strong> 40% higher ion exchange capacity compared to conventional resins</li>
        <li><strong>Superior Chemical Stability:</strong> Resistant to pH variations and oxidizing agents</li>
        <li><strong>Extended Service Life:</strong> Up to 2.5 times longer operational cycles</li>
        <li><strong>Reduced Operating Costs:</strong> 30% lower regeneration requirements</li>
      </ul>

      <h3>Industrial Applications</h3>
      <p>CHEMION® resins are transforming water treatment across multiple industries:</p>

      <h4>Power Generation</h4>
      <p>Power plants require ultra-pure water for boiler systems. CHEMION® resins ensure:</p>
      <ul>
        <li>99.9% removal of dissolved minerals</li>
        <li>Consistent water quality under varying loads</li>
        <li>Reduced boiler blowdown requirements</li>
        <li>Enhanced system efficiency and reliability</li>
      </ul>

      <h4>Pharmaceutical Industry</h4>
      <p>Pharmaceutical water must meet stringent purity standards. Our resins provide:</p>
      <ul>
        <li>USP and EP compliance for purified water</li>
        <li>Consistent performance under GMP conditions</li>
        <li>Low TOC (Total Organic Carbon) levels</li>
        <li>Validated processes for regulatory compliance</li>
      </ul>

      <h4>Food and Beverage Processing</h4>
      <p>Water quality directly impacts product safety and taste. CHEMION® delivers:</p>
      <ul>
        <li>FDA-approved water treatment solutions</li>
        <li>Removal of hardness, iron, and manganese</li>
        <li>Protection against microbial growth</li>
        <li>Enhanced product shelf life</li>
      </ul>

      <h3>Environmental Benefits</h3>
      <p>Beyond performance improvements, CHEMION® resins contribute to sustainability:</p>
      <ul>
        <li><strong>Reduced Chemical Consumption:</strong> 30% less salt and acid usage</li>
        <li><strong>Lower Wastewater Generation:</strong> Efficient regeneration minimizes effluent</li>
        <li><strong>Energy Savings:</strong> Reduced pumping requirements due to lower pressure drops</li>
        <li><strong>Longer Service Intervals:</strong> Fewer replacements mean less waste</li>
      </ul>

      <h3>The Future of Water Treatment</h3>
      <p>As water scarcity becomes increasingly critical, advanced ion exchange technology will play a vital role in water conservation and reuse. CHEMION® resins are already enabling:</p>
      <ul>
        <li>Industrial water recycling programs</li>
        <li>ZLD (Zero Liquid Discharge) systems</li>
        <li>Greywater treatment for non-potable applications</li>
        <li>Decentralized water treatment solutions</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Advanced ion exchange technology, exemplified by CHEMION® resins, represents the future of water treatment. By combining superior performance with environmental responsibility, these innovative solutions are helping industries meet both their operational needs and sustainability goals.</p>

      <p>As we look toward a future where water resources become increasingly precious, technologies like CHEMION® will be essential in ensuring clean, safe water for industrial applications while protecting our environment for future generations.</p>
    `,
  },
  {
    slug: "zero-liquid-discharge-sustainable-solutions-for-industries",
    title: "Zero Liquid Discharge: Sustainable Solutions for Industries",
    excerpt: "Learn how ZLD systems help industries achieve environmental compliance while reducing water consumption and waste through advanced membrane technologies.",
    category: "Sustainability",
    readTime: "7 min read",
    date: "Nov 5, 2025",
    author: "Priya Sharma",
    image: "/membrane-water-treatment-technology.jpg",
    content: `
      <h2>The Growing Importance of Zero Liquid Discharge Systems</h2>
      <p>Industries worldwide are facing increasing pressure to adopt sustainable water management practices. Zero Liquid Discharge (ZLD) systems have emerged as a comprehensive solution that not only addresses environmental concerns but also offers significant economic benefits.</p>

      <h3>What is Zero Liquid Discharge?</h3>
      <p>ZLD is an advanced wastewater treatment process that eliminates liquid waste discharge. By employing a combination of advanced treatment technologies, ZLD systems convert wastewater into clean water for reuse and solid waste for disposal or resource recovery.</p>

      <h3>Key Components of ZLD Systems</h3>

      <h4>1. Pre-treatment Systems</h4>
      <p>Effective ZLD begins with proper pre-treatment:</p>
      <ul>
        <li>Screening and filtration to remove suspended solids</li>
        <li>pH adjustment for optimal downstream processing</li>
        <li>Softening to prevent membrane scaling</li>
        <li>Organic matter removal through biological treatment</li>
      </ul>

      <h4>2. Advanced Membrane Technologies</h4>
      <p>Membrane systems form the backbone of ZLD:</p>
      <ul>
        <li><strong>Ultrafiltration (UF):</strong> Removes fine suspended particles and colloids</li>
        <li><strong>Nanofiltration (NF):</strong> Targets divalent ions and organic compounds</li>
        <li><strong>Reverse Osmosis (RO):</strong> Produces high-quality permeate water</li>
        <li><strong>Electrodialysis (ED):</strong> Efficiently separates charged species</li>
      </ul>

      <h4>3. Evaporation and Crystallization</h4>
      <p>For maximum water recovery:</p>
      <ul>
        <li>Multiple Effect Evaporators (MEE) for energy-efficient concentration</li>
        <li>Mechanical Vapor Recompression (MVR) for energy optimization</li>
        <li>Forced Circulation Crystallizers for salt recovery</li>
        <li>Spray Dryers for final waste solidification</li>
      </ul>

      <h3>Industry Applications</h3>

      <h4>Textile Industry</h4>
      <p>Textile manufacturing generates highly colored, saline wastewater. ZLD implementation provides:</p>
      <ul>
        <li>Water recovery rates exceeding 95%</li>
        <li>Dye and chemical recovery opportunities</li>
        <li>Compliance with strict discharge regulations</li>
        <li>Reduced freshwater consumption</li>
      </ul>

      <h4>Petrochemical Industry</h4>
      <p>Complex petrochemical effluents require sophisticated treatment:</p>
      <ul>
        <li>Removal of hydrocarbons and dissolved solids</li>
        <li>Heavy metal concentration and recovery</li>
        <li>Reuse of treated water in cooling systems</li>
        <li>Minimization of hazardous waste generation</li>
      </ul>

      <h4>Pharmaceutical Sector</h4>
      <p>Pharmaceutical wastewater presents unique challenges:</p>
      <ul>
        <li>Removal of active pharmaceutical ingredients</li>
        <li>Recovery of valuable solvents and byproducts</li>
        <li>Meeting stringent regulatory requirements</li>
        <li>Water quality suitable for clean-in-place systems</li>
      </ul>

      <h3>Economic Benefits of ZLD</h3>

      <h4>Direct Cost Savings</h4>
      <ul>
        <li><strong>Reduced Water Costs:</strong> Up to 90% reduction in freshwater purchases</li>
        <li><strong>Lower Discharge Fees:</strong> Elimination of effluent discharge charges</li>
        <li><strong>Resource Recovery:</strong> Revenue from recovered salts and chemicals</li>
        <li><strong>Energy Recovery:</strong> Heat recovery from concentration processes</li>
      </ul>

      <h4>Indirect Benefits</h4>
      <ul>
        <li>Enhanced corporate sustainability profile</li>
        <li>Improved regulatory compliance</li>
        <li>Better community relations</li>
        <li>Increased operational reliability</li>
      </ul>

      <h3>Challenges and Solutions</h3>

      <h4>High Energy Consumption</h4>
      <p>Solution: Integration of energy recovery systems and renewable energy sources.</p>

      <h4>Capital Investment</h4>
      <p>Solution: Phased implementation and government subsidy programs.</p>

      <h4>Operational Complexity</h4>
      <p>Solution: Advanced automation systems and skilled operator training.</p>

      <h3>Future Trends in ZLD Technology</h3>

      <h4>AI-Powered Optimization</h4>
      <p>Machine learning algorithms are being integrated to:</p>
      <ul>
        <li>Predict fouling and schedule maintenance</li>
        <li>Optimize energy consumption based on real-time conditions</li>
        <li>Automate chemical dosing for maximum efficiency</li>
      </ul>

      <h4>Hybrid Systems</h4>
      <p>Combining multiple technologies:</p>
      <ul>
        <li>Forward osmosis for low-energy concentration</li>
        <li>Membrane distillation for high-salinity streams</li>
        <li>Critical minerals recovery from concentrated streams</li>
      </ul>

      <h3>Regulatory Landscape</h3>
      <p>Governments worldwide are implementing stricter regulations:</p>
      <ul>
        <li>EPA's Effluent Limitation Guidelines becoming more stringent</li>
        <li>EU's Water Framework Directive mandating ZLD for specific industries</li>
        <li>India's CPCB promoting ZLD in industrial clusters</li>
        <li>China's Water Pollution Control Law requiring zero discharge</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Zero Liquid Discharge systems represent the pinnacle of sustainable wastewater treatment. While challenges remain, technological advances and economic incentives are making ZLD increasingly viable for industries across sectors.</p>

      <p>As water scarcity intensifies and environmental regulations become more stringent, ZLD will transition from being an option to a necessity. Industries that embrace this technology today will be better positioned to thrive in the water-constrained world of tomorrow.</p>
    `,
  },
  // Add more blog post content as needed
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />

      <article className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <div className="mb-8">
              <span className="bg-yellow-400 text-purple-900 text-sm px-3 py-1 rounded-full font-medium mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6">
                {post.excerpt}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} className="text-blue-200" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-blue-200" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-200" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-800">
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-800">
                <Bookmark size={16} className="mr-2" />
                Save
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-800">
                <ThumbsUp size={16} className="mr-2" />
                Like
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl -mt-12 relative z-10"
            />
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg prose-purple max-w-none prose-headings:text-purple-800 prose-p:text-gray-700 prose-ul:text-gray-700 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2 mb-8">
                {["Water Treatment", "Technology", "Sustainability", "Industrial", "Innovation"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Bio */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{post.author}</h3>
                    <p className="text-gray-600 text-sm mb-2">Senior Water Treatment Specialist</p>
                    <p className="text-gray-700">
                      Expert in advanced water treatment technologies with over 15 years of experience in industrial water management and sustainability solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.filter(p => p.slug !== params.slug).slice(0, 2).map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="block group"
                >
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <span className="text-purple-600 text-sm font-medium">{relatedPost.category}</span>
                      <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 group-hover:text-purple-700 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </>
  )
}