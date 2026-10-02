"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";
import { Settings } from "@/types/settings";

interface AboutImageProps {
  settings: Settings;
}

export default function AboutImage({
  settings,
}: AboutImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        relative
        mx-auto
        w-full
        max-w-[430px]
        lg:max-w-[520px]
      "
    >
      {/* Decorative circle */}
      <div
        className="
          absolute
          -right-5
          -top-5
          h-20
          w-20
          rounded-full
          border
          border-[var(--theme-primary)]
          opacity-20
          sm:-right-8
          sm:-top-8
          sm:h-28
          sm:w-28
        "
      />

      {/* Main image container */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-[var(--theme-primary)]/10
          bg-theme-secondary
          shadow-[0_20px_60px_rgba(0,0,0,0.10)]
          sm:rounded-[40px]
        "
      >
        <Image
          src={settings.aboutImage || "/images/about/about.jpg"}
          alt="Nail Artist"
          width={600}
          height={700}
          priority={false}
          className="
            h-auto
            min-h-[420px]
            w-full
            object-cover
            object-center
            transition-transform
            duration-700
            hover:scale-[1.02]
            sm:min-h-[520px]
            lg:min-h-[600px]
          "
        />

        {/* Soft image overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-32
            bg-gradient-to-t
            from-black/20
            to-transparent
          "
        />
      </div>

      {/* Experience badge */}
      <div
        className="
          absolute
          -bottom-5
          right-3
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-[var(--theme-primary)]/10
          bg-theme-surface
          px-4
          py-3
          shadow-xl
          sm:-bottom-7
          sm:right-5
          sm:px-6
          sm:py-4
          lg:-right-8
        "
      >
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-theme-secondary
            text-theme-primary
            sm:h-12
            sm:w-12
          "
        >
          <Award className="size-5 sm:size-6" />
        </div>

        <div>
          <p className="text-xl font-bold leading-none text-theme-primary sm:text-2xl">
            5+
          </p>

          <p className="mt-1 text-[10px] text-theme-muted sm:text-xs">
            Years Experience
          </p>
        </div>
      </div>

      {/* Small sparkle */}
      <Sparkles
        className="
          absolute
          -bottom-8
          left-3
          size-6
          text-theme-primary
          opacity-60
          sm:-bottom-10
          sm:left-0
        "
      />
    </motion.div>
  );
}