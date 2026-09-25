import { CheckCircle2, PackageCheck } from "lucide-react";
import { RevealOnScroll } from "../shared/RevealOnScroll";

interface ServiceOverviewCardProps {
  features: string[];
  deliverables: string[];
}

export function ServiceOverviewCard({
  features,
  deliverables,
}: ServiceOverviewCardProps) {
  return (
    <section className="py-16 bg-white border-y border-[#ECECF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Capabilities */}
          <RevealOnScroll>
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#F8F9FC] border border-[#ECECF1] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#EFEDFF] text-[#5B4CFB] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0E0E12]">
                  Core Capabilities & Scope
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#ECECF1]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5B4CFB] shrink-0 mt-2" />
                    <span className="text-xs sm:text-sm font-medium text-[#0E0E12]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Key Deliverables */}
          <RevealOnScroll delay={0.15}>
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#F8F9FC] border border-[#ECECF1] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0E0E12]">
                  What You Receive
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {deliverables.map((del, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#ECECF1]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span className="text-xs sm:text-sm font-medium text-[#0E0E12]">
                      {del}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
