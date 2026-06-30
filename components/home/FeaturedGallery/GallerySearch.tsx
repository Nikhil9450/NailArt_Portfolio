"use client";

interface GallerySearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function GallerySearch({
  value,
  onChange,
}: GallerySearchProps) {
  return (
    <input
      type="text"
      placeholder="Search designs..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-8 w-full rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-pink-500"
    />
  );
}