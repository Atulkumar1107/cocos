"use client";

import Image from "next/image";

export default function VenueCards() {
  const venues = [
    {
      id: 1,
      name: "Surfer Girl Restaurant & Brewery",
      description: "Our outdoor restaurant located on the beach is the perfect place for sunset dinner and drinks with locally sourced ingredients.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762427094/pexels-elevate-1267262_qup1uu.jpg",
      link: "/surfer-girl",
      featured: true
    },
    {
      id: 2,
      name: "Salty's Grill & Bakery",
      description: "Visit our café, bakery and takeaway joint near the airport for coffee, cakes, pizza and other tasty treats.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407439/pexels-vladimirsrajber-18631417_th5dii.jpg",
      link: "/saltys",
      featured: false
    },
    {
      id: 3,
      name: "Wild Coconut Discovery Centre",
      description: "Discover the fascinating world of coconut production through hands-on demonstrations and tasty samples.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg",
      link: "/wild-coconut-estate",
      featured: false
    },
    {
      id: 4,
      name: "Farm Produce Shop",
      description: "Shop fresh local produce, artisan products, and handcrafted goods made right here on Cocos Islands.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762427191/pexels-kindelmedia-6994271_lymowy.jpg",
      link: "/farm-produce",
      featured: false
    }
  ];

  const featuredVenue = venues.find(v => v.featured);
  const otherVenues = venues.filter(v => !v.featured);

  return (
    <section 
      className="relative py-16 px-6 sm:px-16 overflow-hidden"
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 sm:text-5xl mb-4">
            Our Venues
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Experience authentic island flavors and culture across our unique locations
          </p>
        </div>

        {/* Magazine/Editorial Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Featured Venue - Large (Left Side) */}
          {featuredVenue && (
            <a
              href={featuredVenue.link}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white lg:row-span-2 h-[620px]"
            >
              {/* Image */}
              <div className="relative h-full">
                <Image
                  src={featuredVenue.image}
                  alt={featuredVenue.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  quality={90}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Content at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                {/* Featured Badge */}
                <div className="inline-block mb-4">
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full border border-white/30">
                    FEATURED
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {featuredVenue.name}
                </h3>
                
                <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6">
                  {featuredVenue.description}
                </p>

                {/* Arrow Icon */}
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Explore</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          )}

          {/* Other Venues - Stacked (Right Side) */}
          <div className="flex flex-col gap-6">
            {otherVenues.map((venue) => (
              <a
                key={venue.id}
                href={venue.link}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white h-[190px]"
              >
                {/* Image */}
                <div className="relative h-full">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    quality={90}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {venue.name}
                  </h3>
                  
                  <p className="text-sm text-white/90 leading-relaxed mb-3 line-clamp-2">
                    {venue.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Visit</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}