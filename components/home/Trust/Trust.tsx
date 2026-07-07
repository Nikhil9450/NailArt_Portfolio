"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import {
  Star,
  Users,
  Sparkles,
  Award,
} from "lucide-react";

const trustItems = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: Sparkles,
    value: "2000+",
    label: "Nail Designs",
  },
  {
    icon: Award,
    value: "8+",
    label: "Years Experience",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
  },
];

export default function Trust() {
  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border bg-white p-4 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl md:rounded-[var(--theme-radius)] md:p-6"
              >
                <Icon className="mx-auto mb-3 h-6 w-6 text-pink-500 md:mb-4 md:h-8 md:w-8" />

                <h3 className="text-2xl font-bold md:text-3xl">
                  {item.value}
                </h3>

                <p className="mt-1 text-xs text-gray-500 md:mt-2 md:text-base">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}