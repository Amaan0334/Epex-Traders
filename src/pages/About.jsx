import { Link } from "react-router-dom"

function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 font-semibold tracking-widest mb-4">
            ABOUT EPEX TRADERS
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Partner in Smart Trading
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            We focus on connecting businesses with quality products and
            reliable sourcing opportunities.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-amber-500 font-semibold tracking-widest mb-4">
              WHO WE ARE
            </p>

            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Building Better Business Connections
            </h2>

            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                Epex Traders is focused on sourcing and supplying carefully
                selected products for retailers, businesses, and wholesale
                customers.
              </p>

              <p>
                Our goal is to simplify product discovery and help businesses
                explore suitable sourcing opportunities through professional
                communication and reliable service.
              </p>

              <p>
                We are committed to building long-term business relationships
                based on trust, transparency, and mutual growth.
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid gap-5">
            <div className="border border-gray-200 rounded-2xl p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To make product sourcing simpler and more accessible for
                businesses looking for quality products and reliable trading
                opportunities.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To grow as a trusted trading partner by creating valuable
                connections between products, suppliers, and businesses.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Our Approach
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We focus on quality, clear communication, and understanding
                the requirements of our customers and business partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-amber-500 font-semibold tracking-widest mb-3">
              OUR VALUES
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Trust
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We believe strong business relationships start with honesty,
                transparency, and professional communication.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Quality
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We focus on carefully selected products and reliable sourcing
                opportunities for our customers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Growth
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We aim to create opportunities that support long-term growth
                for both our customers and business partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 font-semibold tracking-widest mb-4">
            LET'S CONNECT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Looking for Products or Wholesale Opportunities?
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Get in touch with Epex Traders and tell us what you're looking for.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 px-8 py-3.5 rounded-lg font-semibold transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}

export default About