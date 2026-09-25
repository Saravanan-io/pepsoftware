import { Metadata } from "next";
import { SERVICES_DATA } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverviewCard } from "@/components/services/ServiceOverviewCard";
import { ServiceProcessTimeline } from "@/components/services/ServiceProcessTimeline";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "UI/UX Design | PEP Software",
  description:
    "Pep Softwares specializes in user-centered UI/UX designs that enhance the user experience. Our design process prioritizes understanding your target audience, resulting in visually appealing and intuitive interfaces.",
};

export default function UIUXDesignPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "ui-ux-design")!;

  return (
    <div>
      <ServiceHero
        badge={service.badge}
        title="User-Centered"
        gradientWord="UI/UX Design"
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
