"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Globe, Sparkles } from "lucide-react";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { AnimatedCounter } from "../shared/AnimatedCounter";

const visionMission = [
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To become a global digital solutions company known for innovation, creativity and real business impact.",
    color: "text-[#C86A28]",
    bg: "bg-[#E9E8E6]",
    border: "border-[#C6C2C1]",
  },
  {
    icon: Globe,
    title: "Our Mission",
    desc: "To help businesses grow through modern technologies, long-term partnerships and meaningful digital experiences.",
    color: "text-[#544643]",
    bg: "bg-[#E9E8E6]",
    border: "border-[#C6C2C1]",
  },
];

export function IntroStatement() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden noise-overlay">
      {/* Subtle neutral luxury background glows & grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#E7EBEA] blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EFF0EF] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: About Narrative */}
          <RevealOnScroll className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-xs font-bold uppercase tracking-wider text-[#C86A28]">
              <Sparkles className="w-3.5 h-3.5 text-[#C86A28]" />
              <span>ABOUT PEP SOFTWARE</span>
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-[#151515]">
              More than just a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]">
                development company
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#544643] leading-relaxed">
              Established in 2021, PEP Software is a creative and results-driven digital solutions company. We work with startups, enterprises and agencies to create meaningful, high-impact digital experiences.
            </p>

            <p className="text-base text-[#544643]/85 leading-relaxed">
              We work with startups, enterprises and agencies to create meaningful digital experiences across UI/UX, websites, mobile applications, 3D and AR/VR spatial realities.
            </p>

            {/* Vision & Mission cards */}
            <div className="space-y-4 pt-2">
              {visionMission.map(({ icon: Icon, title, desc, color, bg, border }) => (
                <div key={title} className={`flex items-start gap-4 p-5 rounded-2xl bg-[#EFF0EF] ${border} border shadow-xs hover:border-[#544643]/40 transition-colors`}>
                  <div className={`w-10 h-10 rounded-xl ${bg} ${color} flex items-center justify-center shrink-0 border border-[#C6C2C1]/60`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#151515] mb-1">{title}</h4>
                    <p className="text-xs text-[#544643] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#151515] text-[#F7F8F8] font-bold text-sm hover:bg-[#544643] transition-all shadow-md shadow-[#151515]/10 group"
            >
              <span>Our Story</span>
              <ArrowRight className="w-4 h-4 text-[#C86A28] group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealOnScroll>

          {/* Right Column: 3D Orb Visual + Stats */}
          <RevealOnScroll delay={0.2} className="lg:col-span-6">
            <div className="relative">
              {/* Main Stats Board */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xl space-y-8">
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
                      className="text-center p-4 rounded-2xl bg-[#E9E8E6] border border-[#C6C2C1]/80 shadow-xs"
                    >
                      <div className="text-2xl sm:text-3xl font-black text-[#151515]">
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <div className="text-[11px] text-[#544643] mt-1 font-semibold">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Futuristic Sphere Visual */}
                <div className="relative h-52 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#E7EBEA] via-[#EFF0EF] to-[#E9E8E6] border border-[#C6C2C1]">
                  {/* Orbit rings */}
                  <div className="absolute w-44 h-44 rounded-full border border-[#C6C2C1] animate-spin-slow" />
                  <div className="absolute w-32 h-32 rounded-full border border-[#544643]/30" style={{ animation: "spin-slow 15s linear infinite reverse" }} />

                  {/* Metallic sphere with Burnt Orange glow */}
                  <div className="relative">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#151515] via-[#544643] to-[#151515] shadow-[0_0_50px_rgba(200,106,40,0.35)] animate-pulse-glow border border-[#C6C2C1]" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                  </div>

                  {/* Connection dots */}
                  {[
                    { top: "20%", left: "15%", color: "bg-[#C86A28]" },
                    { top: "60%", left: "75%", color: "bg-[#544643]" },
                    { top: "80%", left: "25%", color: "bg-[#C86A28]" },
                    { top: "30%", left: "80%", color: "bg-[#C6C2C1]" },
                  ].map((dot, i) => (
                    <div
                      key={i}
                      className={`absolute w-2.5 h-2.5 rounded-full ${dot.color} animate-pulse`}
                      style={{ top: dot.top, left: dot.left, animationDelay: `${i * 0.5}s` }}
                    />
                  ))}

                  <div className="absolute bottom-3 right-4 px-3 py-1.5 rounded-full bg-[#151515] border border-[#544643] flex items-center gap-1.5 shadow-sm">
                    <Globe className="w-3 h-3 text-[#C86A28]" />
                    <span className="text-[10px] font-semibold text-[#F7F8F8]">Global Vision</span>
                  </div>
                </div>

                {/* Bottom services badge row */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Creative & Result Driven", icon: "✨" },
                    { label: "Long-Term Support Partner", icon: "🛡️" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-[#E9E8E6] border border-[#C6C2C1]">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-xs font-bold text-[#151515]">{item.label}</span>
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
