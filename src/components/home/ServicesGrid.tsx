"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layout, Code2, Smartphone, Layers } from "lucide-react";
import { RevealOnScroll } from "../shared/RevealOnScroll";

const services = [
  {
    id: "ui-ux-design",
    icon: Layout,
    label: "UI/UX Design",
    desc: "User-centric designs that create meaningful and engaging experiences.",
    gradient: "from-violet-500 to-purple-600",
    glow: "group-hover:shadow-[0_20px_60px_rgba(124,58,237,0.3)]",
    bgSoft: "bg-violet-50",
    textColor: "text-violet-600",
    borderHover: "hover:border-violet-300",
    href: "/services/ui-ux-design",
  },
  {
    id: "website-development",
    icon: Code2,
    label: "Website Development",
    desc: "High-performance websites built with modern web technologies.",
    gradient: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)]",
    bgSoft: "bg-blue-50",
    textColor: "text-blue-600",
    borderHover: "hover:border-blue-300",
    href: "/services/website-design-development",
  },
  {
    id: "mobile-app",
    icon: Smartphone,
    label: "Mobile App Development",
    desc: "Feature-rich mobile apps for both Android and iOS platforms.",
    gradient: "from-amber-500 to-orange-500",
    glow: "group-hover:shadow-[0_20px_60px_rgba(245,158,11,0.3)]",
    bgSoft: "bg-amber-50",
    textColor: "text-amber-600",
    borderHover: "hover:border-amber-300",
    href: "/services/mobile-app-design-development",
  },
  {
    id: "ar-vr",
    icon: Layers,
    label: "AR/VR Design",
    desc: "Immersive augmented and VR experiences that bring ideas to life with whole new realities.",
    gradient: "from-pink-500 to-rose-500",
    glow: "group-hover:shadow-[0_20px_60px_rgba(236,72,153,0.3)]",
    bgSoft: "bg-pink-50",
    textColor: "text-pink-600",
    borderHover: "hover:border-pink-300",
    href: "/services/graphic-design",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 lg:py-28 section-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-light opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <RevealOnScroll className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-accent text-xs font-bold uppercase tracking-wider mb-3">
              <span>OUR SERVICES</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0b0d17] leading-tight tracking-tight">
              Digital solutions for a smarter{" "}
              <span className="text-gradient">tomorrow.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4a4d6a] leading-relaxed">
              From design to development, we deliver end-to-end digital solutions tailored to your business needs.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#e8eaf0] text-sm font-semibold text-[#0b0d17] hover:border-indigo-400 hover:text-indigo-600 shadow-sm hover:shadow-md transition-all shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <RevealOnScroll key={svc.id} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`group relative flex flex-col h-full p-8 rounded-3xl bg-white border border-[#e8eaf0] shadow-sm transition-all duration-400 card-shimmer ${svc.glow} ${svc.borderHover} hover:border-opacity-50`}
                >
                  {/* Gradient Icon block */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className={`text-xl font-bold text-[#0b0d17] group-hover:${svc.textColor} transition-colors mb-3`}>
                    {svc.label}
                  </h3>

                  <p className="text-sm text-[#4a4d6a] leading-relaxed flex-1">{svc.desc}</p>

                  {/* Arrow CTA */}
                  <div className="mt-6 pt-5 border-t border-[#f0f0f5] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#8b8fa8] group-hover:text-indigo-600 transition-colors">
                      Learn more
                    </span>
                    <Link
                      href={svc.href}
                      className={`w-10 h-10 rounded-full ${svc.bgSoft} ${svc.textColor} flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:${svc.gradient} group-hover:text-white shadow-xs`}
                      aria-label={svc.label}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
