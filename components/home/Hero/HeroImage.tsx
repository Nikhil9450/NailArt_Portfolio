"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Settings } from "@/types/settings";

interface HeroImageProps {
  settings: Settings;
}

export default function HeroImage({
  settings,
}: HeroImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="
        relative
        flex
        items-center
        justify-center
        lg:justify-end
      "
    >
      {/* Theme-colored glow */}
      <div
        className="
          absolute
          h-[350px]
          w-[350px]
          rounded-full
          bg-[var(--theme-primary)]
          opacity-20
          blur-3xl
          lg:h-[500px]
          lg:w-[500px]
        "
      />

      <Image
        src={settings.heroImage || "/images/hero/hero.png"}
        alt="Luxury Nail Art"
        width={600}
        height={700}
        priority
        className="
          relative
          z-10
          h-auto
          w-full
          max-w-[550px]
          object-contain
          rounded-b-[80px]
        "
      />
    </motion.div>
  );
}