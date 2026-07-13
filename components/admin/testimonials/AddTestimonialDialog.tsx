"use client";

import { useState } from "react";
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

import { createTestimonial } from "@/lib/api/testimonial";
import { validateImage } from "@/lib/imageValidation";

interface AddTestimonialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export default function AddTestimonialDialog({
  open,
  onOpenChange,
  onSuccess,
}: AddTestimonialDialogProps) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("5");

  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !service || !review) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (!file) {
      toast.error("Please select an image.");
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
        throw new Error("Upload failed");
      }

      const uploadData = await uploadResponse.json();

      await createTestimonial({
        name,
        service,
        review,
        rating: Number(rating),
        image: uploadData.url,
      });

      onSuccess();

      onOpenChange(false);

      setName("");
      setService("");
      setReview("");
      setRating("5");
      setFile(null);
      toast.success("successfully created.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create testimonial.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="w-[95vw] max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Add Testimonial
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
            placeholder="Customer Review"
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
                  {star} Star
                  {star > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>{
                if (!validateImage(e.target.files?.[0] ?? null)) {
                e.target.value = "";
                return;
                }
                setFile(
                  e.target.files?.[0] ?? null
                )

            }
                
            }
          />

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
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading
              ? "Saving..."
              : "Save Testimonial"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}