import Container from "@/components/layout/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import { getWebsiteSettings } from "@/lib/server/settings";

export default async function About() {
  const settings = await getWebsiteSettings();

  return (
    <section className="py-28" id="about">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <AboutImage settings={settings} />
          <AboutContent settings={settings} />
        </div>
      </Container>
    </section>
  );
}