"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Testimonial } from "@/types/testimonial";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="mt-6 text-lg leading-8 text-gray-600 italic">
        "{testimonial.review}"
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold">
            {testimonial.name}
          </h4>

          <p className="text-sm text-gray-500">
            {testimonial.service}
          </p>
        </div>
      </div>
    </div>
  );
}