"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Service } from "@/types/service";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group overflow-hidden rounded-theme bg-theme-surface shadow-lg"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden md:h-72">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        {/* Category */}
        <span className="rounded-full bg-theme-secondary px-2.5 py-1 text-[10px] font-medium text-theme-primary md:px-3 md:text-xs">
          {service.category}
        </span>

        {/* Title */}
        <h3 className="mt-3 line-clamp-1 text-lg font-semibold md:mt-4 md:text-2xl">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm text-gray-500 md:mt-3 md:text-base">
          {service.description}
        </p>

        {/* Price + Duration */}
        <div className="mt-4 flex items-center justify-between md:mt-6">
          <span className="text-xl font-bold text-theme-primary md:text-2xl">
            ₹{service.price}
          </span>

          <span className="flex items-center gap-1 text-xs text-gray-500 md:gap-2 md:text-sm">
            <Clock size={16} />
            {service.duration}
          </span>
        </div>

        {/* Rating */}
        <div className="mt-3 flex gap-1 md:mt-5">
          {Array.from({ length: service.rating }).map((_, index) => (
            <Star
              key={index}
              size={16}
              className="fill-yellow-400 text-yellow-400 md:h-[18px] md:w-[18px]"
            />
          ))}
        </div>

        {/* Button */}
          <Link
            href={`/booking?service=${encodeURIComponent(service.title)}`}
          >
            <Button className="mt-4 h-10 w-full rounded-full text-sm md:mt-6 md:h-11 md:text-base">
              Book Now
            </Button>
          </Link>
      </div>
    </motion.div>
  );
}