"use client";

import { useState, useEffect, useRef } from "react";
import CustomDatePicker from "@/app/(pages)/tours/plan-your-itinerary/module/components/custom_calendar";
export default function SearchWidget({ initialFilters = {}, onSearch }) {
  // ✅ CRITICAL FIX: Parse dates without timezone conversion
  const parseDate = (dateString) => {
    if (!dateString) return null;
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // month is 0-indexed in JS
  };

  const [activeStep, setActiveStep] = useState(null);
  const [checkInDate, setCheckInDate] = useState(
    initialFilters.arrival ? initialFilters.arrival : ""
  );
  const [checkOutDate, setCheckOutDate] = useState(
    initialFilters.departure ? initialFilters.departure : ""
  );
  const [selectedDays, setSelectedDays] = useState(initialFilters.days || []);
  const searchBarRef = useRef(null);

  const daysOfWeek = [
    { name: "Mon", value: 1 },
    { name: "Tue", value: 2 },
    { name: "Wed", value: 3 },
    { name: "Thu", value: 4 },
    { name: "Fri", value: 5 },
    { name: "Sat", value: 6 },
    { name: "Sun", value: 0 },
  ];

  // Sync with URL params
  useEffect(() => {
    if (initialFilters.arrival) {
      setCheckInDate(initialFilters.arrival);
    }
    if (initialFilters.departure) {
      setCheckOutDate(initialFilters.departure);
    }
    if (initialFilters.days && initialFilters.days.length > 0) {
      setSelectedDays(initialFilters.days);
    }
  }, [initialFilters]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setActiveStep(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDay = (dayValue) => {
    if (selectedDays.includes(dayValue)) {
      setSelectedDays(selectedDays.filter((d) => d !== dayValue));
    } else {
      setSelectedDays([...selectedDays, dayValue]);
    }
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set("searchBy", "date");
    
    if (checkInDate) {
      params.set("arrival", checkInDate);
    }
    if (checkOutDate) {
      params.set("departure", checkOutDate);
    }
    if (selectedDays.length > 0) {
      params.set("days", selectedDays.join(","));
    }

    if (onSearch) {
      onSearch(params.toString());
    }
    setActiveStep(null);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = parseDate(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  // Auto-advance with CustomDatePicker
  const handleCheckInSelect = (date) => {
    setCheckInDate(date);
    // Auto-advance to checkout
    setTimeout(() => {
      setActiveStep("checkout");
    }, 300);
  };

  const handleCheckOutSelect = (date) => {
    setCheckOutDate(date);
    // Auto-advance to days
    setTimeout(() => {
      setActiveStep("days");
    }, 300);
  };

  return (
    <div ref={searchBarRef} className="w-full max-w-5xl mx-auto">
      {/* Main Search Bar - Airbnb Style */}
      <div className="bg-white rounded-full p-0 shadow-lg border border-gray-200 flex items-center overflow-hidden hover:shadow-xl transition-shadow">
        
        {/* Check-in */}
        <div 
          className={`flex-1 px-8 py-4 cursor-pointer transition-all relative ${
            activeStep === "checkin" ? "bg-gray-50" : "hover:bg-gray-50"
          }`}
          onClick={() => setActiveStep(activeStep === "checkin" ? null : "checkin")}
        >
          <label className="block text-base font-semibold text-gray-900 mb-1">
            Check in
          </label>
          {checkInDate ? (
            <div className="text-sm text-gray-900 font-medium">{formatDate(checkInDate)}</div>
          ) : (
            <div className="text-base text-gray-400">Add dates</div>
          )}
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-300"></div>

        {/* Check-out */}
        <div 
          className={`flex-1 px-6 py-4 cursor-pointer transition-all relative ${
            activeStep === "checkout" ? "bg-gray-50" : "hover:bg-gray-50"
          }`}
          onClick={() => setActiveStep(activeStep === "checkout" ? null : "checkout")}
        >
          <label className="block text-base font-semibold text-gray-900 mb-1">
            Check out
          </label>
          {checkOutDate ? (
            <div className="text-sm text-gray-900 font-medium">{formatDate(checkOutDate)}</div>
          ) : (
            <div className="text-base text-gray-400">Add dates</div>
          )}
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-300"></div>

        {/* Days */}
        <div 
          className={`flex-1 px-6 py-4 cursor-pointer transition-all relative ${
            activeStep === "days" ? "bg-gray-50" : "hover:bg-gray-50"
          }`}
          onClick={() => setActiveStep(activeStep === "days" ? null : "days")}
        >
          <label className="block text-base font-semibold text-gray-900 mb-1">
            Days
          </label>
          {selectedDays.length > 0 ? (
            <div className="text-sm text-gray-900 font-medium">
              {selectedDays.map(d => daysOfWeek.find(day => day.value === d)?.name).join(", ")}
            </div>
          ) : (
            <div className="text-base text-gray-400">Select days</div>
          )}
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="m-2 cursor-pointer bg-rose-500 gap-2 hover:bg-rose-600 text-white p-4 rounded-full transition-all flex items-center justify-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
          Search Availability
        </button>
      </div>

      {/* Calendar Dropdowns with CustomDatePicker */}
      {activeStep === "checkin" && (
        <div className="mt-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-4 inline-block">
            <CustomDatePicker
              value={checkInDate}
              onChange={handleCheckInSelect}
              placeholder="Select check-in date"
              isOpen={true}
              hideInput={true}
            />
          </div>
        </div>
      )}

      {activeStep === "checkout" && (
        <div className="mt-4 ml-72 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-4 inline-block">
            <CustomDatePicker
              value={checkOutDate}
              onChange={handleCheckOutSelect}
              placeholder="Select check-out date"
              minDate={checkInDate}
              isOpen={true}
              hideInput={true}
            />
          </div>
        </div>
      )}

      {/* Days Selector Dropdown */}
      {activeStep === "days" && (
        <div className="mt-4 bg-white rounded-3xl shadow-2xl p-6 border border-gray-200 animate-fadeIn">
          <p className="text-sm text-gray-600 mb-4">Choose which days you'd like to visit</p>
          <div className="flex flex-wrap gap-3">
            {daysOfWeek.map((day) => (
              <button
                key={day.value}
                onClick={() => toggleDay(day.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedDays.includes(day.value)
                    ? "bg-gray-900 text-white scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {day.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .flex-1 {
            flex: none;
            width: 100%;
            border-bottom: 1px solid #e5e7eb;
          }
          .h-8.w-px {
            display: none;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}