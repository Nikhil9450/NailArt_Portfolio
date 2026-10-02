"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Settings } from "@/types/settings";

interface AboutContentProps {
  settings: Settings;
}

const features = [
  "Certified Nail Technician",
  "Premium Quality Products",
  "Personalized Nail Designs",
  "100% Hygienic Workspace",
];

export default function AboutContent({
  settings,
}: AboutContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        w-full
        pt-4
        lg:pt-0
      "
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-2">
        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-theme-secondary
            px-4
            py-2
            text-[11px]
            font-medium
            tracking-wide
            text-theme-primary
            sm:text-xs
          "
        >
          <Sparkles className="size-3.5" />
          About Me
        </span>
      </div>

      {/* Heading */}
      <h2
        className="
          mt-5
          max-w-xl
          font-serif
          text-3xl
          font-bold
          leading-[1.15]
          tracking-tight
          text-theme-text
          sm:text-4xl
          md:text-5xl
        "
      >
        {settings.aboutTitle || (
          <>
            Where Beauty Meets{" "}
            <span className="text-theme-primary">
              Artistry
            </span>
          </>
        )}
      </h2>

      {/* Description */}
      <p
        className="
          mt-5
          max-w-xl
          text-sm
          leading-7
          text-theme-muted
          sm:text-base
          md:mt-6
          md:text-lg
          md:leading-8
        "
      >
        {settings.aboutDescription ||
          "Creating elegant nail designs that enhance confidence and beauty. Every client receives personalized attention and premium-quality nail care."}
      </p>

      {/* Features */}
      <div
        className="
          mt-7
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
          sm:gap-4
          md:mt-8
        "
      >
        {features.map((feature) => (
          <div
            key={feature}
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-[var(--theme-primary)]/10
              bg-theme-surface
              px-4
              py-3
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[var(--theme-primary)]/20
              hover:shadow-sm
            "
          >
            <span
              className="
                flex
                size-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-theme-secondary
                text-theme-primary
              "
            >
              <Check className="size-4" />
            </span>

            <span
              className="
                text-xs
                font-medium
                leading-5
                text-theme-text
                sm:text-sm
              "
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 sm:mt-10">
        <Link href="/booking" className="block sm:inline-block">
          <Button
            className="
              group
              h-11
              w-full
              rounded-full
              px-7
              text-sm
              shadow-md
              shadow-[var(--theme-primary)]/10
              sm:w-auto
            "
          >
            Book Appointment

            <ArrowRight
              className="
                ml-2
                size-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}