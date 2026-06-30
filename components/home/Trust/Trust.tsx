"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { Star, Users, Sparkles, Award } from "lucide-react";

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
    <section className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon className="mx-auto mb-4 h-8 w-8 text-pink-500" />

                <h3 className="text-3xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-2 text-gray-500">
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