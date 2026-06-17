import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FaCheck, FaLocationDot, FaStar, FaWhatsapp } from "react-icons/fa6";
import JsonLd from "@/src/components/JsonLd";
import WhatsappForm from "@/src/components/WhatsappForm";
import { resorts } from "@/src/data/resorts";
import { createMetadata } from "@/src/lib/seo";
import { absoluteUrl, whatsappUrl, getCategoryFromImage } from "@/src/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resorts.map((resort) => ({ slug: resort.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resort = resorts.find((item) => item.slug === slug);
  if (!resort) return {};
  const categoryName = getCategoryFromImage(resort.images[0], resort.category);
  return createMetadata({
    title: `${resort.name} | ${categoryName} in Wayanad`,
    description: `${resort.description} Enquire for availability, rates, and Wayanad resort booking support on WhatsApp.`,
    path: `/resorts/${resort.slug}`,
    image: resort.images[0],
    keywords: [categoryName.toLowerCase(), resort.location.toLowerCase()],
  });
}

export default async function ResortDetails({ params }: Props) {
  const { slug } = await params;
  const resort = resorts.find((item) => item.slug === slug);
  if (!resort) notFound();

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: resort.name,
          image: resort.images.map((image) => absoluteUrl(image)),
          address: resort.location,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: resort.rating,
            reviewCount: 42,
          },
          url: absoluteUrl(`/resorts/${resort.slug}`),
        }}
      />
      <section className="relative min-h-[78vh] overflow-hidden pt-24 text-white">
        <Image src={resort.images[0]} alt={resort.name} fill priority className="object-cover" sizes="100vw" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-[#0B3F3A]/90" />
        <div className="relative mx-auto flex min-h-[calc(78vh-6rem)] max-w-7xl items-end px-4 py-14 md:px-6">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
              {getCategoryFromImage(resort.images[0], resort.category)}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">{resort.name}</h1>
            <p className="mt-4 flex items-center gap-2 text-white/85"><FaLocationDot aria-hidden /> {resort.location}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2 font-bold text-[#1F2937]"><FaStar aria-hidden /> {resort.rating}</span>
              <span className="rounded-full bg-white/15 px-4 py-2 font-bold backdrop-blur">Rates on WhatsApp enquiry</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-bold">About this resort</h2>
            <p className="mt-5 text-lg leading-9 text-[#4B5563]">{resort.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {resort.highlights.map((highlight) => (
                <div key={highlight} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                  <FaCheck className="text-[#0F766E]" aria-hidden />
                  <p className="mt-3 font-bold">{highlight}</p>
                </div>
              ))}
            </div>
            <h2 className="mt-12 text-3xl font-bold">Amenities</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {resort.amenities.map((amenity) => (
                <span key={amenity} className="rounded-full bg-[#0F766E]/10 px-4 py-2 text-sm font-bold text-[#0F766E]">{amenity}</span>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-[1.75rem] bg-white p-6 shadow-xl shadow-emerald-900/10 ring-1 ring-black/5">
            <h2 className="text-2xl font-bold">Enquire for availability</h2>
            <p className="mt-3 leading-7 text-[#5F6B7A]">Get current rates, room options, meal plans, and nearby itinerary help through WhatsApp.</p>
            <a href={whatsappUrl(`Hi Elara Stays, I want to check availability for ${resort.name}.`)} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0F766E] px-5 py-4 font-bold text-white">
              <FaWhatsapp aria-hidden /> Book on WhatsApp
            </a>
            <h3 className="mt-8 font-bold">Nearby places</h3>
            <div className="mt-3 grid gap-2 text-sm text-[#5F6B7A]">
              {resort.nearbyPlaces.map((place) => (
                <p key={place}>{place}</p>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <WhatsappForm />
    </main>
  );
}
