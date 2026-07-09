"use client";

import { Service } from "@/types/service";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  console.log("ServiceSelect services:", services);
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Select Service
      </label>

      <Select
        value={value}
        onValueChange={onChange}
      >
        <SelectTrigger className="w-full rounded-xl">
          <SelectValue placeholder="Choose a Service" />
        </SelectTrigger>

        <SelectContent>
          {services.map((service) => (
            <SelectItem
              key={service._id}
              value={service._id!}
            >
              {service.title} • ₹{service.price}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}