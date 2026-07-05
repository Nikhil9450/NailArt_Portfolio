"use client";

import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface BookingSuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingSuccessDialog({
  open,
  onOpenChange,
}: BookingSuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-xl max-h-[90vh] overflow-y-auto">

        <DialogHeader>
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-pink-100">
            <CheckCircle2
              size={48}
              className="text-pink-600"
            />
          </div>

          <DialogTitle className="text-center text-3xl">
            Booking Confirmed
          </DialogTitle>

          <DialogDescription className="pt-3 text-center">
            Thank you for booking!

            <br />

            We'll contact you shortly to confirm your appointment.
          </DialogDescription>
        </DialogHeader>

        <Button
          asChild
          className="mt-6 w-full rounded-full"
        >
          <Link href="/">
            Back to Home
          </Link>
        </Button>

      </DialogContent>
    </Dialog>
  );
}