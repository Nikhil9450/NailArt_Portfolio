"use client";

import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { Service } from "@/types/service";

interface ServicesTableProps {
  services: Service[];
  onEdit: (service: Service) => void;
  onDelete: (service: Service) => void;
}

export default function ServicesTable({
  services,
  onEdit,
  onDelete,
}: ServicesTableProps) {
  if (services.length === 0) {
    return (
      <div className="rounded-theme bg-theme-surface p-10 text-center shadow-sm">
        No services found.
      </div>
    );
  }

  return (
    <>
{/* ================= MOBILE ================= */}
<div className="space-y-3 md:hidden">
  {services.map((service) => (
    <div
      key={service._id}
      className="rounded-2xl border border-gray-200 bg-theme-surface p-3 shadow-sm transition hover:shadow-md"
    >
      <div className="flex gap-3">
        {/* Image */}
        <Image
          src={service.image}
          alt={service.title}
          width={80}
          height={80}
          className="h-20 w-20 rounded-xl object-cover"
        />

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between">
          {/* Title + Actions */}
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="truncate text-base font-semibold">
                {service.title}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                {service.category}
              </p>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => onEdit(service)}
                className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-100"
              >
                <Pencil size={16} />
              </button>

              <button
                onClick={() => onDelete(service)}
                className="rounded-lg p-2 text-red-600 transition hover:bg-red-100"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          {/* Chips */}
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-theme-secondary px-2.5 py-1 text-xs font-medium text-theme-primary">
              ₹{service.price}
            </span>

            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700">
              ⏱ {service.duration}
            </span>

            <span className="rounded-full bg-yellow-100 px-2.5 py-1 text-xs text-yellow-700">
              ⭐ {service.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block w-full overflow-x-auto rounded-xl border bg-theme-surface">
        <table className="min-w-[850px] w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Duration</th>
              <th className="p-4 text-left">Rating</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <tr
                key={service._id}
                className="border-b"
              >
                <td className="p-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={70}
                    height={70}
                    className="rounded-xl object-cover"
                  />
                </td>

                <td className="p-4 font-medium">
                  {service.title}
                </td>

                <td className="p-4">
                  {service.category}
                </td>

                <td className="p-4">
                  ₹{service.price}
                </td>

                <td className="p-4">
                  {service.duration}
                </td>

                <td className="p-4">
                  ⭐ {service.rating}
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit(service)}
                      className="rounded-lg p-2 text-blue-600 hover:bg-blue-100"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(service)}
                      className="rounded-lg p-2 text-red-600 hover:bg-red-100"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}