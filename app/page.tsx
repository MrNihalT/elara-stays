import type { Metadata } from "next";
import Hero from "@/src/components/Hero";
import JsonLd from "@/src/components/JsonLd";
import WhatsappForm from "@/src/components/WhatsappForm";
import GsapScrollReveal from "@/src/components/GsapScrollReveal";
import { FeaturedResorts, Reviews, TouristPlacesPreview, WhyChoose } from "@/src/components/HomeSections";
import { PageTransition } from "@/src/components/Motion";
import { createMetadata } from "@/src/lib/seo";
import { siteConfig } from "@/src/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Elara Stays — Best Resorts in Wayanad | Book via WhatsApp",
  description:
    "Elara Stays — Discover the best resorts in Wayanad for families, couples, and groups. Budget resorts, luxury villas, pool resorts, honeymoon stays. Enquire on WhatsApp for rates and availability.",
  path: "/",
  keywords: ["elara stays booking", "wayanad resort whatsapp booking", "best wayanad resorts 2025"],
});

export default function Home() {
  return (
    <PageTransition>
      <GsapScrollReveal />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: siteConfig.name,
          url: siteConfig.url,
          telephone: siteConfig.phoneDisplay,
          areaServed: "Wayanad, Kerala",
          sameAs: [siteConfig.url],
        }}
      />
      <Hero />
      <FeaturedResorts />
      <WhyChoose />
      <TouristPlacesPreview />
      <Reviews />
      <WhatsappForm />
    </PageTransition>
  );
}
