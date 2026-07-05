"use client";

import Image from "next/image";
import { Pencil, Trash2, Star } from "lucide-react";
import { Testimonial } from "@/types/testimonial";

interface TestimonialsTableProps {
  testimonials: Testimonial[];
  onEdit: (testimonial: Testimonial) => void;
  onDelete: (testimonial: Testimonial) => void;
}

export default function TestimonialsTable({
  testimonials,
  onEdit,
  onDelete,
}: TestimonialsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white">
    <table className="min-w-[900px] w-full">
        <thead className="border-b bg-gray-50">
          <tr>
            <th className="p-4 text-left">Customer</th>
            <th className="p-4 text-left">Service</th>
            <th className="p-4 text-left">Rating</th>
            <th className="p-4 text-left">Review</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {testimonials.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="p-8 text-center text-gray-500"
              >
                No testimonials found.
              </td>
            </tr>
          ) : (
            testimonials.map((testimonial) => (
              <tr
                key={testimonial._id}
                className="border-b"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />

                    <span className="font-medium">
                      {testimonial.name}
                    </span>
                  </div>
                </td>

                <td className="p-4">
                  {testimonial.service}
                </td>

                <td className="p-4">
                  <div className="flex">
                    {Array.from({
                      length: testimonial.rating,
                    }).map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </td>

                <td className="max-w-sm truncate p-4">
                  {testimonial.review}
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() =>
                        onEdit(testimonial)
                      }
                      className="rounded-lg p-2 text-blue-600 hover:bg-blue-100"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() =>
                        onDelete(testimonial)
                      }
                      className="rounded-lg p-2 text-red-600 hover:bg-red-100"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}