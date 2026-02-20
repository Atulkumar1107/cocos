import Image from "next/image";

export default function AboutPreview() {
  return (
    <section
      className="relative py-20 px-6 sm:px-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762406810/palm-shadow-bg_oguf1z.png')",
      }}
    >
      {/* #f2edea Overlay for Consistent Look */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(242, 237, 234, 0.5)" }}
      ></div>

      {/* Bottom gradient fade for smooth transition to BookingWidget */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[5]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(242, 237, 234, 0) 0%, rgba(242, 237, 234, 0.3) 25%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 1) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content - Left Column */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to Saffron Sands Collective — where ocean horizons inspire
              unforgettable experiences. Nestled along sun-kissed shores, we are
              a community-driven collective dedicated to celebrating coastal
              living through curated adventures, vibrant flavors, and meaningful
              connections. Our team of creators, hosts, and storytellers work
              together to design experiences that reflect the rhythm of island
              life.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Savor thoughtfully crafted dishes inspired by local ingredients
              and global influences. Explore hidden beaches, rolling tides, and
              scenic landscapes through guided journeys led by passionate
              locals. Every offering is designed to connect you with the land,
              the sea, and the people who call it home.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Saffron Sands Collective, we believe travel should be
              immersive, flavors should tell a story, and every sunset should
              feel like a celebration. Join us for experiences shaped by the sea
              and elevated with heart.
            </p>
          </div>

          {/* Image Collage - Right Column */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large Image - Left */}
            <div className="col-span-1 row-span-2">
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dwau5poqz/image/upload/v1771521658/pexels-tonynojmansk-186688133-12698579_i88vig.jpg"
                  alt="Saffron Shores Collective scenic view"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Small Image - Top Right */}
            <div className="col-span-1">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dwau5poqz/image/upload/v1771521744/pexels-vincent-gerbouin-445991-1174737_iztccl.jpg"
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
                  src="https://res.cloudinary.com/dwau5poqz/image/upload/v1771521781/pexels-riciardus-871060_wca4be.jpg"
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
