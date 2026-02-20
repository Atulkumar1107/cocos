export default function QuoteSection() {
  return (
    <section 
      className="relative py-10 px-6 sm:px-16 overflow-hidden"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762406810/palm-shadow-bg_oguf1z.png')",
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

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Opening Quote Mark */}
        <div className="mb-6">
          <svg className="w-16 h-16 mx-auto text-zinc-900/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote Text */}
        <blockquote className="mb-8">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-zinc-900 leading-relaxed italic">
  Every journey we create is guided by intention — blending authentic flavors, coastal adventure, and heartfelt hospitality into moments that linger long after the tide goes out.
</p>

        </blockquote>

        {/* Closing Quote Mark */}
        <div className="mb-8">
          <svg className="w-16 h-16 mx-auto text-zinc-900/20 rotate-180" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-px bg-zinc-400"></div>
          <div className="w-2 h-2 rounded-full bg-zinc-400 mx-4"></div>
          <div className="w-16 h-px bg-zinc-400"></div>
        </div>

        {/* Author Info */}
        <div>
          <p className="text-xl font-bold text-zinc-900 mb-1">
            Denny Tony
          </p>
          <p className="text-base text-zinc-600">
            Founder, Saffron Sands Collective
          </p>
        </div>

      </div>
    </section>
  );
}