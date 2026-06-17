import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import type { TouristPlace } from "@/src/data/touristPlaces";
import { FadeIn } from "./Motion";

export default function PlaceCard({ place }: { place: TouristPlace }) {
  return (
    <FadeIn className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/tourist-places/${place.slug}`} className="block">
        <div className="image-reveal relative aspect-[4/3] overflow-hidden bg-[#E8E5D8]">
          <Image src={place.heroImage} alt={place.title} fill className="image-reveal-media object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 100vw" unoptimized />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-[#1F2937]">{place.title}</h3>
          <p className="mt-2 flex items-start gap-2 text-sm text-[#6B7280]"><FaLocationDot className="mt-1 text-[#0F766E]" aria-hidden /> {place.location}</p>
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#5F6B7A]">{place.shortDescription}</p>
        </div>
      </Link>
    </FadeIn>
  );
}
