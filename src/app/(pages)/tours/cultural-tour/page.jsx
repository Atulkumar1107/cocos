import HomeIslandTour from "./module/components/island_page";


export default function CulturalTour() {
  return (
    <>
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50  dark:bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763010604/pexels-mir-burhan-859107805-30973721_szvqxy.jpg')",
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
          Join our Home Island cultural tour
        </h1>

        {/* Optional Subheading - You can uncomment if needed */}
        {/* <p className="mb-12 max-w-2xl text-lg text-white/90 sm:text-xl">
          Learn traditional crafts and sustainable practices from local artisans
        </p> */}

      
      </main>
    </div>
<HomeIslandTour/>
    </>
  );
}