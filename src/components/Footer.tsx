import Link from "next/link";
import { FaEnvelope, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { siteConfig, whatsappUrl } from "@/src/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0B3F3A] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <div>
          <p className="text-2xl font-bold">{siteConfig.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
            Luxury-minded Wayanad resort discovery for families, couples, groups, and honeymoon travelers. Send your dates and get handpicked stay options on WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#0F766E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0D625C]">
              <FaWhatsapp aria-hidden /> WhatsApp Enquiry
            </a>
            <a href="tel:+919656938417" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold">
              <FaPhone aria-hidden /> {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
        <div>
          <p className="font-bold text-[#D4AF37]">Explore</p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <Link href="/resorts">Resorts</Link>
            <Link href="/tourist-places">Tourist Places</Link>
            <Link href="/blogs">Travel Blogs</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-bold text-[#D4AF37]">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <a className="flex items-center gap-2" href="tel:+919656938417"><FaPhone aria-hidden /> {siteConfig.phoneDisplay}</a>
            <a className="flex items-center gap-2" href={`mailto:${siteConfig.email}`}><FaEnvelope aria-hidden /> {siteConfig.email}</a>
            <a className="flex items-center gap-2" href={siteConfig.instagram} target="_blank" rel="noreferrer"><FaInstagram aria-hidden /> Instagram</a>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60">
        © 2026 Elara Stays. Started by Shilby in 2023. Developed by{" "}
        <a href="https://nihalt.in" target="_blank" rel="noreferrer" className="font-bold text-[#D4AF37]">
          Nihalt
        </a>
        .
      </div>
    </footer>
  );
}
