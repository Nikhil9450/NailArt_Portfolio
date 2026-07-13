import { heroData } from "@/data/hero";

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 md:flex md:flex-wrap md:gap-10">
      {heroData.stats.map((item) => (
        <div
          key={item.label}
          className="rounded-theme border bg-white p-5 text-center shadow-sm"
        >
          <h3 className="text-2xl font-bold text-theme-primary md:text-3xl">
            {item.number}
          </h3>

          <p className="mt-2 text-sm text-gray-500 md:text-base">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}