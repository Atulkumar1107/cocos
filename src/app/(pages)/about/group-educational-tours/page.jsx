"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GroupEducationalTours() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourDate: "",
    groupSize: "",
    tourType: "",
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
        tourDate: "",
        groupSize: "",
        tourType: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const tourTypes = [
    "School Excursion",
    "University Group",
    "Corporate Team Building",
    "Community Organization",
    "Educational Institution",
    "Other"
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-[60vh] items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762426885/pexels-francesco-ungaro-279001_wne3s4.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Top gradient fade */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)'
          }}
        />

        {/* Hero Content */}
        <main className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <h1 className="mb-6 mt-8 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Group & Educational Tours
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Book your tailored educational experience at Wild Coconut Estate
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-sm text-white/90 mt-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <span>/</span>
            <span className="text-white font-semibold">Group Educational Tours</span>
          </div>
        </main>
      </div>

      {/* Description Section */}
      <section 
        className="py-16 px-6 sm:px-16"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea"
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Educational Experiences Tailored for Your Group
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Whether you're organizing a school field trip, university excursion, corporate team building event, or community group visit, we create customized educational tours that engage and inspire.
            </p>
            <p>
              Our tours include hands-on demonstrations of traditional coconut oil making, product tastings, guided farm walks, and interactive workshops that showcase sustainable farming practices.
            </p>
            <p className="font-semibold text-gray-900">
              Contact us to discuss your group's needs and we'll create a memorable educational experience.
            </p>
            <p className="text-base text-gray-600">
              For inquiries, email us at{" "}
              <a 
                href="mailto:cocostropicalfoods@gmail.com" 
                className="text-gray-900 font-semibold underline hover:text-gray-700 transition"
              >
                cocostropicalfoods@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        className="py-20 px-6 sm:px-16"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762408026/palm-shadow-4_bgbhgf.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea"
        }}
      >
        <div className="mx-auto max-w-3xl">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Book Your Group Tour
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below and we'll get back to you shortly
            </p>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                <p className="text-green-800 font-semibold text-center">
                  ✓ Thank you! Your booking request has been submitted successfully. We'll contact you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name / Organization Representative *
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

              {/* Email */}
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

              {/* Phone */}
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

              {/* Tour Type */}
              <div>
                <label htmlFor="tourType" className="block text-sm font-semibold text-gray-900 mb-2">
                  Tour Type *
                </label>
                <select
                  id="tourType"
                  name="tourType"
                  value={formData.tourType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="">Select tour type...</option>
                  {tourTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Group Size - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Tour Date */}
                <div>
                  <label htmlFor="tourDate" className="block text-sm font-semibold text-gray-900 mb-2">
                    Preferred Tour Date *
                  </label>
                  <input
                    type="date"
                    id="tourDate"
                    name="tourDate"
                    value={formData.tourDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>

                {/* Group Size */}
                <div>
                  <label htmlFor="groupSize" className="block text-sm font-semibold text-gray-900 mb-2">
                    Group Size *
                  </label>
                  <input
                    type="number"
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Number of participants"
                  />
                </div>
              </div>

              {/* Message/Special Requirements */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message / Special Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                  placeholder="Tell us about your group, age range, specific interests, dietary requirements, or any special requests..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
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
        </div>
      </section>
    </>
  );
}