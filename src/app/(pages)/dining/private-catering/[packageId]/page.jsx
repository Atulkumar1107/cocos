"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "@/app/lib/redux/slices/cartSlice";
import toast from 'react-hot-toast';
import { getCateringPackageById, getRelatedPackages } from "@/app/lib/data/cateringPackages";


export default function PackageDetail({ params }) {
  const dispatch = useDispatch();
  const unwrappedParams = use(params);
  const pkg = getCateringPackageById(unwrappedParams.packageId);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Package Not Found</h1>
          <Link href="/dining/private-catering" className="text-gray-900 underline hover:text-gray-700">
            Back to Catering Packages
          </Link>
        </div>
      </div>
    );
  }

  const relatedPackages = getRelatedPackages(pkg.id);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const cartItem = {
      id: `${pkg.id}-${Date.now()}`,
      productId: pkg.id,
      name: pkg.name,
      price: pkg.price,
      quantity: quantity,
      image: pkg.images[0],
      category: "Catering Package",
    };

    dispatch(addToCart(cartItem));
    
    toast.success(`Added ${quantity} x ${pkg.shortName} to cart!`, {
      duration: 3000,
      style: {
        background: '#10b981',
        color: '#fff',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#10b981',
      },
    });
    
    setQuantity(1);
  };

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
        <main className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-5xl">
            {pkg.name}
          </h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-white/90">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/dining" className="hover:text-white transition">Dining</Link>
            <span>/</span>
            <Link href="/dining/private-catering" className="hover:text-white transition">Private Catering</Link>
            <span>/</span>
            <span className="text-white font-semibold">{pkg.shortName}</span>
          </div>
        </main>
      </div>

      {/* Package Detail Section */}
      <section className="py-12 px-6 sm:px-16 bg-[#f2edea]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* LEFT - Images (STICKY) */}
            <div>
              <div className="sticky top-32 lg:top-24">
                <div className="space-y-4">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={pkg.images[selectedImage]}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {pkg.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative h-32 overflow-hidden rounded-lg border-2 transition-all ${
                          selectedImage === index
                            ? 'border-gray-900'
                            : 'border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${pkg.name} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Package Info (SCROLLABLE) */}
            <div className="space-y-6">
              {/* Title */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h1>
                <p className="text-lg text-gray-600">{pkg.duration}</p>
              </div>

              {/* Stock Status */}
              <div className={`p-4 rounded-xl border-2 ${
                pkg.inStock 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-green-900">
                    {pkg.inStock ? 'Available for Booking' : 'Currently Unavailable'}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-b border-gray-200 py-4">
                <p className="text-3xl font-bold text-gray-900">
                  ${pkg.price.toFixed(2)} AUD
                </p>
                <p className="text-sm text-gray-600 mt-1">Per package</p>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Quantity
                </h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 cursor-pointer h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 transition"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 cursor-pointer h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!pkg.inStock}
                className="w-full cursor-pointer bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Cart - ${(pkg.price * quantity).toFixed(2)} AUD
              </button>

              {/* Description */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  About This Package
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {pkg.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {pkg.longDescription}
                </p>
              </div>

              {/* What's Included */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ✓ What's Included
                </h3>
                <ul className="space-y-2">
                  {pkg.whatsIncluded.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="mr-2 text-green-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accommodation Info */}
              {pkg.accommodation && (
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    🏠 Accommodation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {pkg.accommodation}
                  </p>
                </div>
              )}

              {/* Meals Included */}
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🍽️ Meals Included
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">Breakfast:</span> {pkg.mealsIncluded.breakfast}</p>
                  <p><span className="font-semibold">Lunch:</span> {pkg.mealsIncluded.lunch}</p>
                  <p><span className="font-semibold">Dinner:</span> {pkg.mealsIncluded.dinner}</p>
                </div>
              </div>

              {/* Optional Add-ons */}
              {pkg.optionalAddons && pkg.optionalAddons.length > 0 && (
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ➕ Optional Add-ons
                  </h3>
                  <ul className="space-y-2">
                    {pkg.optionalAddons.map((addon, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="mr-2">•</span>
                        {addon}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Activities */}
              {pkg.activities && pkg.activities.length > 0 && (
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    🎯 Activities & Experiences
                  </h3>
                  <ul className="space-y-2">
                    {pkg.activities.map((activity, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="mr-2">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Exclusions */}
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ✗ Exclusions
                </h3>
                <ul className="space-y-2">
                  {pkg.exclusions.map((exclusion, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="mr-2 text-red-600">✗</span>
                      {exclusion}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  📞 Questions or Custom Requests?
                </h3>
                <p className="text-gray-700 mb-3">
                  Contact us to discuss customizations or ask any questions about this package.
                </p>
                <a 
                  href="mailto:cocostropicalfoods@gmail.com"
                  className="text-gray-900 font-semibold underline hover:text-gray-700"
                >
                  cocostropicalfoods@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Related Packages */}
          {relatedPackages.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Other Catering Packages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPackages.map((relatedPkg) => (
                  <Link
                    key={relatedPkg.id}
                    href={`/dining/private-catering/${relatedPkg.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden bg-gray-200">
                        <Image
                          src={relatedPkg.images[0]}
                          alt={relatedPkg.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-blue-100 text-blue-700 inline-block w-fit mb-3">
                          {relatedPkg.duration}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {relatedPkg.shortName}
                        </h3>
                        <p className="text-base font-bold text-gray-900 mt-auto">
                          ${relatedPkg.price.toFixed(2)} AUD
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}