"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { RevealOnScroll } from "../shared/RevealOnScroll";

const categories = ["All", "Websites", "Mobile Apps", "UI/UX", "AR/VR"];

export function PortfolioTeaser() {
  const [activeTab, setActiveTab] = useState("All");
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;

  const filtered =
    activeTab === "All"
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((p) => p.category === activeTab);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const current = filtered.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setPage(0);
  };

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <RevealOnScroll className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-xs font-bold uppercase tracking-wider text-[#C86A28] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR WORK</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#151515] leading-tight tracking-tight">
              Projects that speak{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]">
                for themselves
              </span>
            </h2>
            <p className="mt-4 text-base text-[#544643] leading-relaxed">
              Explore some of our recent projects across websites, mobile applications and AR/VR experiences.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#151515] text-[#F7F8F8] text-sm font-semibold hover:bg-[#544643] shadow-md shadow-[#151515]/10 transition-all shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-[#C86A28] transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>
        </div>

        {/* Filter Pills */}
        <RevealOnScroll delay={0.15}>
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#151515] text-[#F7F8F8] border border-[#151515] shadow-sm"
                    : "bg-[#EFF0EF] border border-[#C6C2C1] text-[#544643] hover:text-[#151515] hover:border-[#544643]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {current.map((project, idx) => {
              return (
                <motion.div
                  key={`${project.id}-${activeTab}-${page}`}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.97 }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative flex flex-col rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] hover:border-[#544643] shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden card-shimmer"
                >
                  {/* Project visual header */}
                  <div className="relative h-52 bg-gradient-to-br from-[#E7EBEA] via-[#EFF0EF] to-[#E9E8E6] border-b border-[#C6C2C1] p-5 flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-[#151515] text-[#F7F8F8] px-3 py-1 rounded-full shadow-xs">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-bold text-[#544643]">{project.year}</span>
                    </div>

                    {/* Mockup Card in visual */}
                    <div className="relative z-10 bg-[#FFFFFF]/80 backdrop-blur-md rounded-2xl p-3 border border-[#C6C2C1] shadow-xs">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#C86A28]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#C6C2C1]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#544643]" />
                        <span className="text-[10px] text-[#151515] ml-1 font-mono font-semibold">{project.client}</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-1.5 bg-[#544643]/30 rounded w-full" />
                        <div className="h-1.5 bg-[#C86A28]/40 rounded w-3/4" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-[#151515] group-hover:text-[#C86A28] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#544643] leading-relaxed line-clamp-2 mb-4 flex-1">
                      {project.summary}
                    </p>

                    {/* Result Metrics */}
                    <div className="flex items-center gap-4 mb-5 pb-4 border-b border-[#C6C2C1]/60">
                      {project.results.slice(0, 2).map((res) => (
                        <div key={res.label} className="text-center">
                          <div className="text-base font-extrabold text-[#C86A28]">{res.metric}</div>
                          <div className="text-[10px] text-[#544643] font-medium">{res.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech + CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1.5">
                        {project.technologies.slice(0, 2).map((t) => (
                          <span key={t} className="text-[10px] px-2.5 py-0.5 rounded-md bg-[#E9E8E6] border border-[#C6C2C1] text-[#544643] font-semibold">
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/work/${project.slug}`}
                        className="text-xs font-bold text-[#151515] hover:text-[#C86A28] flex items-center gap-1 transition-colors"
                      >
                        <span>View Case</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C86A28]" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination arrows */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-11 h-11 rounded-full bg-[#EFF0EF] border border-[#C6C2C1] flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-[#F7F8F8] disabled:opacity-30 transition-all cursor-pointer shadow-xs"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${i === page ? "bg-[#151515] w-6" : "bg-[#C6C2C1] w-2"}`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-11 h-11 rounded-full bg-[#EFF0EF] border border-[#C6C2C1] flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-[#F7F8F8] disabled:opacity-30 transition-all cursor-pointer shadow-xs"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
