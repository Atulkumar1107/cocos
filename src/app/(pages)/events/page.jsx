"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import SearchWidget from "@/components/Search_widget";
import EventCards from "./module/components/event_cards";

function EventsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState({});

  const handleSearch = (queryString) => {
    router.push(`/events?${queryString}`);
  };

  // Sample data - replace with your actual data from database
  const experiences = [
    {
      id: 1,
      title: "Sunset Beach Dining",
      category: "dining",
      time: "6:00 PM - 9:00 PM",
      availability: "Nov 10, 12, 14",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762406888/dining-1_vnefrg.webp",
      availableDates: ["2025-11-10", "2025-11-12", "2025-11-14", "2025-11-17", "2025-11-19"],
      daysOfWeek: [1, 3, 5], // Mon, Wed, Fri
    },
    {
      id: 2,
      title: "Island Discovery Tour",
      category: "tour",
      time: "9:00 AM - 2:00 PM",
      availability: "Daily",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762406958/tour-1_rmywyv.webp",
      availableDates: "daily",
      daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      id: 3,
      title: "Cultural Music Night",
      category: "event",
      time: "7:00 PM - 10:00 PM",
      availability: "Nov 13, 20",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762406990/event-1_wfqzki.webp",
      availableDates: ["2025-11-13", "2025-11-20", "2025-11-27"],
      daysOfWeek: [4], // Friday only
    },
    {
      id: 4,
      title: "Beachfront Breakfast",
      category: "dining",
      time: "7:00 AM - 10:00 AM",
      availability: "Daily",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407020/dining-2_x4b7iy.webp",
      availableDates: "daily",
      daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      id: 5,
      title: "Snorkeling Adventure",
      category: "tour",
      time: "10:00 AM - 1:00 PM",
      availability: "Mon, Wed, Fri",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407050/tour-2_ymyxto.webp",
      availableDates: ["2025-11-10", "2025-11-12", "2025-11-14", "2025-11-17", "2025-11-19", "2025-11-21"],
      daysOfWeek: [1, 3, 5],
    },
    {
      id: 6,
      title: "Artisan Workshop",
      category: "event",
      time: "2:00 PM - 5:00 PM",
      availability: "Tue, Thu, Sat",
      image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407091/event-2_kyumyj.webp",
      availableDates: ["2025-11-11", "2025-11-13", "2025-11-15", "2025-11-18", "2025-11-20"],
      daysOfWeek: [2, 4, 6],
    },
  ];

  // Parse URL parameters and set filters
  useEffect(() => {
    const searchBy = searchParams.get("searchBy");
    const category = searchParams.get("category");
    const arrival = searchParams.get("arrival");
    const departure = searchParams.get("departure");
    const days = searchParams.get("days");
    
    const parsedFilters = {
      searchBy: searchBy || null,
      category: category || "all",
      arrival: arrival || null,
      departure: departure || null,
      days: days ? days.split(",").map(Number) : [],
    };

    setFilters(parsedFilters);
  }, [searchParams]);

  return (
    <section className="relative overflow-hidden">
      {/* Search Widget Section */}
      <div className="relative py-20 px-6 sm:px-16">
        {/* Background for Search Widget */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762512183/pexels-minan1398-740589_hqdhlc.jpg')",
          }}
        ></div>
        
        {/* Bottom gradient fade - transitioning to Event Cards background */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-48 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(242, 242, 242, 0.4) 30%, rgba(242, 242, 242, 0.8) 70%, rgba(242, 242, 242, 1) 100%)'
          }}
        ></div>
        
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Search Widget */}
          <div className="mb-1 mt-32">
            <SearchWidget initialFilters={filters} onSearch={handleSearch} />
          </div>
        </div>
      </div>

      {/* Event Cards Section */}
      <div className="relative py-1 px-6 sm:px-16 bg-[#f2f2f2]">
        {/* Different Background for Event Cards */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
          }}
        ></div>
        
        {/* Top gradient fade - continuing from Search Widget */}
        <div 
          className="absolute top-0 left-0 right-0 h-48 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, rgba(242, 242, 242, 1) 0%, rgba(242, 242, 242, 0.8) 30%, rgba(242, 242, 242, 0.4) 70%, transparent 100%)'
          }}
        ></div>
        
        <div className="relative py-12 -mt-12 z-10 mx-auto max-w-full">
          {/* Event Cards with Filters */}
          <EventCards experiences={experiences} filters={filters} />
        </div>
      </div>
    </section>
  );
}

// Loading component
function EventsLoading() {
  return (
    <section className="relative overflow-hidden">
      {/* Search Widget Section Skeleton */}
      <div className="relative py-20 px-6 sm:px-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762512183/pexels-minan1398-740589_hqdhlc.jpg')",
          }}
        ></div>
        
        <div 
          className="absolute bottom-0 left-0 right-0 h-48 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(242, 242, 242, 0.4) 30%, rgba(242, 242, 242, 0.8) 70%, rgba(242, 242, 242, 1) 100%)'
          }}
        ></div>
        
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Search Widget Skeleton */}
          <div className="mb-1 mt-32">
            <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-12 bg-gray-200 rounded"></div>
                ))}
              </div>
              <div className="h-10 bg-gray-200 rounded w-32 mt-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Cards Section Skeleton */}
      <div className="relative py-1 px-6 sm:px-16 bg-[#f2f2f2]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
          }}
        ></div>
        
        <div 
          className="absolute top-0 left-0 right-0 h-48 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, rgba(242, 242, 242, 1) 0%, rgba(242, 242, 242, 0.8) 30%, rgba(242, 242, 242, 0.4) 70%, transparent 100%)'
          }}
        ></div>
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Main component with Suspense
export default function Events() {
  return (
    <Suspense fallback={<EventsLoading />}>
      <EventsContent />
    </Suspense>
  );
}