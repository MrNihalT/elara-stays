import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import SectionHeading from "@/src/components/SectionHeading";
import WhatsappForm from "@/src/components/WhatsappForm";
import { createMetadata } from "@/src/lib/seo";
import { siteConfig } from "@/src/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "About Elara Stays",
  description: "Learn about Elara Stays, a WhatsApp-first Wayanad resort booking support website for families, couples, groups, and honeymoon travelers.",
  path: "/about",
});

export default function About() {
  return (
    <main>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, url: siteConfig.url }} />
      <section className="px-4 pb-16 pt-32 md:px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="About" title="Curated Wayanad stays with a warm local touch" />
          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-10">
            <p className="text-lg leading-9 text-[#4B5563]">
              Elara Stays helps travelers discover Wayanad resorts based on budget, trip type, location, amenities, and sightseeing route. Started by Shilby in 2023, the brand focuses on clear, friendly WhatsApp support for guests planning comfortable holidays in Wayanad.
            </p>
            <p className="mt-6 text-lg leading-9 text-[#4B5563]">
              Whether you are searching for a family resort in Wayanad, a honeymoon resort near waterfalls, a swimming pool resort for a group, or a private pool villa for a premium escape, Elara Stays focuses on clarity before booking.
            </p>
          </div>
        </div>
      </section>
      <WhatsappForm />
    </main>
  );
}
