"use client";
import { useEffect, useState } from "react";
import { updateBooking } from "@/lib/api/booking";
import { Booking } from "@/types/booking";

interface EditBookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  booking: Booking | null;
}

export default function EditBookingDialog({
  open,
  onOpenChange,
  booking,
}: EditBookingDialogProps) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");


    useEffect(() => {
    if (booking) {
        setName(booking.name);
        setPhone(booking.phone);
        setService(booking.service);
    }
    }, [booking]);
    
    const handleSave = async () => {
        if (!booking) return;

        try {
            await updateBooking(booking._id, {
            name,
            phone,
            service,
            });

            onOpenChange(false);

            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };
      if (!open || !booking) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">
        <h2 className="text-2xl font-bold">
          Edit Booking
        </h2>

        <p className="mt-2 text-gray-500">
          Update customer information.
        </p>

        <div className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Customer Name
            </label>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Phone
            </label>

            <input
              value={phone}
                onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Service
            </label>

            <input
              value={service}
                onChange={(e) => setService(e.target.value)}
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

        </div>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={() => onOpenChange(false)}
            className="rounded-xl border px-5 py-2"
          >
            Cancel
          </button>

            <button
            onClick={handleSave}
            className="rounded-xl bg-pink-600 px-5 py-2 text-white"
            >
            Save Changes
            </button>

        </div>
      </div>
    </div>
  );
}