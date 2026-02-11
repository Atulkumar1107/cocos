import Image from "next/image";

export default function AboutPreview() {
  return (
    <section 
      className="relative py-20 px-6 sm:px-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762406810/palm-shadow-bg_oguf1z.png')",
      }}
    >
      {/* #f2edea Overlay for Consistent Look */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(242, 237, 234, 0.5)' }}></div>

      {/* Bottom gradient fade for smooth transition to BookingWidget */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 z-[5]"
        style={{
          background: 'linear-gradient(to bottom, rgba(242, 237, 234, 0) 0%, rgba(242, 237, 234, 0.3) 25%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 1) 100%)'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content - Left Column */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to the Cocos (Keeling) Islands, where pristine turquoise waters meet 
              rich cultural heritage. Our collective brings together local artisans, chefs, 
              and guides who are passionate about sharing the authentic island experience.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From farm-to-table dining featuring fresh coconut products to guided tours 
              through our tropical paradise, every experience is crafted with care by our 
              community. Discover the stories, flavors, and natural beauty that make our 
              islands truly unique.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're seeking adventure, culinary delights, or a peaceful escape, 
              we invite you to explore all that Cocos Artisans Collective has to offer.
            </p>
          </div>

          {/* Image Collage - Right Column */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large Image - Left */}
            <div className="col-span-1 row-span-2">
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1762406519/about-2_o6v0hw.webp"
                  alt="Cocos Islands scenic view"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Small Image - Top Right */}
            <div className="col-span-1">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1762406712/about-1_avlpdf.webp"
                  alt="Local artisan at work"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Small Image - Bottom Right */}
            <div className="col-span-1">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1762406755/about-3_am0rwi.webp"
                  alt="Fresh local cuisine"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}