"use client";

import Image from "next/image";
import Link from "next/link";

export default function BrunchSundayMorning() {
  const menuData = {
    croissants: [
      {
        id: 1,
        name: "Plain Croissant",
        description: "Freshly baked buttery croissant",
        price: 7.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447204/pexels-anete-lusina-29721408_r8m4c4.jpg"
      },
      {
        id: 2,
        name: "Cheese Only",
        description: "Croissant filled with melted cheese",
        price: 9.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447152/pexels-pixabay-302468_v3dvod.jpg"
      },
      {
        id: 3,
        name: "Tomato and Cheese",
        description: "Croissant with fresh tomato and cheese",
        price: 10.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447039/pexels-goumbik-1352269_f30mrk.jpg"
      },
      {
        id: 4,
        name: "Ham, Tomato & Cheese",
        description: "Croissant with ham, tomato and cheese",
        price: 12.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446947/pexels-dacapture-20258784_htu3wc.jpg"
      }
    ],
    toasties: [
      {
        id: 5,
        name: "Cheese Only",
        description: "Sourdough toastie or open with cheese",
        price: 12.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447082/pexels-ph-m-thanh-d-t-1295528-6481252_qepghe.jpg"
      },
      {
        id: 6,
        name: "Tomato & Cheese",
        description: "Sourdough toastie or open with tomato & cheese",
        price: 14.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446986/pexels-benjamin-2131865-4764588_zgozrb.jpg"
      },
      {
        id: 7,
        name: "Egg, Tomato & Cheese",
        description: "Sourdough toastie or open with egg, tomato & cheese",
        price: 16.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446784/pexels-lorete-m-511517246-30974577_y8zyvq.jpg"
      },
      {
        id: 8,
        name: "Ham, Tomato & Cheese",
        description: "Sourdough toastie or open with ham, tomato & cheese",
        price: 16.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446885/pexels-nadin-sh-78971847-16064372_gty5lc.jpg"
      },
      {
        id: 9,
        name: "Bacon, Tomato, Egg & Cheese",
        description: "Sourdough toastie or open with bacon, tomato, egg & cheese",
        price: 19.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446835/pexels-marina-zasorina-9419207_fnuim3.jpg"
      },
      {
        id: 10,
        name: "Avo, Spinach, Tomato & Cheese",
        description: "Sourdough toastie or open with avo, spinach, tomato & cheese",
        price: 18.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119758/pexels-shameel-mukkath-3421394-5638539_tsajab.jpg"
      }
    ],
    breakfast: [
      {
        id: 11,
        name: "Bacon & Eggs on Sourdough",
        description: "Fried or scrambled with a side salad and tomato relish",
        price: 22.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119683/pexels-makafood-82669418-9348477_gczubh.jpg"
      },
      {
        id: 12,
        name: "Smashed Avo on Sourdough",
        description: "Avo, baby spinach, cherry tomatoes on sourdough toast and drizzled with extra virgin olive oil and a balsamic glaze",
        price: 22.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119670/pexels-shameel-mukkath-3421394-17321103_pvlwqg.jpg"
      },
      {
        id: 13,
        name: "Mushroom & Avo on Sourdough",
        description: "Sautéed mushrooms with smashed avocado, cherry toms & salad",
        price: 24.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119069/pexels-ivan-j-long-578165-1387070_nxpakk.jpg"
      },
      {
        id: 14,
        name: "Big Breakfast",
        description: "Fried or scrambled eggs on sourdough, with bacon, mushrooms, avo, side salad and tomato relish",
        price: 32.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119063/pexels-marta-dzedyshko-1042863-2067430_lrq4ya.jpg"
      }
    ],
    drinks: [
      {
        id: 15,
        name: "Real Fruit Smoothie",
        description: "Mixed berries + banana + milk of your choice",
        price: 0.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119050/pexels-renestrgar-33240983_miehfs.jpg"
      },
      {
        id: 16,
        name: "Iced Latte",
        description: "Cows milk or (+$1 soy, almond, oat) + ice",
        price: 0.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118650/pexels-annija-mieze-427042079-15197931_i4qlk3.jpg"
      },
      {
        id: 17,
        name: "Iced Coffee",
        description: "Cows milk or (+$1 soy, almond, oat) + vanilla ice cream",
        price: 0.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118110/pexels-marta-dzedyshko-1042863-2775827_dhsyqk.jpg"
      },
      {
        id: 18,
        name: "Milkshakes",
        description: "Spearmint blitz, caramel deluxe, big banana wicked vanilla, strawberry kiss, chocolate royale, blueberry thrill",
        price: 0.00,
        image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763118063/pexels-athena-2180877_whjba9.jpg"
      }
    ]
  };

  const MenuSection = ({ title, items, showPrice = true }) => (
    <div className="mb-16">
      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="w-24 h-1 bg-gray-900 rounded-full"></div>
      </div>

      {/* Menu Items */}
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="flex gap-6 items-start">
            {/* Left - Rounded Image */}
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right - Name, Description, Price */}
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="text-xl font-bold text-gray-900 flex-1">
                  {item.name}
                </h3>
                {showPrice && item.price > 0 && (
                  <span className="text-xl font-bold text-gray-900 whitespace-nowrap">
                    ${item.price.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-[60vh] items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447559/pexels-burcu-bircan-680818596-30827426_bx1zlu.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Top gradient fade */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)'
          }}
        />

        {/* Hero Content */}
        <main className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Brunch Sunday Morning
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-sm text-white/90 mt-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/dining" className="hover:text-white transition">Dining</Link>
            <span>/</span>
            <Link href="/dining/surfer-girl-restaurant-brewery" className="hover:text-white transition">Surfer Girl</Link>
            <span>/</span>
            <span className="text-white font-semibold">Brunch Sunday Morning</span>
          </div>
        </main>
      </div>

      {/* Menu Section */}
      <section 
        className="py-20 px-6 sm:px-16"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea"
        }}
      >
        <div className="mx-auto max-w-5xl">
          {/* Croissants */}
          <MenuSection title="CROISSANTS" items={menuData.croissants} />

          {/* Sourdough Toasties */}
          <MenuSection title="SOURDOUGH TOASTIES or OPEN" items={menuData.toasties} />

          {/* Breakfast Dishes */}
          <MenuSection title="BREAKFAST DISHES" items={menuData.breakfast} />

          {/* Extra Serves Note */}
          <div className="mb-16 p-6 bg-white/80 rounded-2xl border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Extra Serves / Add Ons</h3>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">$3.00 each:</span> Bacon, Egg, Mushrooms, Avo, Hash Brown
            </p>
          </div>

          {/* Cold Drinks */}
          <MenuSection title="COLD DRINKS, SMOOTHIES & MILKSHAKES" items={menuData.drinks} showPrice={false} />
        </div>
      </section>
    </>
  );
}