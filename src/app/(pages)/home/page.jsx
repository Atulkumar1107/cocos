'use client'
import Image from "next/image";
import Scroll from "./module/components/home_about";
import AboutPreview from "./module/components/home_about";
import BookingWidget from "./module/components/booking_widget";
import FeaturedExperiences from "./module/components/featured_experience";
import ShopPreview from "./module/components/shop-preview";
import Testimonials from "./module/components/testinomials";
import { useRouter } from "next/navigation";

export default function Home() {
  // ✅ Step 1: Create router
  const router = useRouter();

  // ✅ Step 2: Define handleSearch function
  const handleSearch = (queryString) => {
    console.log("🔍 Search triggered with:", queryString); // Debug log
    router.push(`/events?${queryString}`);
  };

  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center bg-zinc-50  dark:bg-black overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="https://res.cloudinary.com/dbjcqykzz/video/upload/v1762405847/bg-video_1_1_vlfssw.mp4" type="video/mp4" />
          <source src="https://res.cloudinary.com/dbjcqykzz/video/upload/v1762405847/bg-video_1_1_vlfssw.mp4" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <main className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 py-32 text-center sm:px-16 mt-16 lg:mt-16">
          {/* Headline */}
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Discover Cocos Artisans Collective
          </h1>

          {/* Mission Statement */}
          <p className="mb-12 max-w-2xl text-lg text-white/90 sm:text-xl">
            Experience authentic island culture, local cuisine, and guided adventures
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            {/* Primary Button */}
            <button className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-white/90 hover:scale-105">
              Plan Your Itinerary
            </button>

            {/* Secondary Buttons */}
            <button className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-black">
              Book a Table
            </button>

            <button className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-black">
              Explore Tours
            </button>
          </div>
        </main>
      </div>
      <AboutPreview />
      {/* ✅ Step 3: Pass handleSearch to BookingWidget */}
      <BookingWidget onSearch={handleSearch}/>
      <FeaturedExperiences/>
      <ShopPreview/>
      <Testimonials/>
    </>
  );
}