"use client";

import Image from "next/image";

export default function WildCoconutActivities() {
  const activities = [
    {
      id: 1,
      name: "Coconut Oil Demo",
      description: "Watch the traditional coconut oil making process and learn about ancient methods passed down through generations.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407531/pexels-rachel-claire-5864291_o1i0nt.jpg",
    },
    {
      id: 2,
      name: "Product Tastings",
      description: "Sample fresh coconut products including coconut cream, coconut chips, and other delicious treats made on-site.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407439/pexels-vladimirsrajber-18631417_th5dii.jpg",
    },
    {
      id: 3,
      name: "Farm Tours",
      description: "Take a guided tour through our lush coconut plantation and discover the journey from tree to product.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg",
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
      {/* Top gradient fade for smooth blend */}
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
            Discover Our Activities
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experience hands-on demonstrations and immerse yourself in traditional coconut farming
          </p>
        </div>

        {/* Grid of 3 Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer h-[400px] border border-white/50"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div className="relative w-full h-full">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/70 group-hover:via-black/30 group-hover:to-black/50 transition-all duration-500"></div>

              {/* Title - Moves from bottom to top on hover */}
              <div className="absolute bottom-6 left-6 group-hover:bottom-auto group-hover:top-6 transition-all duration-500 z-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {activity.name}
                </h3>
                <div className="w-12 h-1 bg-white rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>

              {/* Description - Appears at bottom on hover */}
              <div className="absolute bottom-6 right-6 left-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                <p className="text-white text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}