"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      <Image
        src="/images/hero/hero.png"
        alt="Luxury Nail Art"
        width={500}
        height={650}
        priority
        className="rounded-3xl shadow-2xl"
      />
    </motion.div>
  );
}