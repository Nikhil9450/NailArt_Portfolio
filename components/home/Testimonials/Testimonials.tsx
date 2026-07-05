import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/common/SectionHeading";
import TestimonialSlider from "./TestimonialSlider";
import { getTestimonialsFromDB } from "@/lib/server/testimonial";

export default async function Testimonials() {
  const testimonials = await getTestimonialsFromDB();

  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="What My Clients Say"
          subtitle="Real experiences from clients who trusted me with their nail transformations."
          center
        />

        <TestimonialSlider
          testimonials={testimonials}
        />
      </Container>
    </Section>
  );
}