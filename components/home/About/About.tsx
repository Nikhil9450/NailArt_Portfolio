import Container from "@/components/layout/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import { getWebsiteSettings } from "@/lib/server/settings";

export default async function About() {
  const settings = await getWebsiteSettings();

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-theme-surface
        py-16
        sm:py-20
        md:py-28
      "
    >
      {/* Decorative background */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-64
          w-64
          rounded-full
          bg-[var(--theme-primary)]
          opacity-[0.04]
          blur-3xl
          md:h-96
          md:w-96
        "
      />

      <Container>
        <div
          className="
            relative
            z-10
            grid
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* Image */}
          <AboutImage settings={settings} />

          {/* Content */}
          <AboutContent settings={settings} />
        </div>
      </Container>
    </section>
  );
}