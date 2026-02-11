import Image from "next/image";
import ContactForm from "./module/components/contact_form";
import ContactInfo from "./module/components/contact_info";
import VisitUs from "./module/components/visit_us";

export default function Contact() {
  return (
    <>
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50  dark:bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dbjcqykzz/image/upload/v1762496567/pexels-joshsorenson-378273_wmfbop.jpg"
        alt="Get in Touch Background"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <main className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 py-32 text-center sm:px-16 mt-16 lg:mt-16">
        {/* Headline */}
        <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
          Get in Touch
        </h1>

        {/* Description */}
        <p className="mb-12 max-w-2xl text-lg text-white/90 sm:text-xl">
          We'd love to hear from you. Whether you have questions about our venues, tours, or products, our team is here to help you plan your perfect island experience.
        </p>
      </main>
    </div>
    <ContactForm/>
    <ContactInfo/>
    <VisitUs/>
    </>
  );
}