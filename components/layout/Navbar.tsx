"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  Home,
  Image,
  Briefcase,
  MessageSquare,
  Phone,
  Calendar,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "@/components/common/Logo";
import Container from "./Container";
import { navLinks } from "@/constants/navigation";

const icons = {
  Home,
  Gallery: Image,
  Services: Briefcase,
  Testimonials: MessageSquare,
  Contact: Phone,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-theme-surface/90 backdrop-blur-md">
      <Container>
        <div className="flex h-18 md:h-20 items-center justify-between">
          <Logo />

          {/* Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm font-medium transition hover:text-theme-primary"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/booking">
              <Button className="rounded-full px-6">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile */}
          <Sheet
            open={open}
            onOpenChange={setOpen}
          >
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-[300px] flex-col p-0"
            >
              {/* Header */}
              <div className="border-b p-6">
                <Logo />

                <p className="mt-2 text-sm text-gray-500">
                  Luxury Nail Studio
                </p>
              </div>

              {/* Menu */}
              <nav className="flex-1 px-4 py-6">
                <div className="space-y-2">
                  {navLinks.map((link) => {
                    const Icon =
                      icons[
                        link.title as keyof typeof icons
                      ] || Home;

                    return (
                      <Link
                        key={link.title}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-4 rounded-xl px-4 py-4 text-base font-medium transition hover:bg-pink-50 hover:text-theme-primary"
                      >
                        <Icon size={20} />

                        {link.title}
                      </Link>
                    );
                  })}
                </div>
              </nav>

              {/* Footer */}
              <div className="border-t p-5">
                <Link
                  href="/booking"
                  onClick={() => setOpen(false)}
                >
                  <Button className="w-full rounded-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Button>
                </Link>

                <p className="mt-4 text-center text-xs text-gray-500">
                  © 2026 Luxury Nail Studio
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}