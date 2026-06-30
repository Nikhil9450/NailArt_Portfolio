"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Service } from "@/types/service";

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
      className="group overflow-hidden rounded-3xl bg-white shadow-lg"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600">
          {service.category}
        </span>

        {/* Title */}
        <h3 className="mt-4 text-2xl font-semibold">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-gray-500">
          {service.description}
        </p>

        {/* Price + Duration */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-pink-600">
            ₹{service.price}
          </span>

          <span className="flex items-center gap-2 text-gray-500">
            <Clock size={18} />
            {service.duration}
          </span>
        </div>

        {/* Rating */}
        <div className="mt-5 flex gap-1">
          {Array.from({ length: service.rating }).map((_, index) => (
            <Star
              key={index}
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* Button */}
        <Button className="mt-6 w-full rounded-full">
          Book Now
        </Button>
      </div>
    </motion.div>
  );
}