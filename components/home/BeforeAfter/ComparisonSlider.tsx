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

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = clientX - rect.left;

    const percentage = (x / rect.width) * 100;

    setSliderPosition(
      Math.max(0, Math.min(100, percentage))
    );
  };

  // Desktop
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  };

  // Mobile
  const handleTouchMove = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
      className={`relative mx-auto mt-12 h-[300px] w-full max-w-5xl overflow-hidden rounded-3xl md:h-[500px] ${
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

      {/* After */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{
          width: `${sliderPosition}%`,
        }}
      >
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
        className="absolute top-0 h-full w-1 -translate-x-1/2 bg-white shadow-lg"
        style={{
          left: `${sliderPosition}%`,
        }}
      />

      {/* Handle */}
      <div
        style={{
          left: `${sliderPosition}%`,
        }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl md:h-12 md:w-12"
      >
        <MoveHorizontal className="h-5 w-5 text-pink-500 md:h-6 md:w-6" />
      </div>

      {/* Labels */}
      <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md md:left-5 md:top-5 md:px-4 md:py-2 md:text-sm">
        Before
      </div>

      <div className="absolute right-3 top-3 rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white md:right-5 md:top-5 md:px-4 md:py-2 md:text-sm">
        After
      </div>
    </div>
  );
}