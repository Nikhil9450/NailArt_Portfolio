import { heroStats } from "@/data/hero";
export default function HeroStats() {
  return (
    <div className="mt-12 flex flex-wrap gap-10">
      {heroStats.map((item) => (
        <div key={item.label}>
          <h3 className="text-3xl font-bold text-pink-600">
            {item.number}
          </h3>

          <p className="text-gray-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}