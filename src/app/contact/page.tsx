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
    <div className="w-full bg-[#F7F8F8]">
      {/* Header */}
      <section className="pt-24 pb-16 bg-[#F7F8F8] text-center border-b border-[#C6C2C1]/40">
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
      <section className="py-20 bg-[#F7F8F8]">
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
                <div className="p-8 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs space-y-6">
                  <h3 className="text-xl font-bold text-[#151515]">
                    Studio Information
                  </h3>

                  <div className="space-y-4 text-sm text-[#544643]">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#E9E8E6] text-[#C86A28] border border-[#C6C2C1] flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#151515] block">
                          Office Address
                        </span>
                        <span className="leading-relaxed">
                          {COMPANY_INFO.address}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#E9E8E6] text-[#C86A28] border border-[#C6C2C1] flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#151515] block">
                          Phone / WhatsApp
                        </span>
                        <a
                          href={`tel:${COMPANY_INFO.phoneRaw}`}
                          className="hover:text-[#C86A28] font-semibold text-[#151515] transition-colors"
                        >
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#E9E8E6] text-[#C86A28] border border-[#C6C2C1] flex items-center justify-center shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#151515] block">
                          Inquiries
                        </span>
                        <a
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="hover:text-[#C86A28] transition-colors"
                        >
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#E9E8E6] text-[#C86A28] border border-[#C6C2C1] flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#151515] block">
                          Working Hours
                        </span>
                        <span>{COMPANY_INFO.workingHours}</span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Quick Chat */}
                  <div className="pt-4 border-t border-[#C6C2C1]/60">
                    <a
                      href={COMPANY_INFO.whatsappCommunityLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#151515] text-[#F7F8F8] text-xs font-bold hover:bg-[#544643] transition-all shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C86A28]" />
                      <span>Join WhatsApp Community</span>
                    </a>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Styled Location Card */}
              <RevealOnScroll delay={0.25}>
                <div className="rounded-3xl overflow-hidden border border-[#C6C2C1] bg-[#EFF0EF] p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#544643]">
                      Location Pin
                    </span>
                    <span className="text-xs font-semibold text-[#C86A28]">
                      Erode, Tamil Nadu
                    </span>
                  </div>

                  <div className="h-44 rounded-2xl bg-gradient-to-tr from-[#E7EBEA] via-[#EFF0EF] to-[#E9E8E6] flex flex-col items-center justify-center p-4 text-center border border-[#C6C2C1] relative overflow-hidden">
                    <div className="w-10 h-10 rounded-full bg-[#151515] text-[#C86A28] border border-[#544643] flex items-center justify-center shadow-lg animate-bounce mb-2">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-[#151515]">
                      PEP Software HQ
                    </span>
                    <span className="text-xs text-[#544643] mt-0.5">
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
