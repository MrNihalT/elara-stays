"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#0B3F3A] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 opacity-25">
            <Image src="/hero2.png" alt="" fill priority className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-[#0B3F3A]/75" />
          <motion.div
            className="relative flex flex-col items-center px-6 text-center"
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/30 bg-white shadow-2xl shadow-black/25">
              <Image src="/Logo.jpg" alt="Elara Stays" fill className="object-cover" sizes="96px" />
            </div>
            <p className="mt-6 text-3xl font-bold">Elara Stays</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Wayanad resort escapes
            </p>
            <div className="mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-white/15">
              <motion.div
                className="h-full rounded-full bg-[#D4AF37]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.05, ease: "easeInOut", repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
