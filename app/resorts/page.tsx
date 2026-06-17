import type { Metadata } from "next";
import ResortCard from "@/src/components/ResortCard";
import SectionHeading from "@/src/components/SectionHeading";
import WhatsappForm from "@/src/components/WhatsappForm";
import JsonLd from "@/src/components/JsonLd";
import { PageTransition } from "@/src/components/Motion";
import { resorts } from "@/src/data/resorts";
import { createMetadata } from "@/src/lib/seo";
import { absoluteUrl, whatsappUrl } from "@/src/lib/constants";
import { FaWhatsapp } from "react-icons/fa6";

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
      <section className="px-4 pb-16 pt-32 md:px-6">
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

      {/* Professional Showcase Notice Banner */}
      <section className="px-4 py-16 md:px-6 bg-[#0F766E]/5 border-y border-[#0F766E]/10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0F766E]/10 px-3 py-1 text-xs font-bold text-[#0F766E] uppercase tracking-wider">
            Premium Selection
          </span>
          <h2 className="mt-4 text-2xl font-bold text-[#1F2937] md:text-3.5xl tracking-tight leading-tight">
            Explore 100+ More Resorts in Wayanad
          </h2>
          <p className="mt-4 text-base leading-8 text-[#5F6B7A]">
            Please note that the properties listed above are just a small showcase of our curated portfolio. We partner with and manage over <strong>100+ top-rated resorts, pool villas, and homestays</strong> across Vythiri, Kalpetta, Meppadi, and all scenic locales in Wayanad.
          </p>
          <p className="mt-3 text-base text-[#5F6B7A]">
            Contact us with your dates and requirements, and we will send you tailored options directly on WhatsApp.
          </p>
          <div className="mt-8 flex justify-center">
            <a 
              href={whatsappUrl("Hi Elara Stays, I want to enquire about more resort options in Wayanad.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#0F766E] px-7 py-4 font-bold text-white shadow-lg transition duration-200 hover:bg-[#0D625C] hover:scale-105 active:scale-95"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden /> Chat on WhatsApp for More Stays
            </a>
          </div>
        </div>
      </section>

      <WhatsappForm />
    </PageTransition>
  );
}
