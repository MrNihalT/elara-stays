import Link from "next/link";
import { FaArrowRight, FaCheck, FaStar } from "react-icons/fa6";
import { resorts } from "@/src/data/resorts";
import { touristPlaces } from "@/src/data/touristPlaces";
import { reviews } from "@/src/data/reviews";
import ResortCard from "./ResortCard";
import PlaceCard from "./PlaceCard";
import SectionHeading from "./SectionHeading";
import { FadeIn } from "./Motion";

export function FeaturedResorts() {
  return (
    <section className="gsap-reveal px-4 py-16 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured stays"
          title="Resorts selected for location, comfort, and travel style"
          description="Start with our sample resort collection, then send your dates for live availability and handpicked recommendations."
        />
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resorts.slice(0, 4).map((resort) => (
            <ResortCard key={resort.slug} resort={resort} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/resorts" className="inline-flex items-center gap-2 rounded-full border border-[#0F766E]/20 bg-white px-6 py-3 font-bold text-[#0F766E]">
            Explore all resorts <FaArrowRight aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  const items = [
    "Luxury resorts with valley views",
    "Budget-friendly eco-stays",
    "Romantic cottages for couples",
    "Adventure trails and hidden waterfalls",
    "Camping beneath starry skies",
    "Sunrise viewpoints and nature walks",
    "Instant WhatsApp bookings",
    "24/7 guest support",
  ];

  return (
    <section className="gsap-reveal px-4 py-16 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8B6F1F]">Why Choose Us?</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#1F2937] md:text-5xl">Curated Wayanad stays for comfort, nature, and memorable trips</h2>
          <p className="mt-5 text-base leading-8 text-[#5F6B7A]">
            From luxury resorts to budget-friendly eco-stays, Elara Stays offers curated stays that blend comfort, adventure, and exceptional service in Wayanad and beyond.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <FadeIn key={item} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#0F766E] text-white">
                <FaCheck aria-hidden />
              </span>
              <p className="font-bold text-[#1F2937]">{item}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TouristPlacesPreview() {
  return (
    <section className="gsap-reveal bg-[#F1EFE6] px-4 py-16 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Wayanad guide"
          title="Tourist places near your resort"
          description="Plan your stay around waterfalls, caves, lakes, viewpoints, wildlife routes, and cultural villages."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {touristPlaces.slice(0, 4).map((place) => (
            <PlaceCard key={place.slug} place={place} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/tourist-places" className="inline-flex items-center gap-2 rounded-full bg-[#0F766E] px-6 py-3 font-bold text-white">
            View tourist places <FaArrowRight aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  const homeReviews = reviews.slice(0, 5);

  return (
    <section className="gsap-reveal px-4 py-16 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Guest reviews" title="Travelers choose clarity before they book" />
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-5">
          {homeReviews.map((review) => (
            <FadeIn key={review.name} className="review-card flex h-full min-h-[350px] flex-col rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex gap-1 text-[#D4AF37]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} aria-hidden />
                ))}
              </div>
              <p className="mt-4 line-clamp-5 leading-7 text-[#4B5563]">&ldquo;{review.text}&rdquo;</p>
              <div className="mt-auto pt-5">
                <p className="font-bold text-[#1F2937]">{review.name}</p>
                <p className="text-sm text-[#6B7280]">{review.place}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
