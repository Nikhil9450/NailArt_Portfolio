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
    <div className="mt-6 overflow-hidden rounded-2xl bg-white text-gray-900 shadow-lg">

      <div className="relative h-52">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4 p-5">

        <h3 className="text-xl font-bold">
          {service.title}
        </h3>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600">
            ₹{service.price}
          </span>

          <span className="flex items-center gap-2 text-gray-600">
            <Clock size={16} />
            {service.duration}
          </span>

        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Tag size={16} />
          {service.category}
        </div>

      </div>

    </div>
  );
}