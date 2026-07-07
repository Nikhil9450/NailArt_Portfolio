"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Settings } from "@/types/settings";

interface AboutContentProps {
  settings: Settings;
}

const features = [
  "Certified Nail Technician",
  "Premium Quality Products",
  "Personalized Nail Designs",
  "100% Hygienic Workspace",
];

export default function AboutContent({
  settings,
}: AboutContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="rounded-full bg-[var(--theme-secondary)] px-4 py-2 text-sm font-medium text-pink-600">
        About Me
      </span>

      <h2 className="mt-5 font-serif text-3xl font-bold leading-tight md:mt-6 md:text-5xl">
        {settings.aboutTitle || "Luxury Nail Artist"}
      </h2>

      <p className="mt-4 text-base leading-7 text-[var(--theme-muted)] md:mt-6 md:text-lg md:leading-8">
        {settings.aboutDescription ||
          "Creating elegant nail designs that enhance confidence and beauty. Every client receives personalized attention and premium-quality nail care."}
      </p>

      <div className="mt-6 space-y-3 md:mt-8 md:space-y-4">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={20}
              className="shrink-0 text-pink-500"
            />

            <span className="text-sm md:text-base">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <Link href="/book">
        <Button className="mt-8 w-full rounded-full md:mt-10 md:w-auto md:px-8">
          Book Appointment
        </Button>
      </Link>
    </motion.div>
  );
}