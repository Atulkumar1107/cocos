"use client";

import Image from "next/image";
import Link from "next/link";

export default function SurferMenuSection() {
  const menuCards = [
    {
      id: 1,
      name: "Mediterranean Monday",
      slug: "mediterranean-monday",
      description:
        "Experience Mediterranean flavors with a tropical twist every Monday night",
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446702/pexels-robimsel-34762311_btyicb.jpg",
      category: "Dinner",
      time: "5pm - 9pm",
      availability: "Every Monday",
    },
    {
      id: 2,
      name: "Coconut Thursday",
      slug: "coconut-thursday",
      description:
        "Indulge in coconut-based entrees, mains and desserts every Thursday",
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839524/pexels-anntarazevich-7466809_mr8l0e.jpg",
      category: "Dinner",
      time: "5pm - 9pm",
      availability: "Every Thursday",
    },
    {
      id: 3,
      name: "Brunch Sunday Morning",
      slug: "brunch-sunday-morning",
      description:
        "Start your Sunday with fresh breakfast overlooking the Indian Ocean",
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447559/pexels-burcu-bircan-680818596-30827426_bx1zlu.jpg",
      category: "Breakfast",
      time: "8am - 12pm",
      availability: "Every Sunday",
    },
    {
      id: 4,
      name: "Craft Beer, Cocktails & Wine",
      slug: "craft-beer-cocktails-wine",
      description:
        "Locally made cocktails, our craft beer, and curated wine selection",
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447824/pexels-pixabay-159291_nibpzt.jpg",
      category: "Drinks",
      time: "During service hours",
      availability: "Monday, Thursday & Sunday",
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Dinner":
        return "bg-orange-100 text-orange-700";
      case "Breakfast":
        return "bg-green-100 text-green-700";
      case "Drinks":
        return "bg-blue-100 text-blue-700";
      case "Events":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <>
      {/* Description Section */}
      <section
        className="py-16 px-6 sm:px-16"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea",
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
            <p>
              A restaurant brewery providing a unique Saffron Sands Islands dining
              experiences under the stars and overlooking the Indian Ocean to
              the West.
            </p>
            <p>
              Enjoy a range of casual dinner meals (Monday & Thursday) &
              breakfast (Sunday).
            </p>
            <p>
              The restaurant is fully licensed serving locally made cocktails,
              local craft beer (our latest venture) and amazing coconut based
              entrees, mains and desserts.
            </p>
            <p className="font-semibold text-gray-900">
              Limited seating, bookings are essential. Book now via the form
              below or write up your name on the reservations board located
              outside the venue.
            </p>
          </div>

          {/* Book Now Button */}
          <Link
            href="/dining/saffron-sunset-surf/reservations"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            BOOK NOW
          </Link>
        </div>
      </section>

      {/* Menu Cards Section */}
      <section
        className="relative py-20 px-6 sm:px-16 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762408026/palm-shadow-4_bgbhgf.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea",
        }}
      >
        {/* Top gradient fade */}
        <div
          className="absolute top-0 left-0 right-0 h-32 z-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)",
          }}
        ></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
            <p className="text-lg text-gray-600">
              Explore our dining experiences
            </p>
          </div>

          {/* Grid of Menu Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {menuCards.map((menu) => (
              <Link
                key={menu.id}
                href={`/dining/saffron-sunset-surf/${menu.slug}`}
                className="group"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <Image
                      src={menu.image}
                      alt={menu.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    {/* Category Badge */}
                    <span
                      className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${getCategoryColor(
                        menu.category,
                      )} inline-block w-fit mb-3`}
                    >
                      {menu.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {menu.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {menu.description}
                    </p>

                    {/* Time */}
                    <p className="text-sm text-gray-600 mb-1">{menu.time}</p>

                    {/* Availability */}
                    <p className="text-sm text-gray-500 mt-auto">
                      {menu.availability}
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
