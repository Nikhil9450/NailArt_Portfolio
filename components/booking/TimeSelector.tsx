"use client";

interface TimeSelectorProps {
  slots: string[];
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

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {slots.map((slot) => (
          <button
            key={slot}
            type="button"
            onClick={() => onChange(slot)}
            className={`rounded-xl border p-3 transition ${
              value === slot
                ? "border-pink-500 bg-pink-500 text-white"
                : "border-gray-300 hover:border-pink-300 hover:bg-pink-50"
            }`}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
}