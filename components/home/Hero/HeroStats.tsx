import { heroData } from "@/data/hero";

export default function HeroStats() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 md:flex md:flex-wrap md:gap-6">
      {heroData.stats.map((item) => (
        <div
          key={item.label}
          className="
            rounded-theme
            border
            border-[var(--theme-primary)]/10
            bg-theme-surface/90
            p-3
            text-center
            shadow-sm
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-md
            sm:p-5
            mb-2
          "
        >
          <h3 className="text-xl font-bold text-theme-primary sm:text-2xl md:text-3xl">
            {item.number}
          </h3>

          <p className="mt-1 text-[10px] text-theme-muted sm:mt-2 sm:text-xs md:text-base">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}