"use client";

import { useState } from "react";

export default function BookTourForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timePreference: "flexible",
    adults: 1,
    children: 0,
    specialRequests: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Inquiry:", formData);
    // Here you would typically send this data to your backend/API
    alert("Thank you for your inquiry! We'll contact you shortly with availability and pricing.");
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 px-6 sm:px-16 overflow-hidden min-h-[400px] flex items-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762840667/pexels-marina-zasorina-7634232_vlfztg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Book Your Tour
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Reserve your spot at the Wild Coconut Discovery Centre
          </p>
        </div>

        {/* Bottom fade to blend with form section */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: 'linear-gradient(to top, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0) 25%)'
          }}
        ></div>
      </section>

      {/* Form Section */}
      <div 
        className="relative py-20 px-6 sm:px-16"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea",
        }}
      >
      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)",
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Back Button */}
        <a
          href="/tours/coconut-discovery-center"
          className="inline-flex items-center gap-2 -ml-32  text-gray-700 hover:text-gray-900 mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Coconut Discovery Centre
        </a>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Booking Details
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Submit your inquiry and we'll get back to you with availability and pricing details
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800"
                placeholder="+61 XXX XXX XXX"
              />
            </div>

            {/* Tour Details */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tour Preferences</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800"
                  />
                </div>

                <div>
                  <label htmlFor="timePreference" className="block text-sm font-semibold text-gray-700 mb-2">
                    Time Preference *
                  </label>
                  <select
                    id="timePreference"
                    name="timePreference"
                    required
                    value={formData.timePreference}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800"
                  >
                    <option value="flexible">Flexible</option>
                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="adults" className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Adults *
                  </label>
                  <input
                    type="number"
                    id="adults"
                    name="adults"
                    min="1"
                    required
                    value={formData.adults}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800"
                  />
                </div>

                <div>
                  <label htmlFor="children" className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Children
                  </label>
                  <input
                    type="number"
                    id="children"
                    name="children"
                    min="0"
                    value={formData.children}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800"
                  />
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-700 mb-2">
                Special Requests or Questions
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows="4"
                value={formData.specialRequests}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800"
                placeholder="Any dietary requirements, accessibility needs, or specific interests..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              Send Inquiry
            </button>

            <p className="text-sm text-gray-600 text-center">
              We'll respond to your inquiry within 24 hours with availability and pricing information
            </p>
          </form>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-0"
        style={{
          background:
            "linear-gradient(to top, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)",
        }}
      ></div>
      </div>
    </>
  );
}