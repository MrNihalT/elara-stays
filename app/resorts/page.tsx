import type { Metadata } from "next";
import ResortCard from "@/src/components/ResortCard";
import SectionHeading from "@/src/components/SectionHeading";
import WhatsappForm from "@/src/components/WhatsappForm";
import JsonLd from "@/src/components/JsonLd";
import { PageTransition } from "@/src/components/Motion";
import { resorts } from "@/src/data/resorts";
import { createMetadata } from "@/src/lib/seo";
import { absoluteUrl } from "@/src/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Wayanad Resorts for Families, Couples and Groups",
  description:
    "Browse sample Wayanad resorts including budget resorts, family resorts, luxury resorts, honeymoon resorts, pool resorts, and private pool villas.",
  path: "/resorts",
  keywords: ["wayanad resorts", "best resort in wayanad", "resort booking wayanad"],
});

export default function ResortsPage() {
  return (
    <PageTransition>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Wayanad resorts by Elara Stays",
          itemListElement: resorts.map((resort, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: absoluteUrl(`/resorts/${resort.slug}`),
            name: resort.name,
          })),
        }}
      />
      <section className="px-4 pb-10 pt-32 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Resorts"
            title="Find the right Wayanad resort for your trip"
            description="Explore sample stays across budget, family, luxury, honeymoon, pool, private villa, nature, and hill-view categories."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resorts.map((resort) => (
              <ResortCard key={resort.slug} resort={resort} />
            ))}
          </div>
        </div>
      </section>
      <WhatsappForm />
    </PageTransition>
  );
}
