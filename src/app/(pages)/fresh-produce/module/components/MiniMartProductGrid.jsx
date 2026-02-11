"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/redux/slices/cartSlice";
import toast from "react-hot-toast";

export default function MiniMartProductGrid() {
  const dispatch = useDispatch();

  // All products with categories
  const allProducts = [
    // COCONUT PRODUCTS
    {
      id: 1,
      productId: "coconut-oil-250ml",
      name: "Virgin Coconut Oil 250ml",
      category: "Coconut Products",
      price: 18.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407531/pexels-rachel-claire-5864291_o1i0nt.jpg",
      description: "Pure virgin coconut oil, cold-pressed"
    },
    {
      id: 2,
      productId: "coconut-chips-200g",
      name: "Coconut Chips 200g",
      category: "Coconut Products",
      price: 12.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407439/pexels-vladimirsrajber-18631417_th5dii.jpg",
      description: "Crispy roasted coconut chips"
    },
    {
      id: 3,
      productId: "coconut-cream-400ml",
      name: "Coconut Cream 400ml",
      category: "Coconut Products",
      price: 15.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg",
      description: "Rich and creamy coconut cream"
    },
    {
      id: 4,
      productId: "desiccated-coconut-500g",
      name: "Desiccated Coconut 500g",
      category: "Coconut Products",
      price: 10.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407531/pexels-rachel-claire-5864291_o1i0nt.jpg",
      description: "Finely shredded dried coconut"
    },
    {
      id: 5,
      productId: "coconut-sugar-300g",
      name: "Coconut Sugar 300g",
      category: "Coconut Products",
      price: 14.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407439/pexels-vladimirsrajber-18631417_th5dii.jpg",
      description: "Natural sweetener from coconut sap"
    },

    // MINI MART ESSENTIALS
    {
      id: 6,
      productId: "cocos-sea-salt-200g",
      name: "Cocos Sea Salt 200g",
      category: "Mini Mart",
      price: 8.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg",
      description: "Locally harvested sea salt"
    },
    {
      id: 7,
      productId: "moringa-powder-100g",
      name: "Moringa Powder 100g",
      category: "Mini Mart",
      price: 16.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407531/pexels-rachel-claire-5864291_o1i0nt.jpg",
      description: "Nutrient-rich superfood powder"
    },
    {
      id: 8,
      productId: "dried-lime-50g",
      name: "Dried Lime 50g",
      category: "Mini Mart",
      price: 7.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407439/pexels-vladimirsrajber-18631417_th5dii.jpg",
      description: "Dehydrated local limes"
    },
    {
      id: 9,
      productId: "seaweed-snacks-100g",
      name: "Seaweed Snacks 100g",
      category: "Mini Mart",
      price: 9.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg",
      description: "Crispy dried local seaweed"
    },
    {
      id: 10,
      productId: "island-honey-250ml",
      name: "Island Honey 250ml",
      category: "Mini Mart",
      price: 20.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407531/pexels-rachel-claire-5864291_o1i0nt.jpg",
      description: "Pure local island honey"
    },

    // LOCAL CRAFTS
    {
      id: 11,
      productId: "woven-basket-small",
      name: "Woven Coconut Basket",
      category: "Local Crafts",
      price: 35.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407439/pexels-vladimirsrajber-18631417_th5dii.jpg",
      description: "Handwoven coconut fiber basket"
    },
    {
      id: 12,
      productId: "shell-necklace",
      name: "Shell Necklace",
      category: "Local Crafts",
      price: 25.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg",
      description: "Handmade island shell jewelry"
    },
    {
      id: 13,
      productId: "coconut-bowl",
      name: "Coconut Shell Bowl",
      category: "Local Crafts",
      price: 22.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407531/pexels-rachel-claire-5864291_o1i0nt.jpg",
      description: "Polished coconut shell serving bowl"
    },
    {
      id: 14,
      productId: "palm-leaf-fan",
      name: "Palm Leaf Fan",
      category: "Local Crafts",
      price: 18.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407439/pexels-vladimirsrajber-18631417_th5dii.jpg",
      description: "Traditional handwoven palm fan"
    },
    {
      id: 15,
      productId: "batik-fabric",
      name: "Batik Fabric Piece",
      category: "Local Crafts",
      price: 45.00,
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg",
      description: "Hand-dyed traditional batik cloth"
    },
  ];

  const categories = ["Coconut Products", "Mini Mart", "Local Crafts"];
  
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [quantities, setQuantities] = useState({});

  // Filter products based on selected categories
  const filteredProducts = selectedCategories.length === 0 
    ? allProducts 
    : allProducts.filter(product => selectedCategories.includes(product.category));

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  const getQuantity = (productId) => quantities[productId] || 1;

  const incrementQuantity = (productId) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) - 1)
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = getQuantity(product.productId);
    
    const cartItem = {
      id: `${product.productId}-${Date.now()}`,
      productId: product.productId,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
      category: product.category,
    };

    dispatch(addToCart(cartItem));
    
    toast.success(`Added ${quantity} x ${product.name} to cart!`, {
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

    // Reset quantity after adding
    setQuantities(prev => ({
      ...prev,
      [product.productId]: 1
    }));
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Coconut Products":
        return "bg-amber-100 text-amber-700";
      case "Mini Mart":
        return "bg-green-100 text-green-700";
      case "Local Crafts":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
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
        {/* Filter Bar */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Browse Our Products
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-sm rounded-xl border-2 border-gray-200 cursor-pointer hover:border-gray-900 transition-all"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="w-5 h-5 rounded border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-900"
                />
                <span className="font-semibold text-gray-900">{category}</span>
              </label>
            ))}
          </div>

          {/* Active Filters Display */}
          {selectedCategories.length > 0 && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Showing: <span className="font-semibold">{selectedCategories.join(", ")}</span>
                <button
                  onClick={() => setSelectedCategories([])}
                  className="ml-3 text-gray-900 underline hover:text-gray-700"
                >
                  Clear All
                </button>
              </p>
            </div>
          )}
        </div>
  {/* Product Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {filteredProducts.map((product) => (
      <Link
        key={product.id}
        href={`/fresh-produce/${product.productId}`}
        className="block"
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-gray-200">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.description}
            </p>

            {/* Price */}
            <p className="text-base font-bold text-gray-900 mb-4">
              From ${product.price.toFixed(2)} AUD
            </p>

            {/* Quantity Selector */}
            <div className="mt-auto">
              <div className="flex items-center justify-center space-x-4 mb-3">
                <button
                  onClick={() => decrementQuantity(product.productId)}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition"
                >
                  -
                </button>
                <span className="text-lg font-semibold w-8 text-center">
                  {getQuantity(product.productId)}
                </span>
                <button
                  onClick={() => incrementQuantity(product.productId)}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-gray-900 text-white py-2 rounded-xl font-semibold text-sm hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No products found in selected categories.
            </p>
          </div>
        )}
        
      
    </section>
  );
}