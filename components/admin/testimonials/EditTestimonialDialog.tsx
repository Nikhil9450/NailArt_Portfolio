"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { compressImage } from "@/lib/imageCompression";
import { Testimonial } from "@/types/testimonial";
import { updateTestimonial } from "@/lib/api/testimonial";

interface EditTestimonialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  testimonial: Testimonial | null;
}

export default function EditTestimonialDialog({
  open,
  onOpenChange,
  onSuccess,
  testimonial,
}: EditTestimonialDialogProps) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("5");
  const [image, setImage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploadingImage, setUploadingImage] =useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!testimonial) return;

    setName(testimonial.name);
    setService(testimonial.service);
    setReview(testimonial.review);
    setRating(testimonial.rating.toString());
    setImage(testimonial.image);
  }, [testimonial]);

  const handleSubmit = async () => {
    if (!testimonial?._id) return;

    try {
      setLoading(true);

      let imageUrl = image;

      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadResponse.ok) {
          throw new Error("Upload failed");
        }

        const uploadData = await uploadResponse.json();

        imageUrl = uploadData.url;
      }

      await updateTestimonial(testimonial._id, {
        name,
        service,
        review,
        rating: Number(rating),
        image: imageUrl,
      });

      onSuccess();
      onOpenChange(false);
      toast.success("Updated successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update testimonial.");
    } finally {
      setLoading(false);
    }
  };

  if (!testimonial) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="w-[95vw] max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Edit Testimonial
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <Input
            placeholder="Customer Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <Input
            placeholder="Service"
            value={service}
            onChange={(e) =>
              setService(e.target.value)
            }
          />

          <Textarea
            placeholder="Review"
            value={review}
            onChange={(e) =>
              setReview(e.target.value)
            }
          />

          <div>
            <label className="mb-2 block text-sm font-medium">
              Rating
            </label>

            <select
              value={rating}
              onChange={(e) =>
                setRating(e.target.value)
              }
              className="w-full rounded-md border p-2"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <option
                  key={star}
                  value={star}
                >
                  {star} Star{star > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <img
            src={image}
            alt={name}
            className="h-48 w-full rounded-xl object-cover"
          />

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

                  const compressedFile =
                    await compressImage(file);

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
              className="disabled:cursor-not-allowed disabled:opacity-60"
            />

            {uploadingImage && (
            <p className="mt-2 text-sm text-theme-muted">
                Compressing and uploading image...
            </p>
            )}

          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="h-48 w-full rounded-xl object-cover"
            />
          )}

        </div>

        <DialogFooter>

          <Button
            variant="outline"
            onClick={() =>
              onOpenChange(false)
            }
          >
            Cancel
          </Button>

          <Button
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading
              ? "Saving..."
              : "Update Testimonial"}
          </Button>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}