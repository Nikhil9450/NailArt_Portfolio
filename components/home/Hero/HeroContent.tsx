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
  {/* <div className="mb-6 flex justify-center lg:hidden">
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-theme-secondary ">
      <img
        src="/logo/logo.png"
        alt="Blush & Bloom Nail Studio"
        className="h-18 w-18 object-contain"
      />
    </div>
  </div> */}

  {/* Badge */}
  <div className="flex justify-start lg:justify-start">
         <span className="rounded-full bg-theme-secondary px-4 py-1 text-[8px] font-normal text-theme-primary">
        ✨ Luxury Nail Artist
      </span>
  </div>

  {/* Heading */}
  <h1
    className="
      mt-1
      text-left
      text-4xl
      font-bold
      leading-tight
      w-[250px]
      sm:text-4xl
      md:text-5xl
      lg:text-left
      lg:w-full
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
      mt-1
      text-[15px]
      max-w-xl
      text-left
      text-base
      text-theme-primary
      sm:text-lg
      lg:mx-0
      lg:mt-4
      lg:text-left
      font-cursive 
    "
  >
    {settings.heroSubtitle}
  </p>

</div>
      <p className="mt-6 max-w-lg text-[9px] text-theme-primary">
        
          "Beautiful nail art crafted with creativity, elegance, and attention to every detail. Your nails deserve to stand out."
      </p>

<div className="mt-8 flex justify-start flex-col gap-3 lg:justify-start lg:flex-row">
  <Link href="/booking">
    <Button
      className="h-8  px-5 w-40 text-[10px]  sm:px-6 lg:h-12 lg:px-8 rounded-theme"
    >
      Book Appointment
    </Button>
  </Link>

  <Link href="/portfolio">
    <Button
      variant="outline"
      className="h-8  px-5 w-40 text-[10px] bg-theme-secondary  sm:px-6 lg:h-12 lg:px-8 rounded-theme"
    >
      View Portfolio
    </Button>
  </Link>
</div>

      {/* <HeroStats /> */}
    </motion.div>
  );
}