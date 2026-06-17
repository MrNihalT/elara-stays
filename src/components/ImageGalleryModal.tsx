"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

export default function ImageGalleryModal({
  isOpen,
  onClose,
  images,
  title,
}: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:p-6 text-white z-10 bg-gradient-to-b from-black/60 to-transparent">
        <div>
          <h3 className="text-lg font-bold md:text-xl">{title}</h3>
          <p className="text-xs text-white/60 mt-1">
            Image {currentIndex + 1} of {images.length}
          </p>
        </div>
        <button
          onClick={onClose}
          className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 hover:scale-105 active:scale-95"
          aria-label="Close gallery"
        >
          <FaXmark className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>

      {/* Main Slide / Image view */}
      <div 
        className="relative flex w-full max-w-5xl flex-1 items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25 hover:scale-105 active:scale-95 md:left-4"
            aria-label="Previous image"
          >
            <FaChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        )}

        {/* Image Display */}
        <div 
          className="relative aspect-[4/3] w-full max-h-[70vh] overflow-hidden rounded-2xl md:max-h-[65vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} - Gallery Image ${currentIndex + 1}`}
            fill
            className="object-contain transition-all duration-300 ease-out"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
            unoptimized
          />
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25 hover:scale-105 active:scale-95 md:right-4"
            aria-label="Next image"
          >
            <FaChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        )}
      </div>

      {/* Thumbnails strip */}
      {images.length > 1 && (
        <div
          className="mt-4 flex w-full max-w-2xl justify-center gap-2 overflow-x-auto py-2 px-4"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={(e) => handleThumbnailClick(idx, e)}
              className={`relative aspect-[4/3] h-12 w-16 shrink-0 overflow-hidden rounded-md transition duration-200 ring-2 ${
                idx === currentIndex
                  ? "ring-[#D4AF37] scale-105 opacity-100"
                  : "ring-transparent opacity-50 hover:opacity-85"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="64px"
                unoptimized
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
