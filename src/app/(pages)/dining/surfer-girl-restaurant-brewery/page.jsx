import SurferMenuSection from "./module/components/SurferMenuSection";


export default function Surfer() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763446567/pexels-allanfranca-3465604_au8a6r.jpg')",
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
          <h1 className="mb-6 text-5xl backdrop-blur-[1.5px] font-bold text-white sm:text-6xl lg:text-7xl">
            Surfer Girl Restaurant & Brewery
          </h1>

          {/* Subheading - Option B */}
          <p className="mb-12 max-w-3xl backdrop-blur-[1.5px] text-lg text-white/90 sm:text-xl">
            Dine under the stars with local craft beer, fresh cocktails, and coconut-based dishes overlooking the Indian Ocean
          </p>
        </main>
      </div>

      {/* Description + Menu Section Component */}
      <SurferMenuSection />
    </>
  );
}