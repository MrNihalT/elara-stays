"use client";

import { useState } from "react";
import Image from "next/image";
import { FaStar, FaWhatsapp, FaImages } from "react-icons/fa6";
import type { Resort } from "@/src/data/resorts";
import { whatsappUrl, getCategoryFromImage } from "@/src/lib/constants";
import { FadeIn } from "./Motion";
import ImageGalleryModal from "./ImageGalleryModal";

export default function ResortCard({ resort }: { resort: Resort }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <FadeIn className="resort-card group flex h-full min-h-[380px] flex-col overflow-hidden rounded-[1.75rem] border border-[#0F766E]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/10 lg:min-h-[360px]">
        <div className="flex flex-1 flex-col">
          {/* Interactive Image Container */}
          <div 
            onClick={() => setIsGalleryOpen(true)}
            className="image-reveal relative aspect-[4/3] cursor-pointer overflow-hidden bg-[#E8E5D8]"
            title="Click to view photo gallery"
          >
            <Image 
              src={resort.images[0]} 
              alt={resort.name} 
              fill 
              className="image-reveal-media object-cover transition duration-700 group-hover:scale-105" 
              sizes="(min-width: 1024px) 33vw, 100vw" 
              unoptimized 
            />
            
            {/* Category tag */}
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0F766E] backdrop-blur">
              {getCategoryFromImage(resort.images[0], resort.category)}
            </span>

            {/* Photo count indicator */}
            {resort.images.length > 1 && (
              <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur transition group-hover:bg-[#D4AF37]">
                <FaImages className="h-3.5 w-3.5" aria-hidden />
                {resort.images.length} Photos
              </span>
            )}

            {/* Hover visual cue overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="transform rounded-full bg-white/95 px-4 py-2.5 text-xs font-bold text-[#0F766E] shadow-xl transition-transform duration-300 translate-y-2 group-hover:translate-y-0 hover:scale-105 active:scale-95">
                View Photo Gallery
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-4">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF8D6] px-3 py-1 text-sm font-bold text-[#8B6F1F]">
                <FaStar aria-hidden /> {resort.rating}
              </span>
              <span className="text-xs font-bold text-[#8B6F1F]">WhatsApp Enquiry Rates</span>
            </div>
          </div>
        </div>
        <div className="mt-auto px-4 pb-4">
          <a href={whatsappUrl(`Hi Elara Stays, I want to enquire about ${resort.name}.`)} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F766E] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#0D625C]">
            <FaWhatsapp aria-hidden /> Enquire on WhatsApp
          </a>
        </div>
      </FadeIn>

      {/* Lightbox Gallery Modal */}
      <ImageGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={resort.images}
        title={resort.name}
      />
    </>
  );
}
