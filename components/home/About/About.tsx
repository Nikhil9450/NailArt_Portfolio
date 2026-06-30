import Container from "@/components/layout/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section className="py-28" id="about">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <AboutImage />
          <AboutContent />
        </div>
      </Container>
    </section>
  );
}