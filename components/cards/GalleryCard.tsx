"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { GalleryItem } from "@/types/gallery";
interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  onOpen: (index: number) => void;
}

export default function GalleryCard({
  item,
  index,
  onOpen,
}: GalleryCardProps) {
  return (
<motion.div
    onClick={() => onOpen(index)}
    whileHover={{
        y: -12,
        scale: 1.03,
        rotate: 0.5,
    }}
    transition={{
        duration:0.35
    }}
  className="cursor-pointer group relative overflow-hidden rounded-3xl"
>
<div
  className="relative w-full overflow-hidden rounded-3xl"
  style={{
    height: `${item.height ?? 320}px`,
  }}
>
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover transition duration-500 group-hover:scale-110"
  />
</div>

<div
  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100"
/>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 translate-y-6 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="inline-flex rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-widest">
            {item.category}
        </div>

        <h3 className="mt-2 text-2xl font-semibold">
          {item.title}
        </h3>

        <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all group-hover:bg-pink-500">
            <Eye size={18}/>
        </div>
        <div className="absolute right-5 top-5 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
        </div>
      </div>
    </motion.div>
  );
}