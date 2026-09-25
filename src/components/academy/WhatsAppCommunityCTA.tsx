import { MessageCircle, Users, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { RevealOnScroll } from "../shared/RevealOnScroll";

export function WhatsAppCommunityCTA() {
  return (
    <section className="py-16 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Join Here! • 1000+ Designers & Developers</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Calling all design enthusiasts to join our UI/UX WhatsApp Community
              </h2>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Connect, learn, and design together! Get free design critique, weekly Figma tips, portfolio feedback, and exclusive job & internship postings directly from PEP Software mentors.
              </p>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappCommunityLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-emerald-800 font-bold text-sm shadow-md hover:bg-emerald-50 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current text-emerald-600" />
                  <span>Join WhatsApp Community Now</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
