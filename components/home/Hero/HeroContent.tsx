"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Settings } from "@/types/settings";

interface HeroContentProps {
  settings: Settings;
}

export default function HeroContent({
  settings,
}: HeroContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="min-w-0"
    >
      <div className="text-left">
        {/* Badge */}
        <span className="inline-flex items-center rounded-full bg-theme-secondary px-2.5 py-1 text-[8px] font-medium text-theme-primary sm:px-4 sm:text-xs lg:text-sm">
          ✨ Luxury Nail Artist
        </span>

        {/* Heading */}
        <h1 className="mt-3 text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:mt-4 lg:text-7xl">
          {settings.heroTitle || (
            <>
              Blush &amp;
              <br />
              Bloom
            </>
          )}
        </h1>

        {/* Artist name */}
        {settings.heroSubtitle && (
          <p className="mt-2 font-cursive text-sm text-theme-primary sm:text-xl lg:mt-3 lg:text-3xl">
            {settings.heroSubtitle}
          </p>
        )}
      </div>

      {/* Description */}
      <p className="mt-4 max-w-md text-[10px] leading-5 text-theme-muted sm:mt-5 sm:text-sm sm:leading-6 lg:mt-6 lg:text-base">
        Beautiful nail art crafted with creativity, elegance, and
        attention to every detail. Your nails deserve to stand out.
      </p>

      {/* Actions */}
      <div className="mt-5 flex flex-col items-start gap-2 sm:mt-7 sm:gap-3 lg:flex-row">
        <Link href="/booking" className="w-full max-w-[190px] lg:w-auto">
          <Button className="h-9 w-full rounded-full px-3 text-[10px] sm:h-11 sm:px-5 sm:text-sm lg:h-12 lg:px-7">
            <Calendar className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Book Appointment
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </Link>

        <Link href="/portfolio" className="w-full max-w-[190px] lg:w-auto">
          <Button
            variant="outline"
            className="h-9 w-full rounded-full border-theme-primary/20 bg-theme-secondary px-3 text-[10px] sm:h-11 sm:px-5 sm:text-sm lg:h-12 lg:px-7"
          >
            View Portfolio
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
