"use client";

import Masonry from "react-masonry-css";
import { AnimatePresence, motion } from "framer-motion";
import GallerySkeleton from "@/components/common/GallerySkeleton";
import GalleryCard from "@/components/cards/GalleryCard";
import { Gallery } from "@/types/gallery";

interface GalleryGridProps {
  items: Gallery[];
  loading?: boolean;
  onOpen: (index: number) => void;
}

const breakpointColumnsObj = {
  default: 4,
  1280: 4,
  1024: 3,
  768: 2,
  640: 2,
};

export default function GalleryGrid({
  items,
  onOpen,
  loading = false,
}: GalleryGridProps) {
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
  if (loading) {
    return (
      <div className="gallery-grid mt-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <GallerySkeleton key={i} />
        ))}
      </div>
    );
  }
 return (
  <div className="mt-10">
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="gallery-grid"
      columnClassName="gallery-grid-column"
    >
      {items.map((item, index) => (
        <motion.div
          key={item._id}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.35,
            delay: index * 0.03,
          }}
        >
          <GalleryCard
            item={item}
            index={index}
            onOpen={onOpen}
          />
        </motion.div>
      ))}
    </Masonry>
  </div>
);
}