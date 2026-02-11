"use client";

import { useState, useEffect, useRef } from "react";

export default function CustomDatePicker({ value, onChange, placeholder, minDate, isOpen: externalIsOpen,   hideInput = false 
 }) {
  const [isOpen, setIsOpen] = useState(false);
    const calendarOpen = externalIsOpen !== undefined ? externalIsOpen : isOpen;
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const calendarRef = useRef(null);
  

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get days in month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    // Empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    return days;
  };

const handleDateClick = (date) => {
  if (date) {
    // Format date without timezone conversion
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    onChange(formattedDate);
    setIsOpen(false);
  }
};

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const isDateDisabled = (date) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Disable past dates
    if (date < today) return true;
    
    // Disable dates before minDate (for check-out)
    if (minDate) {
      const min = new Date(minDate);
      min.setHours(0, 0, 0, 0);
      if (date <= min) return true;
    }
    
    return false;
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date) => {
    if (!date || !value) return false;
    const selectedDate = new Date(value);
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const formatDisplayDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <div className="relative" ref={calendarRef}>
      {/* Input Field - conditionally render */}
    {!hideInput && (
      <input
        type="text"
        readOnly
        value={formatDisplayDate(value)}
        onClick={() => setIsOpen(!isOpen)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800 cursor-pointer bg-white"
      />
    )}
      {/* Calendar Dropdown */}
     {/* Calendar Dropdown */}
{calendarOpen && (
  <div className={`${hideInput ? '' : 'absolute'} z-50 ${hideInput ? '' : 'mt-2'} bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-4 w-80`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h3 className="text-lg font-bold text-gray-900">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
            <button
              onClick={handleNextMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center text-xs font-semibold text-gray-600 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((date, index) => {
              const disabled = isDateDisabled(date);
              const selected = isSelected(date);
              const today = isToday(date);

              return (
                <button
                  key={index}
                  onClick={() => !disabled && handleDateClick(date)}
                  disabled={disabled || !date}
                  className={`
                    p-2 text-sm rounded-lg transition-all
                    ${!date ? "invisible" : ""}
                    ${disabled ? "text-gray-300 cursor-not-allowed" : "hover:bg-green-100 cursor-pointer"}
                    ${selected ? "bg-green-600 text-white font-bold hover:bg-green-700" : "text-gray-700"}
                    ${today && !selected ? "border-2 border-green-400 font-semibold" : ""}
                  `}
                >
                  {date ? date.getDate() : ""}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}