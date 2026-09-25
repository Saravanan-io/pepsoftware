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
    <section className="py-16 bg-white border-y border-[#ECECF1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B4CFB] bg-[#EFEDFF] px-3 py-1 rounded-full border border-[#5B4CFB]/20">
            Syllabus & Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E0E12] mt-4">
            Curriculum Breakdown
          </h2>
          <p className="text-sm sm:text-base text-[#5B5B66] mt-2">
            Structured modules designed to take you from foundational principles to production-level portfolio projects.
          </p>
        </RevealOnScroll>

        <div className="space-y-6">
          {modules.map((mod, idx) => (
            <RevealOnScroll key={mod.title} delay={idx * 0.1}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#F8F9FC] border border-[#ECECF1] shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#ECECF1]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#5B4CFB] text-white flex items-center justify-center font-bold text-sm">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0E0E12]">
                      {mod.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#EFEDFF] text-[#5B4CFB] self-start sm:self-auto">
                    {mod.week}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mod.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#ECECF1]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#5B4CFB] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-[#0E0E12]">
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
