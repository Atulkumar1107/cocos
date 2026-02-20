"use client";

import Image from "next/image";
import Link from "next/link";

export default function CoconutThursday() {
  const menuData = {
    starters: [
      {
        id: 1,
        name: "Sourdough Garlic Bread (2)",
        description: "Local sourdough + Italian herbs",
        price: 12.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119022/pexels-catscoming-1571073_les0sm.jpg",
      },
      {
        id: 2,
        name: "Malay Satay Chicken (2)",
        description: "Locally made with a peanut sauce",
        price: 14.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119758/pexels-shameel-mukkath-3421394-5638539_tsajab.jpg",
      },
      {
        id: 3,
        name: "Wahoo Bites (4)",
        description: "Mini wahoo in panko + chilli sauce",
        price: 14.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119670/pexels-shameel-mukkath-3421394-17321103_pvlwqg.jpg",
      },
      {
        id: 4,
        name: "Beer Batter Prawns (3)",
        description: "Coconut crusted + sweet chilli",
        price: 18.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446885/pexels-nadin-sh-78971847-16064372_gty5lc.jpg",
      },
    ],
    mains: [
      {
        id: 5,
        name: "Veg Malay Laksa",
        description:
          "Mild Malay spices with coconut, zucchini, capsicum + spinach on a bed of activated carbon noodles",
        price: 34.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446784/pexels-lorete-m-511517246-30974577_y8zyvq.jpg",
      },
      {
        id: 6,
        name: "Coral Trout Laksa",
        description:
          "Mild Malay spices with coconut, zucchini, capsicum + spinach on a bed of activated carbon noodles",
        price: 36.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446835/pexels-marina-zasorina-9419207_fnuim3.jpg",
      },
      {
        id: 7,
        name: "Coral Trout Fillet",
        description:
          "Oven baked trout + coconut, ginger, lime + tumeric sauce on a bed of coconut rice + quinoa side salad",
        price: 38.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119758/pexels-shameel-mukkath-3421394-5638539_tsajab.jpg",
      },
      {
        id: 8,
        name: "Malay Chicken Rendang",
        description:
          "Slow cooked Malay rendang, medium spices, desiccated coconut, lemongrass + tumeric on coconut rice",
        price: 38.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763119515/pexels-carlosdamian-7800142_kom6gz.jpg",
      },
    ],
    desserts: [
      {
        id: 9,
        name: "Coconut Ice Cream",
        description:
          "Select from a range of flavours; pure, lychee, passionfruit, cocoa and date, caramel or lime",
        price: 14.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447082/pexels-ph-m-thanh-d-t-1295528-6481252_qepghe.jpg",
      },
      {
        id: 10,
        name: "Malay Coconut Crepe",
        description: "With vanilla ice cream",
        price: 14.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447039/pexels-goumbik-1352269_f30mrk.jpg",
      },
      {
        id: 11,
        name: "Sticky Date Pudding",
        description: "Locally made + vanilla ice cream",
        price: 16.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447152/pexels-pixabay-302468_v3dvod.jpg",
      },
      {
        id: 12,
        name: "Affogato",
        description: "Espresso + Frangelico + ice cream",
        price: 20.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447243/pexels-christopher-spence-2153855819-32937255_yntbwx.jpg",
      },
    ],
  };

  const MenuSection = ({ title, items }) => (
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
                <span className="text-xl font-bold text-gray-900 whitespace-nowrap">
                  ${item.price.toFixed(2)}
                </span>
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
            backgroundImage:
              "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762838957/pexels-alexeydemidov-11821214_ydc6so.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Top gradient fade */}
        <div
          className="absolute top-0 left-0 right-0 h-32 z-[5]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        {/* Hero Content */}
        <main className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Thursday Coconut Night
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-sm text-white/90 mt-8">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/dining" className="hover:text-white transition">
              Dining
            </Link>
            <span>/</span>
            <Link
              href="/dining/saffron-sunset-surf"
              className="hover:text-white transition"
            >
              Surfer Girl
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Coconut Thursday</span>
          </div>
        </main>
      </div>

      {/* Menu Section */}
      <section
        className="py-20 px-6 sm:px-16"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea",
        }}
      >
        <div className="mx-auto max-w-5xl">
          {/* Starters */}
          <MenuSection title="STARTERS" items={menuData.starters} />

          {/* Mains */}
          <MenuSection title="MAINS" items={menuData.mains} />

          {/* Desserts */}
          <MenuSection title="DESSERTS" items={menuData.desserts} />
        </div>
      </section>
    </>
  );
}
