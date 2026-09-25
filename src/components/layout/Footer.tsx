"use client";

import Link from "next/link";
import { ArrowUp, MapPin, Mail, Phone } from "lucide-react";
import { COMPANY_INFO, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#0a0d1b] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none" />
      {/* Top radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-800/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-600 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/8">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl btn-primary flex items-center justify-center text-white font-black text-xl">P</div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                PEP <span className="font-light text-indigo-400">Software</span>
              </span>
            </Link>
            <p className="text-sm text-[#8891b2] leading-relaxed max-w-xs">
              We craft digital experiences that help businesses grow and make a difference. Delivering high-impact web, mobile and 3D solutions.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {[
                { short: "in", href: COMPANY_INFO.socials.linkedin },
                { short: "fb", href: COMPANY_INFO.socials.facebook },
                { short: "ig", href: COMPANY_INFO.socials.instagram },
                { short: "yt", href: COMPANY_INFO.socials.youtube },
              ].map((s) => (
                <a
                  key={s.short}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full glass-dark border border-white/10 flex items-center justify-center text-[10px] font-black text-[#8891b2] hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-200"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-[#8891b2] hover:text-indigo-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: "UI/UX Design", href: "/services/ui-ux-design" },
                { label: "Website Development", href: "/services/website-design-development" },
                { label: "Mobile App Development", href: "/services/mobile-app-design-development" },
                { label: "AR/VR Design", href: "/services/graphic-design" },
                { label: "Design Training Academy", href: "/academy" },
                { label: "Maintenance & Support", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-[#8891b2] hover:text-indigo-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">Contact Us</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0 mt-1" />
                <span className="text-sm text-[#8891b2] leading-snug">
                  123, Tech Park, Chennai, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-[#8891b2] hover:text-indigo-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-indigo-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8891b2]">
          <span>© 2026 {COMPANY_INFO.name}. All Rights Reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
