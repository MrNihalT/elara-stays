"use client";

import { FormEvent, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { whatsappUrl } from "@/src/lib/constants";

const initial = {
  name: "",
  place: "",
  group: "",
  checkIn: "",
  checkOut: "",
  adults: "",
  kids6to12: "",
  kidsBelow6: "",
  rooms: "",
  requests: "",
};

export default function WhatsappForm() {
  const [form, setForm] = useState(initial);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `*Welcome 🍃*
*Elara Stays*

*Provide us the following details for checking availability and rates👇🏻*

👤 Your Name: ${form.name}
▫️ Your Place: ${form.place}
▫️ Family/Bachelor's: ${form.group}
📅 Check-in Date: ${form.checkIn}
📅 Check-out Date: ${form.checkOut}
👨‍🦰 Adults: ${form.adults}
🧒 Kids (6-12 yrs): ${form.kids6to12}
🧒 Kids (Below 6 yrs): ${form.kidsBelow6}
🛏️ Number of Rooms: ${form.rooms}
📝 Any Special Requests or Requirements: ${form.requests}`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  const inputClass = "w-full rounded-2xl border border-[#0F766E]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10";

  return (
    <section id="booking" className="bg-[#0F766E] px-4 py-16 text-white md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4AF37]">WhatsApp booking</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">Send your dates. Get handpicked resort options.</h2>
          <p className="mt-5 max-w-xl leading-8 text-white/80">
            Share your stay details and Elara Stays will help you compare availability, room options, and rates on WhatsApp.
          </p>
        </div>
        <form onSubmit={submit} className="rounded-[2rem] bg-[#FAFAF7] p-4 text-[#1F2937] shadow-2xl md:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className={inputClass} required placeholder="Your Name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
            <input className={inputClass} required placeholder="Your Place" value={form.place} onChange={(event) => setForm({ ...form, place: event.target.value })} />
            <select className={inputClass} required value={form.group} onChange={(event) => setForm({ ...form, group: event.target.value })}>
              <option value="">Family or Bachelor&apos;s?</option>
              <option>Family</option>
              <option>Bachelor&apos;s</option>
              <option>Couple</option>
              <option>Friends Group</option>
            </select>
            <input className={inputClass} required type="number" min="1" placeholder="Number of Rooms" value={form.rooms} onChange={(event) => setForm({ ...form, rooms: event.target.value })} />
            <input className={inputClass} required type="date" value={form.checkIn} onChange={(event) => setForm({ ...form, checkIn: event.target.value })} />
            <input className={inputClass} required type="date" value={form.checkOut} onChange={(event) => setForm({ ...form, checkOut: event.target.value })} />
            <input className={inputClass} required type="number" min="1" placeholder="Adults" value={form.adults} onChange={(event) => setForm({ ...form, adults: event.target.value })} />
            <input className={inputClass} type="number" min="0" placeholder="Kids (6-12 yrs)" value={form.kids6to12} onChange={(event) => setForm({ ...form, kids6to12: event.target.value })} />
            <input className={inputClass} type="number" min="0" placeholder="Kids (Below 6 yrs)" value={form.kidsBelow6} onChange={(event) => setForm({ ...form, kidsBelow6: event.target.value })} />
            <textarea className={`${inputClass} min-h-28 sm:col-span-2`} placeholder="Any Special Requests or Requirements" value={form.requests} onChange={(event) => setForm({ ...form, requests: event.target.value })} />
          </div>
          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0F766E] px-6 py-4 font-bold text-white transition hover:bg-[#0D625C]">
            <FaWhatsapp aria-hidden /> Open WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
