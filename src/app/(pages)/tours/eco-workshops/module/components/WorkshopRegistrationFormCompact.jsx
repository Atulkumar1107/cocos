"use client";

import { useState, useEffect } from "react";

export default function WorkshopRegistrationFormCom({ preSelectedWorkshop = "" }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    workshop: preSelectedWorkshop || "",
    dateTime: "",
    participants: "1",
    specialRequirements: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [workshopDropdownOpen, setWorkshopDropdownOpen] = useState(false);
  const [participantsDropdownOpen, setParticipantsDropdownOpen] = useState(false);

  const workshops = [
    "Sourdough Bread Making",
    "Coconut Oil Making",
    "Coconut Chip Making",
    "Coconut Cream Making",
  ];

  // Update workshop when preSelectedWorkshop changes
  useEffect(() => {
    if (preSelectedWorkshop) {
      setFormData((prev) => ({
        ...prev,
        workshop: preSelectedWorkshop,
      }));
    }
  }, [preSelectedWorkshop]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectWorkshop = (workshop) => {
    setFormData((prev) => ({
      ...prev,
      workshop: workshop,
    }));
    setWorkshopDropdownOpen(false);
  };

  const selectParticipants = (num) => {
    setFormData((prev) => ({
      ...prev,
      participants: num.toString(),
    }));
    setParticipantsDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setWorkshopDropdownOpen(false);
        setParticipantsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate workshop selection
    if (!formData.workshop) {
      alert("Please select a workshop");
      return;
    }
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form but keep preselected workshop if exists
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      workshop: preSelectedWorkshop || "",
      dateTime: "",
      participants: "1",
      specialRequirements: "",
    });

    // Close any open dropdowns
    setWorkshopDropdownOpen(false);
    setParticipantsDropdownOpen(false);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="w-full">
      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-2xl p-4 animate-fadeIn">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="text-sm font-bold text-green-900">Success!</h3>
              <p className="text-xs text-green-700">We'll contact you soon.</p>
            </div>
          </div>
        </div>
      )}

      {/* Registration Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-white/50"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Register Now</h3>

        {/* Name Fields - Side by Side */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-800 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition text-gray-900"
              placeholder="John"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-800 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition text-gray-900"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email and Phone - Side by Side */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition text-gray-900"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition text-gray-900"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        {/* Workshop and Date - Side by Side */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Workshop Selection - Custom Dropdown */}
          <div>
            <label htmlFor="workshop" className="block text-sm font-semibold text-gray-800 mb-2">
              Workshop *
            </label>
            <div className="relative dropdown-container">
              <button
                type="button"
                onClick={() => setWorkshopDropdownOpen(!workshopDropdownOpen)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition bg-white text-gray-900 text-left flex items-center justify-between"
              >
                <span className={formData.workshop ? "text-gray-900" : "text-gray-400"}>
                  {formData.workshop || "Choose..."}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    workshopDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Options */}
              {workshopDropdownOpen && (
                <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-fadeIn">
                  {workshops.map((workshop, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => selectWorkshop(workshop)}
                      className="w-full px-4 py-3 text-left text-gray-900 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      {workshop}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Preferred Date */}
          <div>
            <label htmlFor="dateTime" className="block text-sm font-semibold text-gray-800 mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              id="dateTime"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition text-gray-900"
            />
          </div>
        </div>

        {/* Participants and Special Requirements - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Participants */}
          <div>
            <label htmlFor="participants" className="block text-sm font-semibold text-gray-800 mb-2">
              Participants *
            </label>
            <div className="relative dropdown-container">
              <button
                type="button"
                onClick={() => setParticipantsDropdownOpen(!participantsDropdownOpen)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition bg-white text-gray-900 text-left flex items-center justify-between"
              >
                <span>
                  {formData.participants} {formData.participants === "1" ? "person" : "people"}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    participantsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Options */}
              {participantsDropdownOpen && (
                <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-60 overflow-y-auto animate-fadeIn">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => selectParticipants(num)}
                      className="w-full px-4 py-3 text-left text-gray-900 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      {num} {num === 1 ? "person" : "people"}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Special Requirements */}
          <div>
            <label htmlFor="specialRequirements" className="block text-sm font-semibold text-gray-800 mb-2">
              Special Requirements
            </label>
            <textarea
              id="specialRequirements"
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              rows="1"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition resize-none text-gray-900 h-[52px]"
              placeholder="Any special requests..."
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all hover:scale-[1.02] shadow-lg"
        >
          Register
        </button>
      </form>

      {/* Animation styles */}
      <style jsx>{`
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
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}