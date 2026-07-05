import Container from "@/components/layout/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import { getWebsiteSettings } from "@/lib/server/settings";

export default async function Hero() {
  const settings = await getWebsiteSettings();

  return (
    <section className="bg-[#FFF8F5]" id="hero">
      <Container>
        <div className="grid min-h-[90vh] items-center gap-16 lg:grid-cols-2">
          <HeroContent settings={settings} />
          <HeroImage settings={settings} />
        </div>
      </Container>
    </section>
  );
}