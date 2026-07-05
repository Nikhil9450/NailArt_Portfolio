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
    <div className="mt-16 grid gap-8 md:grid-cols-1
sm:grid-cols-2
lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial._id}
          testimonial={testimonial}
        />
      ))}
    </div>
  );
}