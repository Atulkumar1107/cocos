"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const topicOptions = [
    { value: "", label: "Select a topic..." },
    { value: "tours", label: "Tours & Experiences" },
    { value: "booking", label: "Booking & Reservations" },
    { value: "dining", label: "Dining Inquiries" },
    { value: "products", label: "Products & Shop" },
    { value: "general", label: "General Inquiry" }
  ];

  return (
    <section 
      className="relative py-24 px-6 sm:px-16 overflow-hidden"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f2edea"
      }}
    >
      {/* Top gradient fade */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)'
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 sm:text-5xl mb-4">
            Send Us a Message
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you as soon as possible
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-zinc-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Topic Dropdown */}
            <div>
              <label htmlFor="topic" className="block text-sm font-semibold text-zinc-900 mb-2">
                Topic *
              </label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all bg-white appearance-none cursor-pointer text-zinc-900 font-medium"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23000'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '1.5rem'
                }}
              >
                {topicOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-zinc-900 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-zinc-300 text-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all resize-none"
                placeholder="Tell us how we can help you..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-10 py-4 bg-zinc-900 text-white rounded-full font-semibold text-lg hover:bg-zinc-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </div>

            {/* Form Note */}
            <p className="text-sm text-zinc-500 text-center pt-2">
              * Required fields. We typically respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}