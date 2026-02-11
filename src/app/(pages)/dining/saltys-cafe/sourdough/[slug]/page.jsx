"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, use, useMemo } from "react";
import { notFound } from "next/navigation";
import { useDispatch } from 'react-redux';
import { addToCart } from "@/app/lib/redux/slices/cartSlice";
import toast from 'react-hot-toast';
import { ChevronDown } from 'lucide-react';

// Sourdough products database
const sourdoughDatabase = {
  "classic-sourdough": {
    id: "classic-sourdough",
    name: "Classic Sourdough",
    category: "Artisan Bread",
    availability: "Tuesday & Friday",
    availableDays: [2, 5], // Tuesday, Friday
    timeSlots: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"],
    description: `Experience the timeless simplicity of our Classic Sourdough Bread, crafted with just four essential ingredients: flour, water, salt, and a natural sourdough starter. Each loaf is fermented to perfection, offering a delightfully tangy flavor, airy crumb, and a crisp, golden crust.

This artisan bread is perfect for everything from sandwiches to toasts or simply enjoyed on its own. Made with care and no artificial additives, it's a wholesome addition to any meal.`,
    features: [
      "Made with only natural ingredients",
      "Naturally fermented for enhanced digestibility",
      "Free from artificial additives",
      "Versatile for everyday meals",
      "Handmade with traditional methods"
    ],
    images: [
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119022/pexels-catscoming-1571073_les0sm.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119037/pexels-monserratsoldu-600620_h1jf6d.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119069/pexels-ivan-j-long-578165-1387070_nxpakk.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119063/pexels-marta-dzedyshko-1042863-2067430_lrq4ya.jpg",
    ],
    sizes: [
      { 
        name: "Small", 
        priceWhole: 8.00, 
        priceSliced: 8.50,
        weight: "400g"
      },
      { 
        name: "Medium", 
        priceWhole: 12.00, 
        priceSliced: 12.50,
        weight: "700g"
      },
      { 
        name: "Large", 
        priceWhole: 15.00, 
        priceSliced: 15.50,
        weight: "1kg"
      },
    ]
  },
  "whole-wheat-sourdough": {
    id: "whole-wheat-sourdough",
    name: "Whole Wheat Sourdough",
    category: "Artisan Bread",
    availability: "Tuesday & Friday",
    availableDays: [2, 5],
    timeSlots: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"],
    description: `Hearty whole wheat sourdough made with stone-ground whole wheat flour. Rich in fiber and nutrients, this bread offers a nutty, wholesome flavor with the classic sourdough tang. Perfect for those seeking a healthier bread option without compromising on taste.`,
    features: [
      "100% whole wheat flour",
      "High in fiber and nutrients",
      "Naturally fermented",
      "Nutty, wholesome flavor",
      "No refined flour"
    ],
    images: [
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119022/pexels-catscoming-1571073_les0sm.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119037/pexels-monserratsoldu-600620_h1jf6d.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119069/pexels-ivan-j-long-578165-1387070_nxpakk.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119063/pexels-marta-dzedyshko-1042863-2067430_lrq4ya.jpg",
    ],
    sizes: [
      { name: "Small", priceWhole: 9.00, priceSliced: 9.50, weight: "400g" },
      { name: "Medium", priceWhole: 13.00, priceSliced: 13.50, weight: "700g" },
      { name: "Large", priceWhole: 16.00, priceSliced: 16.50, weight: "1kg" },
    ]
  },
  "rye-sourdough": {
    id: "rye-sourdough",
    name: "Rye Sourdough",
    category: "Artisan Bread",
    availability: "Tuesday & Friday",
    availableDays: [2, 5],
    timeSlots: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"],
    description: `Traditional rye sourdough with a deep, earthy flavor. Made with a blend of rye and wheat flour, this bread has a dense crumb and distinctive taste. Perfect for hearty sandwiches and pairs beautifully with cheese and cured meats.`,
    features: [
      "Traditional rye recipe",
      "Deep, earthy flavor",
      "Dense, satisfying crumb",
      "Perfect for sandwiches",
      "Long fermentation process"
    ],
    images: [
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119022/pexels-catscoming-1571073_les0sm.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119037/pexels-monserratsoldu-600620_h1jf6d.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119069/pexels-ivan-j-long-578165-1387070_nxpakk.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119063/pexels-marta-dzedyshko-1042863-2067430_lrq4ya.jpg",
    ],
    sizes: [
      { name: "Small", priceWhole: 9.50, priceSliced: 10.00, weight: "400g" },
      { name: "Medium", priceWhole: 13.50, priceSliced: 14.00, weight: "700g" },
      { name: "Large", priceWhole: 16.50, priceSliced: 17.00, weight: "1kg" },
    ]
  },
  "multigrain-sourdough": {
    id: "multigrain-sourdough",
    name: "Multigrain Sourdough",
    category: "Artisan Bread",
    availability: "Tuesday & Friday",
    availableDays: [2, 5],
    timeSlots: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"],
    description: `Packed with seeds and grains including sunflower, pumpkin, sesame, and flax. This nutritious sourdough offers a delightful crunch and nutty flavor. Every slice is loaded with wholesome goodness and makes for a satisfying, healthy choice.`,
    features: [
      "Loaded with seeds and grains",
      "Crunchy texture",
      "Nutty, complex flavor",
      "High in nutrients",
      "Great for toasting"
    ],
    images: [
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119022/pexels-catscoming-1571073_les0sm.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119037/pexels-monserratsoldu-600620_h1jf6d.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119069/pexels-ivan-j-long-578165-1387070_nxpakk.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119063/pexels-marta-dzedyshko-1042863-2067430_lrq4ya.jpg",
    ],
    sizes: [
      { name: "Small", priceWhole: 10.00, priceSliced: 10.50, weight: "400g" },
      { name: "Medium", priceWhole: 14.00, priceSliced: 14.50, weight: "700g" },
      { name: "Large", priceWhole: 17.00, priceSliced: 17.50, weight: "1kg" },
    ]
  },
  "seeded-sourdough": {
    id: "seeded-sourdough",
    name: "Seeded Sourdough",
    category: "Artisan Bread",
    availability: "Tuesday & Friday",
    availableDays: [2, 5],
    timeSlots: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"],
    description: `Loaded with sunflower, pumpkin, and sesame seeds for a delightful crunch. This nutritious sourdough features a crunchy, golden crust and soft, flavorful interior. Every slice delivers wholesome goodness and satisfying texture.

Perfect for those seeking extra nutrition and flavor. The seeds add healthy fats, protein, and a wonderful nutty taste that pairs beautifully with both sweet and savory toppings.`,
    features: [
      "Loaded with sunflower, pumpkin & sesame seeds",
      "Crunchy golden crust",
      "Soft, flavorful interior",
      "High in healthy fats and protein",
      "Perfect for toasting"
    ],
    images: [
       "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119022/pexels-catscoming-1571073_les0sm.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119037/pexels-monserratsoldu-600620_h1jf6d.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119069/pexels-ivan-j-long-578165-1387070_nxpakk.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119063/pexels-marta-dzedyshko-1042863-2067430_lrq4ya.jpg",
    ],
    sizes: [
      { name: "Small", priceWhole: 11.00, priceSliced: 11.50, weight: "400g" },
      { name: "Medium", priceWhole: 15.00, priceSliced: 15.50, weight: "700g" },
      { name: "Large", priceWhole: 18.00, priceSliced: 18.50, weight: "1kg" },
    ]
  },
};

