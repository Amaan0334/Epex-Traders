import { Link } from "react-router-dom"

import island from "../assets/products/island.png"
import panache from "../assets/products/panache.png"
import sawaar from "../assets/products/sawaar.png"

function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Island",
      brand: "Khadlaj",
      image: island,
    },
    {
      id: 2,
      name: "Panache",
      brand: "Khadlaj",
      image: panache,
    },
    {
      id: 3,
      name: "Sawaar",
      brand: "Khadlaj",
      image: sawaar,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[85vh] bg-slate-950 text-white flex items-center overflow-hidden relative">

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full" />

          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-orange-500/5 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="max-w-3xl">

              <p className="text-teal-400 font-semibold tracking-[0.2em] mb-5">
                WELCOME TO EPEX TRADERS
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Global Sourcing.
                <br />

                <span className="text-orange-500">
                  Smart Trading.
                </span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                Discover quality products and reliable sourcing opportunities
                for retailers, businesses, and wholesale customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">

                <Link
                  to="/products"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl font-semibold text-center transition duration-300 shadow-lg shadow-orange-500/20"
                >
                  Explore Products
                </Link>

                <Link
                  to="/contact"
                  className="border border-slate-600 hover:border-teal-400 hover:text-teal-300 px-7 py-3.5 rounded-xl font-semibold text-center transition duration-300"
                >
                  Get in Touch
                </Link>

              </div>

            </div>


            {/* Right Product Showcase */}
            <div className="relative flex justify-center items-center min-h-[520px] lg:min-h-[650px]">

              {/* Large Background Glow */}
              <div className="absolute w-[300px] h-[300px] md:w-[480px] md:h-[480px] bg-orange-500/10 blur-[120px] rounded-full" />

              {/* Teal Glow */}
              <div className="absolute w-[250px] h-[250px] md:w-[380px] md:h-[380px] bg-teal-500/10 blur-[100px] rounded-full translate-x-12 -translate-y-10" />


              {/* Decorative Circles */}
              <div className="absolute w-[360px] h-[360px] md:w-[500px] md:h-[500px] border border-teal-400/10 rounded-full" />

              <div className="absolute w-[430px] h-[430px] md:w-[590px] md:h-[590px] border border-orange-500/10 rounded-full" />


              {/* Product Frame */}
              <div className="relative z-10 group">

                {/* Gradient Border */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-teal-400/30 via-transparent to-orange-500/40 rounded-[2rem] blur-sm opacity-70" />

                {/* Product Container */}
                <div className="relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-slate-950/50 backdrop-blur-sm border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">

                  {/* Image Area */}
                  <div className="relative w-[300px] sm:w-[400px] md:w-[480px] lg:w-[520px] h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">

                    {/* Soft White Center */}
                    <div className="absolute inset-x-8 inset-y-8 bg-gradient-to-b from-white via-slate-100 to-gray-200 rounded-[1.5rem]" />

                    {/* Product Image */}
                    <img
                      src={sawaar}
                      alt="Khadlaj Sawaar Perfume"
                      className="relative z-10 w-full h-full object-contain p-6 md:p-10 drop-shadow-2xl transition duration-700 group-hover:scale-105"
                    />

                    {/* Bottom Gradient */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950/20 to-transparent z-20 pointer-events-none" />

                  </div>

                </div>

              </div>


              {/* Floating Label */}
              <div className="absolute bottom-6 md:bottom-10 right-0 md:-right-4 z-30 bg-slate-900/80 backdrop-blur-xl border border-white/10 px-5 py-4 rounded-xl shadow-xl">

                <p className="text-[10px] text-teal-400 uppercase tracking-[0.2em]">
                  Featured Product
                </p>

                <p className="font-semibold text-white mt-1">
                  Khadlaj Sawaar
                </p>

                <div className="w-10 h-[2px] bg-orange-500 mt-3" />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Featured Products */}
      <section className="py-24 px-6 bg-gray-50">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">

            <div>

              <p className="text-teal-600 font-semibold tracking-widest mb-3">
                OUR COLLECTION
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Featured Products
              </h2>

              <p className="text-gray-600 mt-4 max-w-xl">
                Explore a selection of carefully chosen products available
                through Epex Traders.
              </p>

            </div>

            <Link
              to="/products"
              className="text-slate-900 font-semibold hover:text-orange-500 transition"
            >
              View All Products →
            </Link>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            {featuredProducts.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                <div className="h-96 flex items-center justify-center p-8 bg-white">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition duration-500 hover:scale-105"
                  />

                </div>


                <div className="p-6 border-t border-gray-100">

                  <p className="text-sm text-teal-600 font-medium mb-1">
                    {product.brand}
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mb-5">
                    {product.name}
                  </h3>

                  <Link
                    to={`/products/${product.id}`}
                    className="inline-block text-slate-900 font-semibold hover:text-orange-500 transition"
                  >
                    View Product →
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-teal-600 font-semibold tracking-widest mb-3">
              WHY EPEX TRADERS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Built for Better Trading
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A straightforward approach to sourcing, product discovery,
              and building reliable business relationships.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition duration-300">

              <div className="text-teal-600 text-3xl font-bold mb-5">
                01
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Quality Products
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We focus on sourcing products from trusted brands and
                reliable suppliers.
              </p>

            </div>


            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition duration-300">

              <div className="text-teal-600 text-3xl font-bold mb-5">
                02
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Smart Sourcing
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Our approach helps businesses discover suitable products
                and wholesale opportunities efficiently.
              </p>

            </div>


            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition duration-300">

              <div className="text-teal-600 text-3xl font-bold mb-5">
                03
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Reliable Service
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We aim to build long-term business relationships through
                professional communication and dependable service.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Call To Action */}
      <section className="py-24 px-6 bg-slate-950 text-white">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-teal-400 font-semibold tracking-widest mb-4">
            LET'S WORK TOGETHER
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Looking for a Product?
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Tell us what you're looking for and send your product inquiry
            directly to Epex Traders.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 px-8 py-3.5 rounded-xl font-semibold transition duration-300 shadow-lg shadow-orange-500/20"
          >
            Get a Quote
          </Link>

        </div>

      </section>
    </>
  )
}

export default Home