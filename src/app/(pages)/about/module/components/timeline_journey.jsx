"use client";

import Image from "next/image";

export default function ZigzagTimeline() {
  const milestones = [
    {
      id: 1,
      year: "2009",
      title: "A Salty Start",
      content: "Our story began in 2009 when Tony arrived on the Cocos Islands with his wife and family. He soon met Wak Udin, an elder on Home Island who was using traditional methods to make sea salt. The smoky process involved boiling sea water in metal drums and using coconut husks as the fuel. Tony used his background in food science and some research to help secure seed funding from the Australian Government to purchase and freight materials for a micro sea salt evaporation system on Home Island.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762406755/about-3_am0rwi.webp",
      logo: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762425359/WhatsApp_Image_2025-10-22_at_12.04.38_PM_rlct60.jpg"
    },
    {
      id: 2,
      year: "2010",
      title: "Cocos Artisans Collective Founded",
      content: "In 2010, Cocos (Keeling) Islands resident Tony Lacy established the Cocos Artisans Collective with three aims. Firstly, to create new employment for residents through a range of economic development initiatives. Secondly, to have a positive impact for the community, visitors and the local environment of the Cocos Islands. The final aim was to leave a legacy by ensuring each project was sustainable. The success of the salt evaporation system enabled a base product to be made and employment opportunities began. The new salt making team then went on to produce a range of dried food products such as moringa, lime, smoked lime and even local seaweed.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762426678/pexels-asadphoto-12913422_ews6ol.jpg",
      logo: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762408098/logo_bqpdhz.jpg"
    },
    {
      id: 3,
      year: "Expanding",
      title: "Salty's Bakery & Grill Opens",
      content: "The project soon expanded to include Salty's Bakery & Grill, where Tony could include the locally produced sea salt as a key ingredient in café dishes. The café became a place where the community and visitors could taste the fruits of the collective's labor, with every dish showcasing the pure sea salt that started it all.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762426769/pexels-lucasandrade-34486033_f8baml.jpg",
      logo: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762425359/WhatsApp_Image_2025-10-22_at_12.04.38_PM_rlct60.jpg"
    },
    {
      id: 4,
      year: "Growing",
      title: "Wild Coconut Discovery Centre",
      content: "When the lease for an abandoned coconut farm became available, Tony saw it as an excellent opportunity to get involved in the product that gave the Cocos Islands their name. The Wild Coconut Discovery Centre offers the chance to see how a range of coconut products are made, while sampling them along the way. Visitors can experience hands-on demonstrations and learn about the traditional methods of coconut processing.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762426885/pexels-francesco-ungaro-279001_wne3s4.jpg",
      logo: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762425471/WhatsApp_Image_2025-10-22_at_12.02.56_PM_ixsm47.jpg"
    },
    {
      id: 5,
      year: "Today",
      title: "Surfer Girl Restaurant",
      content: "When a beachfront restaurant lease came up, Tony jumped at the opportunity to serve Cocos Island's locals and visitors in such a stunning location. The result, Surfer Girl restaurant, features the locally produced salt and coconut products in delicious, freshly prepared dishes. From pure sea salt as the essential ingredient, the other projects evolved to become the Cocos Artisans Collective. You can get involved in the amazing work that Tony and the team are doing on Cocos Islands by dining at one (or all) of the Cocos Artisans Collective cafés and visiting the Wild Coconut Discovery Centre.",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762426960/pexels-ramon-rangel-661975902-34593398_whucni.jpg",
      logo: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762425448/WhatsApp_Image_2025-10-22_at_12.03.45_PM_jrh4bl.jpg"
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