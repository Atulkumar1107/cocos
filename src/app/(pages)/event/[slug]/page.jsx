"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { getEventBySlug } from "@/app/lib/data/events";
import toast from "react-hot-toast";

export default function EventDetail({ params }) {
  const unwrappedParams = use(params);
  const event = getEventBySlug(unwrappedParams.slug);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tickets: 1,
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <Link href="/event" className="text-gray-900 underline hover:text-gray-700">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

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

    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Successfully booked ${formData.tickets} ticket(s) for ${event.title}!`, {
        duration: 4000,
        style: {
          background: '#10b981',
          color: '#fff',
        },
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        tickets: 1,
        message: ""
      });
    }, 1500);
  };

  const totalPrice = event.price * formData.tickets;

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-[50vh] items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${event.image}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div 
          className="absolute top-0 left-0 right-0 h-32 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 100%)'
          }}
        />
        <main className="relative z-10 flex mt-6 w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <span className="text-sm font-bold uppercase px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm inline-block mb-4">
            {event.category}
          </span>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl max-w-4xl">
            {event.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(event.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {event.time}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.location}
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-white/90">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/event" className="hover:text-white transition">Events</Link>
            <span>/</span>
            <span className="text-white font-semibold line-clamp-1">{event.title}</span>
          </div>
        </main>
      </div>

      {/* Content Section */}
      <section className="py-12 px-6 sm:px-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* LEFT - Event Description (2/3) */}
            <div className="lg:col-span-2">
              {/* Event Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Price</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {event.price === 0 ? 'Free' : `$${event.price} AUD`}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Capacity</div>
                  <div className="text-2xl font-bold text-gray-900">{event.capacity} people</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Booking</div>
                  <div className="text-lg font-bold text-gray-900">
                    {event.bookingRequired ? 'Required' : 'Optional'}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-li:my-1">
                <div dangerouslySetInnerHTML={{ __html: event.description }} />
              </div>

              {/* Important Info */}
              <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Important Information
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Please arrive 15 minutes before the scheduled start time</li>
                  <li>• Booking confirmation will be sent via email</li>
                  <li>• Cancellations must be made 48 hours in advance for a full refund</li>
                  {event.price === 0 && <li>• While this event is free, booking is still required to secure your spot</li>}
                </ul>
              </div>
            </div>

            {/* RIGHT - Booking Form (1/3) */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-3">
                    {event.bookingRequired ? 'Book Your Spot' : 'Register Interest'}
                  </h3>
                  <p className="text-white/80 mb-6 text-sm">
                    {event.bookingRequired 
                      ? 'Secure your tickets now to avoid missing out'
                      : 'Let us know you\'re interested in attending'
                    }
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="+61 XXX XXX XXX"
                      />
                    </div>

                    {/* Number of Tickets */}
                    <div>
                      <label htmlFor="tickets" className="block text-sm font-semibold mb-2">
                        Number of Tickets *
                      </label>
                      <input
                        type="number"
                        id="tickets"
                        name="tickets"
                        value={formData.tickets}
                        onChange={handleChange}
                        required
                        min="1"
                        max={event.capacity}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                        placeholder="Any special requirements or questions..."
                      />
                    </div>

                    {/* Total Price */}
                    {event.price > 0 && (
                      <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Total Price:</span>
                          <span className="text-2xl font-bold">${totalPrice.toFixed(2)} AUD</span>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-100 transition disabled:opacity-50"
                    >
                      {isSubmitting ? "Processing..." : event.bookingRequired ? "Book Now" : "Register"}
                    </button>
                  </form>

                  <p className="text-xs text-white/60 mt-4 text-center">
                    Questions? Email us at{" "}
                    <a href="mailto:events@cocosislands.com" className="underline hover:text-white">
                      events@cocosislands.com
                    </a>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}