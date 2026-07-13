"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import HeroStats from "./HeroStats";
import { Settings } from "@/types/settings";
import { Badge } from "@/components/ui/badge";
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
      style={{marginTop:"1rem"}}
    >
      {/* <span className="rounded-full bg-theme-secondary px-4 py-2 text-sm font-medium text-theme-primary">
        ✨ Luxury Nail Artist
      </span> */}

<div className="text-center lg:text-left">

  {/* Mobile Logo */}
  <div className="mb-6 flex justify-center lg:hidden">
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-theme-secondary ">
      <img
        src="/logo/logo.png"
        alt="Blush & Bloom Nail Studio"
        className="h-18 w-18 object-contain"
      />
    </div>
  </div>

  {/* Badge */}
  <div className="flex justify-center lg:justify-start">
         <span className="rounded-full bg-theme-secondary px-4 py-2 text-sm font-medium text-theme-primary">
        ✨ Luxury Nail Artist
      </span>
  </div>

  {/* Heading */}
  <h1
    className="
      mt-6
      text-center
      text-3xl
      font-bold
      leading-tight
      sm:text-4xl
      md:text-5xl
      lg:text-left
      lg:text-7xl
    "
  >
    {settings.heroTitle || (
      <>
        Luxury Nail
        <br />
        Designs
      </>
    )}
  </h1>

  {/* Subtitle */}
  <p
    className="
      mx-auto
      mt-4
      max-w-xl
      text-center
      text-base
      text-theme-muted
      sm:text-lg
      lg:mx-0
      lg:text-left
    "
  >
    {settings.heroSubtitle}
  </p>

</div>
      {/* <p className="mt-6 max-w-lg text-lg text-theme-muted">
        {settings.heroSubtitle ||
          "Beautiful nail art crafted with creativity, elegance, and attention to every detail. Your nails deserve to stand out."}
      </p> */}

<div className="mt-8 flex justify-center gap-3 lg:justify-start">
  <Link href="/booking">
    <Button
      className="h-10 px-5 text-sm sm:h-9 sm:px-6 lg:h-12 lg:px-8 rounded-theme"
    >
      Book Appointment
    </Button>
  </Link>

  <Link href="/portfolio">
    <Button
      variant="outline"
      className="h-10 px-5 text-sm sm:h-9 sm:px-4 lg:h-12 lg:px-8 rounded-theme"
    >
      View Portfolio
    </Button>
  </Link>
</div>

      <HeroStats />
    </motion.div>
  );
}