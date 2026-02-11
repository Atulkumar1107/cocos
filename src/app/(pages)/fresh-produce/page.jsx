"use client";

import Link from "next/link";
import MiniMartProductGrid from "./module/components/MiniMartProductGrid";
import MadeOnIslandsStory from "./module/components/MadeOnIslandsStory";

export default function MiniMart() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        {/* Background Image - Shop/Market theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg')",
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
        <main className="relative mt-6 z-10 flex w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Shop Local. Support Island Artisans.
          </h1>
          <p className="mb-1 text-lg text-white/90 sm:text-xl max-w-2xl">
            Discover locally made products and island essentials at our Mini Mart
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-sm text-white/90 mt-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white font-semibold">Fresh-Produce</span>
          </div>
        </main>
      </div>

        {/* Product Grid Component */}
      <MiniMartProductGrid />
      <MadeOnIslandsStory />
    </>
  );
}