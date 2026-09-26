"use client";

import { Search, Map, Layers, Code2, ShieldCheck, Rocket, Sparkles } from "lucide-react";
import { RevealOnScroll } from "../shared/RevealOnScroll";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understand your goals, target audience and requirements.",
    icon: Search,
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Create detailed roadmap and milestone plan.",
    icon: Map,
  },
  {
    num: "03",
    title: "Design",
    desc: "Craft intuitive, minimal and luxurious user interfaces.",
    icon: Layers,
  },
  {
    num: "04",
    title: "Development",
    desc: "Build scalable code with modern, robust tech stacks.",
    icon: Code2,
  },
  {
    num: "05",
    title: "QA & Testing",
    desc: "Ensure pixel-perfection, security and top speed.",
    icon: ShieldCheck,
  },
  {
    num: "06",
    title: "Launch & Support",
    desc: "Seamless deployment and dedicated long-term care.",
    icon: Rocket,
  },
];

export function ProcessStrip() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#E7EBEA] relative overflow-hidden">
      {/* Delicate neutral accents */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#EFF0EF] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <RevealOnScroll className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-xs font-bold uppercase tracking-wider text-[#C86A28] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR WORKFLOW</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-[#151515]">
              A simple process for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]">
                powerful results.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed">
              We follow a structured and collaborative approach to ensure your vision turns into a successful digital product.
            </p>
          </RevealOnScroll>

          {/* From Idea to Impact */}
          <RevealOnScroll delay={0.1}>
            <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs shrink-0">
              <div className="text-3xl">🚀</div>
              <div>
                <span className="block text-xs font-extrabold uppercase tracking-widest text-[#C86A28]">
                  From Idea to Impact
                </span>
                <span className="block text-[10px] text-[#544643] mt-0.5 font-medium">
                  End-to-end digital excellence
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-px bg-gradient-to-r from-[#C6C2C1] via-[#C86A28] to-[#C6C2C1] opacity-60" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <RevealOnScroll key={step.num} delay={idx * 0.08}>
                  <div
                    className="relative group flex flex-col items-center text-center p-6 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] hover:border-[#544643] hover:-translate-y-2 hover:shadow-md transition-all duration-300 shadow-xs card-shimmer"
                  >
                    {/* Step number bubble */}
                    <div className="relative w-14 h-14 rounded-2xl bg-[#E9E8E6] border border-[#C6C2C1] flex items-center justify-center mb-4 shadow-xs group-hover:scale-110 group-hover:border-[#544643] transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#C86A28]" />
                      <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#151515] border border-[#C6C2C1] text-[10px] font-black text-[#F7F8F8] flex items-center justify-center">
                        {step.num}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#151515] mb-2 group-hover:text-[#C86A28] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-[#544643] leading-relaxed">{step.desc}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
