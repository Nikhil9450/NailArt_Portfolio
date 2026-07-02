"use client";

import Image from "next/image";
import { Gallery } from "@/types/gallery";
import { Pencil, Trash2 } from "lucide-react";

interface GalleryTableProps {
  images: Gallery[];
  onEdit: (image: Gallery) => void;
  onDelete: (image: Gallery) => void;
}

export default function GalleryTable({
  images,
  onEdit,
  onDelete,
}: GalleryTableProps) {
  if (images.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
        No gallery images found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {images.map((image) => (
        <div
          key={image._id}
          className="overflow-hidden rounded-3xl bg-white shadow-sm"
        >
          <div className="relative h-64">
            <Image
              src={image.image}
              alt={image.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-5">
            <h3 className="font-semibold">
              {image.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {image.category}
            </p>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => onEdit(image)}
                className="rounded-lg p-2 text-blue-600 hover:bg-blue-100"
              >
                <Pencil size={18} />
              </button>

              <button
                onClick={() => onDelete(image)}
                className="rounded-lg p-2 text-red-600 hover:bg-red-100"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}