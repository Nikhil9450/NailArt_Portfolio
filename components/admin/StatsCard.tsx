import {
  Calendar,
  Clock3,
  CheckCircle2,
  IndianRupee,
} from "lucide-react";
import { Booking } from "@/types/booking";

interface StatsCardsProps {
  bookings: Booking[];
}

export default function StatsCards({
  bookings,
}: StatsCardsProps) {
  const totalBookings = bookings.length;

  const pending = bookings.filter(
    (b) => b.status === "Pending"
  ).length;

  const completed = bookings.filter(
    (b) => b.status === "Completed"
  ).length;

  const revenue = bookings
    .filter((b) => b.status === "Completed")
    .reduce((sum, booking) => {
      return sum + (booking.price ?? 0);
    }, 0);

  const stats = [
    {
      title: "Total Bookings",
      value: totalBookings,
      icon: Calendar,
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
    },
    {
      title: "Completed",
      value: completed,
      icon: CheckCircle2,
    },
    {
      title: "Revenue",
      value: `₹${revenue}`,
      icon: IndianRupee,
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-theme bg-theme-surface p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:rounded-theme md:p-6"
          >
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-gray-500 md:text-sm">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-gray-900 md:mt-3 md:text-4xl">
                  {stat.value}
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-theme-secondary md:h-14 md:w-14 md:rounded-theme">
                <Icon
                  className="text-theme-primary"
                  size={20}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}