import { Metadata } from "next";
import { SERVICES_DATA } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverviewCard } from "@/components/services/ServiceOverviewCard";
import { ServiceProcessTimeline } from "@/components/services/ServiceProcessTimeline";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Website Design & Development | PEP Software",
  description:
    "High-performance, scalable websites that help your business grow online. Custom Website Design, Front-end Development, WordPress Development and more.",
};

export default function WebsiteDevPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "website-design-development")!;

  return (
    <div>
      <ServiceHero
        badge="Website Development"
        title="Website"
        highlight="Development"
        description="High-performance, scalable websites that help your business grow online."
        bullets={[
          "Custom Website Design",
          "Front-end Development",
          "WordPress Development",
          "One-Page Websites",
          "Website Maintenance & Support",
        ]}
        ctaText="Get a Free Quote"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Website Design & Development", href: "/services/website-design-development" },
        ]}
      />
      <ServiceOverviewCard features={service.features} deliverables={service.deliverables} />
      <ServiceProcessTimeline timeline={service.timeline} />
      <ContactCTA />
    </div>
  );
}
