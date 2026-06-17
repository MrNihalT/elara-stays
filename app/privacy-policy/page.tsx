import type { Metadata } from "next";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for Elara Stays Wayanad resort booking enquiry website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicy() {
  return (
    <main className="px-4 pb-16 pt-32 md:px-6">
      <article className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 leading-8 shadow-sm ring-1 ring-black/5 md:p-10">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-6 text-[#4B5563]">Elara Stays collects only the information you choose to send through the WhatsApp enquiry form, such as name, place, dates, guest count, room count, and special requests.</p>
        <p className="mt-4 text-[#4B5563]">Enquiry details are shared through WhatsApp so the team can respond with availability, rates, and suitable stay suggestions.</p>
        <p className="mt-4 text-[#4B5563]">We do not sell visitor information. WhatsApp communication is subject to WhatsApp&apos;s own terms and privacy practices.</p>
      </article>
    </main>
  );
}
