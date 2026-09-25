import { Metadata } from "next";
import { COURSES_DATA } from "@/data/courses";
import { CourseCurriculum } from "@/components/academy/CourseCurriculum";
import { InternshipBadge } from "@/components/academy/InternshipBadge";
import { WhatsAppCommunityCTA } from "@/components/academy/WhatsAppCommunityCTA";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CTAButton } from "@/components/shared/CTAButton";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "UI UX Design Course (120 Days) + 30 Days Internship | PEP Software",
  description:
    "Learn UI/UX Design and front-end development languages to become a versatile designer proficient in multiple roles. Includes 30 Days Internship.",
};

export default function UIUX120DaysPage() {
  const course = COURSES_DATA.find((c) => c.slug === "ui-ux-design-120-days")!;

  return (
    <div className="w-full bg-[#F7F8F8]">
      <section className="pt-24 pb-20 bg-[#F7F8F8] text-center border-b border-[#C6C2C1]/40">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] text-[#C86A28] border border-[#C6C2C1] text-xs font-bold">
              <Clock className="w-3.5 h-3.5 text-[#C86A28]" />
              <span>{course.duration} Comprehensive Unicorn Track</span>
            </div>
            <InternshipBadge days={30} />
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#151515] leading-tight">
            {course.title}
          </h1>

          <p className="mt-4 text-lg text-[#544643] leading-relaxed">
            {course.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href="/contact">Apply For Internship Track</CTAButton>
            <CTAButton href="/academy" variant="outline">
              All Courses
            </CTAButton>
          </div>
        </div>
      </section>

      <CourseCurriculum modules={course.modules} />
      <WhatsAppCommunityCTA />
      <ContactCTA />
    </div>
  );
}
