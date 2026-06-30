"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface DateSelectorProps {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
}

export default function DateSelector({
  value,
  onChange,
}: DateSelectorProps) {
  return (
    <div className="mt-8">
      <label className="mb-4 block text-sm font-medium text-gray-700">
        Select Date
      </label>

      <div className="rounded-2xl border bg-white p-4">
        <DayPicker
          mode="single"
          selected={value}
          onSelect={onChange}
          disabled={{ before: new Date() }}
        />
      </div>
    </div>
  );
}