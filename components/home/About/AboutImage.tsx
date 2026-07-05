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
      className="relative"
    >
      <Image
        src={settings.aboutImage || "/images/about/about.jpg"}
        alt="Nail Artist"
        width={500}
        height={650}
        className="rounded-3xl object-cover shadow-2xl"
      />

      <div className="absolute -bottom-8 -right-8 rounded-3xl bg-white p-6 shadow-xl">
        <h3 className="text-4xl font-bold text-pink-500">
          8+
        </h3>

        <p className="text-gray-500">
          Years Experience
        </p>
      </div>
    </motion.div>
  );
}