import TourGrid from "./module/components/tour_grid";

export default function Tours() {
  return (
    <>
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50  dark:bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Top gradient fade - black to transparent */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 z-[5]"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)'
        }}
      />

      {/* Hero Content */}
      <main className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 py-32 text-center sm:px-16 mt-16 lg:mt-16">
        {/* Main Headline */}
        <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
          Discover Cocos through Experience
        </h1>

        {/* Description */}
        <p className="mb-12 max-w-2xl text-lg text-white/90 sm:text-xl">
          Explore the natural beauty and rich culture of Cocos Islands with our guided tours and authentic local experiences
        </p>
      </main>
    </div>
    <TourGrid/>
    </>
  );
}