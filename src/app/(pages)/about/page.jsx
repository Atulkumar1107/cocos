import MissionVision from "./module/components/mission_vision";
import TimelineJourney from "./module/components/timeline_journey";
import VenueCards from "./module/components/venue_cards";
import QuoteSection from "./module/components/quote";
import VideoSection from "./module/components/video_section";

export default function About() {
  return (
    <>
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50  dark:bg-black overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://res.cloudinary.com/dbjcqykzz/video/upload/v1762425624/5363147-hd_1920_1080_25fps_wwmxe2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <main className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 py-32 text-center sm:px-16 mt-16 lg:mt-16">
        {/* Headline */}
        <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
          Our Story
        </h1>

        {/* Subheading/Description (Optional) */}
        <p className="mb-12 max-w-2xl text-lg text-white/90 sm:text-xl">
          Discover the journey behind Cocos Artisans Collective and our passion for authentic island experiences
        </p>
      </main>
    </div>
    <MissionVision/>
    <TimelineJourney/>
    <VenueCards/>
    <QuoteSection/>
    <VideoSection/>
    </>
  );
}