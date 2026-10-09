
import Container from "@/components/layout/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import HeroDecorations from "./HeroDecorations";
import { getWebsiteSettings } from "@/lib/server/settings";
import { Paintbrush, Sparkles, Hand } from "lucide-react";

const services = [
  {
    icon: Hand,
    title: "Classic Manicure",
    description: "Clean, elegant & timeless",
  },
  {
    icon: Sparkles,
    title: "Gel Extensions",
    description: "Strong, stylish & flawless",
  },
  {
    icon: Paintbrush,
    title: "Custom Nail Art",
    description: "Unique designs for you",
  },
];

export default async function Hero() {
  const settings = await getWebsiteSettings();

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-theme-surface min-h-[100vh]"
    >
      <HeroDecorations />

      <Container>
        <div className="relative z-10 py-8 sm:py-12 lg:py-16">
          {/* Hero content */}
          <div className="grid grid-cols-2 items-center gap-3 sm:gap-6 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0">
              <HeroContent settings={settings} />
            </div>

            <div className="min-w-0">
              <HeroImage settings={settings} />
            </div>
          </div>

          {/* Statistics below both columns */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <HeroStats />
          </div>

          {/* Brand statement */}
          <div className="relative mx-auto mt-5 max-w-3xl text-center sm:mt-16 lg:mt-20">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-theme-primary sm:text-xs">
              Your Nails, Your Canvas
            </span>

            <h2 className="mt-0 text-3xl font-semibold leading-tight tracking-tight text-theme-foreground sm:text-4xl lg:text-5xl">
              Artistry. Elegance.{" "}
              <span className="font-cursive text-theme-primary">
                You.
              </span>
            </h2>
{/* 
            <div className="mx-auto mt-4 flex items-center justify-center gap-2 text-theme-primary">
              <span className="h-px w-10 bg-theme-primary/40" />
              <Sparkles className="h-4 w-4" />
              <span className="h-px w-10 bg-theme-primary/40" />
            </div> */}

            <p className="mx-auto mt-2 max-w-2xl px-2 text-xs leading-6 text-theme-muted sm:text-base sm:leading-7 ">
              Personalized nail designs crafted with passion, precision,
              and creativity — because every detail tells your story.
            </p>
          </div>

          {/* Featured services */}
          <div className="mx-auto mt-4 grid max-w-4xl grid-cols-3 gap-2 pb-4 sm:mt-10 sm:gap-6 lg:mt-12">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="flex flex-col items-center px-1 py-3 text-center sm:px-4 sm:py-5"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-theme-secondary text-theme-primary sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <h3 className="text-[10px] font-semibold text-theme-foreground sm:text-sm lg:text-base">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-[9px] leading-4 text-theme-muted sm:text-xs lg:text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
