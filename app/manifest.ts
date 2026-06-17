import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elara Stays — Best Resorts in Wayanad",
    short_name: "Elara Stays",
    description:
      "Discover and book the best resorts in Wayanad. Budget, family, honeymoon, luxury, pool resorts, and private villas. WhatsApp-first enquiry support by Elara Stays.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF7",
    theme_color: "#0F766E",
    icons: [
      {
        src: "/Logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/Logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
