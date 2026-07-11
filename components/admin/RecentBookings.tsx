"use client";

import { Booking } from "@/types/booking";

interface RecentBookingsProps {
  bookings: Booking[];
}

export default function RecentBookings({
  bookings,
}: RecentBookingsProps) {
  const recentBookings = bookings.slice(0, 5);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Confirmed":
        return "bg-blue-100 text-blue-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      default:
        return "bg-red-100 text-red-700";
    }
  };

  return (
    <div className="mt-8 rounded-theme bg-theme-surface p-4 shadow-sm md:mt-10 md:p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold md:text-2xl">
          Recent Bookings
        </h2>

        <span className="rounded-full bg-theme-secondary px-3 py-1 text-xs font-medium text-theme-primary md:px-4 md:py-2 md:text-sm">
          {recentBookings.length} Recent
        </span>
      </div>

      {recentBookings.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center text-gray-500">
          No recent bookings found.
        </div>
      ) : (
        <>
          {/* ================= MOBILE ================= */}

          <div className="space-y-3 md:hidden">
            {recentBookings.map((booking) => (
              <div
                key={booking._id}
                className="rounded-2xl border bg-theme-surface p-4 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">
                      {booking.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {booking.service}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs ${getStatusColor(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">
                      Date
                    </p>

                    <p className="font-medium">
                      {new Date(
                        booking.date
                      ).toLocaleDateString()}
                    </p>
                  </div>

                  {/* <div>
                    <p className="text-gray-500">
                      Time
                    </p>

                    <p className="font-medium">
                      {booking.time}
                    </p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* ================= TABLET & DESKTOP ================= */}

          <div className="hidden md:block">
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full min-w-[850px]">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="p-4 text-left">
                      Customer
                    </th>

                    <th className="p-4 text-left">
                      Service
                    </th>

                    <th className="p-4 text-left">
                      Date
                    </th>

                    {/* <th className="p-4 text-left">
                      Time
                    </th> */}

                    <th className="p-4 text-left">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {recentBookings.map((booking) => (
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

                      {/* <td className="p-4">
                        {booking.time}
                      </td> */}

                      <td className="p-4">
                        <span
                          className={`rounded-full px-3 py-1 text-sm ${getStatusColor(
                            booking.status
                          )}`}
                        >
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}