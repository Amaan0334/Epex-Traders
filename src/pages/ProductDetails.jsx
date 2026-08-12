import { Link, useParams } from "react-router-dom"

import island from "../assets/products/island.png"
import panache from "../assets/products/panache.png"
import sawaar from "../assets/products/sawaar.png"
import shiyaakaSky from "../assets/products/shiyaaka-sky.png"
import zayaanGold from "../assets/products/zayaan-gold.png"

function ProductDetails() {
  const { id } = useParams()

  const products = [
    {
      id: "1",
      name: "Island",
      brand: "Khadlaj",
      category: "Fragrance",
      image: island,
      description:
        "A premium fragrance from Khadlaj, available through Epex Traders.",
    },
    {
      id: "2",
      name: "Panache",
      brand: "Khadlaj",
      category: "Fragrance",
      image: panache,
      description:
        "A premium fragrance from Khadlaj, available through Epex Traders.",
    },
    {
      id: "3",
      name: "Sawaar",
      brand: "Khadlaj",
      category: "Fragrance",
      image: sawaar,
      description:
        "A premium fragrance from Khadlaj, available through Epex Traders.",
    },
    {
      id: "4",
      name: "Shiyaaka Sky",
      brand: "Khadlaj",
      category: "Fragrance",
      image: shiyaakaSky,
      description:
        "A premium fragrance from Khadlaj, available through Epex Traders.",
    },
    {
      id: "5",
      name: "Zayaan Gold",
      brand: "Khadlaj",
      category: "Fragrance",
      image: zayaanGold,
      description:
        "A premium fragrance from Khadlaj, available through Epex Traders.",
    },
  ]

  const product = products.find((item) => item.id === id)

  if (!product) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Product Not Found
          </h1>

          <Link
            to="/products"
            className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg"
          >
            Back to Products
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <Link
            to="/products"
            className="text-gray-500 hover:text-amber-500"
          >
            Products
          </Link>

          <span className="mx-3 text-gray-400">/</span>

          <span className="text-slate-900 font-medium">
            {product.name}
          </span>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="bg-gray-50 rounded-3xl h-[500px] flex items-center justify-center p-12">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Information */}
          <div>
            <p className="text-amber-500 font-semibold tracking-wider mb-3">
              {product.brand}
            </p>

            <h1 className="text-5xl font-bold text-slate-900 mb-5">
              {product.name}
            </h1>

            <span className="inline-block bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              {product.category}
            </span>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="border-t border-b border-gray-200 py-6 mb-8">
              <p className="text-sm text-gray-500 mb-1">
                Interested in this product?
              </p>

              <p className="text-lg font-semibold text-slate-900">
                Contact us for pricing and availability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-amber-500 hover:bg-amber-600 text-white text-center px-8 py-3.5 rounded-lg font-semibold transition"
              >
                Request a Quote
              </Link>

              <Link
                to="/products"
                className="border border-slate-300 hover:border-slate-900 text-slate-900 text-center px-8 py-3.5 rounded-lg font-semibold transition"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetails