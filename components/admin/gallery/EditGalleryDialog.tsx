"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Gallery } from "@/types/gallery";
import { updateGallery } from "@/lib/api/gallery";
import { compressImage } from "@/lib/imageCompression";
interface EditGalleryDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  image: Gallery | null;
}

export default function EditGalleryDialog({
  open,
  onClose,
  onSuccess,
  image,
}: EditGalleryDialogProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] =useState(false);
  useEffect(() => {
    if (image) {
      setTitle(image.title);
      setCategory(image.category);
      setImageUrl(image.image);
    }
  }, [image]);

  if (!open || !image) return null;

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateGallery(image._id, {
        title,
        category,
        image: imageUrl,
      });

      onSuccess();
      toast.success("successfully updated.");
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-theme bg-theme-surface p-8 shadow-xl">
        <h2 className="mb-6 text-3xl font-bold">
          Edit Gallery Image
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block">
              Title
            </label>

            <input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">
              Category
            </label>

            <input
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">
              Current Image
            </label>

            <img
              src={imageUrl}
              alt={title}
              className="mb-4 h-40 w-full rounded-xl object-cover"
            />

            <input
              type="file"
              accept="image/*"
              disabled={uploadingImage}
              onChange={async (e) => {
                const file = e.target.files?.[0];

                if (!file) return;

                // if (!validateImage(file)) {
                //   e.target.value = "";
                //   return;
                // }

                try {
                  setUploadingImage(true);

                  const compressed =
                    await compressImage(file);

                  const formData = new FormData();
                  formData.append("file", compressed);

                  const response = await fetch(
                    "/api/upload",
                    {
                      method: "POST",
                      body: formData,
                    }
                  );

                  if (!response.ok) {
                    throw new Error("Upload failed");
                  }

                  const data = await response.json();

                  setImageUrl(data.url);
                } catch (error) {
                  console.error(error);
                } finally {
                  setUploadingImage(false);
                  e.target.value = "";
                }
              }}
              className="w-full rounded-xl border p-3"
            />

            {uploadingImage && (
              <p className="mt-2 animate-pulse text-sm text-theme-muted">
                Compressing & uploading image...
              </p>
            )}
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border px-5 py-3"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl  px-5 py-3 text-white"
              style={{
                background: "var(--primary)"
              }}
            >
              {loading ? "Saving..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}