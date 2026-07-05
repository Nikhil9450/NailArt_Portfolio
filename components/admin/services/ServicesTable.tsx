"use client";

import Image from "next/image";
import { Service } from "@/types/service";
import { Pencil, Trash2 } from "lucide-react";

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
      <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
        No services found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white">
      <table className="min-w-[900px] w-full">
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
  );
}