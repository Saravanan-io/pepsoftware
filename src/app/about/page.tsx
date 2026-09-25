import { Metadata } from "next";
import { Eye, Award, Rocket, Heart } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactCTA } from "@/components/home/ContactCTA";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

export const metadata: Metadata = {
  title: "About Us | PEP Software — Design & Development Studio",
  description:
    "Learn about PEP Software, our human-centered design philosophy, our creative team in Erode, and our mission to inspire through creative design.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Human-Centered Empathy",
      desc: "We prioritize understanding real human emotions, user behaviors, and client business fundamentals before writing a single line of code.",
      icon: Heart,
    },
    {
      title: "Pixel & Code Precision",
      desc: "No compromises on visual craftsmanship or architectural robustness. Everything we ship is responsive, accessible, and ultra-fast.",
      icon: Eye,
    },
    {
      title: "Continuous Innovation",
      desc: "From WebGL and Three.js 3D web experiences to Augmented Reality spatial interfaces, we push the frontiers of modern digital design.",
      icon: Rocket,
    },
    {
      title: "Relentless Client Partnership",
      desc: "We measure our success solely by our clients' business expansion, conversion metrics, and lasting market leadership.",
      icon: Award,
    },
  ];

  return (
    <div className="w-full bg-[#F7F8F8]">
      {/* Hero Header */}
      <section className="pt-24 pb-20 bg-[#F7F8F8] text-center border-b border-[#C6C2C1]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Story & Philosophy"
            title="Inspire Through"
            gradientWord="Creative Design"
            description="At Pep Software, we bring your ideas to life with boundless creativity. We are an interdisciplinary collective of designers, artists, and software engineers."
            align="center"
          />
        </div>
      </section>

      {/* Narrative & Metrics */}
      <section className="py-20 bg-[#EFF0EF] border-b border-[#C6C2C1]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <RevealOnScroll className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C86A28]">
                Solutions that Empower
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151515] leading-tight">
                Crafting digital experiences that stand out in an increasingly crowded world.
              </h2>

              <p className="text-base sm:text-lg text-[#544643] leading-relaxed">
                Founded with a conviction that software should not just function, but inspire — PEP Software has grown into a versatile creative engineering studio. We partner with emerging startups and established enterprises across industries such as healthcare, e-commerce, real estate, automotive, and high technology.
              </p>

              <p className="text-base text-[#544643]/85 leading-relaxed">
                Headquartered along Perundurai Road in Erode, Tamil Nadu, our studio serves as an innovation lab where design thinking, spatial AR computing, and full-stack web engineering converge to solve real business challenges.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2} className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "20+", label: "Years Combined Studio Experience" },
                  { value: "150+", label: "High Impact Projects Delivered" },
                  { value: "50+", label: "Happy Global Clients" },
                  { value: "100%", label: "Client Satisfaction Focus" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-[#E9E8E6] border border-[#C6C2C1] text-center shadow-xs"
                  >
                    <div className="text-3xl sm:text-4xl font-black text-[#151515]">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-xs font-semibold text-[#544643] mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Pillars"
            title="The values that guide every"
            gradientWord="pixel and build."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <RevealOnScroll key={v.title} delay={idx * 0.1}>
                  <div className="p-7 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs hover:border-[#544643] hover:shadow-md transition-all h-full">
                    <div className="w-12 h-12 rounded-2xl bg-[#E9E8E6] border border-[#C6C2C1] text-[#C86A28] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#151515] mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-[#544643] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Structured Process Section */}
      <ProcessStrip />

      {/* Client Marquee */}
      <ClientsMarquee />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}
