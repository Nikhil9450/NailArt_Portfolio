"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import { useWebsiteSettings } from "@/components/providers/WebsiteSettingsProvider";

export default function ContactInfo() {
  const settings =
    useWebsiteSettings();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Phone className="text-pink-500" />
        <span>{settings.phone}</span>
      </div>

      <div className="flex items-center gap-4">
        <Mail className="text-pink-500" />
        <span>{settings.email}</span>
      </div>

      <div className="flex items-center gap-4">
        <MapPin className="text-pink-500" />
        <span>{settings.address}</span>
      </div>

      <div className="flex items-center gap-4">
        <Clock className="text-pink-500" />

        <div>
          <p>{settings.workingHours}</p>
          {/* <p>{settings.workingHours?.[1]}</p> */}
        </div>
      </div>
    </div>
  );
}