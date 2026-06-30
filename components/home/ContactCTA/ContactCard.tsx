"use client";

import { Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contactData } from "@/data/contact";

export default function ContactCard() {
  return (
    <div className="rounded-3xl bg-pink-600 p-8 text-white shadow-xl">
      <h3 className="text-3xl font-bold">
        Ready for Beautiful Nails?
      </h3>

      <p className="mt-4 text-pink-100">
        Book your appointment today and let your nails shine.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button
          asChild
          className="rounded-full bg-white text-pink-600 hover:bg-pink-100"
        >
          <Link href="/booking">
            <Calendar className="mr-2 h-4 w-4" />
            Book Appointment
          </Link>
        </Button>

<Button asChild variant="glass">
  <Link href={contactData.whatsapp} target="_blank">
    <Phone className="mr-2 h-4 w-4" />
    WhatsApp
  </Link>
</Button>
      </div>
    </div>
  );
}