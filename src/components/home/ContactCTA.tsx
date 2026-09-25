"use client";

import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, Map, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { RevealOnScroll } from "../shared/RevealOnScroll";

const proofItems = [
  { icon: "🎨", label: "Creative Innovation", sub: "Award-winning design" },
  { icon: "⚡", label: "Long-Term Partnership", sub: "Always by your side" },
  { icon: "📊", label: "Real Business Impact", sub: "Measurable growth" },
];

export function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          {/* Big dark CTA card */}
          <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-br from-[#0a0d1b] via-[#0d1228] to-[#050910] p-8 sm:p-12 lg:p-16 shadow-[0_40px_100px_rgba(79,70,229,0.3)] border border-white/10">
            {/* Decorative glows */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-indigo-700/25 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-violet-700/20 blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

            {/* Illustrative mountain/landscape silhouette decoration */}
            <div className="hidden lg:block absolute bottom-0 right-16 w-80 h-48 pointer-events-none opacity-20">
              <svg viewBox="0 0 320 192" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M0 192 L80 80 L160 130 L240 40 L320 100 L320 192 Z" fill="url(#mtn-grad)" />
                <defs>
                  <linearGradient id="mtn-grad" x1="0" y1="0" x2="320" y2="192" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5" />
                    <stop offset="1" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left: Heading + CTA buttons */}
              <div className="lg:col-span-8 space-y-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>LET'S WORK TOGETHER</span>
                </span>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
                  Ready to bring your{" "}
                  <span className="text-gradient">ideas to life?</span>
                </h2>

                <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
                  Partner with PEP Software and take your business to the next level with innovative digital solutions. Big ideas. Brighter tomorrow.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/contact" className="btn-primary group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-bold text-base">
                    <span>Get a Free Quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full glass-dark border border-white/20 text-white font-semibold text-base hover:border-indigo-400/50 transition-all"
                  >
                    <Phone className="w-4 h-4 text-indigo-400" />
                    <span>Talk to Our Team</span>
                  </a>
                </div>

                {/* Social proof mini badges */}
                <div className="grid grid-cols-3 gap-3 pt-4 max-w-2xl">
                  {proofItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-2.5 p-3.5 rounded-2xl glass-dark border border-white/8">
                      <span className="text-lg">{item.icon}</span>
                      <div>
                        <span className="text-xs font-bold text-white block">{item.label}</span>
                        <span className="text-[10px] text-white/50 block">{item.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Contact info card */}
              <div className="lg:col-span-4 glass-dark rounded-3xl p-7 border border-white/12 space-y-5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">
                  Direct Contact
                </h4>

                <div className="space-y-4 text-sm text-white/70">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Map className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white mb-0.5">Location</span>
                      <span className="text-xs leading-relaxed">{COMPANY_INFO.city}, {COMPANY_INFO.state}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white mb-0.5">Call Us</span>
                      <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-xs font-semibold text-indigo-300">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white mb-0.5">Email Us</span>
                      <span className="text-xs text-white/60">{COMPANY_INFO.email}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[10px] text-white/30 border-t border-white/10">
                  Response guaranteed within 24 business hours.
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
