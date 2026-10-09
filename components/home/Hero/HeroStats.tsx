import { heroData } from "@/data/hero";

export default function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4">
      {heroData.stats.map((item) => (
        <div
          key={item.label}
          className="
            flex min-w-0 flex-col items-center justify-center
            rounded-theme
            border border-theme-primary/10
            bg-theme-surface/90
            px-1 py-4
            text-center
            shadow-sm
            backdrop-blur-sm
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
            sm:py-5
          "
        >
          <h3 className="text-lg font-bold text-theme-primary sm:text-2xl lg:text-3xl">
            {item.number}
          </h3>

          <p className="mt-1 text-[9px] text-theme-muted sm:text-xs lg:text-sm">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}