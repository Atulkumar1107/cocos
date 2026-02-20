"use client";

import { useState } from "react";
import Image from "next/image";

export default function BookingAndGallery() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 2,
    orderType: "dine-in",
    name: "",
    phone: "",
  });

  // Gallery images for bento layout - 9 images for balanced grid
  const galleryImages = [
    {
      src: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118019/pexels-renestrgar-32872507_asbbet.jpg",
      alt: "Pizza 1",
      span: "row-span-2",
    },
    {
      src: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118041/pexels-expect-best-79873-251610_ce77mr.jpg",
      alt: "Pizza 2",
      span: "row-span-1",
    },
    {
      src: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118053/pexels-pablo-macedo-287472-845811_wtn4bt.jpg",
      alt: "Coffee",
      span: "row-span-1",
    },
    {
      src: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118003/pexels-rezwan-nobi-741721-32493925_qf1pno.jpg",
      alt: "Bakery",
      span: "row-span-2",
    },
    {
      src: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118063/pexels-athena-2180877_whjba9.jpg",
      alt: "Food 1",
      span: "row-span-1",
    },
    {
      src: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118116/pexels-viktoria-alipatova-1083711-2074130_so4hqa.jpg",
      alt: "Food 2",
      span: "row-span-1",
    },
    {
      src: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118110/pexels-marta-dzedyshko-1042863-2775827_dhsyqk.jpg",
      alt: "Food 3",
      span: "row-span-2",
    },
    {
      src: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118098/pexels-fotios-photos-1402407_olbid8.jpg",
      alt: "Food 4",
      span: "row-span-1",
    },
    {
      src: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118088/pexels-igor-starkov-233202-1307698_kapedl.jpg",
      alt: "Food 5",
      span: "row-span-1",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const newBooking = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    };
    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Booking submitted successfully!");
    
    // Reset form
    setFormData({
      date: "",
      time: "",
      guests: 2,
      orderType: "dine-in",
      name: "",
      phone: "",
    });
  };

  return (
    <>
      {/* Gallery + Booking Form Section */}
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
        {/* Top gradient fade */}
        <div
          className="absolute top-0 left-0 right-0 h-32 z-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)",
          }}
        ></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT SIDE - Gallery (Scrollable) */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Gallery
              </h2>
              
              {/* Masonry/Bento Grid */}
              <div className="grid grid-cols-2 gap-4 auto-rows-[200px]">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${image.span}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - Booking Form (STICKY) */}
            <div>
              <div className="sticky top-32 lg:top-32">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Make a Reservation
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Phone - Same Line */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          placeholder="+61 123 456 789"
                        />
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="date"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="time"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Time
                        </label>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Number of Guests & Order Type - Same Line */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Custom Dropdown for Guests */}
                      <div>
                        <label
                          htmlFor="guests"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Guests
                        </label>
                        <div className="relative">
                          <select
                            id="guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none bg-white cursor-pointer"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? "Guest" : "Guests"}
                              </option>
                            ))}
                          </select>
                          {/* Custom Dropdown Arrow */}
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                            <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Order Type */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Order Type
                        </label>
                        <div className="flex gap-3 h-[50px]">
                          <label className="flex-1 flex items-center justify-center cursor-pointer border-2 rounded-xl transition-all hover:border-gray-400 has-[:checked]:bg-gray-900 has-[:checked]:text-white has-[:checked]:border-gray-900">
                            <input
                              type="radio"
                              name="orderType"
                              value="dine-in"
                              checked={formData.orderType === "dine-in"}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <span className="font-medium">Dine-in</span>
                          </label>

                          <label className="flex-1 flex items-center justify-center cursor-pointer border-2 rounded-xl transition-all hover:border-gray-400 has-[:checked]:bg-gray-900 has-[:checked]:text-white has-[:checked]:border-gray-900">
                            <input
                              type="radio"
                              name="orderType"
                              value="takeaway"
                              checked={formData.orderType === "takeaway"}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <span className="font-medium">Takeaway</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition"
                    >
                      Submit Reservation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map + Operating Hours Section */}
      <section className="py-20 px-6 sm:px-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Visit Us
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT SIDE - Map */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-[400px]">
              {/* Google Maps Embed - Replace with your actual embed code */}
              <iframe
                src="https://live-wind.com.au/index.php?lat=-37.9483&lon=144.927"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* RIGHT SIDE - Operating Hours Only */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Opening Hours
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Monday - Friday</span>
                  <span>6:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Saturday</span>
                  <span>7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Sunday</span>
                  <span>7:00 AM - 5:00 PM</span>
                </div>
                <div className="mt-6 pt-4 border-t-2 border-gray-300">
                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    🍕 Special Nights
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday & Sunday</span>
                      <span className="text-gray-600">Pizza Night (2pm-7pm)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span className="text-gray-600">Fish & Chips (5pm-7pm)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}