export default function SourdoughProductDetail({ params }) {
  const { slug } = use(params);
  const dispatch = useDispatch();
  
  const product = sourdoughDatabase[slug];

  if (!product) {
    notFound();
  }

  const [selectedSize, setSelectedSize] = useState(product.sizes[0].name);
  const [selectedOption, setSelectedOption] = useState("Whole");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTime, setSelectedTime] = useState(product.timeSlots[0]);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);

  // Calculate availability
  const availabilityInfo = useMemo(() => {
    const today = new Date();
    const currentDay = today.getDay();
    
    const isAvailableToday = product.availableDays.includes(currentDay);
    
    let nextAvailableDate = null;
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    if (!isAvailableToday) {
      for (let i = 1; i <= 7; i++) {
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + i);
        const futureDay = futureDate.getDay();
        
        if (product.availableDays.includes(futureDay)) {
          nextAvailableDate = futureDate;
          break;
        }
      }
    }
    
    return {
      isAvailableToday,
      nextAvailableDate,
      currentDayName: dayNames[currentDay],
    };
  }, [product.availableDays]);

// Related products
const relatedProducts = [
  {
    id: "whole-wheat-sourdough",
    name: "Whole Wheat Sourdough",
    price: 13.00,
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119063/pexels-marta-dzedyshko-1042863-2067430_lrq4ya.jpg",
  },
  {
    id: "rye-sourdough",
    name: "Rye Sourdough",
    price: 13.50,
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119050/pexels-renestrgar-33240983_miehfs.jpg",
  },
  {
    id: "multigrain-sourdough",
    name: "Multigrain Sourdough",
    price: 14.00,
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119037/pexels-monserratsoldu-600620_h1jf6d.jpg",
  },
  {
    id: "seeded-sourdough",
    name: "Seeded Sourdough",
    price: 11.00,
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119022/pexels-catscoming-1571073_les0sm.jpg",
  },
].filter(p => p.id !== slug);

  const getCurrentPrice = () => {
    const size = product.sizes.find(s => s.name === selectedSize);
    if (!size) return 0;
    return selectedOption === "Whole" ? size.priceWhole : size.priceSliced;
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const deliveryDate = availabilityInfo.isAvailableToday 
      ? new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      : availabilityInfo.nextAvailableDate?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const size = product.sizes.find(s => s.name === selectedSize);

    const cartItem = {
      id: `${product.id}-${selectedSize.toLowerCase()}-${selectedOption.toLowerCase()}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      variant: `${selectedSize} - ${selectedOption} (${size.weight})`,
      price: getCurrentPrice(),
      quantity: quantity,
      image: product.images[0],
      category: product.category,
      deliveryDate: deliveryDate,
      pickupTime: selectedTime,
      isPreOrder: !availabilityInfo.isAvailableToday,
    };

    dispatch(addToCart(cartItem));
    
    const message = availabilityInfo.isAvailableToday
      ? `Added ${quantity} x ${selectedSize} ${selectedOption} to cart for today at ${selectedTime}!`
      : `Pre-ordered ${quantity} x ${selectedSize} ${selectedOption} for ${deliveryDate} at ${selectedTime}!`;

    toast.success(message, {
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

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  return (
    <>
      {/* Banner */}
      <div className="relative flex min-h-[60vh] items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119022/pexels-catscoming-1571073_les0sm.jpg')",
          }}
        />
          {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Top gradient fade */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <main className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            {product.name}
          </h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-white/90">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/dining" className="hover:text-white transition">Dining</Link>
            <span>/</span>
            <Link href="/dining/saltys-cafe" className="hover:text-white transition">Salty's Café</Link>
            <span>/</span>
            <Link href="/dining/saltys-cafe/sourdough" className="hover:text-white transition">Sourdough</Link>
            <span>/</span>
            <span className="text-white font-semibold">{product.name}</span>
          </div>
        </main>
      </div>

      {/* Product Detail Section */}
      <section className="py-12 px-6 sm:px-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* LEFT - Images (STICKY) */}
            <div>
              <div className="sticky top-32 lg:top-24">
                <div className="space-y-4">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={product.images[selectedImage]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.map((image, index) => (
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
                          alt={`${product.name} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Product Info (SCROLLABLE) */}
            <div className="space-y-6">
              {/* Title */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600">
                  {product.availability}
                </p>
              </div>

              {/* Availability Status */}
              <div className={`p-4 rounded-xl border-2 ${
                availabilityInfo.isAvailableToday 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-orange-50 border-orange-200'
              }`}>
                {availabilityInfo.isAvailableToday ? (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-green-900">Available Today</span>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-orange-900">Not available today</span>
                    </div>
                    {availabilityInfo.nextAvailableDate && (
                      <p className="text-sm text-orange-800">
                        📅 Pre-order for: <span className="font-semibold">{formatDate(availabilityInfo.nextAvailableDate)}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="border-t border-b border-gray-200 py-4">
                <p className="text-3xl font-bold text-gray-900">
                  ${getCurrentPrice().toFixed(2)} AUD
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {selectedSize} - {selectedOption} ({product.sizes.find(s => s.name === selectedSize)?.weight})
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Choose Size
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      className={`px-4 py-2 rounded-full border-2 font-medium transition-all ${
                        selectedSize === size.name
                          ? 'bg-gray-900 text-white border-gray-900'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
                      }`}
                    >
                      {size.name} ({size.weight})
                    </button>
                  ))}
                </div>
              </div>

              {/* Whole/Sliced Options */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Bread Option
                </h3>
                <div className="flex gap-3">
                  <label className="flex-1 flex items-center justify-center cursor-pointer border-2 rounded-xl py-3 transition-all hover:border-gray-400 has-[:checked]:bg-gray-900 has-[:checked]:text-white has-[:checked]:border-gray-900">
                    <input
                      type="radio"
                      name="breadOption"
                      value="Whole"
                      checked={selectedOption === "Whole"}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="sr-only"
                    />
                    <span className="font-medium">Whole Loaf</span>
                  </label>

                  <label className="flex-1 flex items-center justify-center cursor-pointer border-2 rounded-xl py-3 transition-all hover:border-gray-400 has-[:checked]:bg-gray-900 has-[:checked]:text-white has-[:checked]:border-gray-900">
                    <input
                      type="radio"
                      name="breadOption"
                      value="Sliced"
                      checked={selectedOption === "Sliced"}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="sr-only"
                    />
                    <span className="font-medium">Sliced (+$0.50)</span>
                  </label>
                </div>
              </div>

              {/* Pickup Time */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Select Pickup Time
                </h3>
                <div className="relative">
                  <button
                    onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white cursor-pointer flex items-center justify-between"
                  >
                    <span>{selectedTime}</span>
                    <ChevronDown className={`h-5 w-5 text-gray-700 transition-transform ${isTimeDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isTimeDropdownOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                      {product.timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => {
                            setSelectedTime(time);
                            setIsTimeDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition ${
                            selectedTime === time ? 'bg-gray-100 font-semibold' : ''
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Quantity
                </h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 transition"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition"
              >
                {availabilityInfo.isAvailableToday 
                  ? `Add to Cart - $${(getCurrentPrice() * quantity).toFixed(2)} AUD`
                  : `Pre-order for ${formatDate(availabilityInfo.nextAvailableDate)} - $${(getCurrentPrice() * quantity).toFixed(2)} AUD`
                }
              </button>

              {/* Pickup Information */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg 
                      className="w-5 h-5 text-green-600" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      Pickup available at <span className="font-semibold">Saltys International Airport - Café, Bakery & Pizzeria</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      📅 Availability: {product.availability} (6:00 AM - 2:00 PM)
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      Freshly baked on plane days
                    </p>
                    <Link 
                      href="/dining/saltys-cafe" 
                      className="text-sm text-gray-900 underline hover:text-gray-700 transition"
                    >
                      View store information
                    </Link>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  About This Sourdough
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 px-6 sm:px-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            You May Also Like
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/dining/saltys-cafe/sourdough/${relatedProduct.id}`}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-gray-900 font-semibold">
                    From ${relatedProduct.price.toFixed(2)} AUD
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}