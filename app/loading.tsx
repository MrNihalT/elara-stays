import Image from "next/image";

export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#0B3F3A] px-6 text-center text-white">
      <div>
        <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full border border-white/30 bg-white">
          <Image src="/Logo.jpg" alt="Elara Stays" fill className="object-cover" sizes="80px" />
        </div>
        <p className="mt-5 text-2xl font-bold">Elara Stays</p>
        <div className="mx-auto mt-5 h-1.5 w-48 overflow-hidden rounded-full bg-white/15">
          <div className="h-full w-1/2 animate-[elaraLoader_1.2s_ease-in-out_infinite] rounded-full bg-[#D4AF37]" />
        </div>
      </div>
    </main>
  );
}
