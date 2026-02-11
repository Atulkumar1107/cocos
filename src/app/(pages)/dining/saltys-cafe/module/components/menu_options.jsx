"use client";

import Image from "next/image";
import Link from "next/link";

export default function SaltysMenu() {
  const menuCategories = [
    {
      id: 1,
      name: "Pizza",
      description: "Wood-fired pizzas with fresh toppings. Perfect for Monday nights and weekend dinners.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763117768/pexels-fariphotography-905847_j0hvbz.jpg",
      link: "/dining/saltys-cafe/pizza",
      icon: "🍕"
    },
    {
      id: 2,
      name: "Sourdough",
      description: "Freshly baked sourdough bread and artisan loaves made with traditional methods.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763117827/pexels-catscoming-1571075_rr8d6z.jpg",
      link: "/dining/saltys-cafe/sourdough",
      icon: "🍞"
    },
    {
      id: 3,
      name: "Fish & Chips",
      description: "Friday special! Fresh local fish with crispy chips. Choose battered or grilled.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763117894/pexels-farhad-19239122_vm2ifk.jpg",
      link: "/dining/saltys-cafe/fish-and-chips",
      icon: "🐟"
    },
    {
      id: 4,
      name: "Flight Days",
      description: "Pre-order your meals for plane days. Fresh baked goods and snacks ready for pickup.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763117907/pexels-stefanstefancik-127905_liosxq.jpg",
      link: "/dining/saltys-cafe/flight-days",
      icon: "✈️"
    },
  ];

  return (
    <>
      {/* Menu Categories Section */}
      <section 
        className="relative py-20 px-6 sm:px-16 overflow-hidden"
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

        <div className="relative z-10 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Menu
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuCategories.map((category) => (
              <Link
                key={category.id}
                href={category.link}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer block h-[400px] border border-white/50"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 group-hover:via-black/40 group-hover:to-black/60 transition-all duration-500"></div>

                {/* Icon Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg z-10">
                  {category.icon}
                </div>

                {/* Title - Moves from bottom to top on hover */}
                <div className="absolute bottom-6 left-6 group-hover:bottom-auto group-hover:top-20 transition-all duration-500 z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <div className="w-12 h-1 bg-white rounded-full group-hover:w-20 transition-all duration-300"></div>
                </div>

                {/* Description - Appears at bottom on hover */}
                <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                  <p className="text-white text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* View Menu Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <div className="bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center">
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

 
    </>
  );
}