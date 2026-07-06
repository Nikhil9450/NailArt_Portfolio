"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Testimonial } from "@/types/testimonial";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-lg md:p-8">
      {/* Rating */}
      <div className="flex gap-1">
        {Array.from({
          length: testimonial.rating,
        }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-yellow-400 text-yellow-400 md:h-5 md:w-5"
          />
        ))}
      </div>

      {/* Review */}
      <p className="mt-4 line-clamp-4 text-sm italic leading-6 text-gray-600 md:mt-6 md:text-lg md:leading-8">
        "{testimonial.review}"
      </p>

      {/* Client */}
      <div className="mt-6 flex items-center gap-3 md:mt-8 md:gap-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={50}
          height={50}
          className="rounded-full object-cover md:h-[60px] md:w-[60px]"
        />

        <div>
          <h4 className="text-sm font-semibold md:text-base">
            {testimonial.name}
          </h4>

          <p className="text-xs text-gray-500 md:text-sm">
            {testimonial.service}
          </p>
        </div>
      </div>
    </div>
  );
}