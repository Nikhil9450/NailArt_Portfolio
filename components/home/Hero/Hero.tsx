import Container from "@/components/layout/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import HeroDecorations from "./HeroDecorations";
import { getWebsiteSettings } from "@/lib/server/settings";

export default async function Hero() {
  const settings = await getWebsiteSettings();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-theme-surface"
    >
      {/* SVG background */}
      <HeroDecorations />

      <Container>
        <div className="relative z-10">

          {/* Hero Content + Image */}
          <div
            className="
              grid
              grid-cols-2
              items-center
              gap-3
              pt-6
              md:gap-8
              lg:grid-cols-2
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div>
              <HeroContent settings={settings} />
            </div>

            {/* RIGHT */}
            <div>
              <HeroImage settings={settings} />
            </div>
          </div>

          {/* Stats BELOW both */}
          <HeroStats />

        </div>
      </Container>
    </section>
  );
}