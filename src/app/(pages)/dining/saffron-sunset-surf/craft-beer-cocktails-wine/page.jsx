"use client";

import Image from "next/image";
import Link from "next/link";

export default function CraftBeerCocktailsWine() {
  const menuData = {
    cocktails: [
      {
        id: 1,
        name: "Cocos Pina Colada",
        description:
          "Malibu rum, pineapple juice, Saffron Shores Collective Wild Coconut cream from the coconut farm, and served in a coconut bowl with frangipani flowers",
        price: 24.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763448075/pexels-helenalopes-1796698_fufxpm.jpg",
      },
      {
        id: 2,
        name: "Botanist Rose Garden",
        description:
          "The Botanist Islay dry gin, rose syrup, lime juice, egg white garnished with lime from the Coconut Farm",
        price: 18.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447994/pexels-elevate-1269043_1_wb2kkm.jpg",
      },
      {
        id: 3,
        name: "Island Margarita",
        description:
          "Gold tequila, Cointreau, lime juice, pineapple juice with and Saffron Shores Collective Sea Salt on the rim",
        price: 18.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447957/pexels-vedanti-66315-250465_sggaxq.jpg",
      },
      {
        id: 4,
        name: "Espresso Martini",
        description:
          "Absolute vodka, Kahlua, a touch of Baileys with a fresh espresso shot",
        price: 18.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447954/pexels-thatguycraig000-1557686_qanoum.jpg",
      },
      {
        id: 5,
        name: "Coconut Mango Daquiri",
        description:
          "Saffron Shores Collective Wild Coconut hand-pressed coconut cream, mango, Bacardi and pineapple juice garnished with desiccated coconut",
        price: 18.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447957/pexels-vedanti-66315-250465_sggaxq.jpg",
      },
    ],
    craftBeer: [
      {
        id: 6,
        name: "Surfer Girl - Turks Reef Amber Ale",
        description: "6.5% ABV - Local craft beer on tap",
        price: 0.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447954/pexels-thatguycraig000-1557686_qanoum.jpg",
      },
      {
        id: 7,
        name: "Surfer Girl - The Shack Ginger Beer",
        description: "4.8% ABV - Local craft beer on tap",
        price: 0.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447969/pexels-bohlemedia-1089932_1_vqbgyf.jpg",
      },
      {
        id: 8,
        name: "Surfer Girl - The Ledge Lager",
        description: "4.8% ABV - Local craft beer on tap",
        price: 0.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447977/pexels-atomlaborblog-1718384_kzt4so.jpg",
      },
      {
        id: 9,
        name: "Surfer Girl - Buff Banded Ale",
        description: "6.2% ABV - Local craft beer on tap",
        price: 0.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447994/pexels-elevate-1269043_1_wb2kkm.jpg",
      },
      {
        id: 10,
        name: "Surfer Girl - Pear Cider",
        description: "4.2% ABV - Local craft cider on tap",
        price: 0.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763448075/pexels-helenalopes-1796698_fufxpm.jpg",
      },
    ],
    bottledBeer: [
      {
        id: 11,
        name: "Hop Hog Pale Ale",
        description: "5.8% ABV",
        price: 10.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447954/pexels-thatguycraig000-1557686_qanoum.jpg",
      },
      {
        id: 12,
        name: "Little Creatures - Rogers",
        description: "Premium bottled beer",
        price: 9.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447957/pexels-vedanti-66315-250465_sggaxq.jpg",
      },
      {
        id: 13,
        name: "Little Creatures - Pale Ale",
        description: "Premium bottled beer",
        price: 8.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447969/pexels-bohlemedia-1089932_1_vqbgyf.jpg",
      },
      {
        id: 14,
        name: "Corona",
        description: "Classic Mexican beer",
        price: 8.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447994/pexels-elevate-1269043_1_wb2kkm.jpg",
      },
      {
        id: 15,
        name: "Coopers Pale Ale",
        description: "Australian classic",
        price: 8.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763448075/pexels-helenalopes-1796698_fufxpm.jpg",
      },
      {
        id: 16,
        name: "Matso's Ginger Beer",
        description: "Australian craft ginger beer",
        price: 8.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447977/pexels-atomlaborblog-1718384_kzt4so.jpg",
      },
      {
        id: 17,
        name: "Great Northern - Super Crisp",
        description: "Light and refreshing",
        price: 8.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447957/pexels-vedanti-66315-250465_sggaxq.jpg",
      },
      {
        id: 18,
        name: "Hahn Superdry",
        description: "Low carb beer",
        price: 7.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763448075/pexels-helenalopes-1796698_fufxpm.jpg",
      },
      {
        id: 19,
        name: "Single Fin - Summer Ale",
        description: "Refreshing summer ale",
        price: 7.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447957/pexels-vedanti-66315-250465_sggaxq.jpg",
      },
      {
        id: 20,
        name: "Mountain Goat - Steam Ale",
        description: "Craft steam ale",
        price: 7.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447969/pexels-bohlemedia-1089932_1_vqbgyf.jpg",
      },
    ],
    wine: [
      {
        id: 21,
        name: "Grant Burge Brut Pinot Noir Chardonnay",
        description: "Sparkling wine",
        price: 48.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447954/pexels-thatguycraig000-1557686_qanoum.jpg",
      },
      {
        id: 22,
        name: "'22 Pikes Clare Vally Riesling (SA)",
        description: "White Wine",
        price: 45.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447957/pexels-vedanti-66315-250465_sggaxq.jpg",
      },
      {
        id: 23,
        name: "'23 Pepperjack Limestone Coast Sauv Blanc",
        description: "White Wine",
        price: 42.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447969/pexels-bohlemedia-1089932_1_vqbgyf.jpg",
      },
      {
        id: 24,
        name: "'22 Beyond The Wilderness Chardonnay (TAS)",
        description: "White Wine",
        price: 38.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447977/pexels-atomlaborblog-1718384_kzt4so.jpg",
      },
      {
        id: 25,
        name: "'21 Innocent Bystander Rose' (VIC)",
        description: "Rose Wine",
        price: 35.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447994/pexels-elevate-1269043_1_wb2kkm.jpg",
      },
      {
        id: 26,
        name: "'18 Yalumba Octavius Old Vine Shiraz (SA)",
        description: "Red Wine",
        price: 225.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763448075/pexels-helenalopes-1796698_fufxpm.jpg",
      },
      {
        id: 27,
        name: "'18 Penfolds St Henri Shiraz (SA)",
        description: "Red Wine",
        price: 195.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447977/pexels-atomlaborblog-1718384_kzt4so.jpg",
      },
      {
        id: 28,
        name: "'21 Pepperjack Barossa Shiraz (SA)",
        description: "Red Wine",
        price: 38.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447969/pexels-bohlemedia-1089932_1_vqbgyf.jpg",
      },
      {
        id: 29,
        name: "'21 Curtis Family Legion Shiraz (SA)",
        description: "Red Wine",
        price: 28.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447957/pexels-vedanti-66315-250465_sggaxq.jpg",
      },
      {
        id: 30,
        name: "'21 Taylors Shiraz (SA)",
        description: "Red Wine",
        price: 24.0,
        image:
          "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447969/pexels-bohlemedia-1089932_1_vqbgyf.jpg",
      },
    ],
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
            backgroundImage:
              "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763447824/pexels-pixabay-159291_nibpzt.jpg')",
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
            Craft Beer, Cocktails & Wine
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
            <span className="text-white font-semibold">Drinks Menu</span>
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
          {/* Restaurant Licensed Notice */}
          <div className="mb-12 p-6 bg-red-50 rounded-2xl border-2 border-red-200 text-center">
            <h3 className="text-2xl font-bold text-red-900 mb-2">
              Restaurant Licenced
            </h3>
            <p className="text-lg text-red-800">
              Alcohol must be ordered with a main meal
            </p>
          </div>

          {/* Signature Cocktails */}
          <MenuSection title="SIGNATURE COCKTAILS" items={menuData.cocktails} />

          {/* Local Craft Beer Story */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                LOCAL CRAFT BEER
              </h2>
              <div className="w-24 h-1 bg-gray-900 rounded-full mb-6"></div>

              {/* Brewery Story */}
              <div className="bg-white/80 p-8 rounded-2xl border-2 border-gray-200 mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Our Story:</strong> 'Surfer Girl' - a 34-foot yacht
                  sailed to Cocos in July of 2017 en-route to Tanzania. On
                  arrival, the English captain of Surfer Girl abruptly abandoned
                  ship and departed back to London, leaving the vessel with Tony
                  (the local sea salt maker, baker, brewer, coconut farmer and
                  wannabe romantic sailor) as the caretaker of the vessel.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Four months went past and Tony enjoyed sailing around the
                  atoll, camping parties and sunsets whilst moored in the
                  Direction Island lagoon. He had dreams of delivering Cocos sea
                  salt to Broome, then sailing her west to Madagascar. Those
                  dreams were ripped away along with the mooring when in 2021
                  cyclonic conditions hit Cocos. Surfer Girl was wrecked on the
                  rocks east of the rip at Direction Island. She was destroyed
                  and had to be removed, reluctantly body on site, removed and
                  burned with the help of the local community. In the hardship
                  of this event, Surfer Girl lives on in memory and name.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Inspired by sunset dinners, great beer, wine and food, Surfer
                  Girl Brewery and Restaurant was born. To make the most of the
                  good times; enjoying the natural paradise that is around us at
                  every moment. Her bow now rests in peace as an outdoor bar at
                  the restaurant and the keel resting in the waters East of the
                  Direction Island rip.
                </p>
                <p className="text-lg font-bold text-gray-900 mt-6">
                  On Tap from Easter 2024
                </p>
              </div>
            </div>

            {/* Craft Beer Items */}
            <div className="space-y-6">
              {menuData.craftBeer.map((item) => (
                <div key={item.id} className="flex gap-6 items-start">
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
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spirits Notice */}
          <div className="mb-12 p-6 bg-blue-50 rounded-2xl border-2 border-blue-200 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">SPIRITS</h3>
            <p className="text-lg text-blue-800">
              Enjoy your favourite spirit with soda, tonic, coke, dry ginger,
              lemonade or on the rocks
            </p>
            <p className="text-base text-blue-700 mt-2">$7 or $9 per serve</p>
            <p className="text-sm text-blue-600 mt-2">
              Gordon's Pink Gin, Bombay Gin, Bacardi, Ricard, Pernod, Amarula,
              Kahlua, Baileys, The Botanist Gin, Frangelico, Sailor Jerry,
              Makers Mark Whisky, Jose Cuervo Tequila, Cointreau, Ratu Spiced
              Rum
            </p>
          </div>

          {/* Bottled Beer & Cider */}
          <MenuSection
            title="BOTTLED BEER & CIDER"
            items={menuData.bottledBeer}
          />

          {/* Wine */}
          <MenuSection
            title="WINE (Sparkling, White, Rose & Red)"
            items={menuData.wine}
          />
        </div>
      </section>
    </>
  );
}
