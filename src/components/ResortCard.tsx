import Image from "next/image";
import { FaStar, FaWhatsapp } from "react-icons/fa6";
import type { Resort } from "@/src/data/resorts";
import { whatsappUrl } from "@/src/lib/constants";
import { FadeIn } from "./Motion";

export default function ResortCard({ resort }: { resort: Resort }) {
  return (
    <FadeIn className="resort-card group flex h-full min-h-[575px] flex-col overflow-hidden rounded-[1.75rem] border border-[#0F766E]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/10 lg:min-h-[555px]">
      <div className="flex flex-1 flex-col">
        <div className="image-reveal relative aspect-[4/3] overflow-hidden bg-[#E8E5D8]">
          <Image src={resort.images[0]} alt={resort.name} fill className="image-reveal-media object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" unoptimized />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0F766E] backdrop-blur">{resort.category}</span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-[#1F2937]">{resort.name}</h3>
              <p className="mt-1 text-sm text-[#6B7280]">{resort.location}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#FFF8D6] px-2.5 py-1 text-sm font-bold text-[#8B6F1F]">
              <FaStar aria-hidden /> {resort.rating}
            </span>
          </div>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#5F6B7A]">{resort.description}</p>
          <p className="mt-auto pt-4 text-sm font-bold text-[#8B6F1F]">Rates on WhatsApp enquiry</p>
        </div>
      </div>
      <div className="mt-auto px-5 pb-5">
        <a href={whatsappUrl(`Hi Elara Stays, I want to enquire about ${resort.name}.`)} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F766E] px-4 py-3 text-sm font-bold text-white">
          <FaWhatsapp aria-hidden /> Enquire on WhatsApp
        </a>
      </div>
    </FadeIn>
  );
}
