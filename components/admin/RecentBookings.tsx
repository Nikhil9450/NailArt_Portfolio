"use client";

import { Booking } from "@/types/booking";

interface RecentBookingsProps {
  bookings: Booking[];
}

export default function RecentBookings({
  bookings,
}: RecentBookingsProps) {
  const recentBookings = bookings.slice(0, 5);

  return (
    <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Recent Bookings
        </h2>

        <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
          {recentBookings.length} Recent
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {recentBookings.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-8 text-center text-gray-500"
                >
                  No recent bookings found.
                </td>
              </tr>
            ) : (
              recentBookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4 font-medium">
                    {booking.name}
                  </td>

                  <td className="p-4">
                    {booking.service}
                  </td>

                  <td className="p-4">
                    {new Date(
                      booking.date
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    {booking.time}
                  </td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm ${
                        booking.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : booking.status === "Confirmed"
                          ? "bg-blue-100 text-blue-700"
                          : booking.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}