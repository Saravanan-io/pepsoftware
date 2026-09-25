import { Metadata } from "next";
import Link from "next/link";
import { Clock, Briefcase, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { COURSES_DATA } from "@/data/courses";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { WhatsAppCommunityCTA } from "@/components/academy/WhatsAppCommunityCTA";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Academy & Design Training Courses | PEP Software",
  description:
    "Design Training Courses by PEP Software: UI/UX Design, AR Design, and Web Development with hands-on live client internships in Erode.",
};

export default function AcademyPage() {
  return (
    <div className="w-full bg-[#F7F8F8]">
      {/* Hero Header */}
      <section className="pt-24 pb-20 bg-[#F7F8F8] text-center border-b border-[#C6C2C1]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PEP Design & Tech Academy"
            title="Design Training"
            gradientWord="Courses"
            description="Launch your high-impact career in UI/UX design, spatial computing, and web engineering. Gain real studio experience with our guaranteed 30-day live internship programs."
            align="center"
          />
        </div>
      </section>

      {/* WhatsApp Community Banner */}
      <WhatsAppCommunityCTA />

      {/* Courses Detailed Cards List */}
      <section className="py-20 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {COURSES_DATA.map((course, idx) => (
            <RevealOnScroll key={course.id} delay={idx * 0.08}>
              <div className="p-8 sm:p-10 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs hover:border-[#544643] hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Details */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E8E6] text-[#151515] border border-[#C6C2C1] text-xs font-bold">
                      <Clock className="w-3.5 h-3.5 text-[#C86A28]" />
                      <span>{course.duration}</span>
                    </span>

                    {course.hasInternship && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E8E6] text-[#544643] border border-[#C6C2C1] text-xs font-bold">
                        <Briefcase className="w-3.5 h-3.5 text-[#C86A28]" />
                        <span>Get 30 Days Internship</span>
                      </span>
                    )}

                    <div className="flex items-center gap-1 text-[#C86A28] text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-[#151515]">{course.rating}</span>
                      <span className="text-[#544643]/70">({course.reviewsCount} reviews)</span>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151515]">
                    {course.title}
                  </h2>

                  <p className="text-base text-[#544643] leading-relaxed">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {course.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#151515]">
                        <CheckCircle2 className="w-4 h-4 text-[#C86A28] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <span className="text-xs text-[#544643] font-semibold">
                      Tools & Frameworks:{" "}
                      <span className="text-[#151515]">{course.tools.join(" • ")}</span>
                    </span>
                  </div>
                </div>

                {/* Right Column: CTA card */}
                <div className="lg:col-span-4 bg-[#E9E8E6] rounded-2xl p-6 border border-[#C6C2C1] shadow-xs flex flex-col justify-between text-center space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#544643]">
                      Level: {course.level}
                    </span>
                    <h4 className="text-lg font-bold text-[#151515] mt-1">
                      Ready to Enroll?
                    </h4>
                    <p className="text-xs text-[#544643] mt-1">
                      Batches starting every month. Limited seats for personalized 1-on-1 mentorship.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <Link
                      href={`/academy/${course.slug}`}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#151515] text-[#F7F8F8] text-sm font-semibold hover:bg-[#544643] transition-colors shadow-sm"
                    >
                      <span>View Full Curriculum</span>
                      <ArrowRight className="w-4 h-4 text-[#C86A28]" />
                    </Link>

                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center py-2.5 px-4 rounded-full bg-[#EFF0EF] border border-[#C6C2C1] text-[#151515] text-xs font-semibold hover:border-[#151515] transition-colors"
                    >
                      Enquire Admission
                    </Link>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
