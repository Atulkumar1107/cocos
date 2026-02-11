"use client";

import Image from "next/image";

export default function CoconutGallery() {
  const galleryImages = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839383/pexels-jess-vide-9259632_ziabui.jpg",
      alt: "Fresh coconuts on palm tree",
      span: "col-span-1 row-span-2", // Tall
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839426/pexels-kampus-6299963_ynwnzu.jpg",
      alt: "Coconut farm landscape",
      span: "col-span-2 row-span-1", // Wide
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839661/pexels-anntarazevich-6146656_hntidq.jpg",
      alt: "Coconut jewellery crafting",
      span: "col-span-1 row-span-1", // Standard
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839469/pexels-miroalt-176400_mkybiy.jpg",
      alt: "Fresh coconut products",
      span: "col-span-1 row-span-1", // Standard
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839585/pexels-lara-jameson-8886938_eg6oue.jpg",
      alt: "Coconut bowls display",
      span: "col-span-2 row-span-1", // Wide
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839524/pexels-anntarazevich-7466809_mr8l0e.jpg",
      alt: "Gift shop interior",
      span: "col-span-1 row-span-2", // Tall
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839763/pexels-elevate-1269032_f051uh.jpg",
      alt: "Hands-on coconut workshop",
      span: "col-span-1 row-span-1", // Standard
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839808/pexels-elevate-1267360_pknp2t.jpg",
      alt: "Coconut oil making process",
      span: "col-span-1 row-span-1", // Standard
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839834/pexels-abhinavcoca-291528_u3hhdz.jpg",
      alt: "Fresh coconut cream",
      span: "col-span-1 row-span-1", // Standard
    },
    {
      id: 10,
      url: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839893/pexels-bpixelss-2538225_eopspd.jpg",
      alt: "Tropical palm trees",
      span: "col-span-2 row-span-1", // Wide
    },
    {
      id: 11,
      url: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839925/pexels-mikhail-nilov-8156198_ihoo6d.jpg",
      alt: "Island coconut grove",
      span: "col-span-1 row-span-1", // Standard
    },
  ];

  return (
    <section
      className="relative py-20 px-6 sm:px-16 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
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

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore moments from the Wild Coconut Discovery Centre
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-3 md:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`${image.span} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer`}
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-0"
        style={{
          background:
            "linear-gradient(to top, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)",
        }}
      ></div>
    </section>
  );
}