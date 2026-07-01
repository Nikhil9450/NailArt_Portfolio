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
    b => b.status === "Pending"
).length;

const completed = bookings.filter(
    b => b.status === "Completed"
).length;

const revenue = bookings
    .filter(b => b.status === "Completed")
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
    <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                  {stat.value}
                </h2>
              </div>

              <div className="rounded-2xl bg-pink-100 p-4">
                <Icon
                  className="text-pink-600"
                  size={28}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}