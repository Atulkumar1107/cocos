export const eventCategories = [
  "All Events",
  "Workshops",
  "Cultural Events", 
  "Tours",
  "Festivals",
  "Community"
];

export const events = [
  {
    id: 1,
    slug: "christmas-island-festival",
    title: "Christmas Island Festival",
    category: "Festivals",
    date: "2025-12-25",
    time: "10:00 AM - 6:00 PM",
    location: "Home Island Community Center",
    shortDescription: "Join us for a festive celebration with traditional food, music, and cultural performances.",
    description: `
      <p>Celebrate the festive season island-style at our annual Christmas Island Festival. This beloved event brings together the entire community for a day of joy, tradition, and togetherness.</p>
      
      <h2>What to Expect</h2>
      <p>The festival features traditional Malay cultural performances, including dance and music that showcase our rich heritage. Local artisans display their crafts, offering unique handmade gifts perfect for the holiday season.</p>
      
      <p>Food stalls serve authentic island cuisine—from coconut-based delicacies to fresh seafood prepared using traditional methods. Children's activities include coconut painting, traditional games, and storytelling sessions with community elders.</p>
      
      <h2>Schedule</h2>
      <ul>
        <li>10:00 AM - Opening ceremony and traditional blessing</li>
        <li>11:00 AM - Cultural performances begin</li>
        <li>12:30 PM - Community feast</li>
        <li>2:00 PM - Artisan market opens</li>
        <li>4:00 PM - Children's activities</li>
        <li>5:30 PM - Closing ceremony</li>
      </ul>
      
      <p>This is a family-friendly event welcoming both residents and visitors. Come experience the warmth of island hospitality and create lasting holiday memories.</p>
    `,
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg",
    capacity: 200,
    price: 0, // Free event
    bookingRequired: true
  },
  {
    id: 2,
    slug: "traditional-cooking-workshop",
    title: "Traditional Cooking Workshop",
    category: "Workshops",
    date: "2026-01-10",
    time: "9:00 AM - 1:00 PM",
    location: "Surfer Girl Restaurant",
    shortDescription: "Learn to prepare authentic Cocos Malay dishes using traditional techniques and fresh local ingredients.",
    description: `
      <p>Immerse yourself in the culinary traditions of the Cocos Islands with our hands-on cooking workshop. Led by experienced local chefs, you'll learn to prepare authentic dishes that have been passed down through generations.</p>
      
      <h2>What You'll Learn</h2>
      <p>Master the art of coconut cream extraction, the foundation of many island dishes. Learn to prepare traditional curry pastes using fresh spices and herbs. Cook signature dishes including coconut fish curry, sambal, and sweet coconut desserts.</p>
      
      <h2>Workshop Includes</h2>
      <ul>
        <li>All ingredients and cooking equipment provided</li>
        <li>Recipe booklet to take home</li>
        <li>Lunch featuring the dishes you prepare</li>
        <li>Certificate of completion</li>
        <li>Small group size (maximum 12 participants)</li>
      </ul>
      
      <p>No prior cooking experience necessary—our instructors guide you through each step. Vegetarian options available upon request. This workshop is perfect for food enthusiasts wanting to take a piece of island culture home with them.</p>
    `,
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407531/pexels-rachel-claire-5864291_o1i0nt.jpg",
    capacity: 12,
    price: 85,
    bookingRequired: true
  },
  {
    id: 3,
    slug: "lunar-new-year-celebration",
    title: "Lunar New Year Celebration",
    category: "Cultural Events",
    date: "2026-01-29",
    time: "6:00 PM - 10:00 PM",
    location: "Direction Island Beach",
    shortDescription: "Welcome the Lunar New Year with traditional performances, lanterns, and a spectacular beach celebration.",
    description: `
      <p>Ring in the Lunar New Year with an unforgettable beach celebration under the stars. This special event combines traditional customs with the natural beauty of our island paradise.</p>
      
      <h2>Evening Highlights</h2>
      <p>The celebration begins with a traditional dragon dance performed by local youth trained in this ancient art. Hundreds of lanterns illuminate the beach, creating a magical atmosphere as the sun sets over the Indian Ocean.</p>
      
      <p>Enjoy a feast featuring special Lunar New Year dishes prepared by island cooks. Traditional games and activities entertain all ages, from children's lantern making to fortune telling with community elders.</p>
      
      <h2>Cultural Significance</h2>
      <p>The Lunar New Year is an important celebration in the Cocos Malay calendar, marking new beginnings and honoring ancestors. This event welcomes everyone to experience these beautiful traditions and their meaning to our community.</p>
      
      <p>Bring your family and friends for an evening of cultural exchange, delicious food, and the beauty of celebration by the sea. Red clothing is encouraged for good fortune!</p>
    `,
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407439/pexels-vladimirsrajber-18631417_th5dii.jpg",
    capacity: 300,
    price: 0,
    bookingRequired: true
  },
  {
    id: 4,
    slug: "coconut-oil-processing-demo",
    title: "Coconut Oil Processing Demo",
    category: "Workshops",
    date: "2026-02-05",
    time: "2:00 PM - 4:00 PM",
    location: "Wild Coconut Estate",
    shortDescription: "Witness traditional coconut oil extraction methods and learn about sustainable coconut farming practices.",
    description: `
      <p>Discover the journey from coconut palm to finished oil in this fascinating demonstration at Wild Coconut Estate. Learn traditional processing methods that have sustained island life for generations.</p>
      
      <h2>Demonstration Includes</h2>
      <p>Watch skilled workers climb coconut palms to harvest mature nuts. Observe the husking process and separation of meat from shell. See traditional methods of grating, pressing, and extracting pure virgin coconut oil.</p>
      
      <h2>Educational Experience</h2>
      <p>Our guides explain the nutritional benefits of virgin coconut oil and its many uses—from cooking to natural skincare. Learn about sustainable farming practices that protect our environment while maintaining productivity.</p>
      
      <ul>
        <li>Live coconut harvesting demonstration</li>
        <li>Traditional oil extraction process</li>
        <li>Taste testing of fresh coconut products</li>
        <li>Q&A with experienced coconut farmers</li>
        <li>Take-home samples of virgin coconut oil</li>
      </ul>
      
      <p>This hands-on experience provides deep appreciation for the coconut's importance to island culture and economy. Perfect for families and anyone interested in traditional agriculture and sustainable food production.</p>
    `,
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763014661/pexels-valeriya-kobzar-42371713-11790418_qg4q8s.jpg",
    capacity: 25,
    price: 35,
    bookingRequired: true
  },
  {
    id: 5,
    slug: "snorkeling-adventure-tour",
    title: "Snorkeling Adventure Tour",
    category: "Tours",
    date: "2026-02-14",
    time: "8:00 AM - 12:00 PM",
    location: "Departure from Home Island Jetty",
    shortDescription: "Explore pristine coral reefs and swim with tropical fish in crystal-clear lagoon waters.",
    description: `
      <p>Dive into the underwater wonderland of Cocos Islands with our guided snorkeling adventure. Expert guides lead you to the best spots where coral gardens teem with colorful marine life.</p>
      
      <h2>Tour Highlights</h2>
      <p>Visit three premium snorkeling locations, each offering unique underwater landscapes. Swim alongside sea turtles in their natural habitat. Discover vibrant coral formations hosting hundreds of tropical fish species.</p>
      
      <h2>What's Included</h2>
      <ul>
        <li>Professional snorkeling guide</li>
        <li>All snorkeling equipment (mask, fins, snorkel)</li>
        <li>Boat transfers between locations</li>
        <li>Underwater identification guide</li>
        <li>Morning refreshments and tropical fruit</li>
        <li>Underwater camera available for rent</li>
      </ul>
      
      <h2>Suitable For</h2>
      <p>This tour welcomes beginners and experienced snorkelers. Our guides provide basic instruction for those new to snorkeling. All equipment is high quality and properly maintained for safety and comfort.</p>
      
      <p>The calm, clear waters of our lagoon offer perfect conditions for underwater exploration. Visibility often exceeds 30 meters, allowing spectacular views of coral formations and marine life.</p>
    `,
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg",
    capacity: 15,
    price: 95,
    bookingRequired: true
  },
  {
    id: 6,
    slug: "craft-market-weekend",
    title: "Craft Market Weekend",
    category: "Community",
    date: "2026-03-07",
    time: "9:00 AM - 5:00 PM",
    location: "Home Island Village Square",
    shortDescription: "Browse handmade crafts, artwork, and traditional items created by local artisans.",
    description: `
      <p>Celebrate island creativity at our monthly Craft Market Weekend. Local artisans showcase their finest work, from traditional woven goods to contemporary art inspired by island life.</p>
      
      <h2>What You'll Find</h2>
      <p>Coconut fiber baskets and mats woven using traditional techniques. Hand-dyed batik fabrics featuring island-inspired patterns. Coconut shell bowls, jewelry, and decorative items. Original artwork capturing island landscapes and culture.</p>
      
      <h2>Meet the Makers</h2>
      <p>This isn't just shopping—it's cultural exchange. Artisans are present at their stalls, happy to explain their techniques and the cultural significance of their work. Watch demonstrations of traditional crafts and learn about materials sourced from the islands.</p>
      
      <h2>Market Features</h2>
      <ul>
        <li>Over 20 local artisan vendors</li>
        <li>Live craft demonstrations</li>
        <li>Food stalls with local delicacies</li>
        <li>Traditional music performances</li>
        <li>Children's craft activities</li>
      </ul>
      
      <p>Your purchases directly support island artisans and help preserve traditional crafts. Many items are one-of-a-kind, making perfect souvenirs or gifts. Free admission—come for the morning or stay all day!</p>
    `,
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407531/pexels-rachel-claire-5864291_o1i0nt.jpg",
    capacity: 500,
    price: 0,
    bookingRequired: false
  },
  {
    id: 7,
    slug: "photography-workshop-sunset",
    title: "Photography Workshop: Sunset Edition",
    category: "Workshops",
    date: "2026-03-21",
    time: "4:30 PM - 7:30 PM",
    location: "West Island Beach",
    shortDescription: "Learn to capture stunning sunset photographs with guidance from professional island photographer.",
    description: `
      <p>Master the art of sunset photography in one of the world's most beautiful settings. Professional photographer Emma Davis shares techniques for capturing the magic of tropical twilight.</p>
      
      <h2>Workshop Content</h2>
      <p>Learn camera settings for low-light conditions and how to work with natural light during golden hour. Master composition techniques that make sunset shots stand out. Understand how to capture silhouettes, reflections, and vibrant color.</p>
      
      <h2>Hands-On Learning</h2>
      <p>This isn't a lecture—you'll be shooting throughout the workshop. Emma provides individual feedback and guidance as you practice techniques. Capture palm silhouettes, beach textures, and the ever-changing colors of island sunsets.</p>
      
      <h2>Requirements</h2>
      <ul>
        <li>Bring your camera (DSLR, mirrorless, or advanced smartphone)</li>
        <li>Basic understanding of camera operation helpful but not required</li>
        <li>Tripod recommended but not essential</li>
        <li>Small group size (maximum 10 participants)</li>
      </ul>
      
      <p>Workshop concludes with refreshments and a photo review session. Share your best shots and receive professional feedback. Emma provides editing tips for enhancing your sunset images.</p>
    `,
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407439/pexels-vladimirsrajber-18631417_th5dii.jpg",
    capacity: 10,
    price: 75,
    bookingRequired: true
  },
  {
    id: 8,
    slug: "easter-beach-party",
    title: "Easter Beach Party",
    category: "Festivals",
    date: "2026-04-05",
    time: "11:00 AM - 4:00 PM",
    location: "Direction Island",
    shortDescription: "Family-friendly Easter celebration featuring egg hunts, games, BBQ lunch, and beach activities.",
    description: `
      <p>Celebrate Easter island-style with a fun-filled beach party at stunning Direction Island. This family-friendly event combines Easter traditions with tropical paradise for an unforgettable day.</p>
      
      <h2>Activities Include</h2>
      <p>Easter egg hunt across the beach with prizes for all ages. Coconut bowling and traditional island games. Face painting and craft activities for children. Beach volleyball tournament for teens and adults.</p>
      
      <h2>Food & Refreshments</h2>
      <p>BBQ lunch featuring fresh local seafood and meats, vegetarian options, and tropical fruit. Easter-themed treats including coconut hot cross buns made by island bakers. Refreshments available throughout the day.</p>
      
      <h2>What to Bring</h2>
      <ul>
        <li>Swimming gear and beach towel</li>
        <li>Sunscreen and hat</li>
        <li>Camera for family photos</li>
        <li>Picnic blanket (optional)</li>
      </ul>
      
      <p>Boat transfers to Direction Island included in ticket price. The event runs from late morning through afternoon, allowing plenty of time to enjoy the island's natural beauty. Create wonderful family memories in paradise!</p>
    `,
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1763014661/pexels-valeriya-kobzar-42371713-11790418_qg4q8s.jpg",
    capacity: 150,
    price: 45,
    bookingRequired: true
  },
  {
    id: 9,
    slug: "cultural-heritage-walking-tour",
    title: "Cultural Heritage Walking Tour",
    category: "Tours",
    date: "2026-04-19",
    time: "9:00 AM - 12:00 PM",
    location: "Home Island",
    shortDescription: "Explore Home Island's rich history and culture with knowledgeable local guides.",
    description: `
      <p>Step back in time with our Cultural Heritage Walking Tour of Home Island. Local guides share stories, history, and traditions that have shaped the Cocos Malay community over nearly two centuries.</p>
      
      <h2>Tour Highlights</h2>
      <p>Visit historic sites including the old copra processing area and traditional houses. Tour the community mosque and learn about Islam's role in island life. Explore the cemetery where island pioneers rest, hearing their stories.</p>
      
      <h2>Cultural Immersion</h2>
      <p>Watch traditional craft demonstrations including coconut fiber weaving. Visit the community cultural center showcasing artifacts and photographs. Meet local elders who share oral histories and personal memories.</p>
      
      <h2>Tour Includes</h2>
      <ul>
        <li>Experienced local guide</li>
        <li>Morning tea with traditional snacks</li>
        <li>Cultural center admission</li>
        <li>Small group size for intimate experience</li>
        <li>Photo opportunities at historic sites</li>
      </ul>
      
      <p>This walking tour covers approximately 2 kilometers at a leisurely pace with frequent stops. Wear comfortable shoes and bring water. The tour provides deep insights into Cocos Malay culture rarely experienced by casual visitors.</p>
    `,
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg",
    capacity: 20,
    price: 55,
    bookingRequired: true
  },
  {
    id: 10,
    slug: "may-day-celebration",
    title: "May Day Celebration",
    category: "Community",
    date: "2026-05-01",
    time: "3:00 PM - 8:00 PM",
    location: "Home Island Community Center",
    shortDescription: "Join the community for traditional May Day festivities, food, and entertainment.",
    description: `
      <p>Welcome the month of May with our traditional May Day celebration. This beloved community event brings together residents and visitors for an afternoon and evening of food, music, and island hospitality.</p>
      
      <h2>Event Features</h2>
      <p>Traditional maypole dancing performed by local children. Live music featuring island musicians playing traditional and contemporary songs. Dance performances showcasing Malay cultural heritage.</p>
      
      <h2>Food Festival</h2>
      <p>Sample dishes from island cooks competing in the May Day cooking competition. Food stalls offer traditional favorites and creative new dishes. Judges include community elders and visiting food enthusiasts.</p>
      
      <h2>Evening Entertainment</h2>
      <p>As the sun sets, the celebration continues with more live music and social dancing. The community comes together in the joy of shared culture and the beauty of island life.</p>
      
      <h2>Schedule</h2>
      <ul>
        <li>3:00 PM - Opening ceremony</li>
        <li>3:30 PM - Maypole dancing</li>
        <li>4:00 PM - Food stalls open</li>
        <li>5:00 PM - Cultural performances</li>
        <li>6:30 PM - Cooking competition judging</li>
        <li>7:00 PM - Evening entertainment</li>
      </ul>
      
      <p>Free admission for all. This is a wonderful opportunity to experience authentic island community spirit and make lasting connections with local residents.</p>
    `,
    image: "https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407531/pexels-rachel-claire-5864291_o1i0nt.jpg",
    capacity: 250,
    price: 0,
    bookingRequired: false
  }
];

export function getEventBySlug(slug) {
  return events.find(event => event.slug === slug);
}

export function getEventsByCategory(category) {
  if (category === "All Events") {
    return events;
  }
  return events.filter(event => event.category === category);
}

export function getEventsByDate(date) {
  // date should be in YYYY-MM-DD format
  return events.filter(event => event.date === date);
}

export function getEventsByMonth(year, month) {
  // month is 0-indexed (0 = January, 11 = December)
  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month;
  });
}

export function getAllEventDates() {
  return events.map(event => event.date);
}