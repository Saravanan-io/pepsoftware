"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { RevealOnScroll } from "../shared/RevealOnScroll";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS_DATA.length;

  return (
    <section className="py-20 lg:py-28 bg-[#E7EBEA] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <RevealOnScroll className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-xs font-bold uppercase tracking-wider text-[#C86A28] mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>WHAT OUR CLIENTS SAY</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#151515] leading-tight tracking-tight">
              Trusted by businesses that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]">
                believe in us.
              </span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIdx((i) => (i === 0 ? total - 1 : i - 1))}
                className="w-12 h-12 rounded-full bg-[#EFF0EF] border border-[#C6C2C1] flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-[#F7F8F8] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIdx((i) => (i === total - 1 ? 0 : i + 1))}
                className="w-12 h-12 rounded-full bg-[#EFF0EF] border border-[#C6C2C1] flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-[#F7F8F8] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                aria-label="Next testimonial"
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
              <div
                className="group relative flex flex-col justify-between h-full p-8 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#544643] transition-all duration-300 card-shimmer overflow-hidden"
              >
                <Quote className="absolute top-5 right-5 w-10 h-10 text-[#C6C2C1]/40 group-hover:text-[#C86A28]/40 transition-colors" />

                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 text-[#C86A28] fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-[#151515] font-medium leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#C6C2C1]/60">
                  <div
                    className="w-12 h-12 rounded-full text-[#F7F8F8] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs"
                    style={{
                      background: ["#151515", "#544643", "#C86A28"][i % 3],
                    }}
                  >
                    {t.name.slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#151515]">{t.name}</h4>
                    <p className="text-xs text-[#544643] font-medium">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[...Array(total)].map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${i === idx ? "bg-[#151515] w-8 h-2" : "bg-[#C6C2C1] w-2 h-2"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
