"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function CoconutReviews() {
  const scrollRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Perth, Australia",
      review:
        "An absolutely incredible experience! Learning about coconut production from harvest to pressing was fascinating. The jewellery workshop was the highlight - I made a beautiful necklace to remember the trip by.",
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407926/testimonial-5_r0olxr.webp",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      review:
        "The Wild Coconut Discovery Centre exceeded all expectations. The guides were knowledgeable and passionate. The tastings were delicious, and the gift shop had unique items you won't find anywhere else.",
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407891/testimonial-4_ilgbku.webp",
    },
    {
      id: 3,
      name: "Emma Williams",
      location: "Melbourne, Australia",
      review:
        "A must-visit when on the Saffron Shores Collective! The hands-on demonstrations were engaging and educational. My kids loved making coconut bowls, and we all enjoyed the fresh coconut ice cream. Highly recommend!",
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407832/testimonial-1_ywj0c3.webp",
    },
    {
      id: 4,
      name: "David Brown",
      location: "Sydney, Australia",
      review:
        "What a unique experience! The tour guides shared so much knowledge about the island's coconut industry. The location at the old farm site adds an authentic touch. Don't miss this gem!",
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407861/testimonial-3_yctpgq.webp",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      location: "Brisbane, Australia",
      review:
        "Loved every minute of our visit! The coconut production tour was informative, and the workshop was so much fun. The staff were friendly and welcoming. A perfect way to spend a morning on the islands.",
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407798/testimonial-2_j5pnol.webp",
    },
  ];

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Pixels per frame

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Reset position when we've scrolled through one set of reviews
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      className="relative py-20 px-6 sm:px-16 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762408026/palm-shadow-4_bgbhgf.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f2edea",
      }}
    >
      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)",
        }}
      ></div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Visitors Say
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear from travelers who experienced the magic of coconut discovery
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f2edea] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f2edea] to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-[400px] bg-[#f2edea] rounded-3xl p-8 shadow-lg"
              >
                {/* Reviewer Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed italic">
                  "{review.review}"
                </p>

                {/* Decorative Quote Icon */}
                <div className="mt-6 text-green-600 opacity-20">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-0"
        style={{
          background:
            "linear-gradient(to top, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)",
        }}
      ></div>
    </section>
  );
}
