"use client";

import { motion } from "framer-motion";
import { Search, Map, Layers, Code2, ShieldCheck, Rocket } from "lucide-react";
import { RevealOnScroll } from "../shared/RevealOnScroll";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understand your goals, target audience and requirements.",
    icon: Search,
    gradient: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.5)",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Create detailed roadmap and plan.",
    icon: Map,
    gradient: "from-violet-500 to-purple-600",
    glow: "rgba(124,58,237,0.5)",
  },
  {
    num: "03",
    title: "Design",
    desc: "Craft intuitive and modern designs.",
    icon: Layers,
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.5)",
  },
  {
    num: "04",
    title: "Development",
    desc: "Build with the latest technologies.",
    icon: Code2,
    gradient: "from-indigo-500 to-blue-600",
    glow: "rgba(79,70,229,0.5)",
  },
  {
    num: "05",
    title: "QA & Testing",
    desc: "Ensure optimal performance and security.",
    icon: ShieldCheck,
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.5)",
  },
  {
    num: "06",
    title: "Launch & Support",
    desc: "Deploy and provide ongoing maintenance.",
    icon: Rocket,
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.5)",
  },
];

export function ProcessStrip() {
  return (
    <section id="process" className="py-20 lg:py-28 section-dark relative overflow-hidden">
      {/* Dark grid + radial glow */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-700/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <RevealOnScroll className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-accent-dark text-xs font-bold uppercase tracking-wider mb-3">
              <span>OUR SERVICES</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
              A simple process for{" "}
              <span className="text-gradient-blue">powerful results.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#8891b2] leading-relaxed">
              We follow a structured and collaborative approach to ensure your vision turns into a successful digital product.
            </p>
          </RevealOnScroll>

          {/* From Idea to Impact */}
          <RevealOnScroll delay={0.1}>
            <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl glass-dark border border-white/10 shrink-0">
              <div className="text-3xl">🚀</div>
              <div>
                <span className="block text-xs font-extrabold uppercase tracking-widest text-indigo-400">
                  From Idea to Impact
                </span>
                <span className="block text-[10px] text-[#8891b2] mt-0.5">
                  End-to-end digital excellence
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Process 3D Road visual concept + Steps */}
        <div className="relative">
          {/* Glowing connecting line on desktop */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-px">
            <div className="h-full bg-gradient-to-r from-blue-500 via-violet-500 via-pink-500 via-indigo-500 via-amber-500 to-emerald-500 opacity-40" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 blur-sm opacity-20" />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <RevealOnScroll key={step.num} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                    className="relative group flex flex-col items-center text-center p-6 rounded-3xl glass-dark border border-white/10 hover:border-indigo-500/30 transition-all duration-300 card-shimmer"
                  >
                    {/* Step number bubble */}
                    <div
                      className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${step.gradient.includes("blue") ? "#3b82f6,#06b6d4" : step.gradient.includes("violet") ? "#8b5cf6,#7c3aed" : step.gradient.includes("pink") ? "#ec4899,#f43f5e" : step.gradient.includes("indigo") ? "#6366f1,#3b82f6" : step.gradient.includes("amber") ? "#f59e0b,#f97316" : "#10b981,#14b8a6"})`,
                        boxShadow: `0 8px 25px ${step.glow}`,
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                      {/* Step number badge */}
                      <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#0a0d1b] border border-white/20 text-[10px] font-black text-white flex items-center justify-center">
                        {step.num}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-[#8891b2] leading-relaxed">{step.desc}</p>
                  </motion.div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
