"use client";

import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, Map, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { RevealOnScroll } from "../shared/RevealOnScroll";

const proofItems = [
  { icon: "🎨", label: "Creative Innovation", sub: "Award-winning craft" },
  { icon: "⚡", label: "Long-Term Partnership", sub: "Always by your side" },
  { icon: "📊", label: "Real Business Impact", sub: "Measurable growth" },
];

export function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          {/* Big Charcoal Luxury CTA card */}
          <div className="relative rounded-[36px] overflow-hidden bg-[#151515] border border-[#544643]/50 p-8 sm:p-12 lg:p-16 shadow-2xl">
            {/* Soft subtle metallic glows */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#544643]/30 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#C86A28]/20 blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left: Heading + CTA buttons */}
              <div className="lg:col-span-8 space-y-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#544643]/40 border border-[#544643] text-[#C86A28] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>LET'S WORK TOGETHER</span>
                </span>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F8F8] leading-[1.05] tracking-tight">
                  Ready to bring your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6C2C1] via-[#E9E8E6] to-[#C86A28]">
                    ideas to life?
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-[#E7EBEA]/80 leading-relaxed max-w-2xl">
                  Partner with PEP Software and take your business to the next level with innovative digital solutions. Big ideas. Brighter tomorrow.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#C86A28] text-white font-bold text-base hover:bg-[#544643] shadow-lg shadow-[#C86A28]/20 transition-all"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#544643]/30 border border-[#544643] text-[#F7F8F8] font-semibold text-base hover:border-[#C86A28] transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#C86A28]" />
                    <span>Talk to Our Team</span>
                  </a>
                </div>

                {/* Social proof mini badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 max-w-2xl">
                  {proofItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#544643]/20 border border-[#544643]/30">
                      <span className="text-lg">{item.icon}</span>
                      <div>
                        <span className="text-xs font-bold text-[#F7F8F8] block">{item.label}</span>
                        <span className="text-[10px] text-[#C6C2C1] block">{item.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Contact info card */}
              <div className="lg:col-span-4 bg-[#151515]/90 rounded-3xl p-7 border border-[#544643]/50 space-y-5 shadow-xl">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#F7F8F8]">
                  Direct Contact
                </h4>

                <div className="space-y-4 text-sm text-[#E7EBEA]/80">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#544643]/40 border border-[#544643] text-[#C86A28] flex items-center justify-center shrink-0 mt-0.5">
                      <Map className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#F7F8F8] mb-0.5">Location</span>
                      <span className="text-xs leading-relaxed text-[#C6C2C1]">{COMPANY_INFO.city}, {COMPANY_INFO.state}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#544643]/40 border border-[#544643] text-[#C86A28] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#F7F8F8] mb-0.5">Call Us</span>
                      <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-xs font-semibold text-[#C86A28] hover:underline">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#544643]/40 border border-[#544643] text-[#C86A28] flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#F7F8F8] mb-0.5">Email Us</span>
                      <span className="text-xs text-[#C6C2C1]">{COMPANY_INFO.email}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[10px] text-[#C6C2C1]/60 border-t border-[#544643]/40 font-medium">
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
