"use client";

import { useState } from "react";
import { createGallery } from "@/lib/api/gallery";
import { toast } from "sonner";
import { validateImage } from "@/lib/imageValidation";
import { compressImage } from "@/lib/imageCompression";
import { Input } from "@/components/ui/input";
interface AddGalleryDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddGalleryDialog({
  open,
  onClose,
  onSuccess,
}: AddGalleryDialogProps) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);
  if (!open) return null;

const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!file) {
      toast.info("Please select an image.");
      return;
    }    
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

        const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
        });

        if (!uploadResponse.ok) {
        throw new Error("Image upload failed");
        }

        const uploadData = await uploadResponse.json();

      await createGallery({
        title,
        category,
        image: uploadData.url,
        width: uploadData.width,
        height: uploadData.height,
      });
        setTitle("");
        setCategory("");
        setFile(null);

      onSuccess();
      onClose();
    }catch (error) {
        console.error(error);
        toast.error("Failed to upload image.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-theme bg-theme-surface p-8 shadow-xl">
        <h2 className="mb-6 text-3xl font-bold">
          Add Gallery Image
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
              placeholder="Bridal Nails"
              required
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
              placeholder="Bridal"
              required
            />
          </div>

            <div>
            <label className="mb-2 block">
                Image
            </label>

            <Input
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

                  const compressedFile = await compressImage(file);

                  console.log(
                    `Original: ${(file.size / 1024 / 1024).toFixed(2)} MB`
                  );

                  console.log(
                    `Compressed: ${(compressedFile.size / 1024 / 1024).toFixed(2)} MB`
                  );

                  setFile(compressedFile);
                } catch (error) {
                  console.error(
                    "Image compression failed:",
                    error
                  );
                } finally {
                  setUploadingImage(false);
                  // e.target.value = "";
                }
              }}
              className="
                w-full
                rounded-xl
                border
                p-3
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
              required
            />
            {uploadingImage && (
              <p className="mt-2 animate-pulse text-sm text-theme-muted">
                Compressing image...
              </p>
            )}

            {file && (
                <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="mt-4 h-48 w-full rounded-xl object-cover"
                />
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
              {loading
                ? "Saving..."
                : "Save Image"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}