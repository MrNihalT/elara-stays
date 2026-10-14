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
  title: "Elara Stays Wayanad | Luxury Resort in Wayanad Kerala | Family, Couples & Group Stay",
  description:
    "Experience Elara Stays Wayanad, a luxury nature resort in Kerala offering comfortable accommodation for families, couples, friends and groups. Enjoy scenic mountain views, peaceful surroundings and a memorable Wayanad vacation.",
  path: "/",
  keywords: ["elara stays booking"],
});

export default function Home() {
  return (
    <PageTransition>
      <GsapScrollReveal />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              name: "Elara Stays",
              alternateName: ["elarastays", "Elara Stays Wayanad"],
              url: siteConfig.url,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${siteConfig.url}/resorts?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "TravelAgency",
              name: "Elara Stays",
              url: siteConfig.url,
              telephone: `+91${siteConfig.phoneDisplay}`,
              email: siteConfig.email,
              description:
                "Elara Stays is a WhatsApp-first Wayanad resort discovery and booking enquiry service for families, couples, and groups.",
              areaServed: {
                "@type": "Place",
                name: "Wayanad, Kerala, India",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Wayanad",
                addressRegion: "Kerala",
                addressCountry: "IN",
              },
              sameAs: [siteConfig.instagram, siteConfig.url],
              image: `${siteConfig.url}/hero2.png`,
              logo: `${siteConfig.url}/Logo.jpg`,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: siteConfig.url,
                },
              ],
            },
          ],
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
