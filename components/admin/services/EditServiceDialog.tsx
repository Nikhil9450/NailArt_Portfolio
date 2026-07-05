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

import { Service } from "@/types/service";
import { updateService } from "@/lib/api/service";

interface EditServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  service: Service | null;
}

export default function EditServiceDialog({
  open,
  onOpenChange,
  onSuccess,
  service,
}: EditServiceDialogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!service) return;

    setTitle(service.title);
    setDescription(service.description);
    setCategory(service.category);
    setDuration(service.duration);
    setPrice(service.price.toString());
    setRating(service.rating.toString());
    setImage(service.image);
  }, [service]);

  const handleSubmit = async () => {
    if (!service) return;

    try {
      setLoading(true);

      let imageUrl = image;

      if (file) {
        const formData = new FormData();

        formData.append("file", file);

        const uploadResponse = await fetch(
          "/api/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!uploadResponse.ok) {
          throw new Error("Upload failed");
        }

        const uploadData =
          await uploadResponse.json();

        imageUrl = uploadData.url;
      }

      await updateService(service._id, {
        title,
        description,
        category,
        duration,
        price: Number(price),
        rating: Number(rating),
        image: imageUrl,
      });

      onSuccess();

      onOpenChange(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update service.");
    } finally {
      setLoading(false);
    }
  };

  if (!service) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="w-[95vw] max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Edit Service
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <Input
            placeholder="Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          <Input
            placeholder="Category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          />

          <Input
            placeholder="Duration"
            value={duration}
            onChange={(e) =>
              setDuration(e.target.value)
            }
          />

          <Input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
          />

          <Input
            type="number"
            placeholder="Rating"
            value={rating}
            onChange={(e) =>
              setRating(e.target.value)
            }
          />

          <img
            src={image}
            alt={title}
            className="h-48 w-full rounded-xl object-cover"
          />

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setFile(
                e.target.files?.[0] ?? null
              )
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
              : "Update Service"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}