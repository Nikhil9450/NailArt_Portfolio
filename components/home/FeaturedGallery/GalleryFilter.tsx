"use client";

interface GalleryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GalleryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: GalleryFilterProps) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
    <button
      key={category}
      onClick={() => onCategoryChange(category)}
      className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 border-theme-hover ${
        activeCategory === category
          ? "bg-theme text-white shadow-lg"
          : "border border-gray-200 bg-white hover:bg-theme"
      }`}
    >
        {category}
        </button>
      ))}
    </div>
  );
}