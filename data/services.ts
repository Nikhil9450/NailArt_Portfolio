import { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: 1,
    title: "Gel Extensions",
    description:
      "Elegant long-lasting gel nail extensions with premium finish.",
    image: "/images/services/service1.jpg",
    price: 999,
    duration: "90 min",
    rating: 5,
    category: "Extensions",
  },
  {
    id: 2,
    title: "Bridal Nail Art",
    description:
      "Luxury bridal nail designs crafted for your special day.",
    image: "/images/services/service2.jpg",
    price: 1499,
    duration: "2 Hours",
    rating: 5,
    category: "Bridal",
  },
  {
    id: 3,
    title: "Chrome Nails",
    description:
      "Mirror-finish chrome nails with stunning shine.",
    image: "/images/services/service3.jpg",
    price: 899,
    duration: "75 min",
    rating: 5,
    category: "Chrome",
  },
];