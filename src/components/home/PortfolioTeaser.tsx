"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { RevealOnScroll } from "../shared/RevealOnScroll";

const categories = ["All", "Websites", "Mobile Apps", "UI/UX", "AR/VR"];

const categoryColors: Record<string, string> = {
  Websites: "from-blue-500 to-cyan-500",
  "Mobile Apps": "from-amber-500 to-orange-500",
  "UI/UX": "from-violet-500 to-purple-600",
  "AR/VR": "from-pink-500 to-rose-500",
};

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
    <section id="work" className="py-20 lg:py-28 section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-dark pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-700/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <RevealOnScroll className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-accent-dark text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR WORK</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Projects that speak{" "}
              <span className="text-gradient-blue">for themselves</span>
            </h2>
            <p className="mt-4 text-base text-[#8891b2]">
              Explore some of our recent projects across websites, mobile applications and AR/VR experiences.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full glass-dark border border-white/10 text-sm font-semibold text-white hover:border-indigo-400/50 hover:text-indigo-300 transition-all shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? "bg-indigo-600 text-white shadow-[0_6px_20px_rgba(79,70,229,0.5)]"
                    : "glass-dark border border-white/10 text-[#8891b2] hover:text-white hover:border-white/20"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* 3D Carousel-style Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {current.map((project, idx) => {
              const gradient = categoryColors[project.category] || "from-indigo-500 to-purple-600";
              return (
                <motion.div
                  key={`${project.id}-${activeTab}-${page}`}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.97 }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative flex flex-col rounded-3xl glass-dark border border-white/10 hover:border-indigo-500/40 shadow-lg hover:shadow-[0_20px_60px_rgba(79,70,229,0.2)] transition-all duration-400 overflow-hidden card-shimmer"
                >
                  {/* Project visual header */}
                  <div className={`relative h-52 bg-gradient-to-br ${gradient} p-5 flex flex-col justify-between overflow-hidden`}>
                    {/* Abstract mockup overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 right-4 w-24 h-16 rounded-xl bg-white/30 backdrop-blur-md" />
                      <div className="absolute bottom-6 left-4 w-32 h-8 rounded-lg bg-white/20" />
                      <div className="absolute bottom-16 right-6 w-16 h-16 rounded-full border-2 border-white/30" />
                    </div>

                    {/* Category chip & year */}
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-semibold text-white/80">{project.year}</span>
                    </div>

                    {/* Mockup Card in visual */}
                    <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-3 border border-white/25">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-[9px] text-white/70 ml-1 font-mono">{project.client}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1.5 bg-white/30 rounded w-full" />
                        <div className="h-1.5 bg-white/20 rounded w-3/4" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#8891b2] leading-relaxed line-clamp-2 mb-4 flex-1">
                      {project.summary}
                    </p>

                    {/* Result Metrics */}
                    <div className="flex items-center gap-4 mb-5 pb-4 border-b border-white/8">
                      {project.results.slice(0, 2).map((res) => (
                        <div key={res.label} className="text-center">
                          <div className="text-base font-extrabold text-indigo-400">{res.metric}</div>
                          <div className="text-[10px] text-[#8891b2]">{res.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech + CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1.5">
                        {project.technologies.slice(0, 2).map((t) => (
                          <span key={t} className="text-[10px] px-2 py-0.5 rounded-md glass-dark border border-white/10 text-[#8891b2] font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/work/${project.slug}`}
                        className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                      >
                        <span>View Case</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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
              className="w-11 h-11 rounded-full glass-dark border border-white/10 flex items-center justify-center text-white hover:border-indigo-400 disabled:opacity-30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === page ? "bg-indigo-500 w-6" : "bg-white/20"}`}
                />
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-11 h-11 rounded-full glass-dark border border-white/10 flex items-center justify-center text-white hover:border-indigo-400 disabled:opacity-30 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
