import type { Metadata } from "next";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Read the Privacy Policy to understand how Elara Stays collects, uses, and protects your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicy() {
  return (
    <main className="px-4 pb-16 pt-32 md:px-6">
      <article className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 leading-8 shadow-sm ring-1 ring-black/5 md:p-10">
        <h1 className="text-3xl font-bold md:text-4xl text-[#1F2937] tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-[#6B7280] mt-2">Last updated: June 17, 2026</p>
        
        <div className="mt-8 space-y-6 text-[#4B5563] text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-2">1. Information Collection</h2>
            <p>
              Elara Stays is committed to protecting your privacy. We collect only the information you voluntarily submit to us using our floating quick-booking form or contact links. This includes your name, home location, preferred travel dates, guest count (adults and children), room requirements, and any special requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-2">2. Use of Information</h2>
            <p>
              {"The collected enquiry details are structured into a message draft and forwarded through your device's WhatsApp application to our booking team. We use this information solely to process your resort enquiry, verify availability, compile rates, and send you suitable lodging recommendations in Wayanad."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-2">3. Third-Party Interactions</h2>
            <p>
              {"We value your trust and do not sell, trade, or distribute your personal details to outside third parties. Because our communication occurs via WhatsApp, all interactions are subject to WhatsApp's official privacy policy, end-to-end encryption protocols, and standard terms of service."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-2">4. Data Security</h2>
            <p>
              We implement basic security measures to safeguard your browse sessions. Since we do not store your credit card information, bank details, or government IDs directly on our servers, your personal booking details remain secure and private.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-2">5. Updates to Policy</h2>
            <p>
              Elara Stays reserves the right to update this Privacy Policy from time to time. Any changes will be reflected with an updated date at the top of this page. We encourage you to review this policy periodically.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
