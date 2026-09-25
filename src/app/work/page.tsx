import { Metadata } from "next";
import { PortfolioTeaser } from "@/components/home/PortfolioTeaser";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | PEP Software",
  description:
    "Explore our carefully curated portfolio, showcasing our expertise in creating websites, mobile applications, and digital products for various industries.",
};

export default function WorkPage() {
  return (
    <div className="w-full">
      <section className="pt-16 pb-12 bg-radial-subtle text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Selected Works"
            title="Digital craftsmanship that drives"
            gradientWord="business growth."
            description="Discover our case study on website and application redesigns. See our innovative approach, architectural rigor, and impressive results."
            align="center"
          />
        </div>
      </section>

      <PortfolioTeaser />
      <ContactCTA />
    </div>
  );
}
