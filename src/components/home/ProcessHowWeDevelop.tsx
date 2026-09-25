"use client";

import { motion } from "framer-motion";
import { FolderCheck, Users, Trophy, Star, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "../shared/AnimatedCounter";
import { RevealOnScroll } from "../shared/RevealOnScroll";

const metrics = [
  { value: "150+", label: "Projects Delivered", icon: FolderCheck, color: "from-blue-500 to-cyan-500", glow: "rgba(59,130,246,0.4)" },
  { value: "50+", label: "Happy Clients", icon: Trophy, color: "from-amber-500 to-orange-500", glow: "rgba(245,158,11,0.4)" },
  { value: "30+", label: "Expert Team Members", icon: Users, color: "from-emerald-500 to-teal-500", glow: "rgba(16,185,129,0.4)" },
  { value: "4.9", label: "Client Rating", icon: Star, color: "from-violet-500 to-purple-600", glow: "rgba(124,58,237,0.4)" },
];

export function ProcessHowWeDevelop() {
  return (
    <section className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-light opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading + Metric Cards */}
          <div className="lg:col-span-7 space-y-8">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-accent text-xs font-bold uppercase tracking-wider">
                OUR IMPACT
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0b0d17] leading-tight tracking-tight mt-4">
                Numbers that build{" "}
                <span className="text-gradient">trust.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#4a4d6a] leading-relaxed mt-4 max-w-xl">
                We take pride in delivering digital solutions that create real value for our clients across every industry and business stage.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {metrics.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <RevealOnScroll key={m.label} delay={idx * 0.1}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ duration: 0.25 }}
                      className="p-6 rounded-3xl bg-white border border-[#e8eaf0] shadow-sm hover:shadow-xl transition-all duration-300 group card-shimmer"
                      style={{ "--glow": m.glow } as React.CSSProperties}
                    >
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        style={{ boxShadow: `0 8px 25px ${m.glow}` }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-4xl font-black text-[#0b0d17] leading-none">
                        <AnimatedCounter value={m.value} />
                      </div>
                      <p className="text-sm font-medium text-[#4a4d6a] mt-2">{m.label}</p>
                    </motion.div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>

          {/* Right Column: "Growth Together" Animated Chart */}
          <RevealOnScroll delay={0.2} className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0a0d1b] to-[#0f1326] border border-white/10 shadow-2xl glow-blue overflow-hidden relative">
              {/* Grid lines */}
              <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none" />

              <div className="relative z-10">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-1">
                      Performance Velocity
                    </span>
                    <h3 className="text-xl font-extrabold text-white">Growth Together</h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl btn-primary flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Animated Bar Chart */}
                <div className="h-48 flex items-end gap-3 px-2 pb-2 border-b border-white/10">
                  {[
                    { h: 40, q: "Q1", active: false },
                    { h: 58, q: "Q2", active: false },
                    { h: 72, q: "Q3", active: false },
                    { h: 88, q: "Q4", active: false },
                    { h: 100, q: "Now", active: true },
                  ].map((bar, i) => (
                    <div key={bar.q} className="flex-1 flex flex-col items-center gap-2">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${bar.h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: "easeOut" }}
                        className="w-full rounded-t-xl relative overflow-hidden"
                        style={{
                          background: bar.active
                            ? "linear-gradient(to top, #4f46e5, #7c3aed, #a855f7)"
                            : "rgba(255,255,255,0.08)",
                          boxShadow: bar.active ? "0 0 30px rgba(79,70,229,0.6)" : "none",
                        }}
                      >
                        {bar.active && (
                          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/30 to-transparent animate-pulse" />
                        )}
                      </motion.div>
                      <span className="text-[10px] font-semibold text-[#8891b2]">{bar.q}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom annotation */}
                <div className="flex items-center justify-between mt-5">
                  <span className="text-xs font-semibold text-white/80">
                    Consistently exceeding KPIs
                  </span>
                  <span className="text-xs font-extrabold text-emerald-400">+184% YoY Avg</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
