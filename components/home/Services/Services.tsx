import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceGrid from "./ServiceGrid";

export default function Services() {
  return (
    <Section className="bg-[#FFF8F5]" id="services">
      <Container>
        <SectionHeading
          badge="Premium Services"
          title="Luxury Nail Treatments"
          subtitle="Choose from our curated collection of premium nail services designed to make your hands look stunning."
          center
        />

        <ServiceGrid />
      </Container>
    </Section>
  );
}