"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, Monitor, Smartphone, Layout, Cloud, ChevronRight } from "lucide-react";

export function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const cardTranslateX1 = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const cardTranslateY1 = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const cardTranslateX2 = useTransform(smoothX, [-0.5, 0.5], [14, -14]);
  const cardTranslateY2 = useTransform(smoothY, [-0.5, 0.5], [12, -12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center pt-24 pb-14 overflow-hidden bg-gradient-to-b from-[#f9fafc] via-[#ffffff] to-[#f4f6fc]"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* ─── Left Column: Headline, Subtitle, CTA, Stats ─── */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-7">
            {/* Small Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#64748b]"
            >
              CREATIVE • DIGITAL • SOLUTIONS COMPANY
            </motion.div>

            {/* Massive Bold Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-5xl sm:text-6xl xl:text-[72px] font-black tracking-tight leading-[1.02] text-[#0b0d17]"
            >
              Digital
              <br />
              Experiences,
              <br />
              Engineered
              <br />
              <span className="bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#7c3aed] text-transparent bg-clip-text">
                for Growth.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="text-sm sm:text-base text-[#4a4d6a] leading-relaxed max-w-lg font-normal"
            >
              We design and develop modern websites, mobile applications, UI/UX and immersive digital solutions that help businesses grow in the real world and beyond.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2563eb] text-white font-bold text-sm shadow-[0_8px_25px_rgba(37,99,235,0.4)] hover:bg-[#1d4ed8] hover:shadow-[0_12px_32px_rgba(37,99,235,0.55)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/work"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white border border-[#e2e8f0] text-[#0b0d17] font-semibold text-sm shadow-sm hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-7 h-7 rounded-full bg-[#eff6ff] flex items-center justify-center text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Our Work</span>
              </Link>
            </motion.div>

            {/* Bottom Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="pt-6 grid grid-cols-4 gap-3 sm:gap-4 max-w-lg"
            >
              {[
                { value: "4+", label: "Years Experience" },
                { value: "150+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "4.9", label: "Client Rating", hasStar: true },
              ].map((s) => (
                <div key={s.label} className="border-r border-[#e2e8f0] last:border-r-0 pr-2">
                  <div className="flex items-center gap-1">
                    <span className="text-xl sm:text-2xl font-black text-[#0b0d17] leading-none">
                      {s.value}
                    </span>
                    {s.hasStar && <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline shrink-0" />}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-[#64748b] block mt-1.5 leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── Right Column: Interactive 3D Tech Hub Visual ─── */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center min-h-[480px] sm:min-h-[560px] lg:min-h-[620px]"
          >
            {/* The 3D Composition Graphic */}
            <div className="relative w-full h-full max-w-[680px] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
              {/* Main 3D Artwork render with depth */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(79,70,229,0.12)]">
                <Image
                  src="/hero-3d-scene.jpg"
                  alt="PEP Software 3D Digital Solutions Hub"
                  fill
                  priority
                  className="object-cover object-center scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Interactive Layer: Floating Service Card Top-Left (Web Development) */}
              <motion.div
                style={{ x: cardTranslateX1, y: cardTranslateY1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-3 left-4 sm:left-6 z-20 hidden sm:flex items-center gap-3 p-3.5 pr-4 rounded-2xl bg-white/92 backdrop-blur-xl border border-white/80 shadow-[0_12px_32px_rgba(37,99,235,0.18)] cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0b0d17] group-hover:text-[#2563eb] transition-colors">
                    Web Development
                  </h4>
                  <p className="text-[10px] text-[#64748b]">Scalable websites for modern businesses.</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#eff6ff] flex items-center justify-center text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors ml-1">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>

              {/* Interactive Layer: Floating Service Card Top-Right (Mobile Apps) */}
              <motion.div
                style={{ x: cardTranslateX2, y: cardTranslateY2 }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
                className="absolute top-6 right-2 sm:right-4 z-20 hidden sm:flex items-center gap-3 p-3.5 pr-4 rounded-2xl bg-white/92 backdrop-blur-xl border border-white/80 shadow-[0_12px_32px_rgba(236,72,153,0.18)] cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-md">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0b0d17] group-hover:text-pink-600 transition-colors">
                    Mobile Apps
                  </h4>
                  <p className="text-[10px] text-[#64748b]">High-performance Android & iOS apps.</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors ml-1">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>

              {/* Interactive Layer: Floating Service Card Bottom-Left (UI/UX Design) */}
              <motion.div
                style={{ x: cardTranslateX2, y: cardTranslateY1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-6 left-2 sm:left-8 z-20 hidden sm:flex items-center gap-3 p-3.5 pr-4 rounded-2xl bg-white/92 backdrop-blur-xl border border-white/80 shadow-[0_12px_32px_rgba(124,58,237,0.18)] cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0b0d17] group-hover:text-violet-600 transition-colors">
                    UI/UX Design
                  </h4>
                  <p className="text-[10px] text-[#64748b]">User-centric designs that create impact.</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors ml-1">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>

              {/* Interactive Layer: Floating Service Card Bottom-Right (Cloud & API) */}
              <motion.div
                style={{ x: cardTranslateX1, y: cardTranslateY2 }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
                className="absolute -bottom-2 right-4 sm:right-8 z-20 hidden sm:flex items-center gap-3 p-3.5 pr-4 rounded-2xl bg-white/92 backdrop-blur-xl border border-white/80 shadow-[0_12px_32px_rgba(6,182,212,0.18)] cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0b0d17] group-hover:text-blue-600 transition-colors">
                    Cloud & API
                  </h4>
                  <p className="text-[10px] text-[#64748b]">Secure, scalable and reliable solutions.</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors ml-1">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>

              {/* Floating pulse glow ring behind the central 3D cube */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/15 blur-2xl pointer-events-none animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
