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
      <div className="mt-16 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:hidden hide-scrollbar">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial._id}
            className="min-w-[260px] max-w-[260px] flex-shrink-0 snap-center"
          >
            <TestimonialCard
              testimonial={testimonial}
            />
          </div>
        ))}
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