"use client";

export default function ContactInfo() {
  const contactMethods = [
    {
      id: 1,
      type: "Phone",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Call us anytime"
    },
    {
      id: 2,
      type: "Email",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      value: "hello@island.com",
      href: "mailto:hello@island.com",
      description: "Send us an email"
    },
    {
      id: 3,
      type: "WhatsApp",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      value: "+1 (555) 987-6543",
      href: "https://wa.me/15559876543",
      description: "Chat with us"
    }
  ];

  return (
    <section
      className="relative py-12 px-6 sm:px-16"
      style={{ backgroundColor: "#f2edea" }}
    >
      {/* Top gradient fade */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 sm:text-5xl mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Reach out to us through any of these channels
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target={method.type === "WhatsApp" ? "_blank" : undefined}
              rel={method.type === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-900 text-white rounded-full mb-6 group-hover:bg-zinc-800 transition-colors duration-300">
                {method.icon}
              </div>

              {/* Type */}
              <h3 className="text-xl font-bold text-zinc-900 mb-2">
                {method.type}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-500 mb-4">
                {method.description}
              </p>

              {/* Value */}
              <p className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors duration-300">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-zinc-600">
            Available Monday - Friday, 9:00 AM - 6:00 PM (EST)
          </p>
        </div>
      </div>
    </section>
  );
}