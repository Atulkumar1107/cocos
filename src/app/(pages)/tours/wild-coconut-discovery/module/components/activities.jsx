"use client";

import Image from "next/image";
import Link from "next/link";

export default function CoconutDiscoveryCenter() {

  const activities = [
    {
      id: 1,
      title: "Coconut Tours",
      description: "Learn about the life of a coconut through a hands-on demonstration with local coconut farmers. Explore the coconut palm jungle and sample fresh coconut products, including yummy coconut ice cream!",
      fullDescription: "Discover the fascinating journey of the coconut from tree to table. Our expert guides will walk you through the traditional harvesting methods, show you the various uses of every part of the coconut palm, and let you taste the freshest coconut products straight from the source.",
      operates: "Tuesday & Wednesday 9 - 10am",
      price: "Adults - $20 | Children (5-12 years) - $10",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839256/pexels-cottonbro-5599688_kzcz0j.jpg",
      bgColor: "bg-green-700",
      bookingNote: "Bookings essential.",
    },
    {
      id: 2,
      title: "Coconut Jewellery Workshops",
      description: "Join one of our Cocos Island artisans to craft a unique piece of jewellery from a coconut shell. Includes jewellery making materials + equipment, light snacks + chilled drinks.",
      fullDescription: "Create your own wearable souvenir in this hands-on workshop. Learn traditional techniques passed down through generations as you transform natural coconut shells into beautiful, unique jewellery pieces to take home.",
      operates: "Wednesdays 10 - 2pm",
      price: "$65",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839037/pexels-cottonbro-5599658_sgpj6z.jpg",
      bgColor: "bg-[#f2edea]",
      bookingNote: "Bookings essential.",
    },
    {
      id: 3,
      title: "Coconut Bowl Workshops",
      description: "Craft your own coconut bowl with one of our local artisans. Includes Coconut making materials + equipment.",
      fullDescription: "Shape and polish your own functional coconut bowl in this traditional craft workshop. Our skilled artisans will guide you through each step of the process, from selecting the perfect shell to finishing your unique creation.",
      operates: "Tuesdays 10 - 12pm",
      price: "$30",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839086/pexels-anastasia-shuraeva-5566935_vjfkky.jpg",
      bgColor: "bg-green-700",
      bookingNote: "Bookings essential.",
    },
    {
      id: 4,
      title: "Gift Shop",
      description: "Take a little bit of the Cocos Islands home with you with our beautiful collection of coconut-based gifts made right here on the island. Try our range of coconut body butters, lip balms and salt scrubs with tropical perfumes including paw paw, watermelon and frangipani.",
      fullDescription: "Our collection of cooking oils are made using traditional methods passed down through generations, including coconut oil, lemongrass and chilli. Browse our collection of antique, hand-etched coconut jewellery.",
      operates: "Tuesday & Wednesday 11am - 12pm",
      price: "Free entry",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839192/pexels-any-lane-5728308_lbmvho.jpg",
      bgColor: "bg-[#f2edea]",
      bookingNote: "No booking required. Drop by during opening hours.",
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
    alert("Thank you for your inquiry! We'll contact you shortly with availability and pricing.");
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
                  Cocos Islands
                </p>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Wild Coconut Discovery Centre
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Uncover the fascinating history of coconuts on the Cocos (Keeling) Islands at the Wild Coconut Discovery Centre.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Located at the old abandoned farm site on Mahoon Road opposite the Big Barge Art Gallery, Wild Coconut Discovery Centre offers the chance to learn all about the process of coconut production. View the steps from harvest to pressing, through hands on demonstrations and tastings along the way.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Learn to make your own coconut jewellery with a workshop. Or pick up a unique Cocos Island gift or souvenir at our gift shop.
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
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
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
                      <span className="font-semibold">Operates:</span> {activity.operates}
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold">Price:</span> {activity.price}
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