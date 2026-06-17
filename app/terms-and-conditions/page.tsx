import type { Metadata } from "next";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms and Conditions",
  description: "Terms and Conditions for using Elara Stays Wayanad resort enquiry website.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditions() {
  return (
    <main className="px-4 pb-16 pt-32 md:px-6">
      <article className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 leading-8 shadow-sm ring-1 ring-black/5 md:p-10">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>
        <p className="mt-6 text-[#4B5563]">Elara Stays is a resort discovery and enquiry support website. Resort names and data shown here are sample listing content for lead generation and presentation purposes.</p>
        <p className="mt-4 text-[#4B5563]">Final pricing, room availability, inclusions, policies, and confirmation details must be verified through WhatsApp before travel. Rates can change by season, date, occupancy, and property rules.</p>
        <p className="mt-4 text-[#4B5563]">Tourist-place timings, entry fees, and access can change due to weather, maintenance, forest permissions, holidays, or government instructions. Travelers should confirm current conditions before visiting.</p>
      </article>
    </main>
  );
}
