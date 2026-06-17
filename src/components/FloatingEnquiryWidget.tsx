"use client";

import { FormEvent, useState, useEffect } from "react";
import { FaWhatsapp, FaCalendarDays, FaBed, FaUserGroup, FaXmark } from "react-icons/fa6";
import { whatsappUrl } from "@/src/lib/constants";

const initialForm = {
  name: "",
  place: "",
  group: "",
  checkIn: "",
  checkOut: "",
  adults: "",
  rooms: "",
};

export default function FloatingEnquiryWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);

  // Auto-open popup on first visit after 2 seconds
  useEffect(() => {
    const popupShown = sessionStorage.getItem("enquiryPopupShown");
    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("enquiryPopupShown", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `*Welcome 🍃*
*Elara Stays*

*Provide us the following details for checking availability and rates👇🏻*

👤 Name: ${form.name}
▫️ Place: ${form.place}
▫️ Group: ${form.group}
📅 Check-in: ${form.checkIn}
📅 Check-out: ${form.checkOut}
👨‍🦰 Adults: ${form.adults}
🛏️ Rooms: ${form.rooms}`;

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setIsOpen(false);
  }

  const inputClass =
    "w-full rounded-xl border border-[#0F766E]/15 bg-white px-3 py-2 text-xs outline-none transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10";

  return (
    <>
      {/* Floating Buttons (Shown when closed) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 sm:flex-row sm:items-center">
          {/* Book Now Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 rounded-full bg-[#0F766E] px-5 py-3 text-xs font-bold text-white shadow-xl hover:bg-[#0D625C] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <FaCalendarDays className="h-4 w-4 text-[#D4AF37]" />
            <span>Book Now</span>
          </button>

          {/* WhatsApp Floating Action Button */}
          <a
            href={whatsappUrl("Hi Elara Stays, I would like to check resort options and availability.")}
            target="_blank"
            rel="noreferrer"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-200"
            aria-label="Contact on WhatsApp"
          >
            {/* Pulsing glow ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
            <FaWhatsapp className="relative z-10 h-7 w-7" />
          </a>
        </div>
      )}

      {/* Floating Enquiry Form Panel (Sliding Modal) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 backdrop-blur-sm md:inset-auto md:bottom-6 md:right-6 md:block md:p-0 md:bg-transparent md:backdrop-blur-none">
          {/* Modal Overlay for Mobile (to close when click outside) */}
          <div className="absolute inset-0 -z-10 md:hidden" onClick={() => setIsOpen(false)}></div>

          {/* Form Content Card */}
          <div className="w-full max-w-md rounded-t-[2rem] bg-[#FAFAF7] p-5 shadow-2xl border border-[#0F766E]/10 animate-slide-up md:w-[360px] md:rounded-[2rem] md:animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#0F766E]/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F766E]/10 text-[#0F766E]">
                  <FaBed className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1F2937]">Check Availability</h4>
                  <p className="text-[10px] text-[#6B7280]">Compare 100+ Wayanad resorts</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-[#0F766E]/5 p-2 text-[#6B7280] transition hover:bg-[#0F766E]/10 hover:text-[#1F2937]"
                aria-label="Close form"
              >
                <FaXmark className="h-4 w-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={submit} className="mt-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className={`${inputClass} sm:col-span-2`}
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className={`${inputClass} sm:col-span-2`}
                  required
                  placeholder="Your Home Place"
                  value={form.place}
                  onChange={(e) => setForm({ ...form, place: e.target.value })}
                />
                
                <select
                  className={`${inputClass} sm:col-span-2`}
                  required
                  value={form.group}
                  onChange={(e) => setForm({ ...form, group: e.target.value })}
                >
                  <option value="">Group Type?</option>
                  <option>Family</option>
                  <option>Couple</option>
                  <option>Bachelor's</option>
                  <option>Friends Group</option>
                </select>

                <div className="sm:col-span-2 grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-bold text-[#6B7280] block mb-1">Check-in</label>
                    <input
                      className={inputClass}
                      required
                      type="date"
                      value={form.checkIn}
                      onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[#6B7280] block mb-1">Check-out</label>
                    <input
                      className={inputClass}
                      required
                      type="date"
                      value={form.checkOut}
                      onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <input
                    className={inputClass}
                    required
                    type="number"
                    min="1"
                    placeholder="Adults"
                    value={form.adults}
                    onChange={(e) => setForm({ ...form, adults: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    className={inputClass}
                    required
                    type="number"
                    min="1"
                    placeholder="Rooms"
                    value={form.rooms}
                    onChange={(e) => setForm({ ...form, rooms: e.target.value })}
                  />
                </div>
              </div>

              {/* Submit to WhatsApp */}
              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-xs font-bold text-white shadow-md transition hover:bg-[#20ba59] active:scale-95"
              >
                <FaWhatsapp className="h-4 w-4" />
                <span>Send Enquiry on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
