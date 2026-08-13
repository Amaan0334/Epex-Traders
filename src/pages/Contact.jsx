import { useState } from "react"
import emailjs from "@emailjs/browser"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  })

  const [status, setStatus] = useState("")
  const [isSending, setIsSending] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSending(true)
    setStatus("")

    const templateParams = {
      name: formData.name,
      email: formData.email,

      subject: formData.product
        ? `Product Inquiry: ${formData.product}`
        : "New Inquiry from Epex Traders Website",

      message: `
Company Name: ${formData.company || "Not provided"}

Phone Number: ${formData.phone || "Not provided"}

Product Interested In: ${formData.product || "Not specified"}

Customer Message:
${formData.message}
      `,
    }

    try {
      await emailjs.send(
        "service_p2ecvbh",
        "template_575rfpn",
        templateParams,
        "H8NObnSxBOZ44nOMV"
      )

      setStatus("success")

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      })
    } catch (error) {
      console.error("Email sending failed:", error)
      setStatus("error")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      {/* Page Hero */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 font-semibold tracking-widest mb-4">
            CONTACT EPEX TRADERS
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Start a Conversation
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Have a product inquiry or looking for wholesale opportunities?
            Get in touch with us.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Contact Information */}
          <div>
            <p className="text-amber-500 font-semibold tracking-widest mb-4">
              GET IN TOUCH
            </p>

            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              We'd Love to Hear From You
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Whether you're interested in one of our products or have a
              specific sourcing requirement, send us your inquiry and we'll
              get back to you as soon as possible.
            </p>

            <div className="space-y-5">

              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <p className="text-sm text-amber-500 font-semibold mb-1">
                  EMAIL
                </p>

                <p className="text-slate-900 font-medium">
                  sales.epicgoods001@gmail.com
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <p className="text-sm text-amber-500 font-semibold mb-1">
                  BUSINESS
                </p>

                <p className="text-slate-900 font-medium">
                  Epex Traders
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <p className="text-sm text-amber-500 font-semibold mb-1">
                  SERVICES
                </p>

                <p className="text-slate-900 font-medium">
                  Product Sourcing • Wholesale Supply
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-7">
              Send an Inquiry
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="grid sm:grid-cols-2 gap-5">

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-amber-500 transition"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-amber-500 transition"
                  />
                </div>

              </div>

              {/* Email */}
              <div className="mt-5">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-amber-500 transition"
                />
              </div>

              {/* Phone */}
              <div className="mt-5">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-amber-500 transition"
                />
              </div>

              {/* Product */}
              <div className="mt-5">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Product Interested In
                </label>

                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-amber-500 transition"
                />
              </div>

              {/* Message */}
              <div className="mt-5">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-amber-500 resize-none transition"
                ></textarea>
              </div>

              {/* Success Message */}
              {status === "success" && (
                <div className="mt-5 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  Thank you! Your inquiry has been sent successfully.
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="mt-5 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  Something went wrong. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full mt-6 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 disabled:cursor-not-allowed text-white py-3.5 rounded-lg font-semibold transition"
              >
                {isSending ? "Sending..." : "Send Inquiry"}
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact