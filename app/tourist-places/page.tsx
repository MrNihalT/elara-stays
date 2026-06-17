import type { Metadata } from "next";
import PlaceCard from "@/src/components/PlaceCard";
import SectionHeading from "@/src/components/SectionHeading";
import JsonLd from "@/src/components/JsonLd";
import { touristPlaces } from "@/src/data/touristPlaces";
import { createMetadata } from "@/src/lib/seo";
import { absoluteUrl } from "@/src/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Wayanad Tourist Places Guide",
  description:
    "Explore Wayanad tourist places including Chembra Peak, Edakkal Caves, Banasura Sagar Dam, Pookode Lake, Kuruva Island, waterfalls, wildlife sanctuaries, and 900 Kandi.",
  path: "/tourist-places",
  keywords: ["wayanad tourist places", "things to do in wayanad", "wayanad travel guide"],
});

export default function TouristPlacesPage() {
  return (
    <main className="px-4 pb-16 pt-32 md:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Wayanad tourist places",
          itemListElement: touristPlaces.map((place, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: absoluteUrl(`/tourist-places/${place.slug}`),
            name: place.title,
          })),
        }}
      />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Travel guide"
          title="Tourist places in Wayanad"
          description="Use this destination guide to match your resort booking with the attractions you actually want to visit."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {touristPlaces.map((place) => (
            <PlaceCard key={place.slug} place={place} />
          ))}
        </div>
      </div>
    </main>
  );
}
