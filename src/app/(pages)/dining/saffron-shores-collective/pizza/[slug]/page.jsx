"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, use, useMemo } from "react";
import { notFound } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/redux/slices/cartSlice";
import toast from "react-hot-toast";
import { ChevronDown } from "lucide-react";

// Pizza products database with availability
const pizzaDatabase = {
  "monday-pizza-night": {
    id: "monday-pizza-night",
    name: "Monday Pizza & Malay Night",
    basePrice: 23.0,
    category: "Pizza Night",
    time: "2pm - 7pm",
    availability: "Every Monday",
    availableDays: [1], // 0=Sunday, 1=Monday, 2=Tuesday, etc.
    timeSlots: [
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
      "6:00 PM",
      "7:00 PM",
    ],
    description: `Made with our signature dough and fresh local ingredients, each pizza is stone-fired to perfection. Choose your favorite topping and enjoy a delicious meal under the stars or takeaway.

Perfect for families, groups, or a casual dinner with friends. Pre-order recommended to avoid wait times during peak hours.`,
    features: [
      "Stone-fired to perfection",
      "Fresh local ingredients",
      "Dine-in or takeaway available",
      "Pre-order recommended",
      "Vegetarian options available",
    ],
    images: [
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118053/pexels-pablo-macedo-287472-845811_wtn4bt.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118019/pexels-renestrgar-32872507_asbbet.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118063/pexels-athena-2180877_whjba9.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118650/pexels-annija-mieze-427042079-15197931_i4qlk3.jpg",
    ],
    variants: [
      { name: "Satay Chicken", price: 23.0 },
      { name: "BBQ Chicken", price: 23.0 },
      { name: "Mince Beef", price: 25.0 },
      { name: "Cheese Lovers", price: 23.0 },
      { name: "Lamb and Feta", price: 26.0 },
      { name: "Pumpkin", price: 23.0 },
      { name: "Vegetarian", price: 23.0 },
      { name: "Tandoori Lamb", price: 26.0 },
      { name: "Supreme", price: 25.0 },
      { name: "Pepperoni", price: 24.0 },
      { name: "Hawaiian", price: 23.0 },
      { name: "Margherita", price: 22.0 },
    ],
  },
  "friday-lunch-pizza": {
    id: "friday-lunch-pizza",
    name: "Friday Lunch/Inflight Pizza",
    basePrice: 23.0,
    category: "Lunch Special",
    time: "12pm - 2pm",
    availability: "Every Friday",
    availableDays: [5], // Friday
    timeSlots: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM"],
    description: `Quick and delicious lunch option perfect for travelers. Our Friday lunch pizzas are made fresh and can be enjoyed at our outdoor seating or taken to go for your flight.`,
    features: [
      "Quick service",
      "Perfect for travelers",
      "Takeaway packaging available",
      "Fresh ingredients",
    ],
    images: [
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118053/pexels-pablo-macedo-287472-845811_wtn4bt.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118019/pexels-renestrgar-32872507_asbbet.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118063/pexels-athena-2180877_whjba9.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118650/pexels-annija-mieze-427042079-15197931_i4qlk3.jpg",
    ],
    variants: [
      { name: "Margherita", price: 22.0 },
      { name: "Pepperoni", price: 23.0 },
      { name: "Vegetarian", price: 23.0 },
      { name: "Hawaiian", price: 23.0 },
      { name: "BBQ Chicken", price: 24.0 },
    ],
  },
  "saturday-pizza-night": {
    id: "saturday-pizza-night",
    name: "Saturday Pizza Night",
    basePrice: 23.0,
    category: "Pizza Night",
    time: "5pm - 8pm",
    availability: "Every Saturday",
    availableDays: [6], // Saturday
    timeSlots: [
      "5:00 PM",
      "5:30 PM",
      "6:00 PM",
      "6:30 PM",
      "7:00 PM",
      "7:30 PM",
      "8:00 PM",
    ],
    description: `Weekend special! Enjoy our stone-fired pizzas in our courtyard under the stars. Perfect for date night or family gathering.`,
    features: [
      "Weekend special",
      "Courtyard dining",
      "Family-friendly",
      "Stone-fired perfection",
    ],
    images: [
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118053/pexels-pablo-macedo-287472-845811_wtn4bt.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118019/pexels-renestrgar-32872507_asbbet.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118063/pexels-athena-2180877_whjba9.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118650/pexels-annija-mieze-427042079-15197931_i4qlk3.jpg",
    ],
    variants: [
      { name: "Supreme", price: 25.0 },
      { name: "BBQ Chicken", price: 23.0 },
      { name: "Pepperoni", price: 24.0 },
      { name: "Vegetarian", price: 23.0 },
      { name: "Margherita", price: 22.0 },
    ],
  },
  "sunday-pizza-night": {
    id: "sunday-pizza-night",
    name: "Sunday Pizza Night",
    basePrice: 23.0,
    category: "Pizza Night",
    time: "5pm - 8pm",
    availability: "Every Sunday",
    availableDays: [0], // Sunday
    timeSlots: [
      "5:00 PM",
      "5:30 PM",
      "6:00 PM",
      "6:30 PM",
      "7:00 PM",
      "7:30 PM",
      "8:00 PM",
    ],
    description: `End your weekend with our delicious stone-fired pizzas. Relax and enjoy quality time with family and friends.`,
    features: [
      "Sunday special",
      "Perfect weekend ending",
      "Family portions available",
      "Relaxed atmosphere",
    ],
    images: [
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118053/pexels-pablo-macedo-287472-845811_wtn4bt.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118019/pexels-renestrgar-32872507_asbbet.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118063/pexels-athena-2180877_whjba9.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118650/pexels-annija-mieze-427042079-15197931_i4qlk3.jpg",
    ],
    variants: [
      { name: "Margherita", price: 22.0 },
      { name: "Hawaiian", price: 23.0 },
      { name: "Pepperoni", price: 24.0 },
      { name: "BBQ Chicken", price: 23.0 },
      { name: "Supreme", price: 25.0 },
    ],
  },
  "kids-pizza": {
    id: "kids-pizza",
    name: "Kids Pizza",
    basePrice: 8.0,
    category: "Kids Menu",
    time: "During all pizza nights",
    availability: "Saturday, Monday & Friday",
    availableDays: [1, 5, 6], // Monday, Friday, Saturday
    timeSlots: ["12:00 PM", "2:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"],
    description: `Perfect size for children with simple, tasty toppings they'll love. Made with the same quality ingredients as our regular pizzas.`,
    features: [
      "Kid-friendly size",
      "Simple toppings",
      "Same quality ingredients",
      "Great value",
    ],
    images: [
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118469/pexels-laurin-diaz-768597919-19301007_zd0mwy.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118019/pexels-renestrgar-32872507_asbbet.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118063/pexels-athena-2180877_whjba9.jpg",
      "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118650/pexels-annija-mieze-427042079-15197931_i4qlk3.jpg",
    ],
    variants: [
      { name: "Cheese", price: 8.0 },
      { name: "Pepperoni", price: 8.0 },
      { name: "Hawaiian", price: 8.0 },
    ],
  },
};

