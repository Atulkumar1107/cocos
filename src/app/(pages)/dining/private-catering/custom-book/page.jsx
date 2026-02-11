"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CustomBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guests: "",
    duration: "",
    dietaryRequirements: "",
    budgetRange: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        guests: "",
        duration: "",
        dietaryRequirements: "",
        budgetRange: "",
        message: ""
      });
      
      toast.success("Your custom package request has been submitted successfully!", {
        duration: 4000,
        style: {
          background: '#10b981',
          color: '#fff',
        },
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-[50vh] items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763015584/pexels-cup-of-couple-8472179_akrvum.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div 
          className="absolute top-0 left-0 right-0 h-32 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)'
          }}
        />
        <main className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Request Custom Package
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Let us create a personalized catering experience tailored to your needs
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-white/90 mt-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/dining" className="hover:text-white transition">Dining</Link>
            <span>/</span>
            <span className="text-white font-semibold">Custom Booking</span>
          </div>
        </main>
      </div>

      {/* Form Section */}
      <section 
        className="relative py-20 px-6 sm:px-16 overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea"
        }}
      >
        {/* Top gradient fade for smooth blend */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)'
          }}
        ></div>

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Description */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tell Us About Your Perfect Experience
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Whether it's a special occasion, corporate event, or unique dietary needs, we'll craft a package that exceeds your expectations.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Custom Package Request
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                <p className="text-green-800 font-semibold text-center">
                  ✓ Thank you! Your custom package request has been submitted successfully. We'll contact you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email and Phone - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="+61 XXX XXX XXX"
                  />
                </div>
              </div>

              {/* Event Date and Guests - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-900 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-semibold text-gray-900 mb-2">
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="e.g., 10"
                  />
                </div>
              </div>

              {/* Package Duration and Budget Range - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="duration" className="block text-sm font-semibold text-gray-900 mb-2">
                    Package Duration *
                  </label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="e.g., 3 nights, 1 day, 1 week"
                  />
                </div>

                <div>
                  <label htmlFor="budgetRange" className="block text-sm font-semibold text-gray-900 mb-2">
                    Budget Range (Optional)
                  </label>
                  <input
                    type="text"
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="e.g., $500-$1000"
                  />
                </div>
              </div>

              {/* Dietary Requirements */}
              <div>
                <label htmlFor="dietaryRequirements" className="block text-sm font-semibold text-gray-900 mb-2">
                  Dietary Requirements (Optional)
                </label>
                <input
                  type="text"
                  id="dietaryRequirements"
                  name="dietaryRequirements"
                  value={formData.dietaryRequirements}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="e.g., Vegetarian, Vegan, Gluten-free, Allergies"
                />
              </div>

              {/* Special Requirements/Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Special Requirements / Additional Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                  placeholder="Tell us about your event, specific requests, preferred activities, accommodation needs, or any other details that will help us create your perfect package..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Custom Package Request"}
              </button>

              <p className="text-sm text-gray-600 text-center mt-4">
                Or email us directly at{" "}
                <a 
                  href="mailto:cocostropicalfoods@gmail.com" 
                  className="text-gray-900 font-semibold underline hover:text-gray-700 transition"
                >
                  cocostropicalfoods@gmail.com
                </a>
              </p>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                What Happens Next?
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>✓ We'll review your request within 24 hours</p>
                <p>✓ Our team will contact you to discuss details and options</p>
                <p>✓ We'll create a personalized quote based on your requirements</p>
                <p>✓ Once approved, we'll handle all the planning and coordination</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}