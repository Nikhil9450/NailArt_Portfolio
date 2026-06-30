"use client";

import Image from "next/image";

interface ComparisonSliderProps {
  before: string;
  after: string;
}

export default function ComparisonSlider({
  before,
  after,
}: ComparisonSliderProps) {
  return (
    <div className="relative mx-auto mt-12 h-[500px] max-w-5xl overflow-hidden rounded-3xl">
      {/* Before */}
      <Image
        src={before}
        alt="Before"
        fill
        className="object-cover"
      />

      {/* After (temporary 50%) */}
      <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
        <div className="relative h-full w-[200%]">
          <Image
            src={after}
            alt="After"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-white shadow-lg" />

      {/* Handle */}
      <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl">
        ↔
      </div>

      {/* Labels */}
      <div className="absolute left-5 top-5 rounded-full bg-black/50 px-4 py-2 text-white backdrop-blur">
        Before
      </div>

      <div className="absolute right-5 top-5 rounded-full bg-pink-500 px-4 py-2 text-white">
        After
      </div>
    </div>
  );
}