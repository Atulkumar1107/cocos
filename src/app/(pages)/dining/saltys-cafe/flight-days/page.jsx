"use client";

import Image from "next/image";
import Link from "next/link";

export default function FlightDaysListing() {
  // All products available for Flight Days
  const flightDayProducts = [
    // PIZZAS (5 products)
    {
      id: 1,
      name: "Monday Pizza & Malay Night",
      slug: "monday-pizza-night",
      type: "pizza",
      description: "Stone-fired pizzas and authentic Malay curry specials",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118053/pexels-pablo-macedo-287472-845811_wtn4bt.jpg",
      price: 23.00,
      category: "Pizza Night",
      time: "Pre-order for flight days",
      availability: "Tuesday & Friday",
    },
    {
      id: 2,
      name: "Friday Lunch/Inflight Pizza",
      slug: "friday-lunch-pizza",
      type: "pizza",
      description: "Perfect for a quick lunch or takeaway before your flight",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118063/pexels-athena-2180877_whjba9.jpg",
      price: 23.00,
      category: "Lunch Special",
      time: "Pre-order for flight days",
      availability: "Tuesday & Friday",
    },
    {
      id: 3,
      name: "Saturday Pizza Night",
      slug: "saturday-pizza-night",
      type: "pizza",
      description: "Weekend pizza feast under the stars",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118019/pexels-renestrgar-32872507_asbbet.jpg",
      price: 23.00,
      category: "Pizza Night",
      time: "Pre-order for flight days",
      availability: "Tuesday & Friday",
    },
    {
      id: 4,
      name: "Sunday Pizza Night",
      slug: "sunday-pizza-night",
      type: "pizza",
      description: "End your weekend with delicious stone-fired pizza",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763117768/pexels-fariphotography-905847_j0hvbz.jpg",
      price: 23.00,
      category: "Pizza Night",
      time: "Pre-order for flight days",
      availability: "Tuesday & Friday",
    },
    {
      id: 5,
      name: "Kids Pizza",
      slug: "kids-pizza",
      type: "pizza",
      description: "Perfect portion for little ones",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118469/pexels-laurin-diaz-768597919-19301007_zd0mwy.jpg",
      price: 8.00,
      category: "Kids Menu",
      time: "Pre-order for flight days",
      availability: "Tuesday & Friday",
    },
    // SOURDOUGH (5 products)
    {
      id: 6,
      name: "Classic Sourdough",
      slug: "classic-sourdough",
      type: "sourdough",
      description: "Made with flour, water, salt, and natural sourdough starter. Perfect for travel.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763117827/pexels-catscoming-1571075_rr8d6z.jpg",
      price: 8.00,
      category: "Artisan Bread",
      time: "Pre-order for flight days",
      availability: "Tuesday & Friday",
    },
    {
      id: 7,
      name: "Whole Wheat Sourdough",
      slug: "whole-wheat-sourdough",
      type: "sourdough",
      description: "Hearty whole wheat sourdough with nutty flavor. Rich in fiber and nutrients.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119022/pexels-catscoming-1571073_les0sm.jpg",
      price: 9.00,
      category: "Artisan Bread",
      time: "Pre-order for flight days",
      availability: "Tuesday & Friday",
    },
    {
      id: 8,
      name: "Rye Sourdough",
      slug: "rye-sourdough",
      type: "sourdough",
      description: "Traditional rye sourdough with deep, earthy flavor. Perfect for sandwiches.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119037/pexels-monserratsoldu-600620_h1jf6d.jpg",
      price: 9.50,
      category: "Artisan Bread",
      time: "Pre-order for flight days",
      availability: "Tuesday & Friday",
    },
    {
      id: 9,
      name: "Multigrain Sourdough",
      slug: "multigrain-sourdough",
      type: "sourdough",
      description: "Packed with seeds and grains. Nutty, wholesome, and delicious.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119050/pexels-renestrgar-33240983_miehfs.jpg",
      price: 10.00,
      category: "Artisan Bread",
      time: "Pre-order for flight days",
      availability: "Tuesday & Friday",
    },
    {
      id: 10,
      name: "Seeded Sourdough",
      slug: "seeded-sourdough",
      type: "sourdough",
      description: "Loaded with sunflower, pumpkin, and sesame seeds. Crunchy crust with soft interior.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119069/pexels-ivan-j-long-578165-1387070_nxpakk.jpg",
      price: 11.00,
      category: "Artisan Bread",
      time: "Pre-order for flight days",
      availability: "Tuesday & Friday",
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
      case "Artisan Bread":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getProductLink = (product) => {
    if (product.type === "pizza") {
      return `/dining/saltys-cafe/pizza/${product.slug}`;
    } else if (product.type === "sourdough") {
      return `/dining/saltys-cafe/sourdough/${product.slug}`;
    }
    return "#";
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-[60vh] items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763120550/pexels-freestockpro-1003864_ptdk6k.jpg')",
          }}
        />

         {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Top gradient fade */}
       <div
  className="absolute top-0 left-0 right-0 h-32 z-[5]"
  style={{
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)'
  }}
/>


        {/* Hero Content */}
        <main className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <h1 className="mb-4 text-4xl font-bold backdrop-blur-[2px] text-white sm:text-5xl lg:text-6xl">
            Flight Days
          </h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center backdrop-blur-[2px] justify-center space-x-2 text-sm text-white/90">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/dining" className="hover:text-white transition">Dining</Link>
            <span>/</span>
            <Link href="/dining/saltys-cafe" className="hover:text-white transition">Salty's Café</Link>
            <span>/</span>
            <span className="text-white font-semibold">Flight Days</span>
          </div>
        </main>
      </div>

    {/* Description Section */}
<section 
  className="py-16 px-6 sm:px-16"
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

  <div className="relative z-10 mx-auto max-w-4xl text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">
      Whether you're flying in, flying out or transiting, Salty's has you covered!
    </h2>
    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
      <p>
        On plane days (Tuesdays & Fridays) we offer delicious pizzas to enjoy pre-flight or as an inflight meal. If you're transiting to/from Christmas Island, we will deliver to the transit lounge.
      </p>
      <p>
        You can also pre-order a freshly-baked sourdough loaf to take with you wherever your next destination is.
      </p>
      <p className="font-semibold text-gray-900 text-xl mt-6">
        ✈️ Pre-orders are essential to ensure we can have your meal ready for you when you touch down.
      </p>
      <p className="text-base text-gray-600">
        Order up to 14 days in advance
      </p>
    </div>
  </div>
</section>

      {/* Products Listing Section */}
      <section 
        className="relative py-20 px-6 sm:px-16 overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762408026/palm-shadow-4_bgbhgf.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea"
        }}
      >
        {/* Top gradient fade for blending */}
  <div 
    className="absolute top-0 left-0 right-0 h-32 z-0"
    style={{
      background: 'linear-gradient(to bottom, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)'
    }}
  ></div>
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Grid of Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {flightDayProducts.map((product) => (
              <Link
                key={product.id}
                href={getProductLink(product)}
                className="group"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    {/* Category Badge */}
                    <span
                      className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${getCategoryColor(
                        product.category
                      )} inline-block w-fit mb-3`}
                    >
                      {product.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <p className="text-base font-bold text-gray-900 mb-2">
                      From ${product.price.toFixed(2)} AUD
                    </p>

                    {/* Time */}
                    <p className="text-sm text-gray-600 mb-1">{product.time}</p>

                    {/* Availability */}
                    <p className="text-sm text-gray-500 mt-auto">
                      {product.availability}
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