export default function PizzaProductDetail({ params }) {
  const { slug } = use(params);
  const dispatch = useDispatch();

  const product = pizzaDatabase[slug];

  if (!product) {
    notFound();
  }

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0].name,
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTime, setSelectedTime] = useState(product.timeSlots[0]);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);

  // Calculate availability
  const availabilityInfo = useMemo(() => {
    const today = new Date();
    const currentDay = today.getDay();

    // Check if available today
    const isAvailableToday = product.availableDays.includes(currentDay);

    // Find next available day (within 7 days)
    let nextAvailableDate = null;
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

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

  // Related products (exclude current product)
  const relatedProducts = [
    {
      id: "friday-lunch-pizza",
      name: "Friday Lunch Pizza",
      price: 23.0,
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118293/pexels-yankrukov-5216394_idwpt0.jpg",
    },
    {
      id: "saturday-pizza-night",
      name: "Saturday Pizza Night",
      price: 23.0,
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118053/pexels-pablo-macedo-287472-845811_wtn4bt.jpg",
    },
    {
      id: "kids-pizza",
      name: "Kids Pizza",
      price: 8.0,
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118469/pexels-laurin-diaz-768597919-19301007_zd0mwy.jpg",
    },
    {
      id: "sunday-pizza-night",
      name: "Sunday Pizza Night",
      price: 23.0,
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118063/pexels-athena-2180877_whjba9.jpg",
    },
  ].filter((p) => p.id !== slug);

  const getCurrentPrice = () => {
    const variant = product.variants.find((v) => v.name === selectedVariant);
    return variant ? variant.price : product.basePrice;
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const deliveryDate = availabilityInfo.isAvailableToday
      ? new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : availabilityInfo.nextAvailableDate?.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });

    const cartItem = {
      id: `${product.id}-${selectedVariant.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      variant: selectedVariant,
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
      ? `Added ${quantity} x ${selectedVariant} to cart for today at ${selectedTime}!`
      : `Pre-ordered ${quantity} x ${selectedVariant} for ${deliveryDate} at ${selectedTime}!`;

    toast.success(message, {
      duration: 3000,
      style: {
        background: "#10b981",
        color: "#fff",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#10b981",
      },
    });

    setQuantity(1);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Pizza Banner with Breadcrumb */}
      <div className="relative flex min-h-[60vh] items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118650/pexels-annija-mieze-427042079-15197931_i4qlk3.jpg')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Top gradient fade */}
        <div
          className="absolute top-0 left-0 right-0 h-32 z-[5]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <main className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            {product.name}
          </h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-white/90">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/dining" className="hover:text-white transition">
              Dining
            </Link>
            <span>/</span>
            <Link
              href="/dining/saffron-shores-collective"
              className="hover:text-white transition"
            >
              Salty's Café
            </Link>
            <span>/</span>
            <Link
              href="/dining/saffron-shores-collective/pizza"
              className="hover:text-white transition"
            >
              Pizza
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">{product.name}</span>
          </div>
        </main>
      </div>

      {/* Product Detail Section */}
      <section className="py-12 px-6 sm:px-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT SIDE - Image Gallery (STICKY) */}
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
                            ? "border-gray-900"
                            : "border-gray-200 hover:border-gray-400"
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

            {/* RIGHT SIDE - Product Info (SCROLLABLE) */}
            <div className="space-y-6">
              {/* Product Title */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600">
                  {product.time} • {product.availability}
                </p>
              </div>

              {/* Availability Status */}
              <div
                className={`p-4 rounded-xl border-2 ${
                  availabilityInfo.isAvailableToday
                    ? "bg-green-50 border-green-200"
                    : "bg-orange-50 border-orange-200"
                }`}
              >
                {availabilityInfo.isAvailableToday ? (
                  <div className="flex items-center gap-2">
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
                    <span className="font-semibold text-green-900">
                      Available Today
                    </span>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg
                        className="w-5 h-5 text-orange-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-semibold text-orange-900">
                        Not available today
                      </span>
                    </div>
                    {availabilityInfo.nextAvailableDate && (
                      <p className="text-sm text-orange-800">
                        📅 Pre-order for:{" "}
                        <span className="font-semibold">
                          {formatDate(availabilityInfo.nextAvailableDate)}
                        </span>
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
                <p className="text-sm text-gray-600 mt-1">Price per pizza</p>
              </div>

              {/* Variant Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Choose Your Pizza
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setSelectedVariant(variant.name)}
                      className={`px-4 py-2 rounded-full border-2 font-medium transition-all ${
                        selectedVariant === variant.name
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pickup Time Selection - Custom Dropdown */}
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
                    <ChevronDown
                      className={`h-5 w-5 text-gray-700 transition-transform ${isTimeDropdownOpen ? "rotate-180" : ""}`}
                    />
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
                            selectedTime === time
                              ? "bg-gray-100 font-semibold"
                              : ""
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Quantity Selector */}
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

              {/* Add to Cart / Pre-order Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition"
              >
                {availabilityInfo.isAvailableToday
                  ? `Add to Cart - ${(getCurrentPrice() * quantity).toFixed(2)} AUD`
                  : `Pre-order for ${formatDate(availabilityInfo.nextAvailableDate)} - ${(getCurrentPrice() * quantity).toFixed(2)} AUD`}
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
                      Pickup available at{" "}
                      <span className="font-semibold">
                      Saffron Shores Collective
                      </span>
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      📅 Availability: {product.availability} ({product.time})
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      Usually ready in 1 hour
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

              {/* Product Description */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  About This Pizza Night
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

      {/* Related Products Section */}
      <section className="py-16 px-6 sm:px-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            You May Also Like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/dining/saffron-shores-collective/pizza/${relatedProduct.id}`}
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
