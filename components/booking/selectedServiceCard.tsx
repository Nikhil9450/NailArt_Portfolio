"use client";

import Image from "next/image";
import { Clock, Tag } from "lucide-react";
import { Service } from "@/types/service";

interface SelectedServiceCardProps {
  service?: Service;
}

export default function SelectedServiceCard({
  service,
}: SelectedServiceCardProps) {
  if (!service) {
    return (
      <div className="mt-6 rounded-2xl border border-dashed border-pink-300 p-6 text-center">
        <p className="text-pink-100">
          Select a service to see details
        </p>
      </div>
    );
  }

  return (
  <div className="mt-5 w-full overflow-hidden rounded-2xl bg-white text-gray-900 shadow-lg">
    <div className="flex">
      <div className="relative h-24 w-24 shrink-0 sm:h-32 sm:w-32">        
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="rounded-l-2xl object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="line-clamp-2 text-base font-bold sm:text-lg">
              {service.title}
          </h3>

          <p className="mt-1 text-xs sm:text-sm text-gray-500 ">
            {service.category}
          </p>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <span className="rounded-full bg-[var(--theme-secondary)] px-3 py-1 text-xs font-medium text-pink-600">
            ₹{service.price}
          </span>

          <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs">
            <Clock size={14} />
            {service.duration}
          </span>
        </div>
      </div>
    </div>
  </div>
  );
}