
import WorkshopRegistrationFormCom from "../module/components/WorkshopRegistrationFormCompact";

export default async function WorkshopDetail({ params }) {
  const { slug } = await params;

  // Workshop data - you can move this to a separate file later
  const workshopData = {
    "sourdough-bread-making": {
      name: "Sourdough Bread Making",
      description: "Learn the art of traditional sourdough bread making with our expert bakers. Master fermentation techniques and create your own starter.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
      price: "$35",
      duration: "3 hours",
      schedule: "Tuesdays 10-11am",
    },
    "coconut-oil-making": {
      name: "Coconut Oil Making",
      description: "Discover the traditional process of extracting pure coconut oil. Learn sustainable methods passed down through generations.",
      image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?q=80&w=2070&auto=format&fit=crop",
      price: "$30",
      duration: "2 hours",
      schedule: "Wednesdays 2-4pm",
    },
    "coconut-chip-making": {
      name: "Coconut Chip Making",
      description: "Create delicious, crispy coconut chips using traditional island techniques. Perfect for healthy snacking and gift-giving.",
      image: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?q=80&w=2070&auto=format&fit=crop",
      price: "$25",
      duration: "2 hours",
      schedule: "Thursdays 10am-12pm",
    },
    "coconut-cream-making": {
      name: "Coconut Cream Making",
      description: "Master the art of creating rich, creamy coconut cream from fresh coconuts. Learn recipes and preservation techniques.",
      image: "https://images.unsplash.com/photo-1623428454614-abaf00244e52?q=80&w=2064&auto=format&fit=crop",
      price: "$30",
      duration: "2.5 hours",
      schedule: "Fridays 1-3:30pm",
    },
  };

  // Get workshop data or show 404
  const workshop = workshopData[slug];

  if (!workshop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Workshop Not Found</h1>
          <p className="text-gray-600 mb-8">The workshop you're looking for doesn't exist.</p>
          <a
            href="/workshops"
            className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Back to Workshops
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Full Screen Banner - Same style as /workshops page */}
      <div className="relative flex min-h-screen items-center justify-center bg-zinc-50  dark:bg-black overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${workshop.image}')`,
          }}
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Top gradient fade - black to transparent */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)'
          }}
        />

        {/* Hero Content */}
        <main className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 py-32 text-center sm:px-16 mt-16 lg:mt-16">
          {/* Workshop Title */}
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            {workshop.name}
          </h1>
        </main>
      </div>

      {/* Content Section Below Banner - Two Column Layout */}
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

        <div className="relative z-10 mx-auto max-w-full">
          {/* Two Column Grid - 60/40 Split */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* LEFT COLUMN - Workshop Details (60% - 3/5 width) */}
            <div className="lg:col-span-3">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/50">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Workshop Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-gray-600 font-semibold mb-1 text-sm">Price</div>
                    <div className="text-xl font-bold text-gray-900">{workshop.price}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-gray-600 font-semibold mb-1 text-sm">Duration</div>
                    <div className="text-xl font-bold text-gray-900">{workshop.duration}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-gray-600 font-semibold mb-1 text-sm">Schedule</div>
                    <div className="text-xl font-bold text-gray-900">{workshop.schedule}</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">About This Workshop</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {workshop.description}
                  </p>
                </div>

                {/* What You'll Learn */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What You'll Learn</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Traditional techniques and methods</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Hands-on practice with expert guidance</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Take home your creations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">All materials and equipment provided</span>
                    </li>
                  </ul>
                </div>

                {/* Back Button */}
                <div className="mt-6">
                  <a
                    href="/workshops"
                    className="inline-block bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-center border-2 border-gray-900 hover:bg-gray-50 transition text-sm"
                  >
                    ← View All Workshops
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Registration Form (40% - 2/5 width, sticky) */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <WorkshopRegistrationFormCom preSelectedWorkshop={workshop.name} />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}