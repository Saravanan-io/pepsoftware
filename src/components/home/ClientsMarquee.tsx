"use client";

import { CLIENTS_DATA } from "@/data/clients";

export function ClientsMarquee() {
  const items = [...CLIENTS_DATA, ...CLIENTS_DATA, ...CLIENTS_DATA, ...CLIENTS_DATA];

  return (
    <section className="py-10 bg-[#f4f6fb] border-y border-[#e8eaf0] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] font-bold text-[#8b8fa8]">
          TRUSTED BY INNOVATIVE BUSINESSES
        </p>
      </div>

      <div className="relative flex overflow-hidden select-none group">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f4f6fb] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f4f6fb] to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-8 animate-marquee group-hover:[animation-play-state:paused] shrink-0">
          {items.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center px-8 py-3 rounded-2xl bg-white border border-[#e8eaf0] shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300 min-w-[120px] group/item"
            >
              <span className="text-lg font-black tracking-widest text-[#8b8fa8] group-hover/item:text-indigo-600 transition-colors duration-300">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
