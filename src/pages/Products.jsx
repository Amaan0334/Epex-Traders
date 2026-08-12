import { Link } from "react-router-dom"

import island from "../assets/products/island.png"
import panache from "../assets/products/panache.png"
import sawaar from "../assets/products/sawaar.png"
import shiyaakaSky from "../assets/products/shiyaaka-sky.png"
import zayaanGold from "../assets/products/zayaan-gold.png"

function Products() {
  const products = [
    {
      id: 1,
      name: "Island",
      brand: "Khadlaj",
      category: "Fragrance",
      image: island,
    },
    {
      id: 2,
      name: "Panache",
      brand: "Khadlaj",
      category: "Fragrance",
      image: panache,
    },
    {
      id: 3,
      name: "Sawaar",
      brand: "Khadlaj",
      category: "Fragrance",
      image: sawaar,
    },
    {
      id: 4,
      name: "Shiyaaka Sky",
      brand: "Khadlaj",
      category: "Fragrance",
      image: shiyaakaSky,
    },
    {
      id: 5,
      name: "Zayaan Gold",
      brand: "Khadlaj",
      category: "Fragrance",
      image: zayaanGold,
    },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-400 font-semibold tracking-widest mb-4">
            EPEX TRADERS COLLECTION
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Products
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our collection of carefully selected premium products.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
              >
                {/* Product Image */}
                <div className="h-96 bg-white flex items-center justify-center p-8 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-amber-500 font-semibold">
                      {product.brand}
                    </p>

                    <span className="text-xs bg-amber-50 text-amber-600 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-5">
                    {product.name}
                  </h2>

                  <Link
                    to={`/products/${product.id}`}
                    className="block text-center bg-slate-900 hover:bg-amber-500 text-white py-3 rounded-lg font-semibold transition"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
            Can't Find What You're Looking For?
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Contact us with your requirements and we'll be happy to discuss
            suitable product options.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-lg font-semibold transition"
          >
            Send an Inquiry
          </Link>
        </div>
      </section>
    </>
  )
}

export default Products