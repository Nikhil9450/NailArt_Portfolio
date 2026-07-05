"use client";

import { AnimatePresence, motion } from "framer-motion";
import GalleryCard from "@/components/cards/GalleryCard";
import { Gallery } from "@/types/gallery";

interface GalleryGridProps {
  items: Gallery[];
  onOpen: (index: number) => void;
}

export default function GalleryGrid({
  items,
  onOpen,
}: GalleryGridProps) {

  // ✅ Empty state
  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-2xl font-semibold">
          No designs found
        </h3>

        <p className="mt-2 text-gray-500">
          Try another category or search term.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <motion.div
            key={item._id}
            layout
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.35,
              delay: index * 0.08,
            }}
            className="mb-6 break-inside-avoid"
          >
            <GalleryCard
              item={item}
              index={index}
              onOpen={onOpen}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}