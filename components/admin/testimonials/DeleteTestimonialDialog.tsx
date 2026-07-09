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

import { Testimonial } from "@/types/testimonial";
import { deleteTestimonial } from "@/lib/api/testimonial";

interface DeleteTestimonialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  testimonial: Testimonial | null;
}

export default function DeleteTestimonialDialog({
  open,
  onOpenChange,
  onSuccess,
  testimonial,
}: DeleteTestimonialDialogProps) {
  const [loading, setLoading] = useState(false);

  if (!testimonial) return null;

  const handleDelete = async () => {
    if (!testimonial._id) return;

    try {
      setLoading(true);

      await deleteTestimonial(testimonial._id);

      onSuccess();

      onOpenChange(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete testimonial.");
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
            Delete Testimonial
          </DialogTitle>
        </DialogHeader>

        <p className="text-theme-muted">
          Are you sure you want to delete the testimonial from
          <span className="font-semibold">
            {" "}
            {testimonial.name}
          </span>
          ?
        </p>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}