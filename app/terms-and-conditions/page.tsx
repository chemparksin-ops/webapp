import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"

export default function TermsAndConditions() {
  return (
    <>
      <Loader />
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Legal Information
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our services
            </p>
            <p className="text-sm text-foreground/50 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg overflow-hidden">

              {/* Agreement Section */}
              <div className="p-8 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                    <p className="text-foreground/70 leading-relaxed mb-3">
                      By accessing and using ChemParks' website and services, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                    <p className="text-foreground/70 leading-relaxed">
                      If you do not agree to abide by the above, please do not use this service or any information provided on this website.
                    </p>
                  </div>
                </div>
              </div>

              {/* Services Section */}
              <div className="p-8 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground mb-4">Our Services</h2>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      ChemParks provides comprehensive water and environment management solutions including:
                    </p>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Water treatment systems and solutions
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Environment management consulting
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Operations and maintenance services
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Technical support and customer service
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* User Responsibilities Section */}
              <div className="p-8 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground mb-4">User Responsibilities</h2>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      As a user of our services, you agree to:
                    </p>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Provide accurate and complete information
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Use our services for legitimate purposes
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Not attempt to gain unauthorized access to our systems
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Respect intellectual property rights
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Privacy Section */}
              <div className="p-8 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground mb-4">Privacy Policy</h2>
                    <p className="text-foreground/70 leading-relaxed mb-3">
                      Your privacy is important to us. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
                    </p>
                    <p className="text-foreground/70 leading-relaxed">
                      By using this website, you consent to the collection and use of information in accordance with our Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="p-8 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      ChemParks shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from:
                    </p>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        The use or inability to use our services
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        Unauthorized access to or alteration of your transmissions or data
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        Statements or conduct of any third party on the service
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="p-8 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground mb-4">Changes to Terms</h2>
                    <p className="text-foreground/70 leading-relaxed">
                      ChemParks reserves the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">Contact Us</h3>
                  <p className="text-foreground/70 mb-6">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="mailto:info@chemparks.in"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      info@chemparks.in
                    </a>
                    <a
                      href="tel:9500506061"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      9500506061
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
