import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Layout, Smartphone, Palette, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Services | PEP Software",
  description:
    "Explore our complete range of digital services: Website Design & Development, UI/UX Design, Mobile App Development, and Graphic Design / AR.",
};

export default function ServicesPage() {
  const getIcon = (id: string) => {
    switch (id) {
      case "website-design-development":
        return Code2;
      case "ui-ux-design":
        return Layout;
      case "mobile-app-design-development":
        return Smartphone;
      default:
        return Palette;
    }
  };

  return (
    <div className="w-full bg-[#F7F8F8]">
      {/* Hero Header */}
      <section className="pt-24 pb-20 bg-[#F7F8F8] text-center border-b border-[#C6C2C1]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Full Suite Services"
            title="Digital solutions engineered for"
            gradientWord="maximum impact."
            description="From high-converting websites and native mobile apps to bespoke design systems and immersive spatial realities, our studio delivers end-to-end excellence."
            align="center"
          />
        </div>
      </section>

      {/* Services List with deep breakdown */}
      <section className="py-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const Icon = getIcon(service.id);
            const isReversed = index % 2 !== 0;

            return (
              <RevealOnScroll key={service.id}>
                <div
                  className={`p-8 sm:p-12 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs hover:border-[#544643] transition-colors ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#C86A28] bg-[#E9E8E6] border border-[#C6C2C1]">
                      <Icon className="w-4 h-4 text-[#C86A28]" />
                      <span>{service.badge}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151515]">
                      {service.title}
                    </h2>

                    <p className="text-base text-[#544643] leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.features.slice(0, 4).map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs font-semibold text-[#151515]">
                          <CheckCircle2 className="w-4 h-4 text-[#C86A28] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#151515] text-[#F7F8F8] text-sm font-semibold hover:bg-[#544643] transition-all shadow-md shadow-[#151515]/10"
                      >
                        <span>Explore Full Service</span>
                        <ArrowRight className="w-4 h-4 text-[#C86A28]" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#E9E8E6] rounded-2xl p-6 border border-[#C6C2C1] shadow-xs space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#544643]">
                      Service Milestones
                    </h4>
                    <div className="space-y-3">
                      {service.timeline.map((step) => (
                        <div key={step.step} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-md bg-[#151515] text-[#F7F8F8] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {step.step}
                          </span>
                          <div>
                            <span className="text-xs font-bold text-[#151515] block">
                              {step.title}
                            </span>
                            <span className="text-[11px] text-[#544643] line-clamp-1 block">
                              {step.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
