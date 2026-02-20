"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

const testimonials = [
  {
    id: 1,
    name: "Olivia Carter",
    location: "Sydney, Australia",
    quote: "Saffron Sands Collective delivered an unforgettable coastal escape. From golden sunsets to beautifully curated dining experiences, every detail felt thoughtful and personal.",
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407832/testimonial-1_ywj0c3.webp",
  },
  {
    id: 2,
    name: "Daniel Lee",
    location: "Singapore",
    quote: "The guided shoreline adventures were incredible. We explored hidden beaches and enjoyed fresh, locally inspired cuisine. A truly immersive island experience.",
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407798/testimonial-2_j5pnol.webp",
  },
  {
    id: 3,
    name: "Charlotte Evans",
    location: "London, UK",
    quote: "Everything felt authentic and beautifully organized. The ocean tours and sunset gatherings were the highlight of our trip. Highly recommended for anyone seeking relaxation and adventure.",
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407861/testimonial-3_yctpgq.webp",
  },
  {
    id: 4,
    name: "Arjun Mehta",
    location: "Perth, Australia",
    quote: "A refreshing break from city life. The hospitality, scenic coastal views, and thoughtfully prepared meals made our stay absolutely memorable.",
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407891/testimonial-4_ilgbku.webp",
  },
  {
    id: 5,
    name: "Isabella Moreau",
    location: "Paris, France",
    quote: "An inspiring seaside retreat. The blend of culture, flavors, and ocean adventures created the perfect balance of excitement and serenity.",
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407926/testimonial-5_r0olxr.webp",
  },
  {
    id: 6,
    name: "Ryan Tan",
    location: "Hong Kong",
    quote: "The beachfront dining and guided excursions were outstanding. Saffron Sands Collective truly captures the spirit of coastal living.",
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407891/testimonial-4_ilgbku.webp",
  },
];


  // Duplicate testimonials for infinite loop effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      className="relative py-20 px-6 sm:px-16 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762408026/palm-shadow-4_bgbhgf.png')",
        backgroundColor: "#f2edea",
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Visitors Say
          </h2>
          <div className="w-24 h-1 bg-orange-600 rounded-full"></div>
        </div>

        {/* Continuously Scrolling Testimonials */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-8"
            style={{
              animation: 'scroll 40s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 flex flex-col min-w-[380px] max-w-[380px] flex-shrink-0"
              >
                {/* Quote Icon */}
                <div className="text-orange-600 mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>

                {/* User Info with Image */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  {/* Profile Image */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-pink-400 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Name and Location */}
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram-style footer note */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            Share your experience with{" "}
            <span className="text-orange-600 font-semibold">#SaffronSandsCollective</span>
          </p>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}