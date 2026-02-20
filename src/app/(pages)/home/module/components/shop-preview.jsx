"use client";

import Image from "next/image";

export default function ShopPreview() {
  const products = [
    {
      id: 1,
      name: "Pure Coconut Oil",
      price: "$24.99",
      description: "Cold-pressed virgin coconut oil, perfect for cooking and skincare",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407676/pexels-daniela-elena-tentis-118658-725998_zkvcba.jpg",
      link: "/fresh-produce",
    },
    {
      id: 2,
      name: "Tropical Fruit Box",
      price: "$39.99",
      description: "Fresh seasonal fruits including papaya, mango, and passion fruit",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407713/pexels-dutumong-2422546_fyrw7f.jpg",
      link: "/fresh-produce",
    },
    {
      id: 3,
      name: "Coconut Water Pack",
      price: "$18.99",
      description: "6-pack of fresh coconut water, naturally refreshing and hydrating",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407744/pexels-mithulvarshan-4802876_py4aza.jpg",
      link: "/fresh-produce",
    },
  ];

  return (
    <section
      className="relative py-20 px-6 sm:px-16"
      style={{
        backgroundColor: "#f2edea",
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header with Title and Shop All Button */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Island Treasures</h2>
          <a
            href="/shop"
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
          >
            Shop All
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.link}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer h-[450px]"
            >
              {/* Product Image - Larger area */}
              <div className="relative h-[320px] bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Price Tag - Corner style */}
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-lg font-bold">{product.price}</span>
                </div>

                {/* Hover Overlay with Description */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                  <p className="text-white text-center text-base leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Product Info - Bottom section */}
              <div className="p-6 flex flex-col justify-between h-[130px]">
                {/* Product Name */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-3">
                  {product.name}
                </h3>

                {/* Add to Cart Button */}
                <button className="w-full cursor-pointer bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-md">
                  Add to Cart
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}