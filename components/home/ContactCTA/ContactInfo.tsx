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
  <div className="space-y-2 sm:space-y-6">
    <div className="flex items-center gap-3 sm:gap-4">
      <Phone className="h-4 w-4 shrink-0 text-theme-primary sm:h-5 sm:w-5" />
      <span className="text-sm sm:text-base">{settings.phone}</span>
    </div>

    <div className="flex items-center gap-3 sm:gap-4">
      <Mail className="h-4 w-4 shrink-0 text-theme-primary sm:h-5 sm:w-5" />
      <span className="text-sm sm:text-base">{settings.email}</span>
    </div>

    <div className="flex items-center gap-3 sm:gap-4">
      <MapPin className="h-4 w-4 shrink-0 text-theme-primary sm:h-5 sm:w-5" />
      <span className="text-sm sm:text-base">{settings.address}</span>
    </div>

    <div className="flex items-center gap-3 sm:gap-4">
      <Clock className="h-4 w-4 shrink-0 text-theme-primary sm:h-5 sm:w-5" />
      <span className="text-sm sm:text-base">{settings.workingHours}</span>
    </div>
  </div>
  );
}