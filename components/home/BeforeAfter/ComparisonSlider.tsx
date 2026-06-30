"use client";

import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { useRef, useState } from "react";
interface ComparisonSliderProps {
  before: string;
  after: string;
}

export default function ComparisonSlider({
  before,
  after,
}: ComparisonSliderProps) {
    const containerRef = useRef<HTMLDivElement>(null);

const [sliderPosition, setSliderPosition] = useState(50);
const [isDragging, setIsDragging] = useState(false);
const handleMouseMove = (
  e: React.MouseEvent<HTMLDivElement>
) => {
  if (!isDragging || !containerRef.current) return;

  const rect = containerRef.current.getBoundingClientRect();

  const x = e.clientX - rect.left;

  const percentage = (x / rect.width) * 100;

  setSliderPosition(
    Math.max(0, Math.min(100, percentage))
  );
};
  return (
<div
  ref={containerRef}
  onMouseMove={handleMouseMove}
  onMouseUp={() => setIsDragging(false)}
  onMouseLeave={() => setIsDragging(false)}
  className={`relative mx-auto mt-12 h-[500px] max-w-5xl overflow-hidden rounded-3xl ${
  isDragging ? "cursor-grabbing" : "cursor-grab"
}`}
>
      {/* Before */}
      <Image
        src={before}
        alt="Before"
        fill
        className="object-cover"
      />

      {/* After (temporary 50%) */}
      <div style={{
            width: `${sliderPosition}%`,
        }}
        className="absolute inset-y-0 left-0 overflow-hidden">
        <div className="relative h-full w-full">
        <Image
            src={after}
            alt="After"
            fill
            className="object-cover"
        />
        </div>
      </div>

      {/* Divider */}
        <div
        style={{
            left: `${sliderPosition}%`,
        }}
        className="absolute top-0 h-full w-1 -translate-x-1/2 bg-white shadow-lg"
        />

      {/* Handle */}
<div
  style={{
    left: `${sliderPosition}%`,
  }}
  onMouseDown={() => setIsDragging(true)}
  className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-xl"
>
  <MoveHorizontal className="h-6 w-6 text-pink-500" />
</div>

      {/* Labels */}
<div className="absolute left-5 top-5 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
  Before
</div>

<div className="absolute right-5 top-5 rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white">
  After
</div>
    </div>
  );
}