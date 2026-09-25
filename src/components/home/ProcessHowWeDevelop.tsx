"use client";

import { motion } from "framer-motion";
import { FolderCheck, Users, Trophy, Star, TrendingUp, Sparkles } from "lucide-react";
import { AnimatedCounter } from "../shared/AnimatedCounter";
import { RevealOnScroll } from "../shared/RevealOnScroll";

const metrics = [
  { value: "150+", label: "Projects Delivered", icon: FolderCheck },
  { value: "50+", label: "Happy Clients", icon: Trophy },
  { value: "30+", label: "Expert Team Members", icon: Users },
  { value: "4.9", label: "Client Rating", icon: Star },
];

export function ProcessHowWeDevelop() {
  return (
    <section className="py-20 lg:py-28 bg-[#E7EBEA] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading + Metric Cards */}
          <div className="lg:col-span-7 space-y-8">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-xs font-bold uppercase tracking-wider text-[#C86A28]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OUR IMPACT</span>
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#151515] leading-tight tracking-tight mt-4">
                Numbers that build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]">
                  trust.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[#544643] leading-relaxed mt-4 max-w-xl">
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
                      className="p-6 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs hover:border-[#544643] hover:shadow-lg transition-all duration-300 group card-shimmer"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#E9E8E6] border border-[#C6C2C1] flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 group-hover:border-[#544643] transition-all duration-300">
                        <Icon className="w-6 h-6 text-[#C86A28]" />
                      </div>
                      <div className="text-4xl font-black text-[#151515] leading-none">
                        <AnimatedCounter value={m.value} />
                      </div>
                      <p className="text-sm font-semibold text-[#544643] mt-2">{m.label}</p>
                    </motion.div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>

          {/* Right Column: "Growth Together" Chart in Charcoal Black Luxury */}
          <RevealOnScroll delay={0.2} className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#151515] border border-[#544643]/50 shadow-2xl overflow-hidden relative">
              {/* Grid lines */}
              <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />

              <div className="relative z-10">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C86A28] block mb-1">
                      Performance Velocity
                    </span>
                    <h3 className="text-xl font-extrabold text-[#F7F8F8]">Growth Together</h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#544643]/40 border border-[#544643] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#C86A28]" />
                  </div>
                </div>

                {/* Animated Bar Chart */}
                <div className="h-48 flex items-end gap-3 px-2 pb-2 border-b border-[#544643]/40">
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
                            ? "linear-gradient(to top, #544643, #C86A28)"
                            : "rgba(198, 194, 193, 0.15)",
                          boxShadow: bar.active ? "0 0 25px rgba(200,106,40,0.5)" : "none",
                        }}
                      >
                        {bar.active && (
                          <div className="absolute inset-0 bg-gradient-to-t from-[#C86A28]/40 to-transparent animate-pulse" />
                        )}
                      </motion.div>
                      <span className={`text-[10px] font-semibold ${bar.active ? "text-[#C86A28]" : "text-[#C6C2C1]"}`}>
                        {bar.q}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom annotation */}
                <div className="flex items-center justify-between mt-5">
                  <span className="text-xs font-medium text-[#C6C2C1]">
                    Consistently exceeding client KPIs
                  </span>
                  <span className="text-xs font-extrabold text-[#C86A28]">+184% YoY Avg</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
