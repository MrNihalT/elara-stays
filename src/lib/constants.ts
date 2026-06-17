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
    "elara stays",
    "elarastays",
    "elara stays wayanad",
    "wayanad resorts",
    "best resort in wayanad",
    "budget resort wayanad",
    "family resort wayanad",
    "honeymoon resort wayanad",
    "luxury resort wayanad",
    "swimming pool resort wayanad",
    "wayanad tourist places",
    "resort booking wayanad",
    "wayanad resort booking online",
    "resorts near wayanad",
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
