"use client";

import { Service } from "@/types/service";

interface ServiceSelectProps {
  services: Service[];
  value: string;
  onChange: (value: string) => void;
}

export default function ServiceSelect({
  services,
  value,
  onChange,
}: ServiceSelectProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Select Service
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
      >
        <option value="">Choose a Service</option>

        {services.map((service) => (
          <option key={service.id} value={service.title}>
            {service.title} — ₹{service.price}
          </option>
        ))}
      </select>
    </div>
  );
}