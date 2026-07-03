"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useState } from "react";
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
  if (!service) return null;
    const [loading, setLoading] = useState(false);
const handleDelete = async () => {
  if (!service) return;

  try {
    setLoading(true);

    await deleteService(service._id);

    onSuccess();

    onOpenChange(false);
  } catch (error) {
    console.error(error);
    alert("Failed to delete service.");
  } finally {
    setLoading(false);
  }
};

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Delete Service
          </DialogTitle>
        </DialogHeader>

        <p className="text-gray-600">
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