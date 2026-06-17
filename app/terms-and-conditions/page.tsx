import type { Metadata } from "next";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms and Conditions",
  description: "Read the Terms and Conditions for booking and discovering resorts in Wayanad via Elara Stays.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditions() {
  return (
    <main className="px-4 pb-16 pt-32 md:px-6">
      <article className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 leading-8 shadow-sm ring-1 ring-black/5 md:p-10">
        <h1 className="text-3xl font-bold md:text-4xl text-[#1F2937] tracking-tight">Terms and Conditions</h1>
        <p className="text-sm text-[#6B7280] mt-2">Last updated: June 17, 2026</p>
        
        <div className="mt-8 space-y-6 text-[#4B5563] text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing and using the Elara Stays website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, you should immediately cease using our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-2">2. Nature of Services</h2>
            <p>
              Elara Stays operates as a resort discovery, selection, and enquiry coordination platform. The resort names, imagery, amenities, and details listed on this website serve as a showcase to help travelers discover suitable properties. Final reservations, confirmations, and billing are facilitated directly between you and the respective properties or through our dedicated WhatsApp enquiry desk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-2">3. Rates, Bookings & Availability</h2>
            <p>
              All listed rates, availability checks, inclusions, and room details are subject to change based on seasons, national holidays, occupancy levels, and specific resort policies. No booking is final until it has been verified, confirmed, and approved through our team on WhatsApp and any necessary reservation deposit is receipted. Elara Stays cannot guarantee rooms or rates until formal confirmation is received.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-2">4. Disclaimers for Sightseeing & Activities</h2>
            <p>
              Any details regarding tourist places, timings, entry tickets, trekking paths, or activities in Wayanad are for guidance only. Access to locations like waterfalls, wildlife sanctuaries, and high-altitude peaks is subject to seasonal changes, weather conditions, local forest department clearances, and government guidelines. We strongly advise travelers to verify current statuses prior to starting journeys.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-2">5. Limitation of Liability</h2>
            <p>
              Elara Stays shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your stay at any referred resort, changes in resort policies, cancellations, weather disruptions, or road blockages in Wayanad. The ultimate responsibility for guest satisfaction, safety, and service delivery lies with the respective resort management.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-2">6. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms and Conditions, please feel free to reach out to us via email or WhatsApp.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
