"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { RevealOnScroll } from "../shared/RevealOnScroll";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS_DATA.length;

  return (
    <section className="py-20 lg:py-28 section-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-light opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <RevealOnScroll className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-accent text-xs font-bold uppercase tracking-wider mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>WHAT OUR CLIENTS SAY</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0b0d17] leading-tight tracking-tight">
              Trusted by businesses that{" "}
              <span className="text-gradient">believe in us.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIdx((i) => (i === 0 ? total - 1 : i - 1))}
                className="w-12 h-12 rounded-full bg-white border border-[#e8eaf0] flex items-center justify-center text-[#4a4d6a] hover:bg-indigo-600 hover:text-white hover:border-indigo-600 shadow-sm hover:shadow-lg transition-all duration-200"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIdx((i) => (i === total - 1 ? 0 : i + 1))}
                className="w-12 h-12 rounded-full bg-white border border-[#e8eaf0] flex items-center justify-center text-[#4a4d6a] hover:bg-indigo-600 hover:text-white hover:border-indigo-600 shadow-sm hover:shadow-lg transition-all duration-200"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </RevealOnScroll>
        </div>

        {/* 3-column testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.slice(0, 3).map((t, i) => (
            <RevealOnScroll key={t.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group relative flex flex-col justify-between h-full p-8 rounded-3xl bg-white border border-[#e8eaf0] shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-400 card-shimmer overflow-hidden"
              >
                {/* Decorative quote mark */}
                <Quote className="absolute top-5 right-5 w-10 h-10 text-indigo-100 group-hover:text-indigo-200 transition-colors" />

                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-[#0b0d17] font-medium leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#f0f0f5]">
                  {/* Avatar */}
                  <div
                    className="w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm"
                    style={{
                      background: ["linear-gradient(135deg,#4f46e5,#7c3aed)", "linear-gradient(135deg,#7c3aed,#ec4899)", "linear-gradient(135deg,#0891b2,#4f46e5)"][i],
                    }}
                  >
                    {t.name.slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0b0d17]">{t.name}</h4>
                    <p className="text-xs text-[#8b8fa8]">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[...Array(total)].map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`rounded-full transition-all duration-300 ${i === idx ? "bg-indigo-600 w-8 h-2" : "bg-[#e8eaf0] w-2 h-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
