"use client";

import { useEffect, useRef } from "react";

export default function VisitUs() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const locations = [
    {
      name: "Salty's Grill & Bakery",
      lat: -12.188098994546593,
      lng: 96.82664302420952,
      icon: "🍽️",
      address: "Cocos International Airport, Cocos (Keeling) Islands"
    },
    {
      name: "Surfer Girl Restaurant & Brewery",
      lat: -12.189503544573059,
      lng: 96.82724817420954,
      icon: "🍺",
      address: "223 William Keeling Cres, West Island WA 6799"
    },
    {
      name: "Wild Coconut Discovery Centre",
      lat: -12.154218543909018,
      lng: 96.82089167420874,
      icon: "🥥",
      address: "Lot 220 Mahoon Rd West (Keeling) Island, 6799"
    }
  ];

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined" || mapInstanceRef.current) return;

    // Load Leaflet CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    // Load Leaflet JS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;

    script.onload = () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      const L = window.L;

      // Initialize map centered between all locations
      const map = L.map(mapRef.current).setView([-12.177, 96.826], 13);

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);

      // Create custom marker icons with different colors
      const iconColors = {
        "🍽️": "red",    // Restaurant - Red
        "🍺": "blue",    // Brewery - Blue  
        "🥥": "green"    // Discovery Centre - Green
      };

      // Add markers for each location using proper Leaflet markers
      locations.forEach((location) => {
        // Create custom marker icon
        const customMarkerIcon = L.divIcon({
          html: `
            <div style="
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              background: #18181b;
              border: 3px solid white;
              border-radius: 50%;
              box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            ">
              <span style="font-size: 18px; color: white;">${location.icon}</span>
            </div>
            <div style="
              position: absolute;
              top: 100%;
              left: 50%;
              transform: translateX(-50%);
              margin-top: 8px;
              background: #18181b;
              color: white;
              padding: 6px 12px;
              border-radius: 12px;
              font-weight: bold;
              font-size: 12px;
              white-space: nowrap;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              border: 1px solid white;
            ">
              ${location.name}
            </div>
          `,
          className: "custom-marker",
          iconSize: [120, 80], // Width, Height (includes label)
          iconAnchor: [20, 40], // Point of the icon which will correspond to marker's location
          popupAnchor: [0, -45] // Point from which the popup should open relative to the iconAnchor
        });

        const marker = L.marker([location.lat, location.lng], {
          icon: customMarkerIcon
        }).addTo(map);

        // Add popup
        marker.bindPopup(`
          <div style="text-align: center; padding: 12px; min-width: 220px;">
            <div style="font-size: 28px; margin-bottom: 8px;">${location.icon}</div>
            <strong style="font-size: 16px; display: block; margin-bottom: 8px; color: #18181b;">${location.name}</strong>
            <p style="font-size: 12px; color: #666; margin-bottom: 12px; line-height: 1.4;">${location.address}</p>
            <a 
              href="https://www.google.com/maps/dir//${location.lat},${location.lng}" 
              target="_blank"
              rel="noopener noreferrer"
              style="
                display: inline-block;
                padding: 8px 16px;
                background: #18181b;
                color: white;
                text-decoration: none;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
                transition: all 0.3s ease;
              "
              onmouseover="this.style.backgroundColor='#3b82f6'"
              onmouseout="this.style.backgroundColor='#18181b'"
            >
              Get Directions
            </a>
          </div>
        `);

        // Add hover effects
        marker.on('mouseover', function() {
          this.openPopup();
        });
      });

      // Fit bounds to show all markers
      const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]));
      map.fitBounds(bounds, { padding: [60, 60] });

      mapInstanceRef.current = map;
    };

    document.body.appendChild(script);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section
      className="relative py-16 px-6 sm:px-16 overflow-hidden"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762408026/palm-shadow-4_bgbhgf.png')",
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 sm:text-5xl mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Find us at these beautiful locations across the Cocos (Keeling) Islands
          </p>
        </div>

        {/* Single Full-Width Map */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div 
            ref={mapRef}
            className="w-full h-[500px] lg:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}