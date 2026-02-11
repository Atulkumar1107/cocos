"use client";

import Image from "next/image";
import { useState } from "react";

export default function FeaturedExperiences() {
  const featuredPlaces = [
    {
      id: 1,
      name: "Salty's Grill & Bakery",
      description: "Visit our café, bakery and takeway joint near the airport for coffee, cakes, pizza and other tasty treats.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407439/pexels-vladimirsrajber-18631417_th5dii.jpg",
      link: "/saltys",
    },
    {
      id: 2,
      name: "Surfer Girl Restaurant & Brewery",
      description: "Our outdoor restaurant located on the beach is the perfect place for sunset dinner and drinks.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407531/pexels-rachel-claire-5864291_o1i0nt.jpg",
      link: "/surfer-girl",
    },
    {
      id: 3,
      name: "Wild Coconut Discovery Center",
      description: "Discover the fascinating world of coconut production through hands on demonstrations and tasty samples.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg",
      link: "/wild-coconut-estate",
    },
  ];

  return (
   <section 
  className="relative py-20 px-6 sm:px-16 overflow-hidden"
  style={{
    backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#f2edea"  // Changed to #f2edea to match
  }}
>
  {/* Top gradient fade FROM #f2edea to transparent for smooth blend */}
  <div 
    className="absolute top-0 left-0 right-0 h-32 z-0"
    style={{
      background: 'linear-gradient(to bottom, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)'
    }}
  ></div>

  <div className="relative z-10 mx-auto max-w-7xl">
        {/* Grid of 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPlaces.map((place) => (
            <a
              key={place.id}
              href={place.link}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer block h-[400px] border border-white/50"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500">
                  {/* Placeholder - Replace with actual images */}
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Gradient Overlay - Softer for elegant background */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/70 group-hover:via-black/30 group-hover:to-black/50 transition-all duration-500"></div>

              {/* Title - Moves from bottom to top on hover */}
              <div className="absolute bottom-6 left-6 group-hover:bottom-auto group-hover:top-6 transition-all duration-500 z-10">
                <h3 className="text-2xl -ml-3 font-bold text-white mb-2">
                  {place.name}
                </h3>
                <div className="w-12 h-1 bg-white rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>

              {/* Description - Appears at bottom right on hover */}
              <div className="absolute bottom-6 right-6 max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                <p className="text-white text-sm leading-relaxed text-right">
                  {place.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}