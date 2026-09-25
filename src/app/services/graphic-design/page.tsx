import { Metadata } from "next";
import { SERVICES_DATA } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverviewCard } from "@/components/services/ServiceOverviewCard";
import { ServiceProcessTimeline } from "@/components/services/ServiceProcessTimeline";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Graphic Design & AR/VR | PEP Software",
  description:
    "Enhance your brand with captivating visuals and stunning designs that leave a lasting impact. Our professional graphic design and AR/VR services bring your ideas to life.",
};

export default function GraphicDesignPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "graphic-design")!;

  return (
    <div>
      <ServiceHero
        badge={service.badge}
        title="Captivating Visuals &"
        gradientWord="Spatial AR/VR Design"
        description={service.shortDescription}
      />
      <ServiceOverviewCard
        features={service.features}
        deliverables={service.deliverables}
      />
      <ServiceProcessTimeline timeline={service.timeline} />
      <ContactCTA />
    </div>
  );
}
