"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroStats from "./HeroStats";
import { Settings } from "@/types/settings";

interface HeroContentProps {
  settings: Settings;
}

export default function HeroContent({
  settings,
}: HeroContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
        ✨ Luxury Nail Artist
      </span>

      <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-7xl">
        {settings.heroTitle || (
          <>
            Luxury Nail
            <br />
            Designs
          </>
        )}
      </h1>

      <p className="mt-6 max-w-lg text-lg text-gray-600">
          {settings.heroSubtitle || "Beautiful nail art crafted with creativity, elegance, and attention to every detail. Your nails deserve to stand out."}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button size="lg">Book Appointment</Button>

        <Button variant="outline" size="lg">
          View Portfolio
        </Button>
      </div>

      <HeroStats />
    </motion.div>
  );
}