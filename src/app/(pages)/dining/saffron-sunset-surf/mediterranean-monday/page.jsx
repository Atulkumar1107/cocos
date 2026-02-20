"use client";

import Image from "next/image";
import Link from "next/link";

export default function MediterraneanMonday() {
  const menuData = {
    starters: [
      {
        id: 1,
        name: "Sourdough Cheese, Olive & Garlic Bread",
        description:
          "Salty's sourdough with Italian herbs & local sea salt flakes",
        price: 12.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446784/pexels-lorete-m-511517246-30974577_y8zyvq.jpg",
      },
      {
        id: 2,
        name: "Focaccia",
        description: "Locally made with olives & cherry toms",
        price: 12.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446835/pexels-marina-zasorina-9419207_fnuim3.jpg",
      },
      {
        id: 3,
        name: "Beer Batter Prawns",
        description: "Prawns (3) battered with coconut & a sweet chilli dip",
        price: 19.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446885/pexels-nadin-sh-78971847-16064372_gty5lc.jpg",
      },
    ],
    mains: [
      {
        id: 4,
        name: "Broccolini Fettuccini",
        description:
          "Zucchini, spinach, onions on a bed of surfer girl pasta with a Mediterranean salad",
        price: 34.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446947/pexels-dacapture-20258784_htu3wc.jpg",
      },
      {
        id: 5,
        name: "Beef Lasagne",
        description:
          "Surfer girl made beef lasagne based on a traditional Italian recipe with a Mediterranean side salad",
        price: 38.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446986/pexels-benjamin-2131865-4764588_zgozrb.jpg",
      },
      {
        id: 6,
        name: "Steak w Prawns/Mushroom",
        description:
          "Grain fed Angus fillet with a garlic prawns or a pepper mushroom sauce on a bed of mashed potatoes and Mediterranean side salad",
        price: 48.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447039/pexels-goumbik-1352269_f30mrk.jpg",
      },
    ],
    desserts: [
      {
        id: 7,
        name: "Cocos Coconut Ice Cream",
        description:
          "Served in a coconut bowl - Tonight's options: Pure or Lime",
        price: 14.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447082/pexels-ph-m-thanh-d-t-1295528-6481252_qepghe.jpg",
      },
      {
        id: 8,
        name: "Cocos Sticky Date Pudding",
        description: "Locally made + vanilla ice cream",
        price: 16.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447152/pexels-pixabay-302468_v3dvod.jpg",
      },
      {
        id: 9,
        name: "Cocos Tiramisu",
        description:
          "A locally made traditional Italian dessert - Mascarpone, eggs, coffee, biscuits & time",
        price: 18.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447204/pexels-anete-lusina-29721408_r8m4c4.jpg",
      },
      {
        id: 10,
        name: "Affogato",
        description:
          "Go on treat yourself after dessert on your last night in paradise - You deserve it! Espresso, Frangelica or Baileys liqueur, ice cream & garnished with desiccated coconut",
        price: 19.0,
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
              "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446702/pexels-robimsel-34762311_btyicb.jpg')",
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
            Monday Mediterranean
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
            <span className="text-white font-semibold">
              Mediterranean Monday
            </span>
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
