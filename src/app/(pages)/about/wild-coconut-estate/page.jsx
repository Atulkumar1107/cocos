"use client";

import Link from "next/link";
import WildCoconutActivities from "../module/components/WildCoconutActivities";
;
import WildVideoSection from "../module/components/cocovideo";

import WildShopPreview from "../module/components/wildproducts";
import WildCoconutGallery from "../module/components/cocogallery";
import GroupToursCTA from "../module/components/GroupToursCTA";

export default function WildCoconutEstate() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        {/* Background Image - Lush coconut farm visual */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763451165/pexels-jess-vide-4609254_1_cgtfka.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Top gradient fade */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)'
          }}
        />

        {/* Hero Content */}
        <main className="relative z-10 flex w-full max-w-6xl backdrop-blur-[1.5px] flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <h1 className="mb-6 text-5xl mt-16 font-bold text-white sm:text-6xl lg:text-7xl">
            Our Commitment to Sustainability
          </h1>
          <p className="mb-8 text-lg text-white/90 sm:text-xl max-w-2xl">
            Preserving traditional methods while protecting our island paradise for future generations
          </p>
        </main>
      </div>

      <WildCoconutActivities/>
      <WildVideoSection/>
           <WildShopPreview/>
           <WildCoconutGallery/>
           <GroupToursCTA/>
    </>
  );
}