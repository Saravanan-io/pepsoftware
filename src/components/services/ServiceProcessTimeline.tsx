import { RevealOnScroll } from "../shared/RevealOnScroll";

interface ServiceProcessTimelineProps {
  timeline: {
    step: string;
    title: string;
    description: string;
  }[];
}

export function ServiceProcessTimeline({
  timeline,
}: ServiceProcessTimelineProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B4CFB] bg-[#EFEDFF] px-3 py-1 rounded-full border border-[#5B4CFB]/20">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E0E12] mt-4">
            How We Execute This Service
          </h2>
          <p className="text-base text-[#5B5B66] mt-3">
            A battle-tested 4-step workflow tailored for predictability, speed, and precision.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((item, idx) => (
            <RevealOnScroll key={item.step} delay={idx * 0.1}>
              <div className="h-full p-7 rounded-3xl bg-[#F8F9FC] border border-[#ECECF1] relative group hover:border-[#5B4CFB]/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#5B4CFB] text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-sm">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-[#0E0E12] mb-3 group-hover:text-[#5B4CFB] transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-[#5B5B66] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
