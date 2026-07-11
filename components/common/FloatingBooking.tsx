"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
export default function FloatingBooking() {
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const diff = currentScrollY - lastScrollY;

    // Always show near the top
    if (currentScrollY < 80) {
      setVisible(true);
    }
    // Ignore tiny movements
    else if (Math.abs(diff) < 10) {
      return;
    }
    // Hide when scrolling down
    else if (diff > 0) {
      setVisible(false);
    }
    // Show when scrolling up
    else {
      setVisible(true);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () =>
    window.removeEventListener("scroll", handleScroll);
}, []);

  // Hide on booking page
  if (pathname === "/booking") {
    return null;
  }

  return (
<motion.div
  initial={{ y: 100, opacity: 0 }}
  animate={{
    y: visible ? 0 : 120,
    opacity: visible ? 1 : 0,
  }}
  transition={{
    duration: 0.3,
    ease: "easeInOut",
  }}
  className="fixed bottom-5 left-4 right-4 z-50 md:hidden"
>
      <Link href="/booking">
        <div className="flex items-center bg-theme justify-center gap-3 rounded-full  py-4 text-white shadow-2xl transition active:scale-95"
        >
          <Calendar size={20} />

          <span className="font-semibold">
            Book Appointment
          </span>
        </div>
      </Link>
    </motion.div>
  );
}