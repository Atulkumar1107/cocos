"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Bus,
  Building2,
  UtensilsCrossed,
  Camera,
  Users,
  Clock,
  MapPin,
  DollarSign,
  Check,
  Calendar,
  User,
  Mail,
  ChevronDown,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function HomeIslandTour() {
  const [formData, setFormData] = useState({
    date: "",
    guests: 1,
    name: "",
    email: "",
    phone: "",
    dietaryRequirements: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    // Add your booking logic here
    alert("Thank you! Your booking request has been received.");
  };
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isGuestsOpen && !event.target.closest(".relative")) {
        setIsGuestsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isGuestsOpen]);

  // Tour highlights with Lucide icons
  const highlights = [
    {
      icon: Bus,
      title: "Guided Island Tour",
      description:
        "Explore the island's natural beauty, local community, and hidden gems",
    },
    {
      icon: Building2,
      title: "Oceania House Visit",
      description:
        "Step inside this iconic heritage landmark and learn its fascinating story",
    },
    {
      icon: UtensilsCrossed,
      title: "Traditional Malay Feast",
      description:
        "Authentic feast showcasing the rich culinary heritage of the Cocos Malay community",
    },
    {
      icon: Camera,
      title: "Photo Opportunities",
      description:
        "Capture stunning moments throughout this immersive island experience",
    },
    {
      icon: Users,
      title: "Meet Locals",
      description:
        "Connect with the warm Cocos Malay community and hear their stories",
    },
  ];

  // What's included
  const included = [
    "Guided Home Island Tour with expert local guide",
    "Oceania House heritage site visit and tour",
    "Traditional Malay dinner feast with multiple courses",
    "Round-trip transportation from meeting point",
    "Cultural insights and historical stories",
    "All entrance fees and permits",
  ];

  // Why you'll love it
  const reasons = [
    "Perfect for culture seekers and food lovers",
    "Blend of history, adventure, and authentic local cuisine",
    "A truly immersive Saffron Shores Collective experience",
    "Small group sizes for personalized attention",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Tour Info Section - Image Left + Info Right */}
      <section
        className="relative py-20 px-6 sm:px-16"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Image */}
            <div className="relative h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1763013813/pexels-roman-odintsov-6574664_rocunm.jpg"
                alt="Home Island Tour"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* RIGHT - Tour Information */}
            <div className="bg-white rounded-3xl  shadow-2xl p-8 border border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Home Island: Oceania House Tour & Malay Dinner Feast
              </h1>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Join us for an unforgettable journey through the charm and
                culture of Home Island. This full experience combines history,
                exploration, and authentic flavors in one remarkable package.
              </p>

              {/* Tour Info Grid */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {/* Duration */}
                <div className="text-center p-4 rounded-2xl bg-gray-50">
                  <div className="flex justify-center mb-2">
                    <Clock
                      className="w-7 h-7 text-gray-800"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Duration
                  </h3>
                  <p className="text-xl font-bold text-gray-800">5 Hours</p>
                </div>

                {/* Group Size */}
                <div className="text-center p-4 rounded-2xl bg-gray-50">
                  <div className="flex justify-center mb-2">
                    <Users
                      className="w-7 h-7 text-gray-800"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Group Size
                  </h3>
                  <p className="text-xl font-bold text-gray-800">Max 12</p>
                </div>

                {/* Price */}
                <div className="text-center p-4 rounded-2xl bg-gray-50">
                  <div className="flex justify-center mb-2">
                    <DollarSign
                      className="w-7 h-7 text-gray-800"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Price
                  </h3>
                  <p className="text-xl font-bold text-gray-800">$145</p>
                </div>

                {/* Meeting Point */}
                <div className="text-center p-4 rounded-2xl bg-gray-50">
                  <div className="flex justify-center mb-2">
                    <MapPin
                      className="w-7 h-7 text-gray-800"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Meeting Point
                  </h3>
                  <p className="text-sm font-bold text-gray-800">West Island</p>
                </div>
              </div>

              {/* Book Now Button */}
              <button
                onClick={() => {
                  document.getElementById("booking-form").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="w-full cursor-pointer bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included & Why You'll Love It */}
      <section className="py-8 px-6 sm:px-16 bg-[#f2edea]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What's Included */}
            <div className="bg-gray-50 rounded-3xl p-10 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What's Included
              </h2>
              <ul className="space-y-4">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="ml-4 text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why You'll Love It */}
            <div className="bg-[#96b2bd00] rounded-3xl p-10 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why You'll Love It
              </h2>
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="ml-4 text-gray-700 leading-relaxed">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 px-6 sm:px-16 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea",
        }}
      >
        {/* Top gradient fade FROM #f2edea to transparent for smooth blend */}
        <div
          className="absolute top-0 left-0 right-0 h-32 z-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience Highlights
            </h2>
            <p className="text-lg text-gray-600">
              What makes this tour truly special
            </p>
          </div>

          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {highlights.slice(0, 3).map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl p-8 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-all duration-500 shadow-lg hover:shadow-xl border border-gray-200"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-full bg-gray-100 shadow-md group-hover:scale-110 transition-transform duration-500">
                      <Icon
                        className="w-8 h-8 text-gray-800"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div className="flex justify-center gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {highlights.slice(3, 5).map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index + 3}
                    className="group relative overflow-hidden rounded-3xl p-8 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-all duration-500 shadow-lg hover:shadow-xl border border-gray-200"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6 p-4 rounded-full bg-gray-100 shadow-md group-hover:scale-110 transition-transform duration-500">
                        <Icon
                          className="w-8 h-8 text-gray-800"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery + Booking Form Section */}
      <section
        id="booking-form"
        className="py-20 px-6 sm:px-16"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762408026/palm-shadow-4_bgbhgf.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT - Bento Grid Gallery (Zig-Zag) */}
            <div className="space-y-6">
              <div className="text-left mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Gallery
                </h2>
                <p className="text-lg text-gray-700">
                  A glimpse of your upcoming adventure
                </p>
              </div>

              {/* Bento Grid - Zig Zag Pattern */}
              <div className="space-y-6">
                {/* Row 1: Large + Small */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-2 relative h-[300px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <Image
                      src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1763013897/pexels-andrea-gonzalez-85156-281949_qcpguc.jpg"
                      alt="Gallery image 1"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="col-span-1 relative h-[300px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <Image
                      src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1763013813/pexels-roman-odintsov-6574664_rocunm.jpg"
                      alt="Gallery image 2"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Row 2: Small + Large */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-1 relative h-[300px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <Image
                      src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1763014019/pexels-pixabay-164222_e7pzkt.jpg"
                      alt="Gallery image 3"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="col-span-2 relative h-[300px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <Image
                      src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1763013943/pexels-matthardy-4957277_x9kibm.jpg"
                      alt="Gallery image 4"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Row 3: Large + Small */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-2 relative h-[300px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <Image
                      src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1763014068/pexels-jacub-gomez-447561-1143005_lfoogm.jpg"
                      alt="Gallery image 5"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="col-span-1 relative h-[300px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <Image
                      src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1763014102/pexels-julia-kuzenkov-442028-1974856_qmcqem.jpg"
                      alt="Gallery image 6"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Booking Form */}
            <div className="lg:sticky lg:top-28 h-fit">
              <div className="bg-white rounded-3xl shadow-2xl h-[550px] overflow-hidden border border-gray-200">
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      Book Your Experience
                    </h2>
                    <p className="text-base text-gray-600">
                      Reserve your spot on this unforgettable cultural journey
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Date and Guests Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Date Picker */}
                      <div>
                        <label
                          htmlFor="date"
                          className="flex items-center text-sm font-semibold text-gray-900 mb-2"
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Tour Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all"
                        />
                      </div>

                      {/* Number of Guests - Custom Dropdown */}
                      <div className="relative">
                        <label className="flex items-center text-sm font-semibold text-gray-900 mb-2">
                          <Users className="w-4 h-4 mr-2" />
                          Guests
                        </label>
                        <button
                          type="button"
                          onClick={() => setIsGuestsOpen(!isGuestsOpen)}
                          className="w-full px-4 cursor-pointer py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all bg-white text-left flex items-center justify-between"
                        >
                          <span>
                            {formData.guests}{" "}
                            {formData.guests === 1 ? "Guest" : "Guests"}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${isGuestsOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        {isGuestsOpen && (
                          <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                              (num) => (
                                <button
                                  key={num}
                                  type="button"
                                  onClick={() => {
                                    setFormData({ ...formData, guests: num });
                                    setIsGuestsOpen(false);
                                  }}
                                  className={`w-full px-4 py-2.5 text-left hover:bg-gray-100 transition-colors ${
                                    formData.guests === num
                                      ? "bg-gray-50 font-semibold"
                                      : ""
                                  }`}
                                >
                                  {num} {num === 1 ? "Guest" : "Guests"}
                                </button>
                              ),
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="flex items-center text-sm font-semibold text-gray-900 mb-2"
                        >
                          <User className="w-4 h-4 mr-2" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="flex items-center text-sm font-semibold text-gray-900 mb-2"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone and Dietary Requirements Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="flex items-center text-sm font-semibold text-gray-900 mb-2"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+61 XXX XXX XXX"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all"
                        />
                      </div>

                      {/* Dietary Requirements */}
                      <div>
                        <label
                          htmlFor="dietaryRequirements"
                          className="flex items-center text-sm font-semibold text-gray-900 mb-2"
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Dietary Requirements
                        </label>
                        <textarea
                          id="dietaryRequirements"
                          name="dietaryRequirements"
                          value={formData.dietaryRequirements}
                          onChange={handleChange}
                          rows={1}
                          placeholder="Any dietary restrictions..."
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-semibold text-base hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    >
                      Complete Booking Request
                    </button>

                    <p className="text-xs text-gray-600 text-center mt-3">
                      We'll confirm your booking within 24 hours via email
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
