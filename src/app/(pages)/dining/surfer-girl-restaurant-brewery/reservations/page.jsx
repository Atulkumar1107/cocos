"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Reservations() {
  const [bookingType, setBookingType] = useState("regular"); // 'regular' or 'private'
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    serviceType: "",
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
        date: "",
        time: "",
        guests: "",
        serviceType: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const timeSlots = ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];
  const serviceTypes = ["Monday Mediterranean Dinner", "Thursday Coconut Night Dinner", "Sunday Brunch"];

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-[60vh] items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763448459/pexels-jonathanborba-29040994_yzlmj5.jpg')",
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
          <h1 className="mb-6 text-5xl mt-8 font-bold text-white sm:text-6xl lg:text-7xl">
            Reservations
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Book your table or inquire about private catering
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-sm text-white/90 mt-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/dining" className="hover:text-white transition">Dining</Link>
            <span>/</span>
            <Link href="/dining/surfer-girl-restaurant-brewery" className="hover:text-white transition">Surfer Girl</Link>
            <span>/</span>
            <span className="text-white font-semibold">Reservations</span>
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
            Reserve Your Table at Surfer Girl
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              We take bookings for dinner on Monday and Thursday nights, and breakfast on Sunday mornings.
            </p>
            <p className="font-semibold text-gray-900">
              Limited seating available - bookings are essential.
            </p>
            <p className="text-base text-gray-600">
              For private functions or groups of more than 10, please select "Private Catering" below or contact us at{" "}
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

      {/* Booking Type Selector & Form Section */}
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
          {/* Booking Type Toggle */}
          <div className="mb-8 flex justify-center gap-4">
            <button
              onClick={() => setBookingType("regular")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                bookingType === "regular"
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-900"
              }`}
            >
              Table Reservation
            </button>
            <button
              onClick={() => setBookingType("private")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                bookingType === "private"
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-900"
              }`}
            >
              Private Catering
            </button>
          </div>

          {/* Form Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              {bookingType === "regular" ? "Book Your Table" : "Request Private Catering"}
            </h2>
            <p className="text-gray-600 text-center mb-8">
              {bookingType === "regular" 
                ? "Fill out the form below to reserve your table"
                : "Tell us about your special event and we'll get back to you"
              }
            </p>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                <p className="text-green-800 font-semibold text-center">
                  ✓ Thank you! Your {bookingType === "regular" ? "reservation" : "request"} has been submitted successfully. We'll contact you soon.
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

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-900 mb-2">
                  {bookingType === "regular" ? "Reservation Date *" : "Event Date *"}
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              {/* Service Type (Regular Only) */}
              {bookingType === "regular" && (
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-900 mb-2">
                    Select Service *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  >
                    <option value="">Choose a service...</option>
                    {serviceTypes.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Time and Guests - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Time (Regular Only) */}
                {bookingType === "regular" && (
                  <div>
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-900 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option value="">Select time...</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Number of Guests */}
                <div className={bookingType === "private" ? "sm:col-span-2" : ""}>
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
                    max={bookingType === "regular" ? "10" : undefined}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder={bookingType === "regular" ? "1-10 guests" : "10+ guests"}
                  />
                  {bookingType === "regular" && (
                    <p className="text-xs text-gray-500 mt-1">
                      For groups larger than 10, please select "Private Catering"
                    </p>
                  )}
                </div>
              </div>

              {/* Message/Special Requests */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  {bookingType === "regular" ? "Special Requests (Optional)" : "Event Details & Requirements"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                  placeholder={
                    bookingType === "regular"
                      ? "Dietary requirements, celebrations, or any special requests..."
                      : "Tell us about your event, menu preferences, dietary requirements, or any special requests..."
                  }
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : bookingType === "regular" ? "Reserve Table" : "Submit Request"}
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