"use client";

import {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import { BookingSchema } from "@/lib/validations/bookingSchema";

interface CustomerDetailsProps {
  register: UseFormRegister<BookingSchema>;
  errors: FieldErrors<BookingSchema>;
}

export default function CustomerDetails({
  register,
  errors,
}: CustomerDetailsProps) {
  return (
    <div className="mt-10 space-y-6">
      <h3 className="text-2xl font-semibold">
        Your Details
      </h3>

      {/* Name */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Full Name
        </label>

        <input
          {...register("name")}
          placeholder="Enter your name"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-pink-500 focus:outline-none"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Phone Number
        </label>

        <input
          {...register("phone")}
          placeholder="9876543210"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-pink-500 focus:outline-none"
        />

        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Instagram */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Instagram (Optional)
        </label>

        <input
          {...register("instagram")}
          placeholder="@username"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-pink-500 focus:outline-none"
        />
      </div>

      {/* Notes */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Special Notes
        </label>

        <textarea
          {...register("notes")}
          rows={4}
          placeholder="Any special requests..."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-pink-500 focus:outline-none"
        />
      </div>
    </div>
  );
}