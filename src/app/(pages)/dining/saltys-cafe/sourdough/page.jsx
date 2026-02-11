"use client";

import Image from "next/image";
import Link from "next/link";

export default function SourdoughListing() {
  const sourdoughProducts = [
    {
      id: 1,
      name: "Classic Sourdough",
      slug: "classic-sourdough",
      description: "Made with flour, water, salt, and natural sourdough starter. Tangy flavor with airy crumb.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119063/pexels-marta-dzedyshko-1042863-2067430_lrq4ya.jpg",
      price: 8.00,
      category: "Artisan Bread",
      time: "6am - 2pm",
      availability: "Tuesday & Friday",
      daysOfWeek: [2, 5], // Tuesday, Friday
    },
    {
      id: 2,
      name: "Whole Wheat Sourdough",
      slug: "whole-wheat-sourdough",
      description: "Hearty whole wheat sourdough with nutty flavor. Rich in fiber and nutrients.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119069/pexels-ivan-j-long-578165-1387070_nxpakk.jpg",
      price: 9.00,
      category: "Artisan Bread",
      time: "6am - 2pm",
      availability: "Tuesday & Friday",
      daysOfWeek: [2, 5],
    },
    {
      id: 3,
      name: "Rye Sourdough",
      slug: "rye-sourdough",
      description: "Traditional rye sourdough with deep, earthy flavor. Perfect for sandwiches.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119050/pexels-renestrgar-33240983_miehfs.jpg",
      price: 9.50,
      category: "Artisan Bread",
      time: "6am - 2pm",
      availability: "Tuesday & Friday",
      daysOfWeek: [2, 5],
    },
    {
      id: 4,
      name: "Multigrain Sourdough",
      slug: "multigrain-sourdough",
      description: "Packed with seeds and grains. Nutty, wholesome, and delicious.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119037/pexels-monserratsoldu-600620_h1jf6d.jpg",
      price: 10.00,
      category: "Artisan Bread",
      time: "6am - 2pm",
      availability: "Tuesday & Friday",
      daysOfWeek: [2, 5],
    },
    {
      id: 5,
      name: "Seeded Sourdough",
      slug: "seeded-sourdough",
      description: "Loaded with sunflower, pumpkin, and sesame seeds. Crunchy crust with soft interior.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119022/pexels-catscoming-1571073_les0sm.jpg",
      price: 11.00,
      category: "Artisan Bread",
      time: "6am - 2pm",
      availability: "Tuesday & Friday",
      daysOfWeek: [2, 5],
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Artisan Bread":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-[60vh] items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119022/pexels-catscoming-1571073_les0sm.jpg')",
          }}
        />

          {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Top gradient fade */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)'
          }}
        />

        {/* Hero Content */}
        <main className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <h1 className="mb-4 text-4xl backdrop-blur-[2px] font-bold text-white sm:text-5xl lg:text-6xl">
            Sourdough Menu
          </h1>
          <p className="mb-8 max-w-2xl backdrop-blur-[2px] text-lg text-white/90">
            Freshly baked artisan bread. Made with natural ingredients and traditional methods.
          </p>
        </main>
      </div>

      {/* Sourdough Listing Section */}
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
          {/* Grid of Sourdough Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sourdoughProducts.map((bread) => (
              <Link
                key={bread.id}
                href={`/dining/saltys-cafe/sourdough/${bread.slug}`}
                className="group"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <Image
                      src={bread.image}
                      alt={bread.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    {/* Category Badge */}
                    <span
                      className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${getCategoryColor(
                        bread.category
                      )} inline-block w-fit mb-3`}
                    >
                      {bread.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {bread.name}
                    </h3>

                    {/* Price */}
                    <p className="text-base font-bold text-gray-900 mb-2">
                      From ${bread.price.toFixed(2)} AUD
                    </p>

                    {/* Time */}
                    <p className="text-sm text-gray-600 mb-1">{bread.time}</p>

                    {/* Availability */}
                    <p className="text-sm text-gray-500 mt-auto">
                      {bread.availability}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CSS for subtle card hover */}
      <style jsx>{`
        .group:hover > div {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
}