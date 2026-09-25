import { Metadata } from "next";
import { COURSES_DATA } from "@/data/courses";
import { CourseCurriculum } from "@/components/academy/CourseCurriculum";
import { WhatsAppCommunityCTA } from "@/components/academy/WhatsAppCommunityCTA";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CTAButton } from "@/components/shared/CTAButton";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Course (90 Days) | PEP Software Academy",
  description:
    "Join our comprehensive course to become a front-end developer in just 90 days, who brings mockups to life. Learn to transform design concepts into user-friendly websites.",
};

export default function WebDev90DaysPage() {
  const course = COURSES_DATA.find((c) => c.slug === "web-development-90-days")!;

  return (
    <div className="w-full bg-[#F7F8F8]">
      <section className="pt-24 pb-20 bg-[#F7F8F8] text-center border-b border-[#C6C2C1]/40">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] text-[#C86A28] border border-[#C6C2C1] text-xs font-bold mb-4">
            <Clock className="w-3.5 h-3.5 text-[#C86A28]" />
            <span>{course.duration} Front-End Career Track</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#151515] leading-tight">
            {course.title}
          </h1>

          <p className="mt-4 text-lg text-[#544643] leading-relaxed">
            {course.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href="/contact">Enquire For Next Batch</CTAButton>
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
