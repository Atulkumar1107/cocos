import Image from "next/image";
import Link from "next/link";

export default function EventCards({ experiences, filters }) {
  const daysOfWeek = [
    { name: "Mon", value: 1 },
    { name: "Tue", value: 2 },
    { name: "Wed", value: 3 },
    { name: "Thu", value: 4 },
    { name: "Fri", value: 5 },
    { name: "Sat", value: 6 },
    { name: "Sun", value: 0 },
  ];

  // Function to check if experience is available based on filters
  const isAvailableInDateRange = (experience) => {
    // If no filters applied, show all
    if (!filters.searchBy) return true;

    // If searching by day of week
    if (filters.searchBy === "dayOfWeek") {
      if (!filters.days || filters.days.length === 0) return true;
      
      // Check if experience is available on any of the selected days
      return experience.daysOfWeek.some((day) => filters.days.includes(day));
    }

    // If searching by date
    if (filters.searchBy === "date" && filters.arrival && filters.departure) {
      const arrival = new Date(filters.arrival);
      const departure = new Date(filters.departure);

      // If daily availability
      if (experience.availableDates === "daily") {
        return true;
      }

      // Check if any available dates fall within the range
      return experience.availableDates.some((dateStr) => {
        const date = new Date(dateStr);
        return date >= arrival && date <= departure;
      });
    }

    return true;
  };

  // Filter experiences by category and date
  const filteredExperiences = experiences
    .filter((exp) => !filters.category || filters.category === "all" || exp.category === filters.category)
    .filter((exp) => isAvailableInDateRange(exp));

  const getCategoryColor = (category) => {
    switch (category) {
      case "dining":
        return "bg-orange-100 text-orange-700";
      case "tour":
        return "bg-blue-100 text-blue-700";
      case "event":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Dummy price generator based on category
  const getPrice = (category) => {
    switch (category) {
      case "dining":
        return "₹2,500";
      case "tour":
        return "₹3,800";
      case "event":
        return "₹1,200";
      default:
        return "₹2,000";
    }
  };

  return (
    <>
      {/* Results Grid - 5 cards per row on desktop */}
      {filteredExperiences.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredExperiences.map((experience) => (
            <Link
              key={experience.id}
              href="/"
              className="group"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                {/* Image - No wishlist icon */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  {/* Category Badge */}
                  <span
                    className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${getCategoryColor(
                      experience.category
                    )} inline-block w-fit mb-3`}
                  >
                    {experience.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {experience.title}
                  </h3>

                  {/* Price */}
                  <p className="text-base font-bold text-gray-900 mb-2">
                    {getPrice(experience.category)} <span className="text-sm font-normal text-gray-600">per person</span>
                  </p>

                  {/* Time */}
                  <p className="text-sm text-gray-600 mb-1">{experience.time}</p>

                  {/* Availability */}
                  <p className="text-sm text-gray-500 mt-auto">
                    {experience.availability}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        // No Results Message
        <div className="text-center py-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg">
          <p className="text-xl text-gray-600 mb-2">
            {filters.searchBy === "date" 
              ? "No experiences available for the selected dates."
              : filters.searchBy === "dayOfWeek"
              ? "No experiences available on the selected days."
              : "No experiences found in this category."}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            {filters.searchBy === "date"
              ? "Try adjusting your arrival and departure dates or viewing all categories."
              : filters.searchBy === "dayOfWeek"
              ? "Try selecting different days of the week or viewing all categories."
              : "Try viewing all categories."}
          </p>
          <button
            onClick={() => window.location.href = '/events'}
            className="mt-4 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Clear Filters & View All
          </button>
        </div>
      )}

      {/* Custom CSS for subtle card hover */}
      <style jsx>{`
        .group:hover > div {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
}