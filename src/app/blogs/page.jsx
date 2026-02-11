"use client";

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../lib/data/blogPosts";

export default function BlogListing() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-[50vh] items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div 
          className="absolute top-0 left-0 right-0 h-32 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)'
          }}
        />
        <main className="relative z-10 flex w-full max-w-6xl mt-8 flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Our Stories
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Discover island life, culture, and adventures through our collection of stories
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-white/90 mt-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white font-semibold">Blog</span>
          </div>
        </main>
      </div>

      {/* Blog Grid Section */}
      <section 
        className="relative py-20 px-6 sm:px-16 overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea"
        }}
      >
        {/* Top gradient fade */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)'
          }}
        ></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="group block"
              >
                <article className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Featured Image */}
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category Badge */}
                    <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-blue-100 text-blue-700 inline-block w-fit mb-3">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Read More Button */}
                    <button className="w-full cursor-pointer bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                      Read More
                    </button>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}