"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layout, Code2, Smartphone, Layers, Sparkles } from "lucide-react";
import { RevealOnScroll } from "../shared/RevealOnScroll";

const services = [
  {
    id: "ui-ux-design",
    icon: Layout,
    label: "UI/UX Design",
    desc: "User-centric designs that create meaningful and engaging experiences.",
    accent: "#C86A28",
    href: "/services/ui-ux-design",
  },
  {
    id: "website-development",
    icon: Code2,
    label: "Website Development",
    desc: "High-performance websites built with modern web technologies.",
    accent: "#544643",
    href: "/services/website-design-development",
  },
  {
    id: "mobile-app",
    icon: Smartphone,
    label: "Mobile App Development",
    desc: "Feature-rich mobile apps for both Android and iOS platforms.",
    accent: "#C86A28",
    href: "/services/mobile-app-design-development",
  },
  {
    id: "ar-vr",
    icon: Layers,
    label: "AR/VR Design",
    desc: "Immersive augmented and VR experiences that bring ideas to life with whole new realities.",
    accent: "#544643",
    href: "/services/graphic-design",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <RevealOnScroll className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-xs font-bold uppercase tracking-wider text-[#C86A28] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR SERVICES</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#151515] leading-tight tracking-tight">
              Digital solutions for a smarter{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]">
                tomorrow.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed">
              From design to development, we deliver end-to-end digital solutions tailored to your business needs.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#151515] text-[#F7F8F8] text-sm font-semibold hover:bg-[#544643] shadow-md shadow-[#151515]/10 transition-all shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 text-[#C86A28] transition-transform group-hover:translate-x-1" />
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
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group relative flex flex-col h-full p-8 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs hover:border-[#544643] hover:shadow-lg transition-all duration-300 card-shimmer"
                >
                  {/* Icon block */}
                  <div className="w-14 h-14 rounded-2xl bg-[#E9E8E6] border border-[#C6C2C1] flex items-center justify-center text-[#151515] mb-6 group-hover:scale-105 group-hover:border-[#544643] transition-all duration-300 shadow-xs">
                    <Icon className="w-7 h-7 text-[#C86A28]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#151515] group-hover:text-[#C86A28] transition-colors mb-3">
                    {svc.label}
                  </h3>

                  <p className="text-sm text-[#544643] leading-relaxed flex-1">{svc.desc}</p>

                  {/* Arrow CTA */}
                  <div className="mt-6 pt-5 border-t border-[#C6C2C1]/60 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#544643] group-hover:text-[#151515] transition-colors">
                      Learn more
                    </span>
                    <Link
                      href={svc.href}
                      className="w-10 h-10 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-[#151515] flex items-center justify-center transition-all duration-300 group-hover:bg-[#151515] group-hover:text-[#F7F8F8] group-hover:border-[#151515] shadow-xs"
                      aria-label={svc.label}
                    >
                      <ArrowRight className="w-4 h-4 text-[#C86A28] group-hover:text-[#F7F8F8]" />
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
