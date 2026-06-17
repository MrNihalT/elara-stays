"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaWhatsapp, FaXmark } from "react-icons/fa6";
import { whatsappUrl } from "@/src/lib/constants";
import WeatherBadge from "./WeatherBadge";

const links = [
  { href: "/", label: "Home" },
  { href: "/resorts", label: "Resorts" },
  { href: "/tourist-places", label: "Tourist Places" },
  { href: "/blogs/best-resorts-in-wayanad", label: "Blogs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-hidden border-b border-white/25 bg-[#0B3F3A]/80 shadow-sm backdrop-blur-xl">
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image src="/hero.webp" alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-12 w-12 overflow-hidden rounded-full border border-white/35 bg-white">
            <Image src="/Logo.jpg" alt="Elara Stays logo" fill className="object-cover" sizes="48px" />
          </span>
          <span>
            <span className="block text-lg font-bold leading-tight text-white">Elara Stays</span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-[#D4AF37]">Wayanad</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-semibold text-white lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#D4AF37]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <WeatherBadge />
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#D4AF37] px-4 text-sm font-bold text-[#1F2937] shadow-lg shadow-emerald-900/15 transition hover:bg-[#e4c45f]"
          >
            <FaWhatsapp aria-hidden />
            <span className="hidden sm:inline">Book on WhatsApp</span>
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/15 text-white lg:hidden"
          >
            {open ? <FaXmark aria-hidden /> : <FaBars aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#0B3F3A] px-4 py-4 shadow-lg lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
