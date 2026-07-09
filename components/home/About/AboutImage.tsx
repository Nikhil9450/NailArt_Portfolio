"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Settings } from "@/types/settings";

interface AboutImageProps {
  settings: Settings;
}

export default function AboutImage({
  settings,
}: AboutImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto w-full max-w-sm md:max-w-md lg:max-w-none"
    >
      <Image
        src={settings.aboutImage || "/images/about/about.jpg"}
        alt="Nail Artist"
        width={500}
        height={650}
        className="h-auto w-full rounded-theme object-cover shadow-2xl"
      />

      <div className="absolute bottom-4 right-4 rounded-2xl bg-theme-surface px-5 py-4 shadow-xl md:-bottom-8 md:-right-8 md:rounded-theme md:p-6">
        <h3 className="text-2xl font-bold text-pink-500 md:text-4xl">
          8+
        </h3>

        <p className="text-xs text-gray-500 md:text-base">
          Years Experience
        </p>
      </div>
    </motion.div>
  );
}