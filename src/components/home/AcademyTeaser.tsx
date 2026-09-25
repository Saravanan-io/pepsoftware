"use client";

import { GraduationCap, Clock, Briefcase, ArrowRight, Star, CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { COURSES_DATA } from "@/data/courses";
import { COMPANY_INFO } from "@/lib/constants";
import { RevealOnScroll } from "../shared/RevealOnScroll";

export function AcademyTeaser() {
  return (
    <section id="academy" className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <RevealOnScroll className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-xs font-bold uppercase tracking-wider text-[#C86A28] mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>PEP ACADEMY</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#151515] leading-tight tracking-tight">
              Design Training{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]">
                Courses
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed">
              Master in-demand skills with hands-on mentorship, client projects and live internship programs.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <a
              href={COMPANY_INFO.whatsappCommunityLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#151515] text-[#F7F8F8] font-bold text-sm hover:bg-[#544643] shadow-md shadow-[#151515]/10 transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#C86A28]" />
              <span>Join WhatsApp Community</span>
            </a>
          </RevealOnScroll>
        </div>

        {/* WhatsApp community banner */}
        <RevealOnScroll className="mb-12">
          <div className="p-7 sm:p-8 rounded-3xl bg-[#151515] border border-[#544643]/50 text-[#F7F8F8] relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#C86A28] block mb-2">Join Here!</span>
                <h3 className="text-xl sm:text-2xl font-extrabold leading-tight text-[#F7F8F8]">
                  Calling all design enthusiasts to join our UI/UX WhatsApp Community
                </h3>
              </div>
              <a
                href={COMPANY_INFO.whatsappCommunityLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#C86A28] text-[#F7F8F8] font-bold text-sm shrink-0 hover:bg-[#544643] transition-colors shadow-md"
              >
                Connect with Designers
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES_DATA.slice(0, 6).map((course, idx) => (
            <RevealOnScroll key={course.id} delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col h-full p-7 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs hover:shadow-xl hover:border-[#544643] transition-all duration-300 card-shimmer"
              >
                {/* Badges */}
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E8E6] text-[#151515] text-xs font-bold border border-[#C6C2C1]">
                    <Clock className="w-3 h-3 text-[#C86A28]" />
                    {course.duration}
                  </span>
                  {course.hasInternship && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E8E6] text-[#544643] border border-[#C6C2C1] text-xs font-bold">
                      <Briefcase className="w-3 h-3 text-[#C86A28]" />
                      30-Day Internship
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[#151515] group-hover:text-[#C86A28] transition-colors mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-[#544643] leading-relaxed line-clamp-3 mb-4 flex-1">
                  {course.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-5 text-xs text-[#544643]">
                  <div className="flex items-center gap-0.5 text-[#C86A28]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-[#151515]">{course.rating}</span>
                  <span className="text-[#544643]/70">({course.reviewsCount} reviews)</span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-5 pb-5 border-b border-[#C6C2C1]/60">
                  {course.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#544643]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C86A28] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#544643] font-semibold">
                    {course.tools.slice(0, 2).join(" • ")}
                  </span>
                  <Link
                    href={`/academy/${course.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#151515] hover:text-[#C86A28] transition-colors group/link"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C86A28] transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
