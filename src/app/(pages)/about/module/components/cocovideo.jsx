"use client";

export default function WildVideoSection() {
  return (
    <section 
      className="relative py-10 px-6 sm:px-16 overflow-hidden"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f2edea"
      }}
    >
      {/* Top gradient fade */}
      <div 
        className="absolute top-0 left-0 right-0 h-40 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(242, 242, 237, 4) 0%, rgba(242, 237, 234, 0.5) 50%, rgba(242, 237, 234, 0) 100%)'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 sm:text-5xl mb-4">
            Our Production Process
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Experience the beauty, culture, and daily rhythms of Saffron Sands Collective Islands through the eyes of our community
          </p>
        </div>

        {/* Video Container */}
        <div className="relative">
          {/* Video Wrapper with Aspect Ratio */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-zinc-900">
            <div className="aspect-video">
              {/* Replace this iframe src with your actual video URL */}
              {/* For YouTube: https://www.youtube.com/embed/YOUR_VIDEO_ID */}
              {/* For Vimeo: https://player.vimeo.com/video/YOUR_VIDEO_ID */}
              <iframe
                src="https://res.cloudinary.com/dwau5poqz/video/upload/v1771565030/8306778-hd_1920_1080_25fps_iylx7a.mp4"
                title="Our Island Life Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Optional: Decorative Corner Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-zinc-900/10 rounded-tl-3xl pointer-events-none hidden sm:block"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-zinc-900/10 rounded-br-3xl pointer-events-none hidden sm:block"></div>
        </div>
      </div>
    </section>
  );
}