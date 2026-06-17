"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
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

/** Animated hamburger → X button */
function MenuToggle({ open, onClick }: { open: boolean; onClick: () => void }) {
  const barBase =
    "block absolute left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-white transition-all duration-300 ease-in-out";

  return (
    <button
      type="button"
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={onClick}
      className="relative grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/15 text-white lg:hidden"
    >
      <span className="relative block h-5 w-5">
        <span
          className={`${barBase} ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[3px]"}`}
        />
        <span
          className={`${barBase} top-1/2 -translate-y-1/2 ${open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"}`}
        />
        <span
          className={`${barBase} ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-[3px]"}`}
        />
      </span>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/25 bg-[#0B3F3A]/80 shadow-sm backdrop-blur-xl">
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image src="/hero2.png" alt="" fill className="object-cover" sizes="100vw" />
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
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0F766E] px-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-[#0D625C]"
          >
            <FaWhatsapp aria-hidden />
            <span className="hidden sm:inline">Book on WhatsApp</span>
          </a>
          <MenuToggle open={open} onClick={() => setOpen((v) => !v)} />
        </div>
      </nav>

      {/* Mobile menu with smooth slide animation */}
      <div
        className={`grid overflow-hidden border-t border-white/10 bg-[#0B3F3A] shadow-lg transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                style={{
                  animationDelay: open ? `${i * 50}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
