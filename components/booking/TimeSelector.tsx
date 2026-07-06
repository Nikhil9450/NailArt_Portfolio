"use client";
import { TimeSlot } from "@/data/timeSlots";

interface TimeSelectorProps {
  slots: TimeSlot[];
  value: string;
  onChange: (slot: string) => void;
}
export default function TimeSelector({
  slots,
  value,
  onChange,
}: TimeSelectorProps) {
  return (
    <div className="mt-8">
      <label className="mb-4 block text-sm font-medium text-gray-700">
        Select Time
      </label>

    <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3">      {slots.map((slot) => (
        <button
          key={slot.id}
          type="button"
          disabled={!slot.available}
          onClick={() => onChange(slot.time)}
          className={`group rounded-2xl border p-3 sm:p-4 transition-all duration-300

          ${
            value === slot.time
              ? "border-pink-500 bg-pink-500 text-white shadow-lg"
              : ""
          }

          ${
            slot.available
              ? "hover:-translate-y-1 hover:border-pink-300 hover:shadow-md"
              : "cursor-not-allowed bg-gray-100 text-gray-400"
          }
          `}
        >
          <div className="space-y-2">

            <div className="text-xl">
              {slot.available ? "🕘" : "🔒"}
            </div>

            <p className="text-sm font-semibold sm:text-base">
              {slot.time}
            </p>

            <p className="text-xs">
              {slot.available
                ? value === slot.time
                  ? "Selected"
                  : "Available"
                : "Booked"}
            </p>

          </div>
        </button>
      ))}
      </div>
    </div>
  );
}