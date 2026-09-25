import { Metadata } from "next";
import { SERVICES_DATA } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverviewCard } from "@/components/services/ServiceOverviewCard";
import { ServiceProcessTimeline } from "@/components/services/ServiceProcessTimeline";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Mobile App Development | PEP Software",
  description:
    "Achieve your app's full potential with our comprehensive design and development services. We specialize in seamless integration, robust device management, and superior mobile UX.",
};

export default function MobileAppDevPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "mobile-app-design-development")!;

  return (
    <div>
      <ServiceHero
        badge={service.badge}
        title="High-Performance"
        gradientWord="Mobile App Development"
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
