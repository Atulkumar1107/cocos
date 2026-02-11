"use client";

import Link from "next/link";
import Image from "next/image";
import { cateringPackages } from "@/app/lib/data/cateringPackages";

export default function PrivateCatering() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-[60vh] items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763015584/pexels-cup-of-couple-8472179_akrvum.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div 
          className="absolute top-0 left-0 right-0 h-32 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)'
          }}
        />
        <main className="relative mt-2 z-10 flex w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <h1 className="mb-6 mt-8 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Private Catering Packages
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Choose from our curated catering experiences designed for your perfect island getaway
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-white/90 mt-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/dining" className="hover:text-white transition">Dining</Link>
            <span>/</span>
            <span className="text-white font-semibold">Private Catering</span>
          </div>
        </main>
      </div>

      {/* Packages Section */}
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Catering Packages
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From extended stays to day trips, we offer catering solutions for every type of island adventure
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cateringPackages.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/dining/private-catering/${pkg.id}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <Image
                      src={pkg.images[0]}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Duration Badge */}
                    <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-blue-100 text-blue-700 inline-block w-fit mb-3">
                      {pkg.duration}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {pkg.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                      {pkg.description}
                    </p>

                    {/* Price */}
                    <div className="mt-auto">
                      <p className="text-2xl font-bold text-gray-900 mb-4">
                        ${pkg.price.toFixed(2)} AUD
                      </p>

                      {/* View Details Button */}
                      <button className="w-full cursor-pointer bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-16 text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We can create a personalized catering experience tailored to your specific needs, group size, and preferences.
            </p>
            <Link 
              href="/dining/private-catering/custom-book"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Contact Us for Custom Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}