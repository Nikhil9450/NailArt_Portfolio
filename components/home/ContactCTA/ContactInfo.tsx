import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import { contactData } from "@/data/contact";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Phone className="text-pink-500" />
        <span>{contactData.phone}</span>
      </div>

      <div className="flex items-center gap-4">
        <Mail className="text-pink-500" />
        <span>{contactData.email}</span>
      </div>

      <div className="flex items-center gap-4">
        <MapPin className="text-pink-500" />
        <span>{contactData.address}</span>
      </div>

      <div className="flex items-center gap-4">
        <Clock className="text-pink-500" />
        <div>
          <p>{contactData.workingHours[0]}</p>
          <p>{contactData.workingHours[1]}</p>
        </div>
      </div>
    </div>
  );
}