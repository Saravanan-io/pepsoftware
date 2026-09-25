"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Globe, Cpu, Sparkles } from "lucide-react";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { AnimatedCounter } from "../shared/AnimatedCounter";

const visionMission = [
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To become a global digital solutions company known for innovation, creativity and real business impact.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: Globe,
    title: "Our Mission",
    desc: "To help businesses grow through modern technologies, long-term partnerships and meaningful digital experiences.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
];

export function IntroStatement() {
  return (
    <section id="about" className="py-20 lg:py-28 section-dark relative overflow-hidden noise-overlay">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-blue-dark pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-700/10 blur-[150px] pointer-events-none animate-float-blob" />
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: About Narrative */}
          <RevealOnScroll className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-accent-dark text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT PEP SOFTWARE</span>
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
              More than just a{" "}
              <span className="text-gradient-blue">development company</span>
            </h2>

            <p className="text-base sm:text-lg text-[#8891b2] leading-relaxed">
              Established in 2021, PEP Software is a creative and results-driven digital solutions company. We work with startups, enterprises and agencies to create meaningful, high-impact digital experiences.
            </p>

            <p className="text-base text-[#8891b2] leading-relaxed">
              We work with startups, enterprises and agencies to create meaningful digital experiences across UI/UX, websites, mobile applications, 3D and AR/VR spatial realities.
            </p>

            {/* Vision & Mission cards */}
            <div className="space-y-4 pt-2">
              {visionMission.map(({ icon: Icon, title, desc, color, bg, border }) => (
                <div key={title} className={`flex items-start gap-4 p-5 rounded-2xl glass-dark ${border} border`}>
                  <div className={`w-10 h-10 rounded-xl ${bg} ${color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
                    <p className="text-xs text-[#8891b2] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-primary text-white font-bold text-sm"
            >
              <span>Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealOnScroll>

          {/* Right Column: 3D Globe Visual + Stats */}
          <RevealOnScroll delay={0.2} className="lg:col-span-6">
            <div className="relative">
              {/* Main Stats Board */}
              <div className="p-8 sm:p-10 rounded-3xl glass-dark border border-white/10 shadow-2xl space-y-8">
                {/* Top Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "20+", label: "Established" },
                    { value: "150+", label: "Projects Delivered" },
                    { value: "100+", label: "Happy Clients" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="text-center p-4 rounded-2xl stat-card-dark"
                    >
                      <div className="text-2xl sm:text-3xl font-black text-white">
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <div className="text-[11px] text-[#8891b2] mt-1 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Globe / 3D planet visual */}
                <div className="relative h-52 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f1e4a] via-[#0a1128] to-[#050d1f] border border-white/10">
                  {/* Animated orbit rings */}
                  <div className="absolute w-44 h-44 rounded-full border border-indigo-500/30 animate-spin-slow" />
                  <div className="absolute w-32 h-32 rounded-full border border-purple-500/20" style={{ animation: "spin-slow 15s linear infinite reverse" }} />

                  {/* Glowing planet */}
                  <div className="relative">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-800 via-indigo-600 to-violet-500 shadow-[0_0_60px_rgba(79,70,229,0.8)] animate-pulse-glow" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
                  </div>

                  {/* Connection dots */}
                  {[
                    { top: "20%", left: "15%", color: "bg-cyan-400" },
                    { top: "60%", left: "75%", color: "bg-pink-400" },
                    { top: "80%", left: "25%", color: "bg-indigo-400" },
                    { top: "30%", left: "80%", color: "bg-amber-400" },
                  ].map((dot, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 rounded-full ${dot.color} animate-pulse`}
                      style={{ top: dot.top, left: dot.left, animationDelay: `${i * 0.5}s` }}
                    />
                  ))}

                  <div className="absolute bottom-3 right-4 glass-pill-dark px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-cyan-400" />
                    <span className="text-[10px] font-semibold text-white">Global Vision</span>
                  </div>
                </div>

                {/* Bottom services badge row */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Creative & Result Driven", icon: "✨" },
                    { label: "Long-Term Support Partner", icon: "🛡️" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5 p-3.5 rounded-2xl glass-dark border border-white/8">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-xs font-semibold text-[#8891b2]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
