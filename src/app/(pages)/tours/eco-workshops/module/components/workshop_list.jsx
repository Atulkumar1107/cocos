"use client";

import Image from "next/image";

export default function WorkshopList() {
  const workshops = [
    {
      id: 1,
      name: "Sourdough Bread Making",
      description: "Learn the art of traditional sourdough bread making with our expert bakers. Master fermentation techniques and create your own starter.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
      link: "/tours/eco-workshops/sourdough-bread-making",
    },
    {
      id: 2,
      name: "Coconut Oil Making",
      description: "Discover the traditional process of extracting pure coconut oil. Learn sustainable methods passed down through generations.",
      image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?q=80&w=2070&auto=format&fit=crop",
      link: "/tours/eco-workshops/coconut-oil-making",
    },
    {
      id: 3,
      name: "Coconut Chip Making",
      description: "Create delicious, crispy coconut chips using traditional island techniques. Perfect for healthy snacking and gift-giving.",
      image: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?q=80&w=2070&auto=format&fit=crop",
      link: "/tours/eco-workshops/coconut-chip-making",
    },
    {
      id: 4,
      name: "Coconut Cream Making",
      description: "Master the art of creating rich, creamy coconut cream from fresh coconuts. Learn recipes and preservation techniques.",
      image: "https://images.unsplash.com/photo-1623428454614-abaf00244e52?q=80&w=2064&auto=format&fit=crop",
      link: "/tours/eco-workshops/coconut-cream-making",
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
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Sustainable Workshops
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Learn traditional crafts and sustainable practices from local artisans
          </p>
        </div>

        {/* Grid of 4 Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workshops.map((workshop) => (
            <a
              key={workshop.id}
              href={workshop.link}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer block h-[400px] border border-white/50"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div className="relative w-full h-full">
                  <Image
                    src={workshop.image}
                    alt={workshop.name}
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
                  {workshop.name}
                </h3>
                <div className="w-12 h-1 bg-white rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>

              {/* Description - Appears at bottom right on hover */}
              <div className="absolute bottom-6 right-6 max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                <p className="text-white text-sm leading-relaxed text-right">
                  {workshop.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}