"use client";

import Image from "next/image";
import { Clock } from "lucide-react";
import { Service } from "@/types/service";

interface SelectedServiceCardProps {
  service?: Service;
}

export default function SelectedServiceCard({
  service,
}: SelectedServiceCardProps) {
  if (!service) {
    return (
      <div className="mt-5 rounded-theme border border-dashed border-white/40 p-6 text-center">
        <p className="text-pink-100">
          Select a service to see details
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 w-full overflow-hidden rounded-theme bg-theme-surface shadow-lg">
      <div className="flex">
        {/* Image */}
        <div className="relative h-24 w-24 shrink-0 sm:h-32 sm:w-32">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center px-3 py-2 sm:p-4">
          <h3 className="line-clamp-2 text-base font-bold text-gray-900 sm:text-lg">
            {service.title}
          </h3>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            {service.category}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-theme-secondary px-3 py-1 text-xs font-medium text-theme-primary">
              ₹{service.price}
            </span>

            <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
              <Clock size={14} />
              {service.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}