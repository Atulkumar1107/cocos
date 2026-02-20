"use client";

import Image from "next/image";

export default function MadeOnIslandsStory() {
  return (
    <section
      className="relative py-20 px-6 sm:px-16 "
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f2edea",
      }}
    >
      {/* Top gradient fade for smooth blend */}
      <div
        className="absolute top-0 left-0 right-0 h-32 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)",
        }}
      ></div>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT - Image (STICKY) */}
          <div className="sticky top-24">
            <div className="relative h-[500px] top-2 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg"
                alt="Island artisans at work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT - Story Text (SCROLLABLE) */}
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Made on the Islands
              </h2>
              <div className="w-24 h-1 bg-gray-900 rounded-full"></div>
            </div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Every product you find in our Mini Mart carries with it a piece
                of the Saffron Shores Collective—not just in origin, but in
                spirit. These are more than items on a shelf; they're the
                culmination of generations of knowledge, passed down from elder
                to apprentice under the shade of coconut palms.
              </p>

              <p>
                Our local artisans wake before dawn, their hands guided by
                traditions that have weathered centuries. Whether weaving
                coconut fiber into baskets using techniques their grandmothers
                taught them, or carefully extracting pure coconut oil through
                methods unchanged since their ancestors first settled these
                shores, each maker brings intention and pride to their craft.
              </p>

              <p>
                The woman who dyes our batik fabrics collects rainwater and
                plants from the forest, mixing colors that mirror the island
                sunsets. The fisherman who gathers seaweed knows the tides like
                old friends. The beekeeper who tends our honey speaks softly to
                his hives, respecting the partnership between humans and nature
                that sustains life here.
              </p>

              <p className="font-semibold text-gray-900">
                When you choose products made on the islands, you're not just
                supporting local artisans—you're helping preserve a way of life,
                protecting traditional knowledge, and investing in the future of
                our community.
              </p>

              <p>
                Each purchase tells the islands' story: of resilience, of
                connection to the land and sea, of the quiet dignity that comes
                from creating something meaningful with your own hands. This is
                the heart of the Saffron Shores Collective, offered to you.
              </p>
            </div>

            {/* Optional CTA */}
            <div className="pt-4">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border-2 border-gray-200">
                <p className="text-sm text-gray-700 italic">
                  "Every coconut product, every woven basket, every jar of honey
                  represents hours of dedicated work and centuries of island
                  wisdom. We invite you to be part of this living tradition."
                </p>
                <p className="text-sm font-semibold text-gray-900 mt-2">
                  — The Artisans of Saffron Shores Collective
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
