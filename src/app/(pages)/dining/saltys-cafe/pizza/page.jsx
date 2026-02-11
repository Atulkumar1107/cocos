"use client";

import Image from "next/image";
import Link from "next/link";

export default function PizzaListing() {
  const pizzaProducts = [
    {
      id: 1,
      name: "Monday Pizza & Malay Night",
      slug: "monday-pizza-night",
      description: "Stone-fired pizzas and authentic Malay curry specials",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118053/pexels-pablo-macedo-287472-845811_wtn4bt.jpg",
      price: 23.00,
      category: "Pizza Night",
      time: "2pm - 7pm",
      availability: "Every Monday",
      daysOfWeek: [1], // Monday
    },
    {
      id: 2,
      name: "Friday Lunch/Inflight Pizza",
      slug: "friday-lunch-pizza",
      description: "Perfect for a quick lunch or takeaway before your flight",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118063/pexels-athena-2180877_whjba9.jpg",
      price: 23.00,
      category: "Lunch Special",
      time: "12pm - 2pm",
      availability: "Every Friday",
      daysOfWeek: [5], // Friday
    },
    {
      id: 3,
      name: "Saturday Pizza Night",
      slug: "saturday-pizza-night",
      description: "Weekend pizza feast under the stars",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118019/pexels-renestrgar-32872507_asbbet.jpg",
      price: 23.00,
      category: "Pizza Night",
      time: "5pm - 8pm",
      availability: "Every Saturday",
      daysOfWeek: [6], // Saturday
    },
    {
      id: 4,
      name: "Sunday Pizza Night",
      slug: "sunday-pizza-night",
      description: "End your weekend with delicious stone-fired pizza",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763117768/pexels-fariphotography-905847_j0hvbz.jpg",
      price: 23.00,
      category: "Pizza Night",
      time: "5pm - 8pm",
      availability: "Every Sunday",
      daysOfWeek: [0], // Sunday
    },
    {
      id: 5,
      name: "Kids Pizza",
      slug: "kids-pizza",
      description: "Perfect portion for little ones",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118469/pexels-laurin-diaz-768597919-19301007_zd0mwy.jpg",
      price: 8.00,
      category: "Kids Menu",
      time: "During all pizza nights",
      availability: "Saturday, Monday & Friday",
      daysOfWeek: [1, 5, 6], // Monday, Friday, Saturday
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Pizza Night":
        return "bg-orange-100 text-orange-700";
      case "Lunch Special":
        return "bg-blue-100 text-blue-700";
      case "Kids Menu":
        return "bg-purple-100 text-purple-700";
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
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118293/pexels-yankrukov-5216394_idwpt0.jpg')",
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
            Pizza Menu
          </h1>
          <p className="mb-8 backdrop-blur-[2px] max-w-2xl text-lg text-white/90">
            Wood-fired perfection served fresh. Choose your favorite pizza night!
          </p>
        </main>
      </div>

      {/* Pizza Listing Section */}
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
          {/* Grid of Pizza Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pizzaProducts.map((pizza) => (
              <Link
                key={pizza.id}
                href={`/dining/saltys-cafe/pizza/${pizza.slug}`}
                className="group"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <Image
                      src={pizza.image}
                      alt={pizza.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    {/* Category Badge */}
                    <span
                      className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${getCategoryColor(
                        pizza.category
                      )} inline-block w-fit mb-3`}
                    >
                      {pizza.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {pizza.name}
                    </h3>

                    {/* Price */}
                    <p className="text-base font-bold text-gray-900 mb-2">
                      From ${pizza.price.toFixed(2)} AUD
                    </p>

                    {/* Time */}
                    <p className="text-sm text-gray-600 mb-1">{pizza.time}</p>

                    {/* Availability */}
                    <p className="text-sm text-gray-500 mt-auto">
                      {pizza.availability}
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