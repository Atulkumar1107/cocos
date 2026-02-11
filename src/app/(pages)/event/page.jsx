"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import "react-calendar/dist/Calendar.css";
import { ChevronDown } from "lucide-react";

import { events, eventCategories, getAllEventDates, getEventsByDate } from "@/app/lib/data/events";

  // Add this dynamic import instead
const Calendar = dynamic(() => import("react-calendar"), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex items-center justify-center">
      <p className="text-gray-500">Loading calendar...</p>
    </div>
  ),
});

export default function EventsListing() {
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupEvents, setPopupEvents] = useState([]);
 const [isMounted, setIsMounted] = useState(false);
 const [isScrolled, setIsScrolled] = useState(false);
  const eventDates = selectedCategory === "All Events" 
  ? getAllEventDates() 
  : getAllEventDates().filter(dateString => {
      const dateEvents = getEventsByDate(dateString);
      return dateEvents.some(event => event.category === selectedCategory);
    });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 


  // Add this useEffect
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    // Check if user has scrolled past a certain point (e.g., 100px)
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  // Cleanup
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  // Filter events by selected category
  const filteredEvents = selectedCategory === "All Events" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  // Check if a date has events
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];
      if (eventDates.includes(dateString)) {
        return 'has-event';
      }
    }
    return null;
  };

const handleDateClick = (date) => {
  const dateString = date.toISOString().split('T')[0];
  let dateEvents = getEventsByDate(dateString);
  
  // Filter events by selected category
  if (selectedCategory !== "All Events") {
    dateEvents = dateEvents.filter(event => event.category === selectedCategory);
  }
  
  if (dateEvents.length > 0) {
    setSelectedDate(date);
    setPopupEvents(dateEvents);
    setShowPopup(true);
  }
};

  return (
    <>
{/* Banner Section - No Content */}
<div className="relative min-h-[20vh] bg-zinc-50 dark:bg-black overflow-hidden">
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407439/pexels-vladimirsrajber-18631417_th5dii.jpg')",
    }}
  />
  <div className="absolute inset-0 bg-black/40" />
  <div 
    className="absolute top-0 left-0 right-0 h-32 z-[5]"
    style={{
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)'
    }}
  />
</div>

      {/* Events Section */}
      <section 
        className="relative min-h-screen"
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

        <div className="relative z-10 flex">
        {/* LEFT - Calendar Sidebar (40% - STICKY) */}
<aside className="w-full lg:w-[40%] lg:sticky lg:top-0 lg:h-screen overflow-y-auto px-6 sm:px-8 py-12 scrollbar-hide">
  <div className="space-y-8">
    {/* Categories Dropdown - NOW FIRST */}
    {/* <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Filter by Category</h2>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full px-4 py-3 rounded-xl font-semibold bg-white border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-gray-900 transition cursor-pointer"
      >
        {eventCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div> */}
<div className={`bg-white/95 backdrop-blur-sm rounded-3xl ${isScrolled ? 'mt-[52px]' : 'mt-0'} p-5 shadow-xl border border-gray-200 transition-all duration-300`}>
  {/* Flex container for heading and dropdown on same line */}
  <div className="flex items-center justify-between mb-4 gap-4">
    <h2 className="text-2xl font-bold text-gray-900">Event Calendar</h2>
    
    {/* Custom Dropdown */}
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-white border-2 border-gray-300 text-gray-900 text-sm hover:border-gray-900 focus:outline-none focus:border-gray-900 transition cursor-pointer"
      >
        {selectedCategory}
        <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border-2 border-gray-300 rounded-lg shadow-xl z-50">
          {eventCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setIsDropdownOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm font-semibold hover:bg-gray-100 transition first:rounded-t-lg last:rounded-b-lg ${
                selectedCategory === category ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
  
  {/* Calendar */}
  <div className="h-96 overflow-hidden">
    {isMounted && (
      <Calendar
        onClickDay={handleDateClick}
        tileClassName={tileClassName}
        className="custom-calendar"
      />
    )}
  </div>
</div>
  </div>
</aside>
          {/* RIGHT - Events List (60% - SCROLLABLE) */}
          <main className="w-full lg:w-[60%] px-6 sm:px-8 py-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedCategory}
              </h2>
              <p className="text-gray-600">
                {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
              </p>
            </div>

            {/* Event Cards */}
            <div className="space-y-6">
              {filteredEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/event/${event.slug}`}
                  className="block group"
                >
                  <article className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="relative w-full md:w-64 h-64 md:h-auto flex-shrink-0">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold uppercase rounded-full">
                            {event.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition">
                          {event.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {new Date(event.date).toLocaleDateString('en-US', { 
                              weekday: 'short', 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {event.location}
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4 line-clamp-2 flex-1">
                          {event.shortDescription}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div>
                            {event.price === 0 ? (
                              <span className="text-lg font-bold text-green-600">Free Event</span>
                            ) : (
                              <span className="text-lg font-bold text-gray-900">${event.price} AUD</span>
                            )}
                          </div>
                          <button className="px-6 py-2 cursor-pointer bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No events found in this category.</p>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* Calendar Date Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowPopup(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Events on {selectedDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </h3>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {popupEvents.map((event) => (
                <div key={event.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{event.time}</p>
                  <Link
                    href={`/event/${event.slug}`}
                    className="inline-block px-4 py-2 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition"
                    onClick={() => setShowPopup(false)}
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

<style jsx global>{`
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .custom-calendar {
    width: 100%;
    border: none;
    font-family: inherit;
  }
  
  .custom-calendar .react-calendar__tile {
    padding: 0.5rem 0.25rem;
    position: relative;
    min-height: 60px;
  }
  
  /* Make the yellow background circular */
  .custom-calendar .react-calendar__tile.has-event {
    background-color: #fef3c7;
    font-weight: 600;
    color: transparent;
    border-radius: 50%; /* Makes it circular */
    aspect-ratio: 1; /* Keeps it square (needed for perfect circle) */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Show logo image */
  .custom-calendar .react-calendar__tile.has-event::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35px;
    height: 35px;
    background-image: url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762408098/logo_bqpdhz.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
  }
  
  .custom-calendar .react-calendar__tile:enabled:hover {
    background-color: #e5e7eb;
  }
  
  .custom-calendar .react-calendar__tile--active {
    background-color: #111827 !important;
    color: white;
  }
  
  .custom-calendar .react-calendar__navigation button {
    font-size: 1.125rem;
    font-weight: 600;
  }
  
  .custom-calendar .react-calendar__month-view__weekdays {
    font-weight: 600;
    font-size: 0.875rem;
  }
`}</style>
    </>
  );
}