"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { createService } from "@/lib/api/service";
import { validateImage } from "@/lib/imageValidation";

interface AddServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export default function AddServiceDialog({
  open,
  onOpenChange,
  onSuccess,
}: AddServiceDialogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("5");

  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
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

      await createService({
        title,
        description,
        category,
        duration,
        price: Number(price),
        rating: Number(rating),
        image: uploadData.url,
      });

      onSuccess();

      onOpenChange(false);

      setTitle("");
      setDescription("");
      setCategory("");
      setDuration("");
      setPrice("");
      setRating("5");
      setFile(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create service.");
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
          <DialogTitle>Add Service</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <Input
            placeholder="Service Title"
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

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>   
           {  
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
              : "Save Service"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}