import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FaClock, FaIndianRupeeSign, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import JsonLd from "@/src/components/JsonLd";
import ResortCard from "@/src/components/ResortCard";
import SectionHeading from "@/src/components/SectionHeading";
import { resorts } from "@/src/data/resorts";
import { touristPlaces } from "@/src/data/touristPlaces";
import { createMetadata } from "@/src/lib/seo";
import { absoluteUrl, whatsappUrl } from "@/src/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return touristPlaces.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = touristPlaces.find((item) => item.slug === slug);
  if (!place) return {};
  return createMetadata({
    title: place.seo.title,
    description: place.seo.description,
    path: `/tourist-places/${place.slug}`,
    image: place.heroImage,
    keywords: place.seo.keywords,
  });
}

export default async function TouristPlaceDetails({ params }: Props) {
  const { slug } = await params;
  const place = touristPlaces.find((item) => item.slug === slug);
  if (!place) notFound();
  const nearbyResorts = resorts.slice(0, 3);

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          name: place.title,
          description: place.shortDescription,
          image: absoluteUrl(place.heroImage),
          url: absoluteUrl(`/tourist-places/${place.slug}`),
          address: place.location,
        }}
      />
      <section className="relative min-h-[72vh] overflow-hidden pt-24 text-white">
        <Image src={place.heroImage} alt={place.title} fill priority className="object-cover" sizes="100vw" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-[#0B3F3A]/90" />
        <div className="relative mx-auto flex min-h-[calc(72vh-6rem)] max-w-7xl items-end px-4 py-14 md:px-6">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">Wayanad tourist place</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">{place.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">{place.shortDescription}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <article>
            <h2 className="text-3xl font-bold">Overview</h2>
            <p className="mt-5 text-lg leading-9 text-[#4B5563]">{place.overview}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Info icon={<FaLocationDot />} label="Location" value={place.location} />
              <Info icon={<FaClock />} label="Timings" value={place.timings} />
              <Info icon={<FaIndianRupeeSign />} label="Entry fee" value={place.entryFee} />
            </div>
            <ContentList title="Things to do" items={place.thingsToDo} />
            <ContentList title="Travel tips" items={place.travelTips} />
            <ContentList title="Nearby attractions" items={place.nearbyAttractions} />
            <h2 className="mt-12 text-3xl font-bold">FAQ</h2>
            <div className="mt-5 grid gap-4">
              {place.faq.map((item) => (
                <div key={item.question} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                  <h3 className="font-bold">{item.question}</h3>
                  <p className="mt-2 leading-7 text-[#5F6B7A]">{item.answer}</p>
                </div>
              ))}
            </div>
          </article>
          <aside className="h-fit rounded-[1.75rem] bg-white p-6 shadow-xl shadow-emerald-900/10 ring-1 ring-black/5">
            <h2 className="text-2xl font-bold">Stay near {place.title}</h2>
            <p className="mt-3 leading-7 text-[#5F6B7A]">Share this destination with your travel dates and we will suggest nearby resorts.</p>
            <a href={whatsappUrl(`Hi Elara Stays, I want resorts near ${place.title}.`)} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0F766E] px-5 py-4 font-bold text-white">
              <FaWhatsapp aria-hidden /> Enquire nearby resorts
            </a>
            <p className="mt-6 text-sm font-bold text-[#8B6F1F]">Best time to visit</p>
            <p className="mt-2 leading-7 text-[#5F6B7A]">{place.bestTimeToVisit}</p>
          </aside>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Nearby resorts" title={`Resorts to consider around ${place.title}`} />
          <div className="grid gap-6 md:grid-cols-3">
            {nearbyResorts.map((resort) => (
              <ResortCard key={resort.slug} resort={resort} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <div className="text-[#0F766E]">{icon}</div>
      <p className="mt-3 text-sm font-bold text-[#8B6F1F]">{label}</p>
      <p className="mt-1 text-sm leading-6 text-[#4B5563]">{value}</p>
    </div>
  );
}

function ContentList({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <h2 className="mt-12 text-3xl font-bold">{title}</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <p key={item} className="rounded-2xl bg-[#0F766E]/10 px-4 py-3 font-semibold text-[#0F766E]">{item}</p>
        ))}
      </div>
    </>
  );
}
