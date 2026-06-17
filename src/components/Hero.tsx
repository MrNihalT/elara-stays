"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa6";
import { whatsappUrl } from "@/src/lib/constants";

export default function Hero() {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!bgRef.current) return;
        gsap.to(bgRef.current, {
            scale: 1.06,
            duration: 8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
        });
    }, []);

    return (
        <section className="hero-section relative min-h-[92vh] overflow-hidden pt-24 text-white">
            <div ref={bgRef} className="hero-float absolute inset-0">
                <Image
                    src="/hero2.png"
                    alt="Misty Wayanad hills and waterfall at sunrise"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#0B3F3A]/85" />
            <div className="relative mx-auto flex min-h-[calc(92vh-6rem)] max-w-7xl items-center px-4 py-16 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] backdrop-blur">
                        Wayanad resort booking concierge
                    </p>
                    <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl">
                        Premium Wayanad resorts, curated for your perfect stay.
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                        Discover family resorts, honeymoon stays, pool resorts,
                        private villas, and budget-friendly retreats through one
                        simple WhatsApp enquiry.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href={whatsappUrl()}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-13 items-center justify-center gap-3 rounded-full bg-[#0F766E] px-6 font-bold text-white shadow-xl shadow-black/20 transition hover:bg-[#0D625C]"
                        >
                            <FaWhatsapp aria-hidden /> Check Availability
                        </a>
                        <Link
                            href="/resorts"
                            className="inline-flex h-13 items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 font-bold backdrop-blur transition hover:bg-white/20"
                        >
                            View Resorts <FaArrowRight aria-hidden />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
