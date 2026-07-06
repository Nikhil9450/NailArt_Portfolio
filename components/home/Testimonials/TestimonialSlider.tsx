"use client";

import TestimonialCard from "@/components/cards/TestimonialCard";
import { Testimonial } from "@/types/testimonial";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({
  testimonials,
}: TestimonialSliderProps) {
  if (testimonials.length === 0) {
    return (
      <div className="mt-16 text-center text-gray-500">
        No testimonials available yet.
      </div>
    );
  }

  return (
    <>
      {/* Mobile */}
      <div className="mt-16 w-full overflow-hidden md:hidden">
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory overscroll-x-contain hide-scrollbar">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial._id}
              className="w-[260px] shrink-0 snap-start"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet & Desktop */}
      <div className="mt-16 hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial._id}
            testimonial={testimonial}
          />
        ))}
      </div>
    </>
  );
}