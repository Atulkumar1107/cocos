"use client";

import Image from "next/image";

export default function TourGrid() {
  const tours = [
    {
      id: 1,
      name: "Wild Coconut Discovery Centre",
      description:
        "Discover the fascinating world of coconut production through hands-on demonstrations and tasty samples.",
      image:
        "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?q=80&w=2070&auto=format&fit=crop",
      link: "/tours/wild-coconut-discovery",
    },
    {
      id: 2,
      name: "Home Island Cultural Tour",
      description:
        "Immerse yourself in the rich Malay culture and heritage of Home Island with our expert local guides.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
      link: "/tours/cultural-tour",
    },
    {
      id: 3,
      name: "Eco Workshops",
      description:
        "Learn sustainable practices and traditional crafts through interactive workshops with local artisans.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
      link: "/tours/eco-workshops",
    },
    {
      id: 4,
      name: "Plan Your Itinerary",
      description:
        "Create your perfect Saffron Shores Collective experience with our personalized itinerary planning service.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035&auto=format&fit=crop",
      link: "/tours/plan-your-itinerary",
    },
  ];

  return (
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

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Tours & Experiences
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Choose from our curated selection of island adventures and cultural
            experiences
          </p>
        </div>

        {/* Grid of 4 Tour Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <a
              key={tour.id}
              href={tour.link}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer block h-[400px] border border-white/50"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div className="relative w-full h-full">
                  <Image
                    src={tour.image}
                    alt={tour.name}
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
                  {tour.name}
                </h3>
                <div className="w-12 h-1 bg-white rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>

              {/* Description - Appears at bottom right on hover */}
              <div className="absolute bottom-6 right-6 max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                <p className="text-white text-sm leading-relaxed text-right">
                  {tour.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
