"use client";

import { Gallery } from "@/types/gallery";
import { deleteGallery } from "@/lib/api/gallery";

interface DeleteGalleryDialogProps {
  open: boolean;
  image: Gallery | null;
  onClose: () => void;
  onSuccess: () => void;
}

export default function DeleteGalleryDialog({
  open,
  image,
  onClose,
  onSuccess,
}: DeleteGalleryDialogProps) {
  if (!open || !image) return null;

  const handleDelete = async () => {
    try {
      await deleteGallery(image._id);

      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to delete image");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h2 className="text-2xl font-bold">
          Delete Image
        </h2>

        <p className="mt-4 text-gray-600">
          Are you sure you want to delete
          <span className="font-semibold">
            {" "}
            {image.title}
          </span>
          ?
        </p>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border px-5 py-3"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="rounded-xl bg-red-600 px-5 py-3 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}