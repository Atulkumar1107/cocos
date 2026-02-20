"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "@/app/lib/redux/slices/cartSlice";
import toast from 'react-hot-toast';
import { ChevronDown } from 'lucide-react';

export default function FishAndChipsDetail() {
  const dispatch = useDispatch();
  
  // Product data
  const product = {
    id: "friday-fish-and-chips",
    name: "Friday Fish & Chips",
    category: "Seafood Special",
    availability: "Every Friday",
    availableDays: [5], // Friday
    timeSlots: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"],
    description: `Savor the taste of the freshest local fish, expertly prepared just the way you like it—choose between golden, crispy batter or perfectly grilled for a lighter option. Paired with crispy chips and complemented by optional extras like a fresh salad or calamari rings, this dish offers a delightful mix of textures and flavors.

Whether you're in the mood for a quick takeaway or a relaxing sit-down meal, our Fish & Chips is the ultimate comfort food. Perfect for seafood lovers and ideal for your next indulgent treat, this island favorite is sure to satisfy!`,
    features: [
      "Made with local fish, cooked to perfection",
      "Choice of battered or grilled preparation",
      "Served with golden, crispy chips",
      "Optional add-ons available",
      "Takeaway or dine-in"
    ],
    images: [
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119683/pexels-makafood-82669418-9348477_gczubh.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119670/pexels-shameel-mukkath-3421394-17321103_pvlwqg.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119515/pexels-carlosdamian-7800142_kom6gz.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119758/pexels-shameel-mukkath-3421394-5638539_tsajab.jpg",
    ],
    flavours: [
      { name: "Battered", price: 30.00 },
      { name: "Battered + Salad", price: 33.00 },
      { name: "Grilled", price: 30.00 },
      { name: "Grilled + Salad", price: 33.00 },
      { name: "2x Calamari Rings", price: 15.00 },
      { name: "Kids Fish and Chips", price: 12.00 },
    ]
  };

  const [selectedFlavour, setSelectedFlavour] = useState(product.flavours[0].name);
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

  const getCurrentPrice = () => {
    const flavour = product.flavours.find(f => f.name === selectedFlavour);
    return flavour ? flavour.price : product.flavours[0].price;
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const deliveryDate = availabilityInfo.isAvailableToday 
      ? new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      : availabilityInfo.nextAvailableDate?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const cartItem = {
      id: `${product.id}-${selectedFlavour.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      variant: selectedFlavour,
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
      ? `Added ${quantity} x ${selectedFlavour} to cart for today at ${selectedTime}!`
      : `Pre-ordered ${quantity} x ${selectedFlavour} for ${deliveryDate} at ${selectedTime}!`;

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
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119515/pexels-carlosdamian-7800142_kom6gz.jpg')",
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
          <h1 className="mb-6 text-5xl backdrop-blur-[2px] font-bold text-white sm:text-6xl lg:text-7xl">
            {product.name}
          </h1>
          <div className="flex items-center backdrop-blur-[2px] justify-center space-x-2 text-sm text-white/90">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/dining" className="hover:text-white transition">Dining</Link>
            <span>/</span>
            <Link href="/dining/saffron-shores-collective" className="hover:text-white transition">Salty's Café</Link>
            <span>/</span>
            <span className="text-white font-semibold">Fish & Chips</span>
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
                  5:00 PM - 7:00 PM • {product.availability}
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
                <p className="text-sm text-gray-600 mt-1">Price per serving</p>
              </div>

              {/* Flavours Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Choose Your Flavour
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.flavours.map((flavour) => (
                    <button
                      key={flavour.name}
                      onClick={() => setSelectedFlavour(flavour.name)}
                      className={`px-4 py-2 rounded-full border-2 font-medium transition-all ${
                        selectedFlavour === flavour.name
                          ? 'bg-gray-900 text-white border-gray-900'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
                      }`}
                    >
                      {flavour.name}
                    </button>
                  ))}
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
                      Pickup available at <span className="font-semibold">Saffron Shores Collective</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      📅 Availability: Every Friday (5:00 PM - 7:00 PM)
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      Freshly prepared with local fish
                    </p>
                    <Link 
                      href="/dining/saffron-shores-collective" 
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
                  About Friday Fish & Chips
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
    </>
  );
}