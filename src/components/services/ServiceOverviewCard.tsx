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
    <section className="py-16 bg-[#F7F8F8] border-y border-[#C6C2C1]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Capabilities */}
          <RevealOnScroll>
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E9E8E6] text-[#C86A28] border border-[#C6C2C1] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#151515]">
                  Core Capabilities & Scope
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#E9E8E6] border border-[#C6C2C1]/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C86A28] shrink-0 mt-2" />
                    <span className="text-xs sm:text-sm font-semibold text-[#151515]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Key Deliverables */}
          <RevealOnScroll delay={0.15}>
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E9E8E6] text-[#544643] border border-[#C6C2C1] flex items-center justify-center">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#151515]">
                  What You Receive
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {deliverables.map((del, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#E9E8E6] border border-[#C6C2C1]/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#544643] shrink-0 mt-2" />
                    <span className="text-xs sm:text-sm font-semibold text-[#151515]">
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
