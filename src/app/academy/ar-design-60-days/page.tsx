import { Metadata } from "next";
import { COURSES_DATA } from "@/data/courses";
import { CourseCurriculum } from "@/components/academy/CourseCurriculum";
import { WhatsAppCommunityCTA } from "@/components/academy/WhatsAppCommunityCTA";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CTAButton } from "@/components/shared/CTAButton";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "AR Design Course (60 Days) | PEP Software Academy",
  description:
    "Learn advanced UX design processes, UI design principles. Hands-on training in Figma, Adobe XD to create app UI screens, spatial AR elements, and WebAR filters.",
};

export default function ARDesign60DaysPage() {
  const course = COURSES_DATA.find((c) => c.slug === "ar-design-60-days")!;

  return (
    <div>
      <section className="pt-16 pb-20 bg-radial-subtle text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEDFF] text-[#5B4CFB] text-xs font-bold mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.duration} Spatial Computing Track</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E0E12] leading-tight">
            {course.title}
          </h1>

          <p className="mt-4 text-lg text-[#5B5B66] leading-relaxed">
            {course.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href="/contact">Enquire For Batch</CTAButton>
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
