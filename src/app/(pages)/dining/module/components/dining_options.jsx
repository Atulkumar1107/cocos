"use client";

import Image from "next/image";

export default function DiningOptions() {
  const diningPlaces = [
    {
      id: 1,
      name: "Saltys Café",
      description: "Freshly baked goods, aromatic coffee, and light bites perfect for breakfast or a quick lunch near the airport.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763117438/pexels-wondererphotograph-2564081_a69ryo.jpg",
      link: "/dining/saltys-cafe",
    },
    {
      id: 2,
      name: "Surfer Girl Restaurant",
      description: "Beachfront dining with fresh seafood, tropical cocktails, and stunning sunset views in a relaxed island atmosphere.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763117521/pexels-elevate-1269043_hirbnm.jpg",
      link: "/dining/surfer-girl-restaurant-brewery",
    },
    {
      id: 3,
      name: "Private Catering",
      description: "Personalized menus and professional service for your special events, celebrations, and intimate gatherings.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763117647/pexels-bohlemedia-1114427_eebchz.jpg",
      link: "/dining/private-catering",
    },
  ];

  return (
    <section 
      className="relative py-20 px-6 sm:px-16 overflow-hidden"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f2edea"
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
          {diningPlaces.map((place) => (
            <a
              key={place.id}
              href={place.link}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer block h-[400px] border border-white/50"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Gradient Overlay */}
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