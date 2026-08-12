import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <Link
            to="/"
            className="text-2xl font-bold text-white"
          >
            EPEX <span className="text-amber-400">TRADERS</span>
          </Link>

          <p className="mt-5 leading-relaxed max-w-sm">
            Epex Traders is focused on sourcing and supplying quality
            products for businesses, retailers, and wholesale customers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            <Link to="/" className="hover:text-amber-400 transition">
              Home
            </Link>

            <Link to="/products" className="hover:text-amber-400 transition">
              Products
            </Link>

            <Link to="/about" className="hover:text-amber-400 transition">
              About Us
            </Link>

            <Link to="/contact" className="hover:text-amber-400 transition">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Contact CTA */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Get in Touch
          </h3>

          <p className="leading-relaxed mb-5">
            Interested in our products or looking for wholesale opportunities?
            Get in touch with Epex Traders.
          </p>

          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white text-center px-6 py-3 rounded-xl font-semibold transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm">
            © 2026 Epex Traders. All rights reserved.
          </p>

          <p className="text-sm">
            Global Sourcing • Smart Trading
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer