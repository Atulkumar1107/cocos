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
            Our Mission & Vision
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Guiding principles that drive our passion for authentic island experiences
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
            
                
                <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-base text-white/90 leading-relaxed max-w-xl">
                  To preserve and celebrate the authentic culture of the Cocos Islands by creating 
                  meaningful connections between visitors and our local artisan community, while 
                  supporting sustainable tourism that benefits our island home and its people.
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
          
                
                <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-base text-white/90 leading-relaxed">
                  To become the leading model for community-driven tourism, where every visitor 
                  leaves with a deeper appreciation for island culture, and every local artisan 
                  thrives through their craft.
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