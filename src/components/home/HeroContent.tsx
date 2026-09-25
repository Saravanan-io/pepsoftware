"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Award, Zap } from "lucide-react";
import { Hero3D } from "./Hero3D";

const floatingPills = [
  {
    icon: "🎨",
    label: "UI/UX Design",
    sub: "Figma • Systems",
    pos: "top-6 left-0 lg:-left-6",
    delay: 0.5,
    dir: { x: -30, y: -20 },
  },
  {
    icon: "📱",
    label: "Mobile App",
    sub: "iOS & Android",
    pos: "top-16 right-0 lg:-right-4",
    delay: 0.65,
    dir: { x: 30, y: -20 },
  },
  {
    icon: "💻",
    label: "Web Development",
    sub: "Next.js • React",
    pos: "bottom-20 right-0 lg:-right-8",
    delay: 0.8,
    dir: { x: 30, y: 20 },
  },
  {
    icon: "🥽",
    label: "AR/VR Design",
    sub: "Spatial 3D",
    pos: "bottom-6 left-0 lg:-left-4",
    delay: 0.95,
    dir: { x: -30, y: 20 },
  },
];

const stats = [
  { value: "4+", label: "Years of Experience", icon: Award },
  { value: "150+", label: "Projects Delivered", icon: Zap },
  { value: "50+", label: "Happy Clients", icon: Users },
  { value: "4.9", label: "Client Rating", icon: Star },
];

export function HeroContent() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-radial-hero section-light">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-light opacity-60 pointer-events-none" />

      {/* Ambient gradient blobs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600/8 blur-[120px] pointer-events-none animate-float-blob" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/6 blur-[100px] pointer-events-none" style={{ animationDelay: "8s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* ─── Left Column ─── */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-7">
            {/* Agency kicker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full badge-accent text-sm font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span>OUR SOFTWARE — Creative Digital Solutions Studio</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black tracking-tight leading-[1.02] text-[#0b0d17]">
                Digital
                <br />
                Experiences,
                <br />
                Engineered{" "}
                <span className="text-gradient">for Growth.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#4a4d6a] leading-relaxed max-w-lg font-normal"
            >
              We design and develop modern websites, mobile applications and immersive digital solutions that help businesses grow in the real world and beyond.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/contact" className="btn-primary group inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-white font-bold text-base">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/work"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-full border border-[#e8eaf0] bg-white text-[#0b0d17] font-semibold text-base hover:border-indigo-500/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Our Work</span>
              </Link>
            </motion.div>

            {/* Social proof / Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="pt-4 border-t border-[#e8eaf0]"
            >
              {/* Team avatar row */}
              <div className="flex items-center gap-4 mb-5">
                <div className="flex -space-x-2">
                  {["AK", "PR", "RV", "DS"].map((initials, i) => (
                    <div
                      key={initials}
                      className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm"
                      style={{
                        background: [`linear-gradient(135deg,#4f46e5,#7c3aed)`, `linear-gradient(135deg,#7c3aed,#ec4899)`, `linear-gradient(135deg,#0891b2,#4f46e5)`, `linear-gradient(135deg,#059669,#0891b2)`][i],
                      }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-[#8b8fa8] font-medium mt-0.5">
                    Trusted by 50+ innovative businesses globally
                  </p>
                </div>
              </div>

              {/* 4 stats mini-grid */}
              <div className="grid grid-cols-4 gap-3">
                {stats.map(({ value, label, icon: Icon }) => (
                  <div key={label} className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#f4f6fb] border border-[#e8eaf0]">
                    <span className="text-xl sm:text-2xl font-black text-[#0b0d17] leading-none">{value}</span>
                    <span className="text-[10px] font-medium text-[#8b8fa8] mt-1 leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ─── Right Column: 3D Scene + Floating Pills ─── */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center">
            {/* 3D Scene */}
            <div className="w-full relative z-10">
              <Hero3D />
            </div>

            {/* Floating glass service pills */}
            {floatingPills.map((pill) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, x: pill.dir.x, y: pill.dir.y }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: pill.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.08, y: -4 }}
                className={`absolute ${pill.pos} z-20 glass-pill px-4 py-2.5 rounded-2xl flex items-center gap-2.5 cursor-default shadow-lg`}
              >
                <span className="text-xl">{pill.icon}</span>
                <div>
                  <span className="text-xs font-bold text-[#0b0d17] block leading-none">{pill.label}</span>
                  <span className="text-[10px] text-[#8b8fa8] block mt-0.5">{pill.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#f4f6fb" />
        </svg>
      </div>
    </section>
  );
}
