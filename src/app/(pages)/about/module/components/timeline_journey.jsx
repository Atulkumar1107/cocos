"use client";

import Image from "next/image";

export default function ZigzagTimeline() {
const milestones = [
  {
    id: 1,
    year: "2015",
    title: "The First Gathering",
    content: "Saffron Sands Collective began as a small beachfront gathering of local chefs, surfers, and storytellers who shared a common vision — to create meaningful coastal experiences rooted in community. What started as sunset dinners and guided shoreline walks quickly grew into something larger than imagined.",
    image: "https://res.cloudinary.com/dwau5poqz/image/upload/v1771522531/pexels-nubikini-386000_lmixek.jpg",
    logo: "https://res.cloudinary.com/dwau5poqz/image/upload/v1771520475/ChatGPT_Image_Feb_19_2026_10_31_01_PM_dn7luk.png"
  },
  {
    id: 2,
    year: "2017",
    title: "Curated Coastal Experiences",
    content: "By 2017, the collective expanded into curated ocean adventures and immersive culinary events. From sunrise paddle sessions to open-fire seaside dining, each experience was designed to reflect the rhythm of the tides and the warmth of the community.",
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762426678/pexels-asadphoto-12913422_ews6ol.jpg",
    logo: "https://res.cloudinary.com/dwau5poqz/image/upload/v1771520475/ChatGPT_Image_Feb_19_2026_10_31_01_PM_dn7luk.png"
  },
  {
    id: 3,
    year: "2019",
    title: "The Beachfront Kitchen",
    content: "The launch of our signature beachfront kitchen marked a defining moment. Inspired by fresh seasonal ingredients and global coastal flavors, the space became a vibrant meeting point for travelers and locals alike — where every dish carried a story of land and sea.",
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762426769/pexels-lucasandrade-34486033_f8baml.jpg",
    logo: "https://res.cloudinary.com/dwau5poqz/image/upload/v1771520475/ChatGPT_Image_Feb_19_2026_10_31_01_PM_dn7luk.png"
  },
  {
    id: 4,
    year: "2021",
    title: "Sustainability Commitment",
    content: "With growth came responsibility. In 2021, Saffron Sands Collective formalized its sustainability promise — focusing on local sourcing, low-impact tourism, and supporting independent artisans. Our mission became not only to create beauty, but to protect it.",
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762426885/pexels-francesco-ungaro-279001_wne3s4.jpg",
    logo: "https://res.cloudinary.com/dwau5poqz/image/upload/v1771520475/ChatGPT_Image_Feb_19_2026_10_31_01_PM_dn7luk.png"
  },
  {
    id: 5,
    year: "Today",
    title: "A Coastal Lifestyle Brand",
    content: "Today, Saffron Sands Collective stands as a coastal lifestyle brand blending curated adventures, elevated dining, and cultural storytelling. What began as intimate seaside moments has evolved into a vibrant collective where every guest becomes part of the story.",
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762426960/pexels-ramon-rangel-661975902-34593398_whucni.jpg",
    logo: "https://res.cloudinary.com/dwau5poqz/image/upload/v1771520475/ChatGPT_Image_Feb_19_2026_10_31_01_PM_dn7luk.png"
  }
];


  return (
    <section 
      className="relative py-24 px-6 sm:px-16 overflow-hidden"
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-zinc-900 sm:text-5xl mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            From a salty start to a thriving collective—discover the milestones that shaped our story
          </p>
        </div>

        {/* Timeline Container with Center Line */}
        <div className="relative">
          {/* Center Timeline Line (hidden on mobile) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-300 -translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-16 lg:space-y-24">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={milestone.id} className="relative">
                  {/* Center Dot on Timeline (hidden on mobile) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-zinc-900 rounded-full z-10 shadow-lg" />

                  {/* Content Container */}
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    
                    {/* Image Side */}
                    <div className={`${isEven ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}>
                      <div className="relative overflow-hidden rounded-3xl shadow-xl group h-[350px]">
                        <Image
                          src={milestone.image}
                          alt={milestone.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          quality={90}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
                        
                        {/* Logo Badge - Each milestone has its own logo */}
                        <div className="absolute top-6 right-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg p-2">
                          <Image
                            src={milestone.logo}
                            alt={`${milestone.title} Logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Text Side */}
                    <div className={`${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}>
                      {/* Year Badge */}
                      <div className="inline-block mb-4">
                        <div className="bg-zinc-900 rounded-full px-6 py-2 shadow-lg">
                          <span className="text-sm font-bold text-white">{milestone.year}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
                        {milestone.title}
                      </h3>

                      {/* Decorative Line */}
                      <div className="w-16 h-1 bg-zinc-900 rounded-full mb-6" />

                      {/* Content */}
                      <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                        {milestone.content}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}