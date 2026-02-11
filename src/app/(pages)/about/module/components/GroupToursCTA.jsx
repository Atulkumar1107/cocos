"use client";

import Link from "next/link";

export default function GroupToursCTA() {
  return (
    <section 
      className="py-20 px-6 sm:px-16"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762408026/palm-shadow-4_bgbhgf.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f2edea"
      }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Group & Educational Tours
        </h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
          <p>
            Planning a school excursion, corporate team building, or group visit? We offer tailored educational tours that bring the fascinating world of coconut farming to life.
          </p>
          <p>
            Our expert guides will take your group through hands-on demonstrations, tastings, and immersive experiences that showcase traditional methods and sustainable practices.
          </p>
          <p className="font-semibold text-gray-900">
            Perfect for schools, universities, corporate groups, and community organizations.
          </p>
        </div>

        {/* Contact Us Button */}
        <Link 
          href="/about/group-educational-tours"
          className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Contact Us for Bookings
        </Link>
      </div>
    </section>
  );
}