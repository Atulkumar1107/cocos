import SearchWidget from "@/components/Search_widget";

// ✅ Accept onSearch prop here
export default function BookingWidget({ onSearch }) {
  return (
    <section className="relative py-20 px-6 sm:px-16 overflow-hidden min-h-screen">
      {/* Beach Background Image - Full Section */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407210/beach-bg_hkf4z8.jpg')",
        }}
      ></div>
      
      {/* Gradient Overlay - Fades from left and top-right for balance */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(255, 255, 255, 0.7) 10%, rgba(255, 255, 255, 0.3) 20%, rgba(255, 255, 255, 0) 100%),
            radial-gradient(circle at top right, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0) 40%)
          `
        }}
      ></div>

      {/* Bottom gradient fade to #f2edea for smooth transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, rgba(242, 237, 234, 0) 0%, rgba(242, 237, 234, 0.8) 50%, rgba(242, 237, 234, 1) 100%)'
        }}
      ></div>

      {/* Top gradient fade from white for smooth transition from above section */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 z-[5]"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%)'
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Plan Your Island Experience
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            Select your dates to discover available dining, tours, and events
            during your stay
          </p>
        </div>

        {/* Search Widget - ✅ Pass onSearch prop here */}
        <SearchWidget onSearch={onSearch} />

        {/* Optional CTA */}
        <div className="text-center  mt-8">
          <p className="text-gray-900 backdrop-blur-[1px]  text-xl mb-4">
            Browse all available experiences
          </p>
          <a 
            href="/events"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg border-2 border-gray-200"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
}