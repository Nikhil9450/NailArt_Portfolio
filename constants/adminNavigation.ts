import {
  LayoutDashboard,
  Image,
  Scissors,
  CalendarDays,
  MessageSquare,
  Settings,
} from "lucide-react";

export const adminNavigation = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Gallery",
    href: "/admin/gallery",
    icon: Image,
  },
  {
    title: "Services",
    href: "/admin/services",
    icon: Scissors,
  },
  {
    title: "Bookings",
    href: "/admin/bookings",
    icon: CalendarDays,
  },
  {
    title: "Testimonials",
    href: "/admin/testimonials",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];