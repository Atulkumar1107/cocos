"use client";

import Image from "next/image";
import Link from "next/link";

export default function CoconutDiscoveryCenter() {
const activities = [
  {
    id: 1,
    title: "Sunrise Shoreline Walk",
    description:
      "Start your morning with a guided coastal walk as the sun rises over the horizon. Discover hidden coves, local marine life, and breathtaking ocean views.",
    fullDescription:
      "Experience the calm beauty of the coastline at sunrise with our expert local guides. Learn about coastal ecosystems, tidal patterns, and the natural history of the region while enjoying a peaceful and rejuvenating start to your day.",
    operates: "Monday & Friday 6:00 - 7:30am",
    price: "Adults - $25 | Children (6-12 years) - $12",
    image:
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839256/pexels-cottonbro-5599688_kzcz0j.jpg",
    bgColor: "bg-amber-700",
    bookingNote: "Advance booking recommended.",
  },
  {
    id: 2,
    title: "Seaside Culinary Workshop",
    description:
      "Join our chefs for a hands-on coastal cooking experience featuring fresh, seasonal ingredients and vibrant seaside flavors.",
    fullDescription:
      "In this interactive workshop, you'll prepare signature dishes inspired by coastal cuisine. Learn plating techniques, flavor balancing, and sustainable sourcing practices — then enjoy your creations overlooking the ocean.",
    operates: "Wednesdays 11:00am - 2:00pm",
    price: "$75 per person",
    image:
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839037/pexels-cottonbro-5599658_sgpj6z.jpg",
    bgColor: "bg-[#f2edea]",
    bookingNote: "Limited seats available. Booking essential.",
  },
  {
    id: 3,
    title: "Ocean Adventure Paddle",
    description:
      "Explore crystal-clear waters on a guided paddle experience suitable for beginners and adventure seekers alike.",
    fullDescription:
      "Glide across calm lagoons and scenic coastal stretches with experienced instructors. This guided paddle session includes safety briefing, equipment, and insights into the surrounding marine environment.",
    operates: "Tuesdays & Saturdays 9:00 - 11:00am",
    price: "$40 per person",
    image:
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839086/pexels-anastasia-shuraeva-5566935_vjfkky.jpg",
    bgColor: "bg-amber-700",
    bookingNote: "Bookings required. Weather dependent.",
  },
  {
    id: 4,
    title: "Coastal Market & Artisan Corner",
    description:
      "Browse a curated selection of locally crafted goods, gourmet products, and coastal-inspired keepsakes.",
    fullDescription:
      "Our artisan corner showcases handcrafted pieces, small-batch gourmet items, and lifestyle products inspired by seaside living. Meet the makers, learn their stories, and take home something truly special.",
    operates: "Friday & Sunday 10:00am - 3:00pm",
    price: "Free entry",
    image:
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839192/pexels-any-lane-5728308_lbmvho.jpg",
    bgColor: "bg-[#f2edea]",
    bookingNote: "Open to all. No reservation required.",
  },
];


  const scrollToForm = () => {
    const formSection = document.getElementById("booking-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Inquiry:", formData);
    alert(
      "Thank you for your inquiry! We'll contact you shortly with availability and pricing.",
    );
  };

  return (
    <div className="bg-[#f2edea]">
      {/* Introduction Section */}
      <section className="py-16 px-6 sm:px-16 bg-[#f2edea]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1762838957/pexels-alexeydemidov-11821214_ydc6so.jpg"
                alt="Wild Coconut Discovery Centre"
                fill
                className="object-cover"
              />
              {/* Gradient blend overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f2edea]/20 via-transparent to-transparent"></div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div className="inline-block bg-green-100 px-6 py-2 rounded-full">
                <p className="text-green-800 font-semibold text-sm uppercase tracking-wide">
                  Saffron Shores Collective
                </p>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Wild Coconut Discovery Centre
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Uncover the fascinating history of coconuts on the Saffron Shores Collective at the Wild Coconut Discovery Centre.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Located at the old abandoned farm site on Mahoon Road opposite
                the Big Barge Art Gallery, Wild Coconut Discovery Centre offers
                the chance to learn all about the process of coconut production.
                View the steps from harvest to pressing, through hands on
                demonstrations and tastings along the way.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Learn to make your own coconut jewellery with a workshop. Or
                pick up a unique Saffron Shores Collective gift or souvenir at our gift shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Sections - Alternating Layout */}
      {activities.map((activity, index) => {
        const isEven = index % 2 === 0;
        const hasPalmBg = activity.bgColor === "bg-green-700";

        return (
          <section
            key={activity.id}
            className="py-16 px-6 sm:px-16 relative"
            style={
              hasPalmBg
                ? {
                    backgroundImage:
                      "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#f2edea",
                  }
                : { backgroundColor: "#f2edea" }
            }
          >
            <div className="mx-auto max-w-7xl">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-24 z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 20%, rgba(242, 237, 234, 0) 100%)",
                  }}
                ></div>
                {/* Image Side */}
                <div className={`${!isEven ? "lg:order-2" : ""}`}>
                  <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`space-y-6 ${!isEven ? "lg:order-1" : ""}`}>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    {activity.title}
                  </h2>

                  <p className="text-lg leading-relaxed text-gray-700">
                    {activity.description}
                  </p>

                  {activity.fullDescription && (
                    <p className="text-lg leading-relaxed text-gray-700">
                      {activity.fullDescription}
                    </p>
                  )}

                  <div className="space-y-3 pt-4 text-gray-900">
                    <p className="text-lg">
                      <span className="font-semibold">Operates:</span>{" "}
                      {activity.operates}
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold">Price:</span>{" "}
                      {activity.price}
                    </p>
                    <p className="text-sm italic text-gray-600">
                      {activity.bookingNote}
                    </p>
                  </div>

                  <Link
                    href="/tours/book-tour"
                    className="inline-block px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-green-600 text-white hover:bg-green-700"
                  >
                    BOOK NOW
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
