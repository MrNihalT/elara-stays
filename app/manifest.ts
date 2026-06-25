import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elara Stays — Best Resorts in Wayanad",
    short_name: "Elara Stays",
    description:
      "Experience Elara Stays Wayanad, a luxury nature resort in Kerala offering comfortable accommodation for families, couples, friends and groups.",
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
