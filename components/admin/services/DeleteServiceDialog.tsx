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

import { Service } from "@/types/service";
import { deleteService } from "@/lib/api/service";

interface DeleteServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  service: Service | null;
}

export default function DeleteServiceDialog({
  open,
  onOpenChange,
  onSuccess,
  service,
}: DeleteServiceDialogProps) {
  const [loading, setLoading] = useState(false);

  if (!service) return null;

  const handleDelete = async () => {
    if (!service._id) return;

    try {
      setLoading(true);

      await deleteService(service._id);

      toast.success("Service deleted successfully.");
      onSuccess();
      onOpenChange(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete service.");
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
            Delete Service
          </DialogTitle>
        </DialogHeader>

        <p className="text-theme-muted">
          Are you sure you want to delete
          <span className="font-semibold">
            {" "}
            {service.title}
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