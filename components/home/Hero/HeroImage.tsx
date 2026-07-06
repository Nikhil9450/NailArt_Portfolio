"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FloatingCard from "@/components/common/FloatingCard";
import { Star, Users } from "lucide-react";
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
      className="relative flex justify-center"
    >
      {/* Background Glow */}
      <div className="absolute -z-10 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

      <Image
        src={settings.heroImage || "/images/hero/hero.png"}
        alt="Luxury Nail Art"
        width={500}
        height={650}
        priority
        className="rounded-[40px] shadow-2xl"
      />

      {/* Rating Card */}
      {/* <FloatingCard className="absolute -left-10 top-12 hidden md:block">
        <div className="flex items-center gap-3">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          <div>
            <h4 className="font-bold">4.9 Rating</h4>
            <p className="text-sm text-gray-500">200+ Reviews</p>
          </div>
        </div>
      </FloatingCard> */}

      {/* Client Card */}
      {/* <FloatingCard className="absolute -right-10 bottom-16 hidden md:block">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-pink-500" />
          <div>
            <h4 className="font-bold">500+ Clients</h4>
            <p className="text-sm text-gray-500">
              Trusted Every Month
            </p>
          </div>
        </div>
      </FloatingCard> */}
    </motion.div>
  );
}