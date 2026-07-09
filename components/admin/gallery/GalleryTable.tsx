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
      <div className="rounded-theme bg-theme-surface p-10 text-center shadow-sm">
        No gallery images found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {images.map((image) => (
        <div
          key={image._id}
          className="overflow-hidden rounded-2xl bg-theme-surface shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Image */}
          <div className="relative aspect-square">
            <Image
              src={image.image}
              alt={image.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-3 md:p-4">
            <h3 className="truncate text-sm font-semibold md:text-base">
              {image.title}
            </h3>

            <p className="mt-1 truncate text-xs text-gray-500 md:text-sm">
              {image.category}
            </p>

            <div className="mt-3 flex items-center justify-end gap-2">
              <button
                onClick={() => onEdit(image)}
                className="rounded-lg bg-blue-50 p-2 text-blue-600 transition hover:bg-blue-100"
              >
                <Pencil size={16} />
              </button>

              <button
                onClick={() => onDelete(image)}
                className="rounded-lg bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}