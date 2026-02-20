import Image from "next/image";

export default function MissionVision() {
  return (
    <section 
      className="relative py-16 px-6 sm:px-16 lg:px-24 overflow-hidden"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f2edea"
      }}
    >
      {/* Top gradient fade for smooth blend */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)'
        }}
      ></div>

      {/* Section Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
  <h2 className="text-4xl font-bold text-zinc-900 sm:text-5xl mb-4">
  Our Purpose & Promise
</h2>
<p className="text-lg text-zinc-600 max-w-2xl mx-auto">
  Crafting meaningful coastal experiences inspired by culture, community, and the ocean.
</p>

        </div>

        {/* Bento-Box Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Mission Card - 60% Width (3 columns) */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl shadow-xl h-[500px] group">
              {/* Background Image - Vibrant Daytime */}
              <Image
                src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1762426100/pexels-tombrand-1630035_j4q1ej.jpg"
                alt="Mission Background"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={90}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/40" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 sm:p-10">
            
                
          <h3 className="text-3xl font-bold text-white mb-4">Our Purpose</h3>
<p className="text-base text-white/90 leading-relaxed max-w-xl">
  At Saffron Sands Collective, our purpose is to design immersive coastal experiences 
  that connect people to the rhythm of the sea. Through thoughtfully curated tours, 
  seasonal cuisine, and community-led storytelling, we celebrate the spirit of island living 
  while fostering sustainability and local collaboration.
</p>

              </div>
            </div>
          </div>

          {/* Vision Card - 40% Width (2 columns) */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl shadow-xl h-[500px] group">
              {/* Background Image - Sunset/Golden Hour */}
              <Image
                src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1762426412/pexels-felix-mittermeier-1459509_kcvdjk.jpg"
                alt="Vision Background"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={90}
              />
              
              {/* Softer Gradient Overlay for Golden Hour */}
               <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/40" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 sm:p-10">
          
                
         <h3 className="text-3xl font-bold text-white mb-4">Our Promise</h3>
<p className="text-base text-white/90 leading-relaxed">
  We envision a future where travel is intentional, dining is experiential, and every 
  sunset shared becomes a lasting memory. Saffron Sands Collective strives to create 
  a space where culture, creativity, and coastal beauty come together in harmony.
</p>

              </div>
            </div>
          </div>

        </div>

        {/* Optional: Bottom Decorative Element */}
      
      </div>
    </section>
  );
}