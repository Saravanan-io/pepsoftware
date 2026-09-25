import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contact Us | PEP Software",
  description:
    "Get in touch with PEP Software. Perundurai Road, Thindal, Erode, TN-638012. Call +91 638-1010-282. Start your digital project today.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-16 pb-16 bg-radial-subtle text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Get in Touch"
            title="Let's build something"
            gradientWord="extraordinary together."
            description="Have a new project, need a redesign, or want to discuss design training? Reach out to our engineering and design team."
            align="center"
          />
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <RevealOnScroll>
                <ContactForm />
              </RevealOnScroll>
            </div>

            {/* Right Column: Contact Details, Studio Card, and Map */}
            <div className="lg:col-span-5 space-y-6">
              <RevealOnScroll delay={0.15}>
                <div className="p-8 rounded-3xl bg-[#F8F9FC] border border-[#ECECF1] shadow-xs space-y-6">
                  <h3 className="text-xl font-bold text-[#0E0E12]">
                    Studio Information
                  </h3>

                  <div className="space-y-4 text-sm text-[#5B5B66]">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#EFEDFF] text-[#5B4CFB] flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0E0E12] block">
                          Office Address
                        </span>
                        <span className="leading-relaxed">
                          {COMPANY_INFO.address}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#EFEDFF] text-[#5B4CFB] flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0E0E12] block">
                          Phone / WhatsApp
                        </span>
                        <a
                          href={`tel:${COMPANY_INFO.phoneRaw}`}
                          className="hover:text-[#5B4CFB] font-semibold text-[#0E0E12] transition-colors"
                        >
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#EFEDFF] text-[#5B4CFB] flex items-center justify-center shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0E0E12] block">
                          Inquiries
                        </span>
                        <a
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="hover:text-[#5B4CFB] transition-colors"
                        >
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#EFEDFF] text-[#5B4CFB] flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0E0E12] block">
                          Working Hours
                        </span>
                        <span>{COMPANY_INFO.workingHours}</span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Quick Chat */}
                  <div className="pt-4 border-t border-[#ECECF1]">
                    <a
                      href={COMPANY_INFO.whatsappCommunityLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#16C784] text-white text-xs font-bold hover:bg-[#13af74] transition-all shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Join WhatsApp Community</span>
                    </a>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Styled Map Location Card */}
              <RevealOnScroll delay={0.25}>
                <div className="rounded-3xl overflow-hidden border border-[#ECECF1] bg-[#F8F9FC] p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9494A0]">
                      Location Pin
                    </span>
                    <span className="text-xs font-semibold text-[#5B4CFB]">
                      Erode, Tamil Nadu
                    </span>
                  </div>

                  <div className="h-44 rounded-2xl bg-gradient-to-tr from-[#EFEDFF] via-[#E8E8EE] to-[#F1F5F9] flex flex-col items-center justify-center p-4 text-center border border-[#ECECF1] relative overflow-hidden">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#5B4CFB] to-[#EC4899] text-white flex items-center justify-center shadow-lg animate-bounce mb-2">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-[#0E0E12]">
                      PEP Software HQ
                    </span>
                    <span className="text-xs text-[#5B5B66] mt-0.5">
                      Opposite Alayamani Mahal, Thindal
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
