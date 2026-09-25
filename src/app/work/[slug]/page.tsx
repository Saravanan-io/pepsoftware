import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { CTAButton } from "@/components/shared/CTAButton";
import { ContactCTA } from "@/components/home/ContactCTA";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} Case Study | PEP Software`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const projectIndex = PORTFOLIO_DATA.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PORTFOLIO_DATA[projectIndex];
  const nextProject =
    PORTFOLIO_DATA[(projectIndex + 1) % PORTFOLIO_DATA.length];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="pt-16 pb-20 bg-radial-subtle">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#5B5B66] hover:text-[#5B4CFB] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#EFEDFF] text-[#5B4CFB]">
              {project.category}
            </span>
            <span className="text-xs font-semibold text-[#9494A0]">
              Client: {project.client} • {project.year}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0E0E12] tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#5B5B66] leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#ECECF1]">
            {project.results.map((res, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-[#ECECF1] shadow-xs">
                <div className="text-3xl font-black text-[#5B4CFB]">
                  {res.metric}
                </div>
                <div className="text-xs font-semibold text-[#5B5B66] mt-1">
                  {res.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution Grid */}
      <section className="py-20 bg-white border-y border-[#ECECF1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                  The Problem
                </span>
                <h3 className="text-2xl font-extrabold text-[#0E0E12] mt-1">
                  The Challenge
                </h3>
              </div>
              <div className="md:col-span-8 text-base text-[#5B5B66] leading-relaxed">
                {project.challenge}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 border-t border-[#F2F2F7]">
              <div className="md:col-span-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#5B4CFB]">
                  Our Approach
                </span>
                <h3 className="text-2xl font-extrabold text-[#0E0E12] mt-1">
                  The Solution
                </h3>
              </div>
              <div className="md:col-span-8 text-base text-[#5B5B66] leading-relaxed">
                {project.solution}
              </div>
            </div>
          </RevealOnScroll>

          {/* Tech Stack */}
          <RevealOnScroll>
            <div className="pt-8 border-t border-[#F2F2F7]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9494A0] mb-4">
                Technologies & Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-4 py-2 rounded-xl bg-[#F8F9FC] text-[#0E0E12] border border-[#ECECF1]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Next Case Study Navigation */}
      <section className="py-16 bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#9494A0]">
              Next Case Study
            </span>
            <h4 className="text-xl font-bold text-[#0E0E12] mt-1">
              {nextProject.title}
            </h4>
          </div>

          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#ECECF1] text-[#0E0E12] hover:border-[#5B4CFB] hover:text-[#5B4CFB] font-semibold text-sm shadow-xs transition-all"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
