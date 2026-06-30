"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Certified Nail Technician",
  "Premium Quality Products",
  "Personalized Nail Designs",
  "100% Hygienic Workspace",
];

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* <Badge className="rounded-full px-4 py-2">
        About Me
      </Badge> */}
      <span className="rounded-full bg-pink-100 px-4 py-2 text-pink-600">
  About Me
</span>

      <h2 className="mt-6 font-serif text-5xl font-bold">
        Luxury Nail Artist
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Creating elegant nail designs that enhance confidence
        and beauty. Every client receives personalized attention
        and premium-quality nail care.
      </p>

      <div className="mt-8 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <CheckCircle2 className="text-pink-500" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <Button className="mt-10 rounded-full px-8">
        Book Appointment
      </Button>
    </motion.div>
  );
}