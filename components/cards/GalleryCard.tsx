"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Gallery } from "@/types/gallery";

interface GalleryCardProps {
  item: Gallery;
  index: number;
  onOpen: (index: number) => void;
}

export default function GalleryCard({
  item,
  index,
  onOpen,
}: GalleryCardProps) {
const aspectRatio =
  item.width && item.height
    ? item.width / item.height
    : 0.75;    
  return (
    <motion.div
      onClick={() => onOpen(index)}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer overflow-hidden rounded-theme"
    >
      <div className={`relative overflow-hidden rounded-theme`} style={{ aspectRatio }}>

      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
        className="object-cover transition duration-500 group-hover:scale-110"
      />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

        <div className="absolute bottom-0 left-0 right-0 translate-y-6 p-5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">

          <span className="rounded-full bg-theme-surface/20 px-3 py-1 text-xs backdrop-blur">
            {item.category}
          </span>

          <h3 className="mt-2 text-lg font-semibold">
            {item.title}
          </h3>

          <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-theme-surface/20 backdrop-blur group-hover:bg-pink-500">
            <Eye size={18} />
          </div>

        </div>

        <div className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </div>

      </div>
    </motion.div>
  );
}