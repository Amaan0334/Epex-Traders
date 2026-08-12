import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo/epex-navbar-logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-orange-500"
        : "text-gray-300 hover:text-orange-400"
    }`

  return (
    <nav className="bg-slate-950 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center shrink-0"
          >
            <img
              src={logo}
              alt="Epex Traders"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
          >
            Get a Quote
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-11 h-11 border border-slate-700 rounded-lg hover:border-orange-500 transition"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>

            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="border-t border-slate-800 pt-5 flex flex-col gap-5">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={navLinkClass}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Contact
            </NavLink>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="bg-orange-500 hover:bg-orange-600 text-white text-center px-6 py-3 rounded-xl font-semibold transition"
            >
              Get a Quote
            </Link>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar