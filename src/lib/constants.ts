export const siteConfig = {
  name: "Elara Stays",
  url: "https://elarastays.nihalt.in",
  phoneDisplay: "9656938417",
  email: "elarastays954@gmail.com",
  instagram: "https://www.instagram.com/elara.stays_/",
  whatsappNumber: "919656938417",
  colors: {
    primary: "#0F766E",
    accent: "#D4AF37",
    background: "#FAFAF7",
    text: "#1F2937",
  },
  keywords: [
    // Brand Keywords
    "Elara Stays",
    "Elara Stays Wayanad",
    "Elara Stays Resort",
    "Elara Stays Kerala",
    "Elara Stays Booking",
    "Elara Stays Wayanad Resort",
    "Elara Stays Accommodation",
    "elarastays",
    "elara stays",

    // Primary Keywords
    "Wayanad resort",
    "Wayanad resorts",
    "Best resort in Wayanad",
    "Luxury resort in Wayanad",
    "Resort in Wayanad Kerala",
    "Wayanad stay",
    "Wayanad accommodation",
    "Premium resort Wayanad",
    "Family resort Wayanad",
    "Best family resort in Wayanad",
    "Couples resort Wayanad",
    "Nature resort Wayanad",
    "budget resort wayanad",

    // Location-Based Keywords
    "Resort near Kalpetta",
    "Resort near Meppadi",
    "Resort near Vythiri",
    "resorts near wayanad",
    "Wayanad hill resort",
    "Wayanad forest resort",
    "Wayanad mountain view resort",
    "Wayanad vacation stay",
    "Wayanad holiday resort",
    "Wayanad tourism stay",
    "Best places to stay in Wayanad",

    // Luxury & Experience Keywords
    "Luxury cottages Wayanad",
    "Private villa Wayanad",
    "Honeymoon resort Wayanad",
    "Romantic stay Wayanad",
    "Weekend getaway Wayanad",
    "Eco resort Wayanad",
    "Pool resort Wayanad",
    "swimming pool resort wayanad",
    "Scenic resort Wayanad",
    "Peaceful stay in Wayanad",
    "Nature retreat Wayanad",

    // Long-Tail Keywords
    "Best luxury resort in Wayanad for couples",
    "Family friendly resort in Wayanad",
    "Affordable luxury resort in Wayanad",
    "Mountain view resort in Wayanad",
    "Best honeymoon resort in Wayanad Kerala",
    "Resorts in Wayanad with swimming pool",
    "Luxury cottages in Wayanad",
    "Weekend stay in Wayanad",
    "Resort booking in Wayanad",
    "Wayanad resort online booking",
    "wayanad resort booking online",
    "wayanad tourist places",

    // Bachelors & Group Keywords
    "Bachelors resort in Wayanad",
    "Bachelors resorts in Wayanad",
    "Best resort for bachelors in Wayanad",
    "Group stay in Wayanad",
    "Friends trip resort Wayanad",
    "Weekend resort for friends in Wayanad",
    "Resort for group vacation Wayanad",
    "Adventure resort Wayanad",
    "Resort for young travelers Wayanad",
    "Holiday stay Wayanad Kerala",
    "Luxury stay Wayanad",
    "Resort with mountain view Wayanad",
    "Nature stay Wayanad",
    "Premium accommodation Wayanad",
    "Vacation resort Wayanad",

    // Additional & Typos
    "wayand resorts",
    "best family resort in wayand",
    "resorts"
  ],
};

export const whatsappTemplate = `*Welcome 🍃*
*Elara Stays*

*Provide us the following details for checking availability and rates👇🏻*

👤 Your Name:
▫️ Your Place:
▫️ Family/Bachelor's:
📅 Check-in Date:
📅 Check-out Date:
👨‍🦰 Adults:
🧒 Kids (6-12 yrs):
🧒 Kids (Below 6 yrs):
🛏️ Number of Rooms:
📝 Any Special Requests or Requirements:`;

export function whatsappUrl(message = whatsappTemplate) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${siteConfig.url}${path}`;
}

export function getCategoryFromImage(imagePath: string, fallbackCategory: string): string {
  const filename = imagePath.toLowerCase();
  if (filename.includes("bachelros") || filename.includes("bachelors")) {
    return "Bachelors Resort";
  }
  if (filename.includes("familyandcouples")) {
    return "Couple Resort";
  }
  if (filename.includes("family")) {
    return "Family Resort";
  }
  if (filename.includes("couple")) {
    return "Couple Resort";
  }
  if (filename.includes("mountain")) {
    return "Mountain View Resort";
  }
  if (filename.includes("nature")) {
    return "Nature Resort";
  }
  if (filename.includes("budget")) {
    return "Budget Resort";
  }
  return fallbackCategory;
}
