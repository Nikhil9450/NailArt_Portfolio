import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/common/SectionHeading";

import ContactCard from "./ContactCard";
import ContactInfo from "./ContactInfo";

export default function ContactCTA() {
  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          badge="Contact"
          title="Let's Create Your Perfect Nails"
          subtitle="Book an appointment or reach out with any questions."
          center
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <ContactInfo />
          <ContactCard />
        </div>
      </Container>
    </Section>
  );
}