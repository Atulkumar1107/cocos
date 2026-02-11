"use client";

import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import Image from "next/image";
import CustomDatePicker from "./module/components/custom_calendar";

export default function PlanItinerary() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
const [emailModalOpen, setEmailModalOpen] = useState(false);
const [userEmail, setUserEmail] = useState("");
const [emailSent, setEmailSent] = useState(false);
const [saveSuccess, setSaveSuccess] = useState(false);
  const [customRequestSubmitted, setCustomRequestSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    selectedPackage: null,
    customActivities: [],
    organizedDays: {},
    customizeForMe: false,
    interests: "",
  });

// Load saved itinerary on component mount
useEffect(() => {
  const savedData = localStorage.getItem("savedItinerary");
  if (savedData) {
    const parsed = JSON.parse(savedData);
    setFormData(parsed);
    // Optionally show a message that data was loaded
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  }
}, []);

  // Pre-built packages (dummy data)
  const packages = [
    {
      id: "3-day",
      name: "3-Day Island Escape",
      days: 3,
      price: 450,
      description: "Perfect weekend getaway with essential experiences",
      included: [
        "Coconut Tours",
        "Gift Shop Visit",
        "2 Dining Experiences",
        "Beach Activities",
      ],
      activityIds: ["coconut-tour", "gift-shop", "beach-dining"],
    },
    {
      id: "4-day",
      name: "4-Day Explorer",
      days: 4,
      price: 680,
      description: "Balanced mix of relaxation and adventure",
      included: [
        "Coconut Tours",
        "Jewellery Workshop",
        "Gift Shop Visit",
        "3 Dining Experiences",
        "Island Hopping",
      ],
      activityIds: ["coconut-tour", "jewellery-workshop", "gift-shop", "beach-dining", "sunset-cruise"],
    },
    {
      id: "7-day",
      name: "7-Day Ultimate Experience",
      days: 7,
      price: 1250,
      description: "Complete immersion in island life",
      included: [
        "All Coconut Tours & Workshops",
        "Jewellery & Bowl Workshops",
        "Gift Shop Visit",
        "6 Dining Experiences",
        "Island Hopping",
        "Water Sports",
      ],
      activityIds: ["coconut-tour", "jewellery-workshop", "bowl-workshop", "gift-shop", "beach-dining", "sunset-cruise"],
    },
  ];

  // Available activities (from Coconut Discovery Centre)
  const availableActivities = [
    {
      id: "coconut-tour",
      name: "Coconut Tours",
      category: "Tours",
      duration: "1 hour",
      price: 20,
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839256/pexels-cottonbro-5599688_kzcz0j.jpg",
    },
    {
      id: "jewellery-workshop",
      name: "Coconut Jewellery Workshop",
      category: "Workshop",
      duration: "4 hours",
      price: 65,
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839037/pexels-cottonbro-5599658_sgpj6z.jpg",
    },
    {
      id: "bowl-workshop",
      name: "Coconut Bowl Workshop",
      category: "Workshop",
      duration: "2 hours",
      price: 30,
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839086/pexels-anastasia-shuraeva-5566935_vjfkky.jpg",
    },
    {
      id: "gift-shop",
      name: "Gift Shop Visit",
      category: "Shopping",
      duration: "30 mins",
      price: 0,
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839192/pexels-any-lane-5728308_lbmvho.jpg",
    },
    {
      id: "beach-dining",
      name: "Beach Dining Experience",
      category: "Dining",
      duration: "2 hours",
      price: 85,
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839763/pexels-elevate-1269032_f051uh.jpg",
    },
    {
      id: "sunset-cruise",
      name: "Sunset Cruise",
      category: "Tours",
      duration: "3 hours",
      price: 120,
      image:
        "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762839893/pexels-bpixelss-2538225_eopspd.jpg",
    },
  ];

  const steps = [
    { number: 1, name: "Dates" },
    { number: 2, name: "Package" },
    { number: 3, name: "Customize" },
    { number: 4, name: "Organize" },
    { number: 5, name: "Review" },
    { number: 6, name: "Book" },
  ];

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePackageSelect = (packageId) => {
    setFormData({ ...formData, selectedPackage: packageId });
  };

  const handleCustomizeForMe = () => {
    setFormData({ ...formData, customizeForMe: true });
  };

  const toggleActivity = (activityId) => {
    const isSelected = formData.customActivities.includes(activityId);
    if (isSelected) {
      setFormData({
        ...formData,
        customActivities: formData.customActivities.filter(
          (id) => id !== activityId
        ),
      });
    } else {
      setFormData({
        ...formData,
        customActivities: [...formData.customActivities, activityId],
      });
    }
  };

  const calculateTotal = () => {
    let total = 0;
    if (formData.selectedPackage) {
      const pkg = packages.find((p) => p.id === formData.selectedPackage);
      total = pkg?.price || 0;
    }
    formData.customActivities.forEach((actId) => {
      const activity = availableActivities.find((a) => a.id === actId);
      total += activity?.price || 0;
    });
    return total;
  };

  const handleDragStart = (e, activityId) => {
    e.dataTransfer.setData("activityId", activityId);
  };

  const handleDrop = (e, day) => {
    e.preventDefault();
    const activityId = e.dataTransfer.getData("activityId");
    const newOrganizedDays = { ...formData.organizedDays };
    if (!newOrganizedDays[day]) {
      newOrganizedDays[day] = [];
    }
    if (!newOrganizedDays[day].includes(activityId)) {
      newOrganizedDays[day].push(activityId);
    }
    setFormData({ ...formData, organizedDays: newOrganizedDays });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeFromDay = (day, activityId) => {
    const newOrganizedDays = { ...formData.organizedDays };
    newOrganizedDays[day] = newOrganizedDays[day].filter(
      (id) => id !== activityId
    );
    setFormData({ ...formData, organizedDays: newOrganizedDays });
  };

  const getTripDays = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Get filtered activities based on selected package
  const getFilteredActivities = () => {
    if (!formData.selectedPackage) return availableActivities;
    const selectedPkg = packages.find((p) => p.id === formData.selectedPackage);
    if (!selectedPkg) return availableActivities;
    
    return availableActivities.filter((activity) =>
      selectedPkg.activityIds.includes(activity.id)
    );
  };

  // Get number of days for organizing (based on package)
  const getPackageDays = () => {
    if (!formData.selectedPackage) return getTripDays() || 7;
    const selectedPkg = packages.find((p) => p.id === formData.selectedPackage);
    return selectedPkg?.days || getTripDays() || 7;
  };

  // Book Complete Package
const handleBookPackage = () => {
  console.log("Booking:", formData);
  setBookingSuccess(true);
};

// Download PDF
const handleDownloadPDF = () => {
  const doc = new jsPDF();
  
  // Title
  doc.setFontSize(20);
  doc.setFont(undefined, "bold");
  doc.text("Your Island Itinerary", 105, 20, { align: "center" });
  
  // Trip Details
  doc.setFontSize(12);
  doc.setFont(undefined, "normal");
  doc.text("Trip Details:", 20, 40);
  doc.setFontSize(10);
  doc.text(`Check-In: ${formData.checkIn}`, 20, 50);
  doc.text(`Check-Out: ${formData.checkOut}`, 20, 57);
  doc.text(`Duration: ${getPackageDays()} days`, 20, 64);
  
  const selectedPkg = packages.find((p) => p.id === formData.selectedPackage);
  doc.text(`Package: ${selectedPkg?.name || "Custom"}`, 20, 71);
  
  // Daily Schedule
  doc.setFontSize(12);
  doc.setFont(undefined, "bold");
  doc.text("Daily Schedule:", 20, 85);
  
  let yPos = 95;
  doc.setFontSize(10);
  doc.setFont(undefined, "normal");
  
  Object.entries(formData.organizedDays).forEach(([day, activities]) => {
    doc.setFont(undefined, "bold");
    doc.text(`Day ${day}:`, 20, yPos);
    doc.setFont(undefined, "normal");
    yPos += 7;
    
    activities.forEach((actId) => {
      const activity = availableActivities.find((a) => a.id === actId);
      if (activity) {
        doc.text(`  • ${activity.name} (${activity.duration})`, 25, yPos);
        yPos += 7;
      }
    });
    yPos += 3;
    
    // Add new page if needed
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
  });
  
  // Cost Breakdown
  yPos += 10;
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }
  
  doc.setFontSize(12);
  doc.setFont(undefined, "bold");
  doc.text("Cost Breakdown:", 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont(undefined, "normal");
  
  if (formData.selectedPackage) {
    const pkg = packages.find((p) => p.id === formData.selectedPackage);
    doc.text(`Package: $${pkg?.price}`, 20, yPos);
    yPos += 7;
  }
  
  formData.customActivities.forEach((actId) => {
    const activity = availableActivities.find((a) => a.id === actId);
    if (activity && activity.price > 0) {
      doc.text(`${activity.name}: $${activity.price}`, 20, yPos);
      yPos += 7;
    }
  });
  
  yPos += 5;
  doc.setFontSize(14);
  doc.setFont(undefined, "bold");
  doc.text(`Total: $${calculateTotal()}`, 20, yPos);
  
  // Save PDF
  doc.save("island-itinerary.pdf");
};

// Email Modal
const handleEmailSubmit = () => {
  if (userEmail) {
    console.log("Sending itinerary to:", userEmail);
    setEmailSent(true);
    setTimeout(() => {
      setEmailModalOpen(false);
      setEmailSent(false);
      setUserEmail("");
    }, 2000);
  }
};

// Save for Later
const handleSaveForLater = () => {
  localStorage.setItem("savedItinerary", JSON.stringify(formData));
  setSaveSuccess(true);
  setTimeout(() => setSaveSuccess(false), 3000);
};

  return (
    <>
      {/* Hero Section - More Compact */}
      <section
        className="relative py-12 px-6 sm:px-12 overflow-hidden min-h-[500px] flex items-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762859213/pexels-asadphoto-1024967_m4kvir.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 mx-auto max-w-5xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Plan Your Perfect Itinerary
          </h1>
          <p className="text-lg md:text-xl">
            Customize your dream island vacation with our easy planning tool
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background:
              "linear-gradient(to top, rgba(242, 237, 234, 1) 0%, rgba(242, 237, 234, 0) 20%)",
          }}
        ></div>
      </section>

      {/* Main Content - More Compact */}
      <div
        className="relative py-10 px-6 sm:px-12 min-h-screen"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea",
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Progress Bar - More Compact */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base transition-all ${
                        currentStep >= step.number
                          ? "bg-green-600 text-white"
                          : "bg-white text-gray-400 border-2 border-gray-300"
                      }`}
                    >
                      {step.number}
                    </div>
                    <span
                      className={`text-xs mt-1.5 font-semibold ${
                        currentStep >= step.number
                          ? "text-gray-900"
                          : "text-gray-500"
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-0.5 flex-1 mx-2 transition-all ${
                        currentStep > step.number
                          ? "bg-green-600"
                          : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content - More Compact */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-white/50 min-h-[300px]">
      {/* Step 1: Select Dates */}
{currentStep === 1 && (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-3">
      When are you visiting?
    </h2>
    <p className="text-gray-600 mb-6">
      Select your arrival and departure dates
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Check-In Date *
        </label>
        <CustomDatePicker
          value={formData.checkIn}
          onChange={(date) => setFormData({ ...formData, checkIn: date })}
          placeholder="Select check-in date"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Check-Out Date *
        </label>
        <CustomDatePicker
          value={formData.checkOut}
          onChange={(date) => setFormData({ ...formData, checkOut: date })}
          placeholder="Select check-out date"
          minDate={formData.checkIn}
        />
      </div>
    </div>

    {formData.checkIn && formData.checkOut && (
      <div className="mt-5 p-4 bg-green-50 rounded-xl">
        <p className="text-green-800 font-semibold">
          Your trip: {getTripDays()} days
        </p>
      </div>
    )}
  </div>
)}

            {/* Step 2: Choose Package or Customize For Me */}
            {currentStep === 2 && !formData.customizeForMe && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Choose Your Package
                </h2>
                <p className="text-gray-600 mb-6">
                  Select a pre-built itinerary or let us customize one for you
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => handlePackageSelect(pkg.id)}
                      className={`cursor-pointer rounded-2xl p-5 border-2 transition-all hover:shadow-xl ${
                        formData.selectedPackage === pkg.id
                          ? "border-green-600 bg-green-50"
                          : "border-gray-200 bg-white hover:border-green-300"
                      }`}
                    >
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {pkg.name}
                        </h3>
                        <p className="text-3xl font-bold text-green-600 mb-2">
                          ${pkg.price}
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          {pkg.description}
                        </p>
                        <div className="text-left space-y-1.5">
                          <p className="font-semibold text-gray-700 text-sm">
                            Includes:
                          </p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {pkg.included.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-green-600 mt-0.5">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Customize For Me Card - Same Row */}
                  <div
                    onClick={handleCustomizeForMe}
                    className="cursor-pointer rounded-2xl p-5 border-2 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:border-blue-400 transition-all hover:shadow-xl"
                  >
                    <div className="text-center h-full flex flex-col justify-center">
                      <div className="text-4xl mb-3">✨</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Customize For Me
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Not sure what you want? Let our experts create a
                        personalized itinerary just for you
                      </p>
                      <div className="mt-auto">
                        <span className="inline-block px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all">
                          Get Custom Plan
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

{/* Customize For Me Form */}
{currentStep === 2 && formData.customizeForMe && (
  <div>
    {!customRequestSubmitted ? (
      <>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Tell Us About Your Dream Trip
        </h2>
        <p className="text-gray-600 mb-6">
          Share your interests and we'll create a personalized itinerary
          for you
        </p>

        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Check-In Date *
              </label>
              <CustomDatePicker
                value={formData.checkIn}
                onChange={(date) => setFormData({ ...formData, checkIn: date })}
                placeholder="Select check-in date"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Check-Out Date *
              </label>
              <CustomDatePicker
                value={formData.checkOut}
                onChange={(date) => setFormData({ ...formData, checkOut: date })}
                placeholder="Select check-out date"
                minDate={formData.checkIn}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Interests & Preferences *
            </label>
            <textarea
              value={formData.interests}
              onChange={(e) =>
                setFormData({ ...formData, interests: e.target.value })
              }
              rows="5"
              placeholder="Tell us about your interests, preferred activities, dietary requirements, accessibility needs, budget preferences, etc..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800"
            ></textarea>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() =>
                setFormData({ ...formData, customizeForMe: false })
              }
              className="text-gray-600 cursor-pointer hover:text-gray-900 font-semibold"
            >
              ← Back to Packages
            </button>

            <button
              onClick={() => {
                console.log("Custom Request:", formData);
                setCustomRequestSubmitted(true);
              }}
              className="px-7 py-3.5 cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Submit Request
            </button>
          </div>
        </div>
      </>
    ) : (
      // Success Message
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Request Submitted Successfully! 🎉
        </h2>
        <p className="text-gray-600 mb-2 text-lg">
          Thank you for your request!
        </p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Our team will create a personalized itinerary based on your preferences and send it to your email within 24 hours.
        </p>

        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5 max-w-lg mx-auto mb-8">
          <h3 className="font-bold text-gray-900 mb-3">Your Details:</h3>
          <div className="text-left space-y-2 text-sm text-gray-700">
            <p>
              <span className="font-semibold">Check-In:</span>{" "}
              {formData.checkIn ? new Date(formData.checkIn).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              }) : "Not specified"}
            </p>
            <p>
              <span className="font-semibold">Check-Out:</span>{" "}
              {formData.checkOut ? new Date(formData.checkOut).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              }) : "Not specified"}
            </p>
            <p>
              <span className="font-semibold">Interests:</span>{" "}
              {formData.interests || "Not specified"}
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setCustomRequestSubmitted(false);
            setFormData({ ...formData, customizeForMe: false });
          }}
          className="px-7 py-3.5 cursor-pointer bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          ← Back to Packages
        </button>
      </div>
    )}
  </div>
)}

    {/* Step 3: Customize Activities */}
{currentStep === 3 && (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-3">
      Customize Your Activities
    </h2>
    <p className="text-gray-600 mb-6">
      Add or remove activities from your {packages.find((p) => p.id === formData.selectedPackage)?.name || "package"}
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {getFilteredActivities().map((activity) => (
        <div
          key={activity.id}
          onClick={() => toggleActivity(activity.id)}
          className="group cursor-pointer"
        >
          <div
            className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition-all duration-300 h-full flex flex-col ${
              formData.customActivities.includes(activity.id)
                ? "border-green-600 ring-2 ring-green-200"
                : "border-gray-100"
            }`}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-gray-200">
              <Image
                src={activity.image}
                alt={activity.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {formData.customActivities.includes(activity.id) && (
                <div className="absolute top-3 right-3 bg-green-600 text-white rounded-full p-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              {/* Category Badge */}
              <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-blue-100 text-blue-700 inline-block w-fit mb-3">
                {activity.category}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {activity.name}
              </h3>

              {/* Price */}
              <p className="text-base font-bold text-gray-900 mb-2">
                ${activity.price} <span className="text-sm font-normal text-gray-600">per person</span>
              </p>

              {/* Duration */}
              <p className="text-sm text-gray-600 mt-auto">
                {activity.duration}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Custom CSS for subtle card hover */}
    <style jsx>{`
      .group:hover > div {
        transform: scale(1.02);
      }
    `}</style>
  </div>
)}

            {/* Step 4: Organize Days */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Organize Your Days
                </h2>
                <p className="text-gray-600 mb-6">
                  Drag and drop activities to organize them by day ({getPackageDays()} days)
                </p>

                {/* Available Activities to Drag */}
                <div className="mb-7">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Available Activities
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {formData.customActivities.map((actId) => {
                      const activity = availableActivities.find(
                        (a) => a.id === actId
                      );
                      const isPlaced = Object.values(
                        formData.organizedDays
                      ).some((dayActivities) =>
                        dayActivities.includes(actId)
                      );
                      if (isPlaced) return null;

                      return (
                        <div
                          key={actId}
                          draggable
                          onDragStart={(e) => handleDragStart(e, actId)}
                          className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold cursor-move hover:bg-blue-200 transition-all"
                        >
                          {activity?.name}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Day Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.from({ length: getPackageDays() }).map((_, i) => {
                    const dayNum = i + 1;
                    return (
                      <div
                        key={dayNum}
                        onDrop={(e) => handleDrop(e, dayNum)}
                        onDragOver={handleDragOver}
                        className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300 min-h-[280px]"
                      >
                        <h4 className="font-bold text-gray-900 mb-3 text-base">
                          Day {dayNum}
                        </h4>
                        <div className="space-y-2">
                          {formData.organizedDays[dayNum]?.map((actId) => {
                            const activity = availableActivities.find(
                              (a) => a.id === actId
                            );
                            return (
                              <div
                                key={actId}
                                className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 relative group"
                              >
                                <p className="text-sm font-semibold text-gray-900 pr-6">
                                  {activity?.name}
                                </p>
                                <p className="text-xs text-gray-600 mt-0.5">
                                  {activity?.duration}
                                </p>
                                <button
                                  onClick={() => removeFromDay(dayNum, actId)}
                                  className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity text-lg font-bold"
                                >
                                  ×
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 5: Review & Cost */}
            {currentStep === 5 && (
              <div className="mt-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Review Your Itinerary
                </h2>
                <p className="text-gray-600 mb-6">
                  Check your complete itinerary and cost breakdown
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Itinerary Details */}
                  <div className="lg:col-span-2 space-y-5">
                    <div className="bg-gray-50 rounded-xl p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        Trip Details
                      </h3>
                      <div className="space-y-2 text-gray-700 text-sm">
                        <p>
                          <span className="font-semibold">Check-In:</span>{" "}
                          {formData.checkIn}
                        </p>
                        <p>
                          <span className="font-semibold">Check-Out:</span>{" "}
                          {formData.checkOut}
                        </p>
                        <p>
                          <span className="font-semibold">Duration:</span>{" "}
                          {getPackageDays()} days
                        </p>
                        <p>
                          <span className="font-semibold">Package:</span>{" "}
                          {formData.selectedPackage
                            ? packages.find(
                                (p) => p.id === formData.selectedPackage
                              )?.name
                            : "Custom"}
                        </p>
                      </div>
                    </div>

                    {/* Daily Schedule */}
                    <div className="bg-gray-50 rounded-xl p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        Daily Schedule
                      </h3>
                      <div className="space-y-3">
                        {Object.entries(formData.organizedDays).map(
                          ([day, activities]) => (
                            <div key={day}>
                              <h4 className="font-bold text-gray-900 mb-1.5 text-sm">
                                Day {day}
                              </h4>
                              <ul className="space-y-1 ml-4">
                                {activities.map((actId) => {
                                  const activity = availableActivities.find(
                                    (a) => a.id === actId
                                  );
                                  return (
                                    <li
                                      key={actId}
                                      className="text-gray-700 text-sm"
                                    >
                                      • {activity?.name} ({activity?.duration})
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Cost Breakdown */}
                  <div>
                    <div className="bg-green-50 rounded-xl p-5 sticky top-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Cost Breakdown
                      </h3>
                      <div className="space-y-2.5 mb-5">
                        {formData.selectedPackage && (
                          <div className="flex justify-between text-gray-700 text-sm">
                            <span>Package</span>
                            <span className="font-semibold">
                              $
                              {
                                packages.find(
                                  (p) => p.id === formData.selectedPackage
                                )?.price
                              }
                            </span>
                          </div>
                        )}
                        {formData.customActivities.map((actId) => {
                          const activity = availableActivities.find(
                            (a) => a.id === actId
                          );
                          if (activity?.price === 0) return null;
                          return (
                            <div
                              key={actId}
                              className="flex justify-between text-gray-700 text-sm"
                            >
                              <span>{activity?.name}</span>
                              <span>${activity?.price}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="border-t-2 border-green-200 pt-4">
                        <div className="flex justify-between text-2xl font-bold text-gray-900">
                          <span>Total</span>
                          <span className="text-green-600">
                            ${calculateTotal()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

      {/* Step 6: Save/Book */}
{currentStep === 6 && (
  <div>
    {!bookingSuccess ? (
      <>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Save & Book Your Trip
        </h2>
        <p className="text-gray-600 mb-6">
          Choose how you'd like to proceed with your itinerary
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-5 max-w-2xl mx-auto">
          {/* Book Everything */}
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Book Everything
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Book your entire itinerary in one convenient checkout
            </p>
            <div className="text-3xl font-bold text-green-600 mb-5">
              ${calculateTotal()}
            </div>
            <button
              onClick={handleBookPackage}
              className="w-72 cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Complete Package
            </button>
          </div>
        </div>

        {/* Download/Email Options */}
        <div className="mt-10 border-t-2 border-gray-200 pt-7">
          <h3 className="text-xl font-bold text-gray-900 mb-5 text-center">
            Save Your Itinerary
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={handleDownloadPDF}
              className="px-5 cursor-pointer py-2.5 bg-white border-2 border-gray-300 text-gray-700 font-semibold text-sm rounded-xl hover:border-gray-400 transition-all"
            >
              📥 Download PDF
            </button>
            <button
              onClick={() => setEmailModalOpen(true)}
              className="px-5 py-2.5 cursor-pointer bg-white border-2 border-gray-300 text-gray-700 font-semibold text-sm rounded-xl hover:border-gray-400 transition-all"
            >
              📧 Email to Me
            </button>
            <button
              onClick={handleSaveForLater}
              className="px-5 py-2.5 cursor-pointer bg-white border-2 border-gray-300 text-gray-700 font-semibold text-sm rounded-xl hover:border-gray-400 transition-all"
            >
              💾 Save for Later
            </button>
          </div>

          {/* Save Success Message */}
          {saveSuccess && (
            <div className="mt-5 p-4 bg-green-50 border-2 border-green-200 rounded-xl text-center max-w-md mx-auto">
              <p className="text-green-800 font-semibold">
                ✓ Itinerary saved successfully! You can access it later.
              </p>
            </div>
          )}
        </div>
      </>
    ) : (
      // Booking Success Message
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Booking Confirmed! 🎉
        </h2>
        <p className="text-gray-600 mb-2 text-lg">
          Your island adventure is all set!
        </p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          You'll receive a confirmation email shortly with all the details of your booking.
        </p>

        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5 max-w-lg mx-auto mb-8">
          <h3 className="font-bold text-gray-900 mb-3">Booking Summary:</h3>
          <div className="text-left space-y-2 text-sm text-gray-700">
            <p>
              <span className="font-semibold">Check-In:</span>{" "}
              {formData.checkIn ? new Date(formData.checkIn).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              }) : "Not specified"}
            </p>
            <p>
              <span className="font-semibold">Check-Out:</span>{" "}
              {formData.checkOut ? new Date(formData.checkOut).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              }) : "Not specified"}
            </p>
            <p>
              <span className="font-semibold">Package:</span>{" "}
              {packages.find((p) => p.id === formData.selectedPackage)?.name || "Custom"}
            </p>
            <p>
              <span className="font-semibold">Total Activities:</span>{" "}
              {formData.customActivities.length}
            </p>
            <p className="text-lg font-bold text-green-600 pt-2 border-t-2 border-green-200 mt-3">
              Total Cost: ${calculateTotal()}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={handleDownloadPDF}
            className="px-6 py-3 cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            📥 Download Receipt
          </button>
          <button
            onClick={() => {
              setBookingSuccess(false);
              setCurrentStep(1);
              setFormData({
                checkIn: "",
                checkOut: "",
                selectedPackage: null,
                customActivities: [],
                organizedDays: {},
                customizeForMe: false,
                interests: "",
              });
            }}
            className="px-6 py-3 cursor-pointer bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Plan Another Trip
          </button>
        </div>
      </div>
    )}

    {/* Email Modal */}
    {emailModalOpen && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
          {!emailSent ? (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Email Your Itinerary
              </h3>
              <p className="text-gray-600 mb-5 text-sm">
                Enter your email address to receive your complete itinerary
              </p>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800 mb-5"
              />
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setEmailModalOpen(false);
                    setUserEmail("");
                  }}
                  className="flex-1 px-4 py-2.5 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEmailSubmit}
                  disabled={!userEmail}
                  className="flex-1 px-4 py-2.5 cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Send Email
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-lg font-bold text-gray-900">
                Email Sent Successfully!
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Check your inbox at <span className="font-semibold">{userEmail}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
)}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t-2 border-gray-200">
              {currentStep > 1 && !formData.customizeForMe && (
                <button
                  onClick={handleBack}
                  className="px-6 py-2.5 bg-gray-200 cursor-pointer hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all"
                >
                  ← Back
                </button>
              )}
              {currentStep < 6 && !formData.customizeForMe && (
                <button
                  onClick={handleNext}
                  disabled={
                    (currentStep === 1 &&
                      (!formData.checkIn || !formData.checkOut)) ||
                    (currentStep === 2 && !formData.selectedPackage)
                  }
                  className="ml-auto px-6 py-2.5 cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}