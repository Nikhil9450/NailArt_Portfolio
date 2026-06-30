import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/common/SectionHeading";
import ComparisonSlider from "./ComparisonSlider";
import { beforeAfter } from "@/data/beforeAfter";

export default function BeforeAfter() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Transformation"
          title={beforeAfter.title}
          subtitle={beforeAfter.subtitle}
          center
        />

        <ComparisonSlider
          before={beforeAfter.before}
          after={beforeAfter.after}
        />
      </Container>
    </Section>
  );
}