import type { Metadata } from "next";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";
import SectionHeading from "@/src/components/SectionHeading";
import WhatsappForm from "@/src/components/WhatsappForm";
import { createMetadata } from "@/src/lib/seo";
import { siteConfig, whatsappUrl } from "@/src/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Contact Elara Stays",
  description: "Contact Elara Stays on WhatsApp for Wayanad resort booking enquiries, rates, availability, and tourist-place based stay suggestions.",
  path: "/contact",
});

export default function Contact() {
  return (
    <main>
      <section className="px-4 pb-16 pt-32 md:px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Contact" title="Tell us your Wayanad travel dates" />
          <div className="grid gap-5 md:grid-cols-2">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
              <FaWhatsapp className="text-3xl text-[#0F766E]" aria-hidden />
              <h2 className="mt-5 text-2xl font-bold">WhatsApp</h2>
              <p className="mt-2 text-[#5F6B7A]">{siteConfig.phoneDisplay}</p>
            </a>
            <a href="tel:+919656938417" className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
              <FaPhone className="text-3xl text-[#0F766E]" aria-hidden />
              <h2 className="mt-5 text-2xl font-bold">Call</h2>
              <p className="mt-2 text-[#5F6B7A]">{siteConfig.phoneDisplay}</p>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/5 md:col-span-2">
              <FaEnvelope className="text-3xl text-[#0F766E]" aria-hidden />
              <h2 className="mt-5 text-2xl font-bold">Email</h2>
              <p className="mt-2 text-[#5F6B7A]">{siteConfig.email}</p>
            </a>
          </div>
        </div>
      </section>
      <WhatsappForm />
    </main>
  );
}
