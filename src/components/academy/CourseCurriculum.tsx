import { CheckCircle2, BookOpen } from "lucide-react";
import { RevealOnScroll } from "../shared/RevealOnScroll";

interface CourseCurriculumProps {
  modules: {
    week: string;
    title: string;
    topics: string[];
  }[];
}

export function CourseCurriculum({ modules }: CourseCurriculumProps) {
  return (
    <section className="py-16 bg-[#F7F8F8] border-y border-[#C6C2C1]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C86A28] bg-[#E9E8E6] px-3.5 py-1.5 rounded-full border border-[#C6C2C1]">
            Syllabus & Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151515] mt-4">
            Curriculum Breakdown
          </h2>
          <p className="text-sm sm:text-base text-[#544643] mt-2">
            Structured modules designed to take you from foundational principles to production-level portfolio projects.
          </p>
        </RevealOnScroll>

        <div className="space-y-6">
          {modules.map((mod, idx) => (
            <RevealOnScroll key={mod.title} delay={idx * 0.1}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#C6C2C1]/60">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#151515] text-[#C86A28] border border-[#544643] flex items-center justify-center font-bold text-sm">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#151515]">
                      {mod.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#E9E8E6] text-[#C86A28] border border-[#C6C2C1] self-start sm:self-auto">
                    {mod.week}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mod.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#E9E8E6] border border-[#C6C2C1]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C86A28] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-[#151515]">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
