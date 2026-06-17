export type ResortCategory =
  | "Budget Resort"
  | "Family Resort"
  | "Luxury Resort"
  | "Honeymoon Resort"
  | "Swimming Pool Resort"
  | "Private Pool Villa"
  | "Nature Resort"
  | "Hill View Resort";

export type Resort = {
  slug: string;
  name: string;
  category: ResortCategory;
  location: string;
  rating: number;
  images: string[];
  amenities: string[];
  description: string;
  highlights: string[];
  nearbyPlaces: string[];
};

export const resortCategories: ResortCategory[] = [
  "Budget Resort",
  "Family Resort",
  "Luxury Resort",
  "Swimming Pool Resort",
  "Honeymoon Resort",
  "Private Pool Villa",
  "Nature Resort",
  "Hill View Resort",
];

export const resorts: Resort[] = [
  {
    slug: "misty-valley-resort",
    name: "Misty Valley Resort",
    category: "Budget Resort",
    location: "Vythiri, Wayanad",
    rating: 4.6,
    images: [
      "/resorts/budget/1.jpeg",
      "/resorts/budget/WhatsApp Image 2026-06-17 at 9.36.57 PM (1).jpeg",
      "/resorts/budget/WhatsApp Image 2026-06-17 at 9.36.58 PM (1).jpeg",
      "/resorts/budget/WhatsApp Image 2026-06-17 at 9.36.58 PM (2).jpeg",
      "/resorts/budget/WhatsApp Image 2026-06-17 at 9.36.58 PM.jpeg",
      "/resorts/budget/WhatsApp Image 2026-06-17 at 9.36.59 PM (1).jpeg",
      "/resorts/budget/WhatsApp Image 2026-06-17 at 9.36.59 PM (2).jpeg",
      "/resorts/budget/WhatsApp Image 2026-06-17 at 9.36.59 PM (3).jpeg",
      "/resorts/budget/WhatsApp Image 2026-06-17 at 9.36.59 PM.jpeg",
      "/resorts/budget/WhatsApp Image 2026-06-17 at 9.37.00 PM (1).jpeg",
      "/resorts/budget/WhatsApp Image 2026-06-17 at 9.37.00 PM.jpeg"
    ],
    amenities: ["Valley view", "Restaurant", "Campfire", "Free parking", "Travel desk"],
    description:
      "A calm budget resort in Wayanad for travelers who want clean rooms, misty hill views, and easy access to the Vythiri side of the district.",
    highlights: ["Great for short stays", "Close to Lakkidi", "Value-led rooms"],
    nearbyPlaces: ["Lakkidi View Point", "Pookode Lake", "Chain Tree"],
  },
  {
    slug: "green-leaf-resort",
    name: "Green Leaf Resort",
    category: "Family Resort",
    location: "Kalpetta, Wayanad",
    rating: 4.7,
    images: [
      "/resorts/family/1.jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.16 PM (1).jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.16 PM.jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.25 PM.jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.26 PM (1).jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.26 PM (2).jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.26 PM.jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.27 PM (1).jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.27 PM (2).jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.28 PM (1).jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.28 PM (2).jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.28 PM (3).jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.28 PM.jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.29 PM (1).jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.29 PM (2).jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.29 PM.jpeg",
      "/resorts/family/WhatsApp Image 2026-06-17 at 9.32.30 PM.jpeg"
    ],
    amenities: ["Family rooms", "Kids play area", "Garden", "Breakfast", "Sightseeing support"],
    description:
      "A family-friendly Wayanad resort with spacious rooms, gentle outdoor spaces, and practical access to major tourist places around Kalpetta.",
    highlights: ["Family room options", "Central location", "Comfortable dining"],
    nearbyPlaces: ["Karapuzha Dam", "Edakkal Caves", "Phantom Rock"],
  },
  {
    slug: "blue-lagoon-resort",
    name: "Blue Lagoon Resort",
    category: "Luxury Resort",
    location: "Banasura, Wayanad",
    rating: 4.9,
    images: [
      "/resorts/couple/1.jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.27 PM (1).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.27 PM (2).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.29 PM.jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.30 PM (1).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.30 PM (2).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.30 PM (3).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.30 PM.jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.32 PM (1).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.32 PM (2).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.32 PM.jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.33 PM (1).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.33 PM (2).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.33 PM (3).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.33 PM.jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.34 PM (1).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.34 PM (2).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.34 PM (3).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.34 PM.jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.35 PM (1).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.35 PM (2).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.35 PM.jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.36 PM (1).jpeg",
      "/resorts/couple/WhatsApp Image 2026-06-17 at 9.36.36 PM.jpeg"
    ],
    amenities: ["Infinity pool", "Spa", "Fine dining", "Lake view", "Premium suites"],
    description:
      "A polished luxury resort near the Banasura landscape, designed for slow mornings, private balconies, and premium Wayanad holidays.",
    highlights: ["Premium suites", "Lake-side ambience", "Curated experiences"],
    nearbyPlaces: ["Banasura Sagar Dam", "Karlad Lake", "Meenmutty region"],
  },
  {
    slug: "forest-view-resort",
    name: "Forest View Resort",
    category: "Honeymoon Resort",
    location: "Meppadi, Wayanad",
    rating: 4.8,
    images: [
      "/resorts/nature/1.jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.24 PM.jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.25 PM.jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.29 PM.jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.30 PM (1).jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.30 PM (2).jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.30 PM.jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.31 PM (1).jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.31 PM (2).jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.31 PM (3).jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.31 PM.jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.32 PM (1).jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.32 PM (2).jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.32 PM.jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.33 PM (1).jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.33 PM (2).jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.33 PM (3).jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.33 PM.jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.34 PM (2).jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.34 PM.jpeg",
      "/resorts/nature/WhatsApp Image 2026-06-17 at 9.30.35 PM.jpeg"
    ],
    amenities: ["Private sit-out", "Candlelight dinner", "Forest view", "Room service", "Couple packages"],
    description:
      "A quiet honeymoon resort in Wayanad where couples can stay close to forest trails, waterfalls, and scenic tea-estate roads.",
    highlights: ["Couple-friendly spaces", "Waterfall access", "Romantic add-ons"],
    nearbyPlaces: ["Soochipara Waterfalls", "900 Kandi", "Chembra Peak"],
  },
  {
    slug: "mountain-breeze-resort",
    name: "Mountain Breeze Resort",
    category: "Swimming Pool Resort",
    location: "Padinjarathara, Wayanad",
    rating: 4.7,
    images: [
      "/resorts/mountain/1.jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.21 AM.jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.22 AM.jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.24 AM (1).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.24 AM (2).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.25 AM (1).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.25 AM (2).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.25 AM (3).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.25 AM.jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.26 AM (1).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.26 AM.jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.27 AM (1).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.27 AM (2).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.27 AM (3).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.27 AM.jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.28 AM (1).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.28 AM.jpeg"
    ],
    amenities: ["Swimming pool", "Hill view", "Restaurant", "Indoor games", "Balcony rooms"],
    description:
      "A refreshing swimming pool resort in Wayanad with open hill views, relaxed dining, and easy travel towards the Banasura belt.",
    highlights: ["Pool-focused stay", "Hill-facing rooms", "Group friendly"],
    nearbyPlaces: ["Banasura Sagar Dam", "Karlad Lake", "Pookode Lake"],
  },
  {
    slug: "emerald-heights-resort",
    name: "Emerald Heights Resort",
    category: "Private Pool Villa",
    location: "Ambalavayal, Wayanad",
    rating: 4.9,
    images: [
      "/resorts/bachelros/1.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.27 PM.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.28 PM.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.29 PM (1).jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.29 PM.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.30 PM (1).jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.30 PM.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.31 PM (1).jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.31 PM.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.32 PM (1).jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.33 PM (1).jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.33 PM.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.34 PM.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.35 PM.jpeg"
    ],
    amenities: ["Private pool", "Villa dining", "Butler support", "Garden deck", "Jacuzzi"],
    description:
      "A private pool villa stay for guests who want a more exclusive resort booking in Wayanad with privacy, comfort, and quick access to heritage sites.",
    highlights: ["Private pool", "Villa-style privacy", "Premium celebrations"],
    nearbyPlaces: ["Edakkal Caves", "Phantom Rock", "Karapuzha Dam"],
  },
  {
    slug: "lake-view-resort",
    name: "Lake View Resort",
    category: "Nature Resort",
    location: "Karlad, Wayanad",
    rating: 4.6,
    images: [
      "/resorts/bachelros/1.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.27 PM.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.28 PM.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.29 PM (1).jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.29 PM.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.30 PM (1).jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.30 PM.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.31 PM (1).jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.31 PM.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.32 PM (1).jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.33 PM (1).jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.33 PM.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.34 PM.jpeg",
      "/resorts/bachelros/WhatsApp Image 2026-06-17 at 9.35.35 PM.jpeg"
    ],
    amenities: ["Lake view", "Kayaking nearby", "Nature walk", "Cafe", "Sunset deck"],
    description:
      "A nature resort near Karlad Lake, ideal for guests who want scenic water views, soft adventure, and relaxed evenings outdoors.",
    highlights: ["Lake-side stay", "Adventure nearby", "Sunset views"],
    nearbyPlaces: ["Karlad Lake", "Banasura Sagar Dam", "Pookode Lake"],
  },
  {
    slug: "wayanad-nature-retreat",
    name: "Wayanad Nature Retreat",
    category: "Hill View Resort",
    location: "Sulthan Bathery, Wayanad",
    rating: 4.7,
    images: [
      "/resorts/mountain/1.jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.21 AM.jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.22 AM.jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.24 AM (1).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.24 AM (2).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.25 AM (1).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.25 AM (2).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.25 AM (3).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.25 AM.jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.26 AM (1).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.26 AM.jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.27 AM (1).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.27 AM (2).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.27 AM (3).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.27 AM.jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.28 AM (1).jpeg",
      "/resorts/mountain/WhatsApp Image 2026-05-31 at 9.30.28 AM.jpeg"
    ],
    amenities: ["Hill view", "Ayurveda on request", "Guided trips", "Restaurant", "Family cottages"],
    description:
      "A hill view resort in Wayanad for travelers who want greenery, wildlife routes, comfortable cottages, and a balanced itinerary.",
    highlights: ["Hill-view cottages", "Wildlife route access", "Flexible packages"],
    nearbyPlaces: ["Muthanga Wildlife Sanctuary", "Edakkal Caves", "En Ooru"],
  },
